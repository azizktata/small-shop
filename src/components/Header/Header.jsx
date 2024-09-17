import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="site-title">
          <h1>
            <Link className="site-logo " to="/">
              #Shopize
            </Link>
          </h1>
          <p className="subtitle">aqss wqqc qzze</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link className="" to="products">
                Shop
              </Link>
            </li>
            <li>
              <Link to="cart">Cart</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
