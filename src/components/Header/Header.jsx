import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cartState = useSelector((state) => state.cart);
  const cartItems = cartState.items;
  const showSideBar = () => {
    document.querySelector(".sidebar").classList.remove("hide-sidebar");
    document.querySelector(".sidebar").classList.add("show-sidebar");
  };
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
            <li onClick={() => showSideBar()} className="cart-icon">
              <i className="fa-solid fa-cart-shopping"></i>

              <div className="bg-counter">
                <span>{cartItems.length}</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
