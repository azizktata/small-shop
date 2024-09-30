import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import image from "../../assets/kitchen1.jpg";
import { addToCart } from "../../cartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({ product, newImage }) {
  const dispatch = useDispatch();
  const showSideBar = () => {
    document.querySelector(".sidebar").classList.remove("hide-sidebar");
    document.querySelector(".sidebar").classList.add("show-sidebar");
  };
  return (
    <div key={product.id} className="product-element">
      <div>
        <div className="card-img-sector">
          <Link to={`/products/${product.id}`}>
            <img
              className="card-img"
              src={newImage ? newImage : image}
              loading="eager"
              alt="product"
            />
          </Link>
          <button
            onClick={() => {
              dispatch(addToCart({ ...product, quantity: 1 }));
              showSideBar();
            }}
            className="add-cart-btn"
          >
            Add to cart
          </button>
        </div>
        <div className="card-content">
          <p className="card-body-categ">{product.category}</p>
          <h2 className="card-title">{product.name}</h2>

          <p className="card-body-price">{product.price}$</p>
        </div>
      </div>
    </div>
  );
}
