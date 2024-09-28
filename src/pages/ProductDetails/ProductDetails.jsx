import React from "react";
import "./ProductDetails.css";
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from "react-router-dom";
import { productss } from "../Products/Products";
import image from "../../assets/kitchen1.jpg";

export default function ProductDetails() {
  const [count, setCount] = React.useState(1);
  const { productId } = useParams();
  const product = productss.find((p) => p.id == productId);
  const location = useLocation();
  const search = location.state?.search || "";
  return (
    <div className="product-details-container">
      <Link className="back-link" to={`/products${search}`}>
        back to shop
      </Link>

      <div className="product-container">
        <img src={image} alt="product" />
        <div className="details-container">
          <nav className="details-nav">
            <NavLink
              className={({ isActive }) => (isActive ? "isActive" : null)}
              to="."
              end
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "isActive" : null)}
              to="order"
            >
              Order
            </NavLink>
          </nav>
          <div className="product-details">
            <Outlet context={{ product, count, setCount }} />
          </div>
        </div>
      </div>
    </div>
  );
}
