import React from "react";
import "./Product.css";
import ProductCard from "./ProductCard";
import { moqGetProducts, moqGetFilteredProducts } from "../../api";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

export default function Product() {
  // const [sortedProducts, setSortedProducts] = React.useState([...productss]);

  // const filterProducts = (type) => {
  //   let sortedArray = [...sortedProducts];
  //   if (type === "asc") {
  //     sortedArray = sortedArray.sort((a, b) => a.price - b.price);
  //   } else if (type === "desc") {
  //     sortedArray = sortedArray.sort((a, b) => b.price - a.price);
  //   }

  //   setSortedProducts(sortedArray);
  // };
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("price");

  function handleFilterChange(event) {
    setSearchParams((prevParam) => {
      if (event.target.value == 0) {
        prevParam.delete("price");
      } else {
        prevParam.set("price", event.target.value);
      }
      return prevParam;
    });
  }
  console.log(typeFilter);
  const DisplayProducts = () => {
    if (typeFilter !== null) {
      const {
        data: sortedProducts,
        error: error2,
        isLoading: isLoading2,
      } = useQuery("sortedProducts", () => moqGetFilteredProducts(typeFilter));
      if (isLoading2) {
        return <div className="spinner"></div>;
      }
      if (error2) {
        return <h2>{error2.message}</h2>;
      }

      const productElements = sortedProducts?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          prevLink={searchParams.toString()}
        />
      ));

      return productElements;
    }
    const {
      data: products,
      error,
      isLoading,
    } = useQuery("productsData", moqGetProducts);

    if (isLoading) {
      return <div className="spinner"></div>;
    }
    if (error) {
      return <h2>{error.message}</h2>;
    }
    const productElements = products?.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
    return productElements;
  };

  return (
    <div className="products-container">
      <h3>Explore our products</h3>
      <div className="filter-container">
        <div className="filter-options">
          <select
            value={typeFilter || 0}
            onChange={handleFilterChange}
            className="filter-select"
          >
            <option value={0}>price</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
        <p>
          <strong>{productss.length} Prodcuts</strong>
        </p>
      </div>
      <div className="product-list">
        <DisplayProducts />
      </div>
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
