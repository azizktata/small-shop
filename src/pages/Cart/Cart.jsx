import React from "react";
import "./Cart.css";

export default function Cart() {
  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <div className="container">
        <div className="cart-list">
          <div className="cart-element">
            <img src="https://via.placeholder.com/150" alt="product" />
            <div className="details">
              <h4>Product 1</h4>
              <p>Price: $100</p>
              <p>Quantity: 1</p>
            </div>
            <button className="remove-btn">Remove</button>
          </div>

          <div className="cart-element">
            <img src="https://via.placeholder.com/150" alt="product" />
            <div className="details">
              <h4>Product 1</h4>
              <p>Price: $100</p>
              <p>Quantity: 1</p>
            </div>
            <button className="remove-btn">Remove</button>
          </div>
          <div className="cart-element">
            <img src="https://via.placeholder.com/150" alt="product" />
            <div className="details">
              <h4>Product 1</h4>
              <p>Price: $100</p>
              <p>Quantity: 1</p>
            </div>
            <button className="remove-btn">Remove</button>
          </div>
        </div>
        <div className="cart-total">
          <h4>Total: $600</h4>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}
