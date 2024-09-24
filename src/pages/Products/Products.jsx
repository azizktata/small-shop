import React from "react";
import "./Product.css";

import ProductCard from "./ProductCard";

export default function Product() {
  const [sortedProducts, setSortedProducts] = React.useState([...productss]);
  const filterProducts = (type) => {
    let sortedArray = [...sortedProducts];
    if (type === "asc") {
      sortedArray = sortedArray.sort((a, b) => a.price - b.price);
    } else if (type === "desc") {
      sortedArray = sortedArray.sort((a, b) => b.price - a.price);
    }

    setSortedProducts(sortedArray);
  };
  const handleFilterChange = (event) => {
    if (event.target.value == "price_asc") {
      filterProducts("asc");
    }
    if (event.target.value == "price_desc") {
      filterProducts("desc");
    }
  };
  console.log(sortedProducts);
  const productElements = sortedProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div className="products-container">
      <h3>Explore our products</h3>
      <div className="filter-container">
        <div className="filter-options">
          <select onChange={handleFilterChange} className="filter-select">
            <option value="price_asc">Price, Low to High</option>
            <option value="price_desc">Price, High to Low</option>
          </select>
        </div>
        <p>
          <strong>{productss.length} Prodcuts</strong>
        </p>
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
    image: "../../assets/chair1.jpg",
    price: 100,
  },
  {
    id: 2,
    name: "Bright bowl",
    category: "category 2",
    image: "../../assets/kitchen1.jpg",
    price: 200,
  },
  {
    id: 3,
    name: "Product 2",
    category: "category 2",
    image: "../../assets/chair3.jpg",
    price: 200,
  },
  {
    id: 4,
    name: "Product 2",
    category: "category 2",
    image: "../../assets/chair2.jpg",
    price: 200,
  },
  {
    id: 5,
    name: "Product 3",
    category: "category 3",
    image: "../../assets/table2.jpg",
    price: 300,
  },
  {
    id: 6,
    name: "Product 6",
    category: "category 3",
    image: "../../assets/chair1.jpg",
    price: 600,
  },
];
