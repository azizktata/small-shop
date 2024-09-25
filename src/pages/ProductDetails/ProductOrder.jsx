import React from "react";
import "./ProductDetails.css";
import { useOutletContext } from "react-router-dom";

export default function ProductOrder() {
  const { product, count, setCount } = useOutletContext();
  return (
    <div className="order-container">
      <h3>Order</h3>
      <form className="order-form" action="">
        <div className="order-form-main">
          <input placeholder="Your Firstname" type="text" className="name" />
          <input placeholder="Your Lastname" type="text" className="name" />
          <input placeholder="Phone number" type="number" className="phone" />
          <input placeholder="Region" type="text" className="region" />
          <input placeholder="City" type="text" className="address" />
          <input placeholder="Your Address" type="text" className="address" />
          <button className=" btn order-checkout2-btn" to=".">
            Purchase
          </button>
        </div>
      </form>
    </div>
  );
}
