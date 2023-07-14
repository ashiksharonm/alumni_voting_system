import React ,{ useState, useContext }from "react";
import { Link, useNavigate } from "react-router-dom";
import CanvasJSReact from "@canvasjs/react-charts";
import "react-datepicker/dist/react-datepicker.css";
import LICETLogo from "../licet-logo.png";
import "./CandidateUpload.css";
import { AuthContext } from "../../auth/Authcontext";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";


const Results = () => {
  const navigate = useNavigate();
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const { currentUsers , logout} = useContext(AuthContext);

  const presidentArray = currentUsers.data.President;
 const vpresidentArray = currentUsers.data.VicePresident;
  const treasurerArray = currentUsers.data.Treasurer;
  const execrArray = currentUsers.data.Executive;
  const JsArray = currentUsers.data.JointSecretary;

  const [exportingPDF, setExportingPDF] = useState(false);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const electionResults = [
    {
      title: "President",
      data: presidentArray.map((candidate, index) => ({
        label: `Candidate ${String.fromCharCode(65 + index)}`,
        y: candidate.votecnt,
        color: getRandomColor(),
      })),
    },
    {
      title: "Vice President",
      data: vpresidentArray.map((candidate, index) => ({
        label: `Candidate ${String.fromCharCode(65 + index)}`,
        y: candidate.votecnt,
        color: getRandomColor(),
      })),
    },
    {
      title: "Joint Secretary",
      data: JsArray.map((candidate, index) => ({
        label: `Candidate ${String.fromCharCode(65 + index)}`,
        y: candidate.votecnt,
        color: getRandomColor(),
      })),
    },
    {
      title: "Treasurer",
      data: treasurerArray.map((candidate, index) => ({
        label: `Candidate ${String.fromCharCode(65 + index)}`,
        y: candidate.votecnt,
        color: getRandomColor(),
      })),
    },
    {
      title: "Executives",
      data: execrArray.map((candidate, index) => ({
        label: `Candidate ${String.fromCharCode(65 + index)}`,
        y: candidate.votecnt,
        color: getRandomColor(),
      })),
    },
  ];

  const handleLogout = async () => {
    await logout();
    navigate("/admin-login");
  };

  
  const handleExportPDF = () => {
    setExportingPDF(true);
  
    const doc = new jsPDF();
    const element = document.getElementById("charts-container");
  
    // Calculate the height and width of the PDF page
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
  
    // Create a canvas element to convert the HTML to an image
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
  
    // Use html2canvas to capture the HTML element as an image
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "PNG", 0, 0, width, height);
      doc.save("charts.pdf");
  
      setExportingPDF(false);
    });
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
        <br/><br/>
        <center>
        <button
          className="export-button"
          onClick={handleExportPDF}
          disabled={exportingPDF}
        >
          Export to PDF
        </button></center>
      </div>
    </div>
  );
};

export default Results;
