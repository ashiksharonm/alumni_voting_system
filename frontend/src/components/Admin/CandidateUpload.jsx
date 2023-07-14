import React, { useState , useContext}from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import LICETLogo from "../licet-logo.png";
import "./CandidateUpload.css";
import { AuthContext } from "../../auth/Authcontext";


const CandidateUpload = () => {
  const navigate = useNavigate();
 

  const { viewCandidates ,currentCandidates , logout} = useContext(AuthContext);
  const handleLogout = async () => {
    await logout();
    navigate("/admin-login");
  };
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

  const vc = async () => {
    await viewCandidates();
    console.log("Updated Candidates");

  const jsonData = currentCandidates.data;
  const tableContainer = document.getElementById("table-container");

  // if (jsonData.length === 0) {
  //   tableContainer.textContent = "No data available";
  //   return;
  // }

  const table = createTable(jsonData);
  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);


  const exportButton = document.createElement("button");
  exportButton.className = "export-candidates-button";
  exportButton.textContent = "EXPORT CSV";
  exportButton.addEventListener("click", () => downloadAsCSV(jsonData));
  tableContainer.appendChild(exportButton);
  };
  
  

  
  // In your component render method or JSX
 

 
 

  return (
    <div className="admin-container">
       <div className="vote-container" id="">
        <header className="header">
          <div className="header-left">
            <Link to="/admin">
              <img src={LICETLogo} alt="LICET Logo" className="logo" />
            </Link>
          </div>
          <div className="header-center">
            <h1 className="election-title" style={{"font-size": "35px", "margin-right": "-292px"}}>LICET ALUMNI COUNCIL ELECTION</h1>
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
        <button className="view-candidates-button" onClick={() => vc()}>
          Show Candidates
        </button>
        </center>
        <br />

{/* <button  id = "buttonc" className="export-candidates-button">EXPORT</button> */}
 
<center>

<div id="table-container"></div>
</center>
</div>
</div>
  );
};

export default CandidateUpload;

 {/* {  <div className="content">
          <h2>Candidate Details</h2>
          <div className="card">
            {isFormVisible ? (
              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nominee Name:</label>
                    <input
                      type="text"
                      value={nomineeName}
                      onChange={handleNomineeNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nominee Date of Birth:</label>
                    <DatePicker
                      selected={nomineeDOB}
                      onChange={handleNomineeDOBChange}
                      dateFormat="dd-MM-yyyy"
                      className="date-picker"
                      placeholderText="Select Date"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nominee Class Batch:</label>
                    <select
                      value={nomineeBatch}
                      onChange={handleNomineeBatchChange}
                      className="dropdown"
                    >
                      <option value="">Select Batch</option>
                      <option value="2010-2014">2010-2014</option>
                      <option value="2011-2015">2011-2015</option>
                      <option value="2012-2016">2012-2016</option>
                      <option value="2013-2017">2013-2017</option>
                      <option value="2014-2018">2014-2018</option>
                      <option value="2015-2019">2015-2019</option>
                      <option value="2016-2020">2016-2020</option>
                      <option value="2017-2021">2017-2021</option>
                      <option value="2018-2022">2018-2022</option>
                      <option value="2019-2023">2019-2023</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Nominee Position:</label>
                    <select
                      value={optPosition}
                      onChange={handleOptPositionChange}
                      className="dropdown"
                    >
                      <option value="">Select Position</option>
                      <option value="president">President</option>
                      <option value="vice-president">Vice President</option>
                      <option value="secretary">Secretary</option>
                      <option value="treasurer">Treasurer</option>
                      <option value="executives">Executives</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group photo-upload">
                    <label>Nominee Photo:</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleNomineePhotoChange}
                    />
                    {nomineePhoto && <span>{nomineePhoto.name}</span>}
                  </div>
                </div>
              </form>
            ) : (
              <button
                className="add-candidate-button"
                onClick={handleAddCandidate}
              >
                Add Candidate
              </button>
            )}
            {isFormVisible && (
              <>
                <button
                  className="create-button"
                  onClick={handleCandidateCreate}
                >
                  Create
                </button>
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
              </>
            )} 
           <center>
            <button
              className="view-candidates-button"
              onClick={() =>vc()}
            >
              View Candidates
            </button>
            </center>
           </div>
        </div>
      </div> 
    </div>*/} 

 {/* // const [nomineeName, setNomineeName] = useState("");
  // const [nomineeDOB, setNomineeDOB] = useState(null);
  // const [nomineeBatch, setNomineeBatch] = useState("");
  // const [nomineePhoto, setNomineePhoto] = useState(null);
  // const [optPosition, setOptPosition] = useState("");
  // const [isFormVisible, setIsFormVisible] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [candidates, setCandidates] = useState([]);

  // const handleNomineeNameChange = (event) => {
  //   setNomineeName(event.target.value);
  // };

  // const handleNomineeDOBChange = (date) => {
  //   setNomineeDOB(date);
  // };

  // const handleNomineeBatchChange = (event) => {
  //   setNomineeBatch(event.target.value);
  // };

  // const handleNomineePhotoChange = (event) => {
  //   const file = event.target.files[0];
  //   setNomineePhoto(file);
  // };

  // const handleOptPositionChange = (event) => {
  //   setOptPosition(event.target.value);
  // };


  // const handleCandidateCreate = () => {
  //   if (
  //     nomineeName === "" ||
  //     nomineeDOB === null ||
  //     nomineeBatch === "" ||
  //     nomineePhoto === null ||
  //     optPosition === ""
  //   ) {
  //     setErrorMessage("Please fill in all the fields.");
  //   } else {
  //     const formattedBatch = formatBatch(nomineeBatch);
  //     if (formattedBatch === null) {
  //       setErrorMessage(
  //         "Invalid Batch. Please enter a batch between 2010-2014 and 2019-2023."
  //       );
  //     } else {
  //       // Create a new candidate object
  //       const newCandidate = {
  //         nomineeName,
  //         nomineeDOB,
  //         nomineeBatch: formattedBatch,
  //         nomineePhoto,
  //         optPosition,
  //       };

  //       // Add the new candidate to the candidates list
  //       setCandidates([...candidates, newCandidate]);

  //       // Clear the form fields
  //       setNomineeName("");
  //       setNomineeDOB(null);
  //       setNomineeBatch("");
  //       setNomineePhoto(null);
  //       setOptPosition("");

  //       // Display success message
  //       console.log("Candidate created successfully.");
  //       setErrorMessage("");
  //     }
  //   }
  // };

  // const handleAddCandidate = () => {
  //   setIsFormVisible(true);
  // };

  // const formatBatch = (batch) => {
  //   const batchRegex = /^(201[0-4]|2019|202[0-3])-20(1[0-4]|2019|202[0-3])$/;
  //   if (batch.match(batchRegex)) {
  //     return batch;
  //   }
  //   return null;
  // }; */}