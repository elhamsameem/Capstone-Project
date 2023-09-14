import React from "react";
import { NavLink } from "react-router-dom";
import "../style/NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar-div">
      <h1 className="title">Capstone Project</h1>
      <div className="nav-links-div">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        <NavLink to={"/cart"}>My Cart</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
