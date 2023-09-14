import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/ProductItem.css";

function ProductItem({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-div">
      <div
        className="product-img-div"
        onClick={() => {
          navigate(`/products/${product.id}`);
        }}
        title="View Product"
      >
        <img className="product-img" src={`${product.image}`}></img>
      </div>
      <div className="product-title">
        <h3
          onClick={() => {
            navigate(`/products/${product.id}`);
          }}
          title="View Product"
        >
          {product.title.substring(0, 15)}...
        </h3>
        <h4 className="product-price">${product.price}</h4>
      </div>
      <div className="rating-div">
        <p>
          {product.rating.rate} ⭐️ ({product.rating.count})
        </p>
      </div>
      {/* <p>{product.description}</p> */}
      <div className="buttons">
        <button className="simple-button" onClick={() => {}}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
