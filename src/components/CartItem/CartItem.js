import "./cartItem.css";

import React from "react";

const CartItem = (props) => {
  return (
    <div className="cartItem">
      <span className="sm">{props.type}</span>
      <span className="sm name">{props.name}</span>
      <div className="controls">
        <button className="btn">-</button>
        <span className="sm">{props.quantity}</span>
        <button className="btn">+</button>
      </div>
    </div>
  );
};

export default CartItem;
