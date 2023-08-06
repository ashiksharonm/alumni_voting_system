import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LICETLogo from "../alumni-logo.png";
import "./CandidateUpload.css";
import { AuthContext } from "../../auth/Authcontext";

const CandidateUpload = () => {
  const navigate = useNavigate();

  const { viewCandidates, currentCandidates, logout } = useContext(AuthContext);
  const handleLogout = async () => {
    navigate("/admin-login");
    await logout();
    
  };

  useEffect(() => {
    viewCandidates();
  }, [viewCandidates]);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (currentCandidates && currentCandidates.data) {
      setTableData(currentCandidates.data);
    }
  }, [currentCandidates]);

  const createTable = (data) => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headers = ["name", "regno", "dob", "batch", "position", "votecnt"];

    // Create table headers
    const headerRow = document.createElement("tr");
    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header.toUpperCase();
      th.style.border = "1px solid black";
      th.style.padding = "8px";
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Create table rows
    data.forEach((item) => {
      const row = document.createElement("tr");

      headers.forEach((header) => {
        const cell = document.createElement("td");
        cell.textContent = item[header];
        cell.style.border = "1px solid black";
        cell.style.padding = "8px";
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
  };

  const downloadAsCSV = (data) => {
    const headers = ["name", "regno", "dob", "batch", "position", "votecnt"];
    const Headers = ["NAME", "Reg.No", "DOB", "BATCH", "Position", "VoteCnt"];
    const csvContent =
      Headers.join(",") +
      "\n" +
      data
        .map((item) => headers.map((header) => item[header]).join(","))
        .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "alumni_council_candidates.csv";
    link.click();
  };

  const vc = () => {
    if (tableData.length === 0) {
      return;
    }

    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";

    const table = createTable(tableData);
    tableContainer.appendChild(table);

    const exportButton = document.createElement("button");
    exportButton.className = "export-candidates-button";
    exportButton.textContent = "EXPORT CSV";
    exportButton.addEventListener("click", () => downloadAsCSV(tableData));
    tableContainer.appendChild(exportButton);
  };

  return (
    <div className="admin-container">
      <div className="vote-container" id="">
        <header className="header">
          <div className="header-left">
            <Link to="/admin">
              <img src={LICETLogo} alt="LICET Logo" className="logo" style={{"height" : "120px" ,  "width": "90px", "marginLeft":"10px"}}/>
            </Link>
          </div>
          <div className="header-center">
            <h1
              className="election-title"
              style={{ fontSize: "30px", marginRight: "-292px" }}
            >
              LICET ALUMNI ASSOCIATION ELECTION
            </h1>
          </div>
          <div className="header-right">
            <nav className="nav-menu">
              <ul>
                <Link to="/admin/" className="menu-link">
                  Home&nbsp;&nbsp;&nbsp;
                </Link>
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
        <center>
          <button className="view-candidates-button" onClick={vc}>
            Show Candidates
          </button>
        </center>
        <br />

        <center>
          <div id="table-container"></div>
        </center>
      </div>
    </div>
  );
};

export default CandidateUpload;