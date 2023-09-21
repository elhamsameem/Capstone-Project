import React from "react";
import "../style/Home.css";
import GetAllProducts from "./GetAllProducts";

function Home({ products, loading, cart, setCart }) {
  return (
    <>
      <GetAllProducts
        products={products}
        loading={loading}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}

export default Home;
