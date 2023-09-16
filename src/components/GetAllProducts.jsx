import React from "react";
import { useState, useEffect } from "react";
import "../style/GetAllProducts.css";
import ProductItem from "./ProductItem";

function GetAllProducts({ products }) {
  const [category, setCategory] = useState("all");
  const [searchedProduct, setSearchedProduct] = useState("");
  const [titleText, setTitleText] = useState("All Products");

  // Filtering products based on category selection
  const filteredCategory = products
    ? category === "all" // if category is all then return products
      ? products
      : products.filter((product) => product.category === category)
    : [];

  // Filtering filtered category products by search bar text.
  const filteredProducts = filteredCategory.filter((product) =>
    product.title.toLowerCase().includes(searchedProduct.toLowerCase())
  );

  console.log(filteredProducts);

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
          value={searchedProduct}
          onChange={(e) => {
            setSearchedProduct(e.target.value);
          }}
        />
      </div>
      <div className="category">
        <button
          className={`cat-button ${category === "all" ? "active-button" : ""}`}
          onClick={() => {
            setTitleText("All Products");
            setCategory("all");
          }}
        >
          All
        </button>
        <button
          className={`cat-button ${
            category === "men's clothing" ? "active-button" : ""
          }`}
          onClick={() => {
            setTitleText("Men's");
            setCategory(`men's clothing`);
          }}
        >
          Men
        </button>
        <button
          className={`cat-button ${
            category === "women's clothing" ? "active-button" : ""
          }`}
          onClick={() => {
            setTitleText("Women's");
            setCategory(`women's clothing`);
          }}
        >
          Women
        </button>
        <button
          className={`cat-button ${
            category === "jewelery" ? "active-button" : ""
          }`}
          onClick={() => {
            setTitleText("Jewelery");
            setCategory(`jewelery`);
          }}
        >
          Jewelery
        </button>
        <button
          className={`cat-button ${
            category === "electronics" ? "active-button" : ""
          }`}
          onClick={() => {
            setTitleText("Electronics");
            setCategory(`electronics`);
          }}
        >
          Electronics
        </button>
      </div>
      <h1 className="cat-title">{titleText}</h1>
      <div className="all-products-div">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })
        ) : (
          <h1>Out of inventory</h1>
        )}
      </div>
    </>
  );
}

export default GetAllProducts;
