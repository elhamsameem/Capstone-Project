import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/NavBar.css";

function NavBar({ token, setToken, handleLogout }) {
  return (
    <div className="nav-bar-div">
      <h1 className="title">Capstone Project</h1>
      <div className="nav-links-div">
        <NavLink to={"/"}>Home</NavLink>
        {token ? (
          <NavLink to={"/login"} onClick={handleLogout}>
            Logout
          </NavLink>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
        <NavLink to={"/cart"}>My Cart</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
