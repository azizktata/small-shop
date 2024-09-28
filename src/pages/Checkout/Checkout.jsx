import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";

export default function Checkout() {
  const cartState = useSelector((state) => state.cart);
  const cartItems = cartState.items;
  const totalPrice = cartState.total;
  const user = cartState.user;

  return (
    <div className="checkout-main">
      <div className="checkout-container">
        <h3 className="checkout-title">Checkout</h3>
        <form className="checkout-form-container">
          <input
            placeholder="Your Firstname"
            value={user.firstName || ""}
            type="text"
            className="name"
          />
          <input
            placeholder="Your Lastname"
            value={user.lastName || ""}
            type="text"
            className="name"
          />
          <input
            placeholder="Phone number"
            value={user.phoneNumber || ""}
            type="number"
            className="phone"
          />
          <input
            placeholder="Region"
            type="text"
            value={user.region || ""}
            className="region"
          />
          <input
            placeholder="City"
            type="text"
            value={user.city || ""}
            className="address"
          />
          <input
            placeholder="Your Address"
            value={user.address || ""}
            type="text"
            className="address"
          />
          <button className="btn btn-primary order-checkout-btn" to=".">
            Complete Order
          </button>
        </form>
      </div>

      <div className="cart-total">
        <div className="cart-order-container">
          <h4 className="order-title">Order summary</h4>
          {cartItems.length > 0 &&
            cartItems.map((product) => (
              <div className="order-pricing container-flex">
                <p>{product.name}</p>
                <p>
                  {product.price}${" "}
                  <span className="dt"> x {product.quantity}</span>
                </p>
              </div>
            ))}

          <div className="order-pricing container-flex">
            <p className="light">Subtotal ({cartItems.length} items) </p>
            <p>
              {totalPrice} <span className="dt"> DT</span>
            </p>
          </div>

          <div className="order-pricing container-flex">
            <p className="light">Shipping</p>
            <p>
              0 <span className="dt">DT</span>
            </p>
          </div>
          <div className="order-pricing container-flex">
            <p>
              <strong>Total </strong>
            </p>
            <p>
              <strong> {totalPrice}</strong>
              <span className="dt"> DT</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
