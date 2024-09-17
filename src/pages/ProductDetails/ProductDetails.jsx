import React from "react";
import "./ProductDetails.css";
import { Link, Outlet, useParams } from "react-router-dom";
import { productss } from "../Products/Products";
import ProductInfo from "./ProductInfo";

export default function ProductDetails() {
  const { productId } = useParams();
  console.log(productId);
  return (
    <div className="details-container">
      <Link to="/products">Back to shop</Link>
      <h3>Product Details</h3>
      <div className="product-details-container">
        <img src="https://via.placeholder.com/150" alt="product" />
        <div className="right-container">
          <nav>
            <Link to=".">Details</Link>
            <Link to="order">Order</Link>
          </nav>
          <div className="product-details">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
