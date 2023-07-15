import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Results from "./Results";
import LICETLogo from "../alumni-logo.png";
import "./adminHome.css";
import { AuthContext } from "../../auth/Authcontext";

const AdminHome = () => {
  const Navigate = useNavigate();
  const { currentUsers, logout } = useContext(AuthContext);

  const [electionStatus, setElectionStatus] = useState({
    president: false,
    vicePresident: false,
    secretary: false,
    treasurer: false,
    executives: false,
  });
  const handleLogout = async () => {
    Navigate("/admin-login");
    await logout();
  };

  const presidentArray = currentUsers.data.President ;
  const vpresidentArray = currentUsers.data.VicePresident ;
  const treasurerArray = currentUsers.data.Treasurer  ;
  const execrArray = currentUsers.data.Executive ;
  const JsArray = currentUsers.data.JointSecretary ;

  const presidentLength = presidentArray.length ;
  const vpresidentLength = vpresidentArray.length ;
  const tLength = treasurerArray.length ;
  const exeLength = execrArray.length ;
  const JsLength = JsArray.length ;

  let president_Totalvotes = 0;
  for (let index = 0; index < presidentLength; index++) {
    president_Totalvotes =
      president_Totalvotes + currentUsers.data.President[index].votecnt;
  }

  let Vicepresident_Totalvotes = 0;
  for (let index = 0; index < vpresidentLength; index++) {
    Vicepresident_Totalvotes =
      Vicepresident_Totalvotes + currentUsers.data.VicePresident[index].votecnt;
  }
  let treasurer_Totalvotes = 0;
  for (let index = 0; index < tLength; index++) {
    treasurer_Totalvotes =
      treasurer_Totalvotes + currentUsers.data.Treasurer[index].votecnt;
  }
  let exec_Totalvotes = 0;
  for (let index = 0; index < exeLength; index++) {
    exec_Totalvotes =
      exec_Totalvotes + currentUsers.data.Executive[index].votecnt;
  }
  let JointSecretary_Totalvotes = 0;
  for (let index = 0; index < JsLength; index++) {
    JointSecretary_Totalvotes =
      JointSecretary_Totalvotes +
      currentUsers.data.JointSecretary[index].votecnt;
  }

  //console.log(president_Totalvotes);
  // console.log("President Array Length:", presidentLength);
  // console.log("Vice President Array Length:", vpresidentLength);
  // console.log("Treasure President Array Length:", tLength);
  // console.log("Executive Array Length:", exeLength);
  // console.log("Jointsecreatary Array Length:", JsLength);

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
            <Link to="/admin">
              <img src={LICETLogo} alt="LICET Logo" className="logo" style={{"height" : "120px" ,  "width": "90px", "margin-left":"10px"}}/>
            </Link>
          </div>
          <div className="header-center">
            <h1
              className="election-title"
              style={{ "font-size": "35px", "margin-right": "-220px", "color" : "#d3b25f" }}
            >
              LICET ALUMNI ASSOCIATION ELECTION
            </h1>
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
              <p>Number of Candidates: {presidentLength}</p>
              <p>Total Votes: {president_Totalvotes}</p>
              <br />
              {/* Display any other relevant information */}
            </div>
            <div className="election-status-card">
              <h2>Vice President</h2>
              <br />
              <p>Number of Candidates: {vpresidentLength}</p>
              <p>Total Votes: {Vicepresident_Totalvotes}</p>
              <br />
              {/* Display any other relevant information */}
            </div>
            <div className="election-status-card">
              <h2>Joint Secretary</h2>
              <br />
              <p>Number of Candidates: {JsLength}</p>
              <p>Total Votes: {JointSecretary_Totalvotes}</p>
              <br />
              {/* Display any other relevant information */}
            </div>
            <div className="election-status-card">
              <h2>Treasurer</h2>
              <br />
              <p>Number of Candidates: {tLength}</p>
              <p>Total Votes: {treasurer_Totalvotes}</p>
              <br />
              {/* Display any other relevant information */}
            </div>
            <div className="election-status-card">
              <h2>Executives</h2>
              <br />
              <p>Number of Candidates: {exeLength}</p>
              <p>Total Votes: {exec_Totalvotes}</p>
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