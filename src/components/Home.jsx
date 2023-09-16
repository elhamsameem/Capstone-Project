import React from "react";
import "../style/Home.css";
import GetAllProducts from "./GetAllProducts";

function Home({ products, loading }) {
  return (
    <>
      <GetAllProducts products={products} loading={loading} />
    </>
  );
}

export default Home;
