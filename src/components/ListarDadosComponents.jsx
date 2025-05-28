import React from "react";
import DeletarDadosComponents from "./DeletarDadosComponents";

function ListarDadosComponents({produtos, onEditar, onDeleted}){

    return (
        <ul className="list-group">
            {produtos.map((prod) => (
                <li key={prod.id} className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <strong className="fw-bold">{prod.nome} - R$ {parseFloat(prod.preco).toFixed(2)}</strong><br/>
                        <small>{prod.descricao}</small><br/>
                    </div>
                    <button className="btn btn-sm btn-primary me-2"
                    onClick={() => onEditar(prod)}>Editar</button>
                    <DeletarDadosComponents id={prod.id} onDeleted={onDeleted}/>
                </li>
            ))}
        </ul>
    )

}

export default ListarDadosComponents;