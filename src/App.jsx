import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Home from "./pages/Home/Home";
import Product from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

import ProductInfo from "./pages/ProductDetails/ProductInfo";
import ProductOrder from "./pages/ProductDetails/ProductOrder";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:productId" element={<ProductDetails />}>
            <Route index element={<ProductInfo />} />
            <Route path="order" element={<ProductOrder />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
