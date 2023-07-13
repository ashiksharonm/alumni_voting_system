import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CanvasJSReact from "@canvasjs/react-charts";
import "react-datepicker/dist/react-datepicker.css";
import LICETLogo from "../licet-logo.png";
import "./CandidateUpload.css";

const Results = () => {
  const Navigate = useNavigate();
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const electionResults = [
    {
      title: "President",
      data: [
        { label: "Candidate A", y: 10, color: "#FF5733" },
        { label: "Candidate B", y: 15, color: "#C70039" },
        { label: "Candidate C", y: 25, color: "#FFC300" },
        { label: "Candidate D", y: 30, color: "#3366CC" },
        { label: "Candidate E", y: 28, color: "#99CC00" },
      ],
    },
    {
      title: "Vice President",
      data: [
        { label: "Candidate X", y: 20, color: "#FF5733" },
        { label: "Candidate Y", y: 18, color: "#C70039" },
        { label: "Candidate Z", y: 22, color: "#FFC300" },
        { label: "Candidate W", y: 25, color: "#3366CC" },
        { label: "Candidate V", y: 30, color: "#99CC00" },
      ],
    },
    {
      title: "Secretary",
      data: [
        { label: "Candidate X", y: 20, color: "#FF5733" },
        { label: "Candidate Y", y: 18, color: "#C70039" },
        { label: "Candidate Z", y: 22, color: "#FFC300" },
        { label: "Candidate W", y: 25, color: "#3366CC" },
        { label: "Candidate V", y: 30, color: "#99CC00" },
      ],
    },
    {
      title: "Treasurer",
      data: [
        { label: "Candidate X", y: 20, color: "#FF5733" },
        { label: "Candidate Y", y: 18, color: "#C70039" },
        { label: "Candidate Z", y: 22, color: "#FFC300" },
        { label: "Candidate W", y: 25, color: "#3366CC" },
        { label: "Candidate V", y: 30, color: "#99CC00" },
      ],
    },
    {
      title: "Executives",
      data: [
        { label: "Candidate X", y: 20, color: "#FF5733" },
        { label: "Candidate Y", y: 18, color: "#C70039" },
        { label: "Candidate Z", y: 22, color: "#FFC300" },
        { label: "Candidate W", y: 25, color: "#3366CC" },
        { label: "Candidate V", y: 30, color: "#99CC00" },
      ],
    },
  ];

  const handleLogout = () => {
    Navigate("/admin-login");
  };

  return (
    <div className="admin-container">
      <div className="vote-container">
        <header className="header">
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
        </header>
        <div className="chart-container">
          {electionResults.map((election) => (
            <div key={election.title} className="chart-item">
              {/* <h2>{election.title}</h2> */}
              <br />
              <CanvasJSChart
                options={{
                  title: { text: election.title },
                  data: [
                    {
                      type: "column",
                      dataPoints: election.data,
                    },
                  ],
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
