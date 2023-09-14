import React from "react";
import "../style/Home.css";
import GetAllProducts from "./GetAllProducts";

function Home({ products }) {
  return (
    <>
      <GetAllProducts products={products} />
    </>
  );
}

export default Home;
