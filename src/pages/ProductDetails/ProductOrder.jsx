import React from "react";
import "./ProductDetails.css";
import { Link, useOutletContext } from "react-router-dom";

export default function ProductOrder() {
  const { product, count, setCount } = useOutletContext();
  return (
    <div className="order-container">
      <h3>Order</h3>
      <form className="order-form" action="">
        <div className="order-form-main">
          <div className="input-grp">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="input-grp">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" />
          </div>
          <div className="input-grp">
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" />
          </div>
          <div className="input-grp">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" />
          </div>
        </div>
        <div className="counter">
          <button onClick={() => setCount(count - 1)}>-</button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <Link className="btn order2-btn">Order</Link>
      </form>
    </div>
  );
}
