import React, { useState } from "react";
import LICETLogo from "../licet-logo.png";
import "./LoginPageAdmin.css";
import { useNavigate } from "react-router-dom";

const LoginPageAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const validateForm = (event) => {
    event.preventDefault();

    if (username !== "admin-licet" && password !== "licet@2023") {
      setUsernameError("Invalid username.");
      setPasswordError("Invalid password.");
      return;
    } else if (username !== "admin-licet") {
      setUsernameError("Invalid username.");
      return;
    } else if (password !== "licet@2023") {
      setPasswordError("Invalid password.");
      return;
    } else {
      setUsernameError("");
      setPasswordError("");
    }

    // Send login request to the server or perform necessary actions for admin login
    console.log("Admin login successful");
    navigate("/admin");
  };

  return (
    <div className="container">
      <img src={LICETLogo} alt="LICET Logo" className="logo" />
      <h1 className="election-title-name">LICET ALUMNI COUNCIL ELECTION <br/>   <center> <p className="election-title-name1"> ADMIN LOGIN </p> </center> </h1>
      <div className="login-card">
        <form onSubmit={validateForm}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Admin Username"
            required
          />
          <br />
          <span className="error" id="usernameError">
            {usernameError}
          </span>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Admin Password"
            required
          />
          <br />
          <span className="error" id="passwordError">
            {passwordError}
          </span>

          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginPageAdmin;
