import React from "react";
import "./Checkout.css";
import image from "./work.jpg";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/HomeLayout";
import { productss } from "../Products/Products";

export default function Checkout() {
  const { cartItems, setCartItems } = React.useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  // console.log(cartItems);

  return (
    <div className="checkout-main">
      <div className="checkout-container">
        <h3 className="checkout-title">Checkout</h3>
        <form className="checkout-form-container">
          <input placeholder="Your Firstname" type="text" className="name" />
          <input placeholder="Your Lastname" type="text" className="name" />
          <input placeholder="Phone number" type="number" className="phone" />
          <input placeholder="Region" type="text" className="region" />
          <input placeholder="City" type="text" className="address" />
          <input placeholder="Your Address" type="text" className="address" />
          <button className="order-checkout-btn" to=".">
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
                <p>{product.price}$</p>
              </div>
            ))}

          <div className="order-pricing container-flex">
            <p>Subtotal ({cartItems.length} items) </p>
            <p>
              {totalPrice} <span className="dt"> DT</span>
            </p>
          </div>

          <div className="order-pricing container-flex">
            <p>Shipping</p>
            <p>
              7 <span className="dt">DT</span>
            </p>
          </div>
          <div className="order-pricing container-flex">
            <p>Total </p>
            <p>
              {totalPrice}
              <span className="dt"> DT</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
