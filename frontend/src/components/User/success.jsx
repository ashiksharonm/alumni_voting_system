import React, { useContext, useState, useEffect } from "react";
import "./Vote.css";
import LICETLogo from "../alumni-logo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/Authcontext";

const Vote = () => {

    const {logout } = useContext(AuthContext);

    const handleLogout = async () => {
        
            await logout();
    }
  
  return (
    <div className="vote-container">
      <div className="header">
        <div className="header-left">
          <img src={LICETLogo} alt="LICET Logo" style={{"height" : "150px" ,  "width": "100px", "marginLeft":"10px"}} className="logo" />
        </div>
        <div className="header-center">
          <h2 className="election-title" style={{"fontSize": "35px", "marginLeft":"5%"}}>LICET ALUMNI COUNCIL ELECTION</h2>
        </div>
        <div className="header-right">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <br />
    </div>
    
  );
};

export default Vote;
