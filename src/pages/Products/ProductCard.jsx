import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import image from "../../assets/chair2.jpg";
import { CartContext } from "../../components/HomeLayout";

export default function ProductCard({ product, newImage }) {
  const { setCartItems } = React.useContext(CartContext);
  return (
    <div key={product.id} className="product-element">
      <div>
        <div className="card-img-sector">
          <Link to={`/products/${product.id}`}>
            <img className="card-img" src={newImage ? newImage : image} />
          </Link>
          <button
            onClick={() =>
              setCartItems((prevItems) => {
                const itemInCart = prevItems.find(
                  (item) => item.id === product.id
                );
                if (itemInCart) {
                  return prevItems.map((prevItem) =>
                    prevItem.id === product.id
                      ? { ...prevItem, quantity: prevItem.quantity + 1 }
                      : prevItem
                  );
                } else {
                  return [...prevItems, { ...product, quantity: 1 }];
                }
              })
            }
            className="add-cart-btn"
          >
            Add to cart
          </button>
        </div>
        <div className="card-content">
          <div className="card-content-header">
            <h2 className="card-title">{product.name}</h2>
            <p className="card-body-categ">{product.category}</p>
          </div>
          <p className="card-body-price">{product.price}$</p>
          {/* <div className="card-footer">
            <button className="add-cart-btn">Add to cart</button>
            <button className="view-details-btn">view details</button>
            </div> */}
        </div>
      </div>
    </div>
  );
}
