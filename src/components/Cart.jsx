import React from "react";
import "../style/Cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const navigate = useNavigate();
  const openItem = (id) => {
    navigate(`/products/${id}`);
  };
  console.log(cart);

  return (
    <div className="cart-canvas">
      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <div className="cart-item-div" key={item.id}>
              <div className="cart-item-img-div">
                <img
                  src={item.image}
                  className="cart-item-img"
                  onClick={() => openItem(item.id)}
                />
              </div>
              <h4 className="cart-item-title" onClick={() => openItem(item.id)}>
                {item.title}
              </h4>
              <p className="cart-item-price">${item.price}</p>
              <div className="cart-item-qty-div">
                QTY:
                <button>+</button>5<button>-</button>
              </div>
              <div className="button-div">
                <button
                  className="remove-button"
                  onClick={() => {
                    const newItems = cart.filter(
                      (product) => item.id !== product.id
                    );
                    setCart(newItems);
                  }}
                >
                  Remove
                </button>
              </div>
              <h4 className="cart-item-subtotal">Total: ${item.price * 5}</h4>
            </div>
          );
        })
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </div>
  );
}
