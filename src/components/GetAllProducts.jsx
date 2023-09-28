import React from "react";
import { useState, useEffect } from "react";
import "../style/GetAllProducts.css";
import ProductItem from "./ProductItem";

function GetAllProducts({ products, loading, cart, setCart }) {
  const [category, setCategory] = useState("all");
  const [searchedProduct, setSearchedProduct] = useState("");
  const [titleText, setTitleText] = useState("All Products");
  const [sortPrice, setSortPrice] = useState("default");

  // Filtering products based on category selection
  const filteredCategory = products
    ? category === "all" // if category is all then return products
      ? products
      : products.filter((product) => product.category === category)
    : [];

  // Filtering filtered category products by search bar text.
  const filteredProducts = filteredCategory.filter(
    (product) =>
      product.description
        .toLowerCase()
        .includes(searchedProduct.toLocaleLowerCase()) ||
      product.title.toLowerCase().includes(searchedProduct.toLowerCase())
  );

  // Sorting products based on price
  if (sortPrice === "asc") {
    console.log("asc has run");
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortPrice === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  console.log(sortPrice);

  return (
    <>
      {loading ? (
        <h2 className="loading">LOADING...</h2>
      ) : (
        <>
          <h1 className="cat-title">{titleText}</h1>
          <div className="filter-div">
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
            <div className="sort-price-div">
              <label htmlFor="sort-price">Sort Price By: </label>
              <select
                name="sort-price"
                id="sort-price"
                onChange={(e) => setSortPrice(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
            <div className="category">
              <button
                className={`cat-button ${
                  category === "all" ? "active-button" : ""
                }`}
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
                  setTitleText("Men's Clothing");
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
                  setTitleText("Women's Clothing");
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
          </div>

          <div className="all-products-div">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                return (
                  <ProductItem
                    key={product.id}
                    product={product}
                    cart={cart}
                    setCart={setCart}
                  />
                );
              })
            ) : (
              <h1>Out of inventory</h1>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default GetAllProducts;
