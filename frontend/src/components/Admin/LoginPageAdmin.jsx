import React, { useState , useContext} from "react";
import LICETLogo from "../licet-logo.png";
import "./LoginPageAdmin.css";
import lc from "../licet-logo-circle.png";
import alumnilogo from "../alumni-logo.png";
import licetcmp from "../licet-cmp.jpeg";
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
  <div className="container" style={{"backgroundColor" : "#efe6d1"}}>
      <div className="login-header-container">
      <img src={lc}  style = {{ "height" : "120px" ,  "width": "120px" , "margin" : "15px" }}alt="LICET Logo" className="logo" />
      <h1 className="election-title" style={{"fontSize": "35px" ,  "color": "#1e1445" , "marginTop" : "40px"}}>LICET ALUMNI ASSOCIATION ELECTION <br/> <br/>ADMIN LOGIN</h1>
      <img src={alumnilogo} alt="LICET Logo" style = {{ "height" : "150px" ,  "width": "100px" }}className="logo" />
      <br /></div>
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