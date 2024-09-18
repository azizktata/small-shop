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
            <img src="https://via.placeholder.com/150" alt="category" />
            <h4>Category 1</h4>
          </div>
          <div className="category">
            <img src="https://via.placeholder.com/150" alt="category" />
            <h4>Category 2</h4>
          </div>
          <div className="category">
            <img src="https://via.placeholder.com/150" alt="category" />
            <h4>Category 3</h4>
          </div>
        </div>

        <h3>Our Products</h3>
        <div className="products">
          <div className="product">
            <img src={image} />
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" />
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" />
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" />
          </div>
          {/* <div className="product">
            <img src="https://via.placeholder.com/150" />
            <div className="details">
              <h4>Product 4</h4>
              <p>price $</p>
            </div>
          </div> */}
        </div>
        <Link className="show-btn">Show More</Link>
      </div>
    </div>
  );
}
