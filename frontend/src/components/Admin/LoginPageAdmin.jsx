import React, { useState , useContext} from "react";
import LICETLogo from "../licet-logo.png";
import "./LoginPageAdmin.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/Authcontext";

const LoginPageAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const { adminhome } = useContext(AuthContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  const validateForm = async (event) => {
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
    await adminhome();
    navigate("/admin");
  };

  return (
    <div className="container">
      <img src={LICETLogo} alt="LICET Logo" className="logo" />
      <h1 className="election-title-name" style={{"font-size": "35px"}}>LICET ALUMNI COUNCIL ELECTION</h1>
      <br />
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
