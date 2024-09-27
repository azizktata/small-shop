import React from "react";
import "./ProductDetails.css";
import { useOutletContext } from "react-router-dom";
import { addToCart } from "../../cartSlice";
import { useDispatch } from "react-redux";

export default function ProductInfo() {
  const { product, count, setCount } = useOutletContext();
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="product-info-title">{product.name}</h3>
      <p className="product-info-price">${product.price}.00</p>
      <p>
        <strong> Description: </strong>Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam suscipit, nisl sit amet rhoncus aliquam, elit
        elit fermentum eros, eu tincidunt mauris quam id nisl. Sed nec semper
        neque. Mauris in sollicitudin nunc. Nullam sit amet felis nec libero
        ultricies scelerisque.
      </p>
      <p>
        <strong>Price:</strong> {product.price}$
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <div className="add-cart-section">
        <div className="counter">
          <button onClick={() => setCount(count - 1)}>-</button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button
          onClick={() => {
            dispatch(addToCart({ ...product, quantity: count }));
            document.querySelector(".sidebar").classList.remove("hide-sidebar");
            document.querySelector(".sidebar").classList.add("show-sidebar");
          }}
          className="btn add-cart"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
