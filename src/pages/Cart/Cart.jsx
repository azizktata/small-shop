import React from "react";
import "./Cart.css";
import image from "./work.jpg";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <div className="cart-main-container">
        <div className="cart-list-container">
          <div className="cart-element container-flex">
            <div>
              <img src={image} alt="product" />
            </div>
            <div className="details">
              <h4>Product 1</h4>
              <p>Price: $100</p>
              <p>Quantity: 1</p>
            </div>
            <button className="remove-btn">+</button>
          </div>

          <div className="cart-element container-flex">
            <div>
              <img src={image} alt="product" />
            </div>
            <div className="details">
              <h4>Product 1</h4>
              <p>Price: $100</p>
              <p>Quantity: 1</p>
            </div>
            <button className="remove-btn">+</button>
          </div>
        </div>

        <div className="cart-total">
          <h4>Your order</h4>
          <div className="order-pricing container-flex">
            <p>
              Product 1 <span className="remove">remove</span>
            </p>
            <p>15$</p>
          </div>
          <div className="order-pricing container-flex">
            <p>
              Product 1 <span className="remove">remove</span>
            </p>
            <p>15$</p>
          </div>
          <div className="divider"></div>
          <div className="order-pricing container-flex">
            <p>Total price: </p>
            <p>600$</p>
          </div>
          <Link className="order-btn" to=".">
            Complete Order
          </Link>
        </div>
      </div>
    </div>
  );
}
