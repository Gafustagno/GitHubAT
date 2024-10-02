import React from "react";
import "./Card.css";

export default function Card({ imagem, titulo, preco, onSelection }) {
  return (
    <div className="cartao">
      <img className="imagem-cartao" src={imagem} alt={titulo} />
      <h3 className="titulo-cartao">{titulo}</h3>
      <p className="preco-cartao">{preco}</p>
      <div className="checkbox-container">
        <input
          type="checkbox"
          id={`checkbox-${titulo}`}
          onChange={() => onSelection(titulo)}
        />
        <label htmlFor={`checkbox-${titulo}`}>Selecionar</label>
      </div>
    </div>
  );
}
