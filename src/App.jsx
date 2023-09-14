import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Cart from "./components/Cart.jsx";
import "./App.css";
import { fetchAllProducts } from "./api/api.js";
import React from "react";

function App() {
  const [products, setProducts] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("capstone-token") || null
  );
  const navigate = useNavigate();

  // Fetching all products in app level component
  useEffect(() => {
    async function getAllProducts() {
      const result = await fetchAllProducts();
      setProducts(result);
    }
    getAllProducts();
  }, []);

  // Logout handler
  function handleLogout() {
    localStorage.removeItem("capstone-token");
    setToken(null);
    navigate("/login");
  }

  return (
    <>
      <NavBar token={token} setToken={setToken} handleLogout={handleLogout} />
      <div className="canvas">
        <div className="canvas-div">
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/login"
              element={<Login token={token} setToken={setToken} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
