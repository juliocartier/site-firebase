import React, { useState } from "react";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

function AdicionarDadosComponents() {

    const [produto, setProduto] = useState({
        nome: "",
        descricao: "",
        preco: ""
    });

    const handleChange = (e) => {
        setProduto({ ...produto, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        await addDoc(collection(db, "produtos"), {
            ...produto,
            preco: parseFloat(produto.preco)
        });
        alert("Produto cadastrado com sucesso!");
        setProduto({ nome: "", descricao: "", preco: "" });
        } catch (error) {
        console.error("Erro ao cadastrar produto:", error);
        alert("Erro ao salvar");
        }
    };


    return (
        <div className="container mt-4">
            <h2>Cadastro de Produto</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                    name="nome" className="form-control" placeholder="Nome" value={produto.nome} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input 
                    name="descricao" className="form-control" placeholder="Descricao" value={produto.descricao} onChange={handleChange} required/>
                </div>
                <div>
                    <input 
                    name="preco" className="form-control" type="number" step="0.01" placeholder="Preço" value={produto.preco} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn-primary w-100">Salvar</button>
            </form>
        </div>
    )

}

export default AdicionarDadosComponents;