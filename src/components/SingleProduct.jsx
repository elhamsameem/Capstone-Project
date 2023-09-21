import React from "react";
import "../style/SingleProduct.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct({ products, cart, setCart }) {
  const params = useParams();
  const item = products
    ? products.filter((product) => product.id === Number(params.id))
    : [];

  const product = item[0];

  const [inCart, setInCart] = useState(
    cart.find((item) => item.id === product.id)
  );

  const handleAddClick = () => {
    if (inCart) {
      const newItems = cart.filter((item) => item.id !== product.id);
      setCart(newItems);
    } else {
      setCart((prevItems) => {
        return [...prevItems, product];
      });
    }
    // Toggle button which switches the button details
    setInCart(!inCart);
  };

  return (
    <>
      {product ? (
        <div className="single-product-container">
          <div className="single-product-div">
            <div className="single-product-img-div">
              <img className="single-product-img" src={product.image} alt="" />
            </div>
            <div className="single-product-details-div">
              <h1>{product.title}</h1>
              <br />
              <h3 className="product-price">${product.price}</h3>
              <br />
              <p>{product.description}</p>
              <br />
              <p>
                Ratings: {product.rating.rate} ⭐️ ({product.rating.count})
              </p>
              <div className="buttons2">
                <div className="buttons1">
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
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </>
  );
}
