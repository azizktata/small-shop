import React from "react";
import "./Sidebar.css";
import image from "../../assets/kitchen1.jpg";
import {
  removeFromCart,
  addQuantity,
  reduceQuantity,
  isLoggedIn,
} from "../../cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const cartState = useSelector((state) => state.cart);
  const cartItems = cartState.items;
  const total = cartState.total;
  // const loggedIn = cartState.user ? true : false;

  const dispatch = useDispatch();
  const hideSideBar = () => {
    document.querySelector(".sidebar").classList.remove("show-sidebar");
    document.querySelector(".sidebar").classList.add("hide-sidebar");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-header">
          <h4>
            Cart <span className="price-bg">{cartItems.length}</span>
          </h4>
          <button onClick={() => hideSideBar()} className="close-btn">
            &times;
          </button>
        </div>
        {cartItems &&
          cartItems.map((product) => (
            <div key={product.id} className="cart-section">
              <img src={image} alt="" />
              <div className="cart-section-content">
                <h5>{product.name}</h5>
                <p className="cart-section-price">
                  ${product.price} x {product.quantity}
                </p>
                <div className="small-counter">
                  <button
                    onClick={() =>
                      product.quantity > 1 &&
                      dispatch(reduceQuantity(product.id))
                    }
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => dispatch(addQuantity(product.id))}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              <p
                onClick={() => dispatch(removeFromCart(product.id))}
                className="remove"
              >
                &times;
              </p>
            </div>
          ))}
        <div className="total-checkout">
          <p>Total: </p>
          <p>${total}</p>
        </div>

        <Link className="checkout-link" to="/checkout">
          <button className="btn btn-primary checkout-btn">Checkout</button>
        </Link>
      </div>
    </div>
  );
}
