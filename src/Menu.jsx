import React from "react";
import "./Menu.css";

const Menu = ({ onMenuItemClick, isDarkMode }) => {
  return (
    <div className="menu">
      <ul className="menu-items">
        <li
          className="menu-item"
          onClick={() => onMenuItemClick("Arquitetura")}
        >
          Arquitetura
        </li>
        <li
          className="menu-item"
          onClick={() => onMenuItemClick("Modo Escuro")}
        >
          {isDarkMode ? "Modo Claro" : "Modo Escuro"}
        </li>
        <li className="menu-item" onClick={() => onMenuItemClick("Sobre")}>
          Sobre
        </li>
      </ul>
    </div>
  );
};

export default Menu;
