import React, { useEffect, useRef, useState } from "react";
// import Home from "./Home";
import "./login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <h2>Hospital Data Management System</h2>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            className="username"
            value={userName}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Password"
            className="password"
            value={password}
            required
          />
        </div>
        <div className="input-box">
          <input
            className="login-btn"
            onClick="show()"
            type="submit"
            value="Login"
          />
        </div>
        <div className="group">
          <a href="/"> Forget Password</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
export default Login;
