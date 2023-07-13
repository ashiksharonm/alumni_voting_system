import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Results from "./Results";
import LICETLogo from "../licet-logo.png";
import "./adminHome.css";
import { AuthContext } from "../../auth/Authcontext";

const AdminHome = () => {
  const Navigate = useNavigate();
  const { currentUsers } = useContext(AuthContext);

  const [electionStatus, setElectionStatus] = useState({
    president: false,
    vicePresident: false,
    secretary: false,
    treasurer: false,
    executives: false,
  });

console.log(currentUsers);

  const handleToggle = (election) => {
    setElectionStatus((prevStatus) => ({
      ...prevStatus,
      [election]: !prevStatus[election],
    }));
  };

  const handleLogout = () => {
    Navigate("/admin-login");
  };

 
  return (
    <div className="admin-container">
      <div className="vote-container">
        <div className="header">
          <div className="header-left">
            <Link to="/admin">
              <img src={LICETLogo} alt="LICET Logo" className="logo" />
            </Link>
          </div>
          <div className="header-center">
            <h1 className="election-title">LICET ALUMNI COUNCIL ELECTION</h1>
          </div>
          <div className="header-right">
            <nav className="nav-menu">
              <ul>
                <Link to="/admin/candidate-upload" className="menu-link">
                  Candidates&nbsp;&nbsp;&nbsp;
                </Link>
                <Link to="/admin/results" className="menu-link">
                  Results&nbsp;&nbsp;&nbsp;
                </Link>
              </ul>
            </nav>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        <div className="main-content">
          <div className="election-status-container">
            <div className="election-status-card">
              <h2>President</h2>
              <br />
              <p>Number of Candidates: 5</p>
              <p>Total Votes: 100</p>
              <br />
              {/* Display any other relevant information */}
            </div>
            <div className="election-status-card">
              <h2>Vice President</h2>
              <br />
              <p>Number of Candidates: 3</p>
              <p>Total Votes: 50</p>
              <br />
              {/* Display any other relevant information */}
            </div>
            <div className="election-status-card">
              <h2>Secretary</h2>
              <br />
              <p>Number of Candidates: 4</p>
              <p>Total Votes: 75</p>
              <br />
              {/* Display any other relevant information */}
            </div>
            <div className="election-status-card">
              <h2>Treasurer</h2>
              <br />
              <p>Number of Candidates: 2</p>
              <p>Total Votes: 30</p>
              <br />
              {/* Display any other relevant information */}
            </div>
            <div className="election-status-card">
              <h2>Executives</h2>
              <br />
              <p>Number of Candidates: 6</p>
              <p>Total Votes: 120</p>
              <br />
              {/* Display any other relevant information */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
