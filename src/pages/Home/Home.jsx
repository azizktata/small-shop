import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import image from "../../assets/food.jpg";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-main">
        <h3>Browse the Range</h3>
        <p>Lorem ipsul aknsknia sjaiks skani</p>
        <div className="categories">
          <div className="category">
            {/* <img src="https://via.placeholder.com/150" alt="category" /> */}
            <div className="category-content">
              <p>must have</p>
              <h4>Category 1</h4>
              <button className="shop-btn">Shop now</button>
            </div>
          </div>
          <div className="category">
            {/* <img src="https://via.placeholder.com/150" alt="category" /> */}
            <div className="category-content">
              <p>must have</p>
              <h4>Category 1</h4>
              <button className="shop-btn">Shop now</button>
            </div>
          </div>
          <div className="category">
            {/* <img src="https://via.placeholder.com/150" alt="category" /> */}
            <div className="category-content">
              <p>must have</p>
              <h4>Category 1</h4>
              <button className="shop-btn">Shop now</button>
            </div>
          </div>
        </div>

        <h3>Our Products</h3>
        <div className="products">
          <div className="product">
            <div className="visible">
              <button className="add-cart-btn">Add cart</button>
              <button className="add-cart-btn">View details</button>
            </div>
            {/* <img src={image} /> */}
          </div>
          <div className="product">
            <div className="visible">
              <button className="add-cart-btn">Add cart</button>
              <button className="add-cart-btn">View details</button>
            </div>
          </div>
          <div className="product">
            <div className="visible">
              <button className="add-cart-btn">Add cart</button>
              <button className="add-cart-btn">View details</button>
            </div>
          </div>
          <div className="product">
            <div className="visible">
              <button className="add-cart-btn">Add cart</button>
              <button className="add-cart-btn">View details</button>
            </div>
            {/* <img src="https://via.placeholder.com/150" /> */}
          </div>
          {/* <div className="product">
            <img src="https://via.placeholder.com/150" />
            <div className="details">
              <h4>Product 4</h4>
              <p>price $</p>
            </div>
          </div> */}
        </div>
        <button className="show-btn">
          <Link to="products">Show More</Link>
        </button>
      </div>
    </div>
  );
}
