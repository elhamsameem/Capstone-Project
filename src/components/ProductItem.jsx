import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/ProductItem.css";

function ProductItem({ product, cart, setCart }) {
  const navigate = useNavigate();
  const [inCart, setInCart] = useState(
    cart.find((item) => item.id === product.id)
  );

  const handleAddClick = () => {
    if (inCart) {
      // If item is already in cart, remove it
      const newItems = cart.filter((item) => item.id !== product.id);
      setCart(newItems);
    } else {
      // If item is not in cart then add item in the cart

      setCart((prevItems) => {
        const productToAdd = {
          ...product,
          quantity: product.quantity || 1,
        };
        return [...prevItems, productToAdd];
      });
    }
    // Toggle button which switches the button details
    setInCart(!inCart);
  };

  return (
    <div className="product-div">
      <div
        className="product-img-div"
        onClick={() => {
          navigate(`/products/${product.id}`);
        }}
        title="View Product"
      >
        {product.image ? (
          <img className="product-img" src={`${product.image}`}></img>
        ) : (
          <h4>Loading Image...</h4>
        )}
      </div>
      <div className="product-title">
        <h3
          onClick={() => {
            navigate(`/products/${product.id}`);
          }}
          title={product.title}
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
      <div className="buttons">
        <button
          className={inCart ? "remove-button" : "simple-button"}
          onClick={(e) => {
            e.preventDefault();
            handleAddClick();
          }}
        >
          {inCart ? "Remove" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
