import React from "react";
import { useState, useEffect } from "react";
import "../style/GetAllProducts.css";
import ProductItem from "./ProductItem";

function GetAllProducts({ products }) {
  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [titleText, setTitleText] = useState("All Products");

  return (
    <>
      <div className="search-div">
        <label htmlFor="search-product-input">
          <b>Search</b>{" "}
        </label>
        <input
          type="text"
          id="search-product-input"
          name="search-product-input"
          placeholder=" Anything"
        />
      </div>
      <div className="category">
        <button
          className="cat-button"
          onClick={() => {
            setTitleText("All Products");
            setCategory("");
          }}
        >
          All
        </button>
        <button
          className="cat-button"
          onClick={() => {
            setTitleText("Men's");
            setCategory(`men's clothing`);
          }}
        >
          Men
        </button>
        <button
          className="cat-button"
          onClick={() => {
            setTitleText("Women's");
            setCategory(`women's clothing`);
          }}
        >
          Women
        </button>
        <button
          className="cat-button"
          onClick={() => {
            setTitleText("Jewelery");
            setCategory(`jewelery`);
          }}
        >
          Jewelery
        </button>
        <button
          className="cat-button"
          onClick={() => {
            setTitleText("Electronics");
            setCategory(`electronics`);
          }}
        >
          Electronics
        </button>
      </div>
      <h1>{titleText}</h1>
      <div className="all-products-div">
        {products &&
          products.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
      </div>
    </>
  );
}

export default GetAllProducts;
