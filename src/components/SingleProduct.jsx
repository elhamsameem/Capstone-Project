import React from "react";
import "../style/SingleProduct.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct({ products, cart, setCart }) {
  const params = useParams();
  const item = products
    ? products.filter((product) => product.id === Number(params.id))
    : [];
  // this will destructure the array and will assign the first index to product var
  const product = item[0];

  // Check if item is already in the cart
  const [inCart, setInCart] = useState(
    cart.find((item) => item.id === product.id)
  );

  const handleClick = () => {
    // If item is already in cart, button will change to Remove and will remove the item from cart
    if (inCart) {
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
    // Toggle button which switches the button details from Add to Remove or vice versa
    setInCart(!inCart);
  };

  return (
    <>
      {product ? (
        <div className="single-product-container">
          <div className="back-button-div">
            <button className="back-button" onClick={() => history.back()}>
              {"Back"}
            </button>
          </div>
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
              <br />
              <div className="buttons2">
                <div className="buttons1">
                  <div className="buttons">
                    <button
                      className={inCart ? "remove-button" : "simple-button"}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick();
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
