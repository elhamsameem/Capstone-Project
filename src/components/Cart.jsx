import React from "react";
import "../style/Cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  // Function to open items in cart in single product view.
  const openItem = (id) => {
    navigate(`/products/${id}`);
  };

  // Function to increase item quantity in the cart
  function increaseQty(targetItem) {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        return item.id === targetItem.id
          ? {
              ...item,
              quantity: item.quantity ? item.quantity + 1 : 1,
            }
          : item;
      });
    });
  }

  // Function to decrease item quantity in the cart
  function decreaseQty(targetItem) {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        return item.id === targetItem.id
          ? {
              ...item,
              quantity:
                item.quantity && item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item;
      });
    });
  }

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
                <button
                  className="increament-button qty-buttons"
                  onClick={() => {
                    increaseQty(item);
                  }}
                >
                  +
                </button>
                <p className="item-qty">{item.quantity}</p>
                <button
                  className="decreament-button qty-buttons"
                  onClick={() => {
                    decreaseQty(item);
                  }}
                >
                  -
                </button>
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
              <h4 className="cart-item-subtotal">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </h4>
            </div>
          );
        })
      ) : (
        <h1>Cart is Empty</h1>
      )}
    </div>
  );
}
