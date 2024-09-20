import React from "react";
import "./ProductDetails.css";
import { Link, Outlet, useParams } from "react-router-dom";
import { productss } from "../Products/Products";
import image from "../../assets/food.jpg";

export default function ProductDetails() {
  const [count, setCount] = React.useState(0);
  const { productId } = useParams();
  const product = productss.find((p) => p.id == productId);

  return (
    <div className="product-details-container">
      <Link to="/products">Back to shop</Link>
      <h3>Product Details</h3>
      <div className="product-container">
        <img src={image} alt="product" />
        <div className="details-container">
          <nav className="details-nav">
            <Link className="isActive" to=".">
              Details
            </Link>
            <Link to="order">Order</Link>
          </nav>
          <div className="product-details">
            <Outlet context={{ product, count, setCount }} />
          </div>
        </div>
      </div>
    </div>
  );
}
