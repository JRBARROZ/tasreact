import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <>
      <header className="main-menu">
        <h1>Tasreact</h1>
        <nav className="main-menu-navigation">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="add">Adicionar</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
