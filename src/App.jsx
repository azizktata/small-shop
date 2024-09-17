import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Home from "./pages/home/home";
import Product from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import ProductInfo from "./pages/ProductDetails/ProductInfo";
import ProductOrder from "./pages/ProductDetails/ProductOrder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:productId" element={<ProductDetails />}>
            <Route index element={<ProductInfo />} />
            <Route path="order" element={<ProductOrder />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
