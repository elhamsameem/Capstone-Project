import React from "react";
import "../style/ProductItem.css";

function ProductItem({ product }) {
  return (
    <div className="product-div">
      <div className="product-title">
        <h3>{product.title}</h3>
        <h2 className="product-price">${product.price}</h2>
      </div>
      <p>{product.description}</p>
      <div className="rating-div">
        <p>
          Rating: {product.rating.rate} ⭐️ ({product.rating.count})
        </p>
      </div>
      <div className="product-img-div">
        <img className="product-img" src={`${product.image}`}></img>
      </div>
    </div>
  );
}

export default ProductItem;
