import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../HomeLayout";

export default function Header() {
  const { cartItems } = React.useContext(CartContext);

  const numberOfCartItems = cartItems.length > 0 ? cartItems.length : 0;
  return (
    <header>
      <div className="container">
        <div className="site-title">
          <h1>
            <NavLink className="site-logo" to="/">
              #SOKOON
            </NavLink>
          </h1>
          <p className="subtitle">hand-made wood crafts</p>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "isActive" : null)}
                to="."
              >
                home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "isActive" : null)}
                to="products"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
            <li
              onClick={() => {
                document
                  .querySelector(".sidebar")
                  .classList.remove("hide-sidebar");
                document
                  .querySelector(".sidebar")
                  .classList.add("show-sidebar");
              }}
              className="cart-icon"
            >
              <i className="fa-solid fa-cart-shopping"></i>

              <div className="bg-counter">
                <span>{numberOfCartItems}</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
