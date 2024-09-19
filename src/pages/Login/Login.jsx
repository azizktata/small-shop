import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="banner-container">
        <p>SOKOON</p>
        <h1> SOKOON</h1>
        <h3>Join Us Now</h3>
      </div>
      <div className="login-form-container">
        <h3>Welcome to Shopize</h3>
        <p>Login</p>
        <form className="login-form">
          <input placeholder="Email" required type="email" id="email" />
          <input
            placeholder="Password"
            required
            type="password"
            id="password"
          />
          <button className="login-btn btn-primary">Login</button>
        </form>
        <p>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}
