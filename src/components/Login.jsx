import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";
import { loginUser } from "../api/api";

function Login({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Calling api helper to login user
      const response = await loginUser(username, password);
      response && localStorage.setItem("capstone-token", response.token);
      setToken(response.token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="login-container">
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
