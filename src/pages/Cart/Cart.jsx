import React from "react";
import "./Cart.css";
import image from "./work.jpg";
import { Link } from "react-router-dom";
import { CartContext } from "../../components/HomeLayout";
import { productss } from "../Products/Products";

export default function Cart() {
  const { cartItems, setCartItems } = React.useContext(CartContext);

  const productsInCart = productss.filter((product) =>
    cartItems.some((item) => item.id == product.id)
  );

  const totalPrice = productsInCart.reduce(
    (acc, product) =>
      acc +
      product.price *
        (cartItems.find((item) => item.id === product.id)?.quantity || 0),
    0
  );
  // console.log(cartItems);
  console.log(productsInCart);
  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <div className="cart-main-container">
        <div className="cart-list-container">
          {productsInCart.length > 0 &&
            productsInCart.map((product) => (
              <div className="cart-element container-flex">
                <div className="cart-element-main">
                  <img src={image} alt="product" />
                  <div className="details">
                    <h4>{product.name}</h4>
                    <p>Price: ${product.price}</p>
                    <p>
                      Quantity:
                      {cartItems.find((item) => item.id === product.id)
                        ?.quantity || 0}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    setCartItems((prevItems) => {
                      const item = prevItems.find(
                        (item) => item.id === product.id
                      );
                      if (item.quantity > 1) {
                        return prevItems.map((prevItem) =>
                          prevItem.id === product.id
                            ? { ...prevItem, quantity: prevItem.quantity - 1 }
                            : prevItem
                        );
                      } else {
                        return prevItems.filter(
                          (prevItem) => prevItem.id !== product.id
                        );
                      }
                    })
                  }
                  className="remove-btn"
                >
                  -
                </button>
              </div>
            ))}
        </div>
        <div className="cart-total">
          <h4>Your order</h4>
          {productsInCart.length > 0 &&
            productsInCart.map((product) => (
              <div className="order-pricing container-flex">
                <p>{product.name}</p>
                <p>{product.price}$</p>
              </div>
            ))}

          <div className="divider"></div>
          <div className="order-pricing container-flex">
            <p>Total price: </p>
            <p>{totalPrice}$</p>
          </div>
          <Link className="order-btn" to=".">
            Complete Order
          </Link>
        </div>
      </div>
    </div>
  );
}
