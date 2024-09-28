import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const globalState = useSelector((state) => state.cart);
  const loggedIn = globalState.user ? true : false;
  const location = useLocation();

  if (!loggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must login first", from: location.pathname }}
      />
    );
  }
  return <Outlet />;
}
