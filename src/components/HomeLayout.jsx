import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export const CartContext = React.createContext();

export default function HomeLayout() {
  const [cartItems, setCartItems] = React.useState([]);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </CartContext.Provider>
  );
}
