import React from "react";
import "./Login.css";
import { Link, replace, useNavigate, useLocation } from "react-router-dom";
import { login } from "../../api";
import { useDispatch } from "react-redux";
import { saveUser } from "../../cartSlice";

export default function Login() {
  const [loginRequest, setLoginRequest] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isDisabled = () => {
    if (!loginRequest.email || !loginRequest.password) {
      return true;
    }
    return false;
  };
  const dispatch = useDispatch();

  async function loginUser(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await login(loginRequest);
      dispatch(saveUser(data));
      navigate(`${direction}`);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (key, value) => {
    setLoginRequest((prev) => ({ ...prev, [key]: value }));
  };

  const direction = location.state?.from || "/";
  return (
    <div className="login-form-container">
      <h3>Login</h3>
      {location.state?.message && <p>{location.state?.message}</p>}
      <form className="login-form">
        <input
          onChange={(event) => handleChange("email", event.target.value)}
          placeholder="Email"
          required
          type="email"
          id="email"
        />
        <input
          onChange={(event) => handleChange("password", event.target.value)}
          placeholder="Password"
          required
          type="password"
          id="password"
        />
        {error && <p className="error">{error}</p>}
        <button
          onClick={loginUser}
          disabled={isDisabled()}
          className="btn login-btn btn-primary"
        >
          {loading ? <>loading..</> : <>Login</>}
        </button>
      </form>
      <p>
        Don't have an account?
        <Link
          state={{ from: location.pathname, recent: location.state?.from }}
          to="../register"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
