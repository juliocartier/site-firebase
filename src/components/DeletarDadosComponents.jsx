import React from "react";
import { db } from "../Firebase";
import { doc, deleteDoc } from "firebase/firestore";

function DeletarDadosComponents({id, onDeleted}) {
    const handleDelete = async () =>{
        if (window.confirm("Tem certeza que deseja excluir?")) {
            try{
                await deleteDoc(doc(db, "produtos", id))
                alert("Produto excluido com sucesso")
                onDeleted();
            } catch (error){
                console.error("Erro ao excluir o produto", error);
            }
        }
    }

    return (
        <button onClick={handleDelete} className="btn btn-sm btn-danger">Excluir</button>
    )
}

export default DeletarDadosComponents;