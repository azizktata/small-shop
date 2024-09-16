import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header-container">
           <Link className="site-logo" to="/">#Shopize</Link>
           <nav>
            <NavLink to="products">Shop</NavLink>
            <NavLink to="cart">Cart</NavLink>
            <NavLink to="login">Login</NavLink>
           </nav>
        </header>
    )
}