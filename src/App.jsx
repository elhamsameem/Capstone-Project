import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Cart from "./components/Cart.jsx";
import "./App.css";
import { fetchAllProducts } from "./API/api.js";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getAllProducts() {
      const result = await fetchAllProducts();
      setProducts(result);
    }
    getAllProducts();
  }, []);
  console.log(products);

  return (
    <>
      <NavBar />
      <div className="canvas">
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
