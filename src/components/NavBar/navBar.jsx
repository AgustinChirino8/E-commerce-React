import React from "react";
import "./style.css";
import CartWidget from "../CartWidget/cartWidget";
import Icon from "../../Icons/taza-de-cafe.png";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav-main">
      <nav className="nav-list">
        <div className="iconBlock">
          <img className="icon" src={Icon} alt="icono"></img>
        </div>
        <ul>
          <NavLink>
            <CartWidget />
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/Home">Inicio</NavLink>
        </ul>
        <ul>
          <NavLink to="/Products">Productos</NavLink>
        </ul>
        <ul>
          <NavLink>Registrarse</NavLink>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
