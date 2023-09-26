import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../style/Login.css";
import { loginUser } from "../api/api";

function Login({ token, setToken, setUser, setCart }) {
  const [err, setErr] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Calling api helper to login user
      const response = await loginUser(username, password);
      response && setErr(null);
      response && localStorage.setItem("capstone-token", response.token);
      setToken(response.token);
      setUser(username);
      localStorage.setItem("capstone-user", username);
      // Update cart items based on logged in user
      setCart(JSON.parse(localStorage.getItem(`${username}-cart`)) || []);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
      setErr("Wrong username or password. Please try again");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Sign in</h2>
        <div className="login-inputs">
          <label>Username:</label>
          <input
            placeholder="johnd"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-inputs">
          <label>Password:</label>
          <input
            placeholder="m38rmF$"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button type="button" className="simple-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
      {loading ? (
        <h3 className="loading">Authenticating, Please Wait....</h3>
      ) : (
        err && (
          <div className="message-box">
            <p>{err}</p>
          </div>
        )
      )}
      <div className="register-div">
        <p>
          Don't have an account? <Link to={"/register"}>Register</Link> here
        </p>
      </div>
    </div>
  );
}

export default Login;
