import React from "react";
import "./Login.css";
import { Link, useLocation } from "react-router-dom";

export default function Register() {
  const location = useLocation();
  const direction = location.state?.recent || "../login";
  return (
    <div className="login-form-container">
      <h3>Register</h3>
      <form className="login-form">
        <input placeholder="Username" required type="text" id="text" />
        <input placeholder="Email" required type="email" id="email" />
        <input placeholder="Password" required type="password" id="password" />
        <input
          placeholder="Confirm Password"
          required
          type="password"
          id="confirmpassword"
        />
        <button className="btn login-btn btn-primary">Register</button>
      </form>
      <p>
        Already have an account?
        <Link to={direction}> Login </Link>
      </p>
    </div>
  );
}
