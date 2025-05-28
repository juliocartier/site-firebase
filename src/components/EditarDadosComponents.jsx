import React, { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";

function EditarDadosComponentes({ produtoSelecionado, onClear, onRefresh } ){

    const [produto, setProduto] = useState(produtoSelecionado);
    useEffect(() => {
        setProduto(produtoSelecionado)
    }, [produtoSelecionado]);

    const handleChange = (e) => {
        setProduto({...produto, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const ref = doc(db, "produtos", produto.id);
            await updateDoc(ref, {
                nome: produto.nome,
                descricao: produto.descricao,
                preco: parseFloat(produto.preco),
            });
            alert("Produto atualizado com sucesso");
            onClear();
            onRefresh();
        } catch (error){
            console.error("Erro ao atualizar produto", error);
        }
    }

    if (!produto || !produto.id) return null;

    return (
        <div className="container mt-4">
            <h3> Editar Produto </h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input name="nome" className="form-control" placeholder="Nome" value={produto.nome} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <input name="descricao" className="form-control" placeholder="Descrição" value={produto.descricao} onChange={handleChange} required/>
                </div>
                <div className="mb-3">
                    <input name="preco" className="form-control" type="number" step="0.01" placeholder="Preço" value={produto.preco} onChange={handleChange} required/>
                </div>
                <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-success w-50">Atualizar</button>
                    <button type="button" className="btn btn-secondary w-50" onClick={onClear}>Cancelar</button>
                </div>
            </form>
        </div>
    );

}

export default EditarDadosComponentes;