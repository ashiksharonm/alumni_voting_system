// AdminHome.js
import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import CandidateUpload from "./CandidateUpload";
import ChangeElectionPhase from "./ChangeElectionPhase";
import Results from "./Results";
import LICETLogo from "../licet-logo.png";
import "./adminHome.css";

const AdminHome = () => {
  const [electionPhase, setElectionPhase] = useState("voting");
  const [electionStatus, setElectionStatus] = useState({
    president: false,
    vicePresident: false,
    secretary: false,
    treasurer: false,
    executives: false,
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/admin-login");
  };

  const handleLogoClick = () => {
    navigate("/admin");
  };

  const handleToggle = (election) => {
    setElectionStatus((prevStatus) => ({
      ...prevStatus,
      [election]: !prevStatus[election],
    }));
  };

  return (
    <div className="admin-container">
      <div className="vote-container">
        <div className="header">
          <div className="header-left">
            <Link to="/admin" onClick={handleLogoClick}>
              <img src={LICETLogo} alt="LICET Logo" className="logo" />
            </Link>
          </div>
          <div className="header-center">
            <h1 className="election-title">LICET ALUMNI COUNCIL ELECTION <br/> ADMIN LOGIN </h1>
          </div>
          <div className="header-right">
            <nav className="nav-menu">
              <ul>
                <Link to="/admin/candidate-upload" className="menu-link">
                  Candidates&nbsp;&nbsp;&nbsp;
                </Link>

                <Link to="/admin/change-election-phase" className="menu-link">
                  Elections&nbsp;&nbsp;&nbsp;
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
          <Routes>
            <Route
              path="/admin/candidate-upload"
              element={<CandidateUpload />}
            />
            <Route
              path="/admin/change-election-phase"
              element={
                <ChangeElectionPhase
                  electionPhase={electionPhase}
                  setElectionPhase={setElectionPhase}
                />
              }
            />
            <Route
              path="/admin/results"
              element={<Results electionPhase={electionPhase} />}
            />
          </Routes>
          <div className="election-status-container">
            <div className="election-status-card">
              <h2>President</h2>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={electionStatus.president}
                  onChange={() => handleToggle("president")}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="election-status-card">
              <h2>Vice President</h2>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={electionStatus.vicePresident}
                  onChange={() => handleToggle("vicePresident")}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="election-status-card">
              <h2>Secretary</h2>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={electionStatus.secretary}
                  onChange={() => handleToggle("secretary")}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="election-status-card">
              <h2>Treasurer</h2>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={electionStatus.treasurer}
                  onChange={() => handleToggle("treasurer")}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="election-status-card">
              <h2>Executives</h2>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={electionStatus.executives}
                  onChange={() => handleToggle("executives")}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
