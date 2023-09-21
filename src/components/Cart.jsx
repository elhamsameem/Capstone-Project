import React from "react";
import "../style/Cart.css";

export default function Cart({ cart, setCart }) {
  console.log(cart);

  return <div className="cart-canvas">{cart.length > 0 && cart.map}</div>;
}
