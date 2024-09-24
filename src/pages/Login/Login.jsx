import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-form-container">
      <h3>Login</h3>
      <form className="login-form">
        <input placeholder="Email" required type="email" id="email" />
        <input placeholder="Password" required type="password" id="password" />
        <button className="btn login-btn btn-primary">Login</button>
      </form>
      <p>
        Don't have an account?
        <Link to="../register"> Sign up</Link>
      </p>
    </div>
  );
}
