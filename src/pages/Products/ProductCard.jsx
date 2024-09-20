import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import image from "../../assets/food.jpg";
export default function ProductCard({ product }) {
  return (
    <div key={product.id} className="product-element">
      <Link to={`${product.id}`}>
        <div className="card-img-sector">
          <img className="card-img" src={image} />
          <button className="add-cart-btn">Add to cart</button>
        </div>
        <div className="card-content">
          <p className="card-body-categ">{product.category}</p>
          <h2 className="card-title">{product.name}</h2>
          <p className="card-body-price">{product.price}$</p>
          {/* <div className="card-footer">
            <button className="add-cart-btn">Add to cart</button>
            <button className="view-details-btn">view details</button>
          </div> */}
        </div>
      </Link>
    </div>
  );
}
