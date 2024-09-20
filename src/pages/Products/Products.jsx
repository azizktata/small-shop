import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import image from "../../assets/food.jpg";

export default function Product() {
  const productElements = productss.map((product) => (
    <div key={product.id} className="product-element">
      <Link to={`${product.id}`}>
        <div className="card-img-sector">
          <div className="card-img-container">
            <img className="card-img" src={image} />
            <button className="add-cart-btn">Add to cart</button>
          </div>
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
  ));

  return (
    <div className="products-container">
      <h3>Explore our products</h3>
      <div className="filter-container">
        <div className="category-buttons">
          <button className="category-btn">category 1</button>
          <button className="category-btn">category 2</button>
          <button className="category-btn">category 3</button>
        </div>

        <div className="filter-options">
          <select className="filter-select">
            <option value="price">Price</option>
            <option value="name">Name</option>
            <option value="category">Alphabetically</option>
          </select>
          <select className="filter-select">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <p>
            <strong>{productss.length} Prodcuts</strong>
          </p>
        </div>
      </div>
      <div className="product-list">{productElements}</div>
    </div>
  );
}

export const productss = [
  {
    id: 1,
    name: "Armchair Morgen",
    category: "category 1",
    price: 100,
  },
  {
    id: 2,
    name: "Bright bowl",
    category: "category 2",
    price: 200,
  },
  {
    id: 3,
    name: "Product 2",
    category: "category 2",
    price: 200,
  },
  {
    id: 4,
    name: "Product 2",
    category: "category 2",
    price: 200,
  },
  {
    id: 5,
    name: "Product 3",
    category: "category 3",
    price: 300,
  },
];
