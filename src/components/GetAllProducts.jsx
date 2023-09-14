import React from "react";
import "../style/GetAllProducts.css";
import ProductItem from "./ProductItem";

function GetAllProducts({ products }) {
  return (
    <>
      <div className="all-products-div">
        <h1>All Products</h1>
        {products &&
          products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
      </div>
    </>
  );
}

export default GetAllProducts;
