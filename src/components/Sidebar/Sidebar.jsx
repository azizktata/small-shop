import React from "react";
import "./Sidebar.css";
import { CartContext } from "../../components/HomeLayout";
import image from "../../assets/chair2.jpg";
import { productss } from "../../pages/Products/Products";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { cartItems, setCartItems } = React.useContext(CartContext);

  const numberOfCartItems = cartItems?.length || 0;
  function addQuantity(id) {
    setCartItems((prevItems) => {
      return prevItems.map((prevItem) =>
        prevItem.id === id
          ? { ...prevItem, quantity: prevItem.quantity + 1 }
          : prevItem
      );
    });
  }
  function reduceQuantity(id) {
    setCartItems((prevItems) => {
      return prevItems.map((prevItem) =>
        prevItem.id === id
          ? {
              ...prevItem,
              quantity: prevItem.quantity - 1,
            }
          : prevItem
      );
    });
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => {
      return prevItems.filter((prevItem) => prevItem.id !== id);
    });
  }
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-header">
          <h4>
            Cart <span>{numberOfCartItems}</span>
          </h4>
          <button
            onClick={() => {
              document
                .querySelector(".sidebar")
                .classList.remove("show-sidebar");
              document.querySelector(".sidebar").classList.add("hide-sidebar");
            }}
            className="close-btn"
          >
            &times;
          </button>
        </div>
        {cartItems &&
          cartItems.map((product) => (
            <div className="cart-section">
              <img src={image} alt="" />
              <div className="cart-section-content">
                <h5>{product.name}</h5>
                <p className="cart-section-price">
                  ${product.price} x {product.quantity}
                </p>
                <div className="small-counter">
                  <button
                    onClick={() =>
                      product.quantity > 1 && reduceQuantity(product.id)
                    }
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => addQuantity(product.id)}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
              <p onClick={() => removeFromCart(product.id)} className="remove">
                &times;
              </p>
            </div>
          ))}
        <div className="total-checkout">
          <p>Total: </p>
          <p>
            $
            {cartItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
          </p>
        </div>
        <button className="checkout-btn">
          <Link to="/checkout">Checkout</Link>
        </button>
      </div>
    </div>
  );
}
