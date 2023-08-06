import React, { useContext, useState, useEffect } from "react";
import "./Vote.css";
import LICETLogo from "../alumni-logo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/Authcontext";

const VOTED_STATUS_KEY = "votedStatus";

const Vote = () => {
  const {
    getCandidatesvtcnt,
    logout,
    currentUser,
    currentUsers,
    currentCandidates,
    setCandidates,
    setusercandivote,
    setUservtcnt,
    fetchcandi,
  } = useContext(AuthContext);

  const [nominees, setNominees] = useState(currentCandidates);
  const history = useNavigate();
  const [selectedNominees, setSelectedNominees] = useState({});
  const [hasVoted, setHasVoted] = useState(false);
  const [isVoting, setIsVoting] = useState(false); // Track voting status

  const initialVotedStatus =
    JSON.parse(localStorage.getItem(VOTED_STATUS_KEY)) || {};

  // Merge the initial voted status with the nominees data
  const initialNominees = {
    President: nominees["President"].map((nominee) => ({
      ...nominee,
      voted: initialVotedStatus[nominee.id] || false,
    })),
    "VicePresident": nominees["VicePresident"].map((nominee) => ({
      ...nominee,
      voted: initialVotedStatus[nominee.id] || false,
    })),
    // Treasurer: nominees["Treasurer"].map((nominee) => ({
    //   ...nominee,
    //   voted: initialVotedStatus[nominee.id] || false,
    // })),
    "JointSecretary": nominees["JointSecretary"].map((nominee) => ({
      ...nominee,
      voted: initialVotedStatus[nominee.id] || false,
    })),
    Executive: nominees["Executive"].map((nominee) => ({
      ...nominee,
      voted: initialVotedStatus[nominee.id] || false,
    })),
  };

  const reno = currentUser?.data?.regno;

  const [bio] = useState({
    id: 0,
    regno: "",
  });

  const logcheck = () => {
    if (currentUser?.data?.votecnt === 4) {
      alert("You have already voted for all the elections!");
      history("/"); // Redirect to login page
    }
  };

  useEffect(() => {
    logcheck();
  }, []);

  const vsubmit = async (input) => {
    try {
      setIsVoting(true); // Start voting
      await setusercandivote(input);
      const updatedNominees = { ...nominees };
      for (const position in updatedNominees) {
        updatedNominees[position] = updatedNominees[position].map((nominee) => {
          if (nominee.id === input.id) {
            return { ...nominee, voted: true };
          }
          return nominee;
        });
      }
      setNominees(updatedNominees);

      // Check if user has voted for all elections
      const allVoted = Object.keys(updatedNominees).every((position) =>
        updatedNominees[position].every((nominee) => nominee.voted)
      );
      setHasVoted(allVoted);

      const updatedVotedStatus = { ...initialVotedStatus };
      updatedVotedStatus[input.id] = true;
      localStorage.setItem(
        VOTED_STATUS_KEY,
        JSON.stringify(updatedVotedStatus)
      );
    } catch (err) {
      alert("Retry User");
      console.log(err);
    } finally {
      setIsVoting(false); // Voting completed
    }
  };

  const handleVote = async (id, position) => {
    if (
      window.confirm(
        `Are you sure you want to vote for ${
          nominees[position].find((nominee) => nominee.id === id).name
        } as ${position}?`
      )
    ) {
      setSelectedNominees((prevSelectedNominees) => ({
        ...prevSelectedNominees,
        [position]: id,
      }));

      bio.id = id;
      bio.regno = reno;
      const updatedVotedStatus = { ...initialVotedStatus };

      if (updatedVotedStatus[id] !== true) await vsubmit(bio);
      else alert(`You Already Voted for the ${position}`);
    }
  };

  const handleLogout = async () => {
    if (currentUser?.data?.votecnt === 4) {
      const confirmed = window.confirm(
        "You have voted for all the elections! Please logout!!"
      );
      if (confirmed) {
        await logout();
        history("/"); // Redirect to login page
      }
    } else {
      alert("You must vote for all elections before logging out.");
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      return (event.returnValue = "Are you sure you want to leave?");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="vote-container">
      <div className="header">
        <div className="header-left">
          <img src={LICETLogo} alt="LICET Logo" style={{"height" : "150px" ,  "width": "100px", "margin-left":"10px"}} className="logo" />
        </div>
        <div className="header-center">
          <h2 className="election-title" style={{"font-size": "35px", "margin-left":"40px"}}>LICET ALUMNI COUNCIL ELECTION</h2>
        </div>
        <div className="header-right">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <br />
      {/* President Section */}
      <div className="election-section">
        <h2>President</h2>
        <div className="nominee-list">
          {initialNominees["President"].map((nominee) => (
            <div
              className={`nominee-card ${nominee.voted ? "visible" : ""}`}
              key={nominee.id}
            >
              <div className="nominee-image">
                <img src={nominee.photo} alt={nominee.name} />
              </div>
              <div className="nominee-details">
                <h3>{nominee.name}</h3>
                <p>{nominee.batch}</p>
                <br />
              </div>
              {!nominee.voted ? (
                <button
                  onClick={() => handleVote(nominee.id, "President")}
                  disabled={!!selectedNominees["President"] || isVoting} // Disable button while voting
                >
                  {isVoting ? "Voting..." : "Vote"}
                </button>
              ) : (
                <p className="voted">Voted</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
      {/* VicePresident Section */}
      <div className="election-section">
        <h2>VicePresident</h2>
        <div className="nominee-list">
          {initialNominees["VicePresident"].map((nominee) => (
            <div
              className={`nominee-card ${nominee.voted ? "visible" : ""}`}
              key={nominee.id}
            >
              <div className="nominee-image">
                <img src={nominee.photo} alt={nominee.name} />
              </div>
              <div className="nominee-details">
                <h3>{nominee.name}</h3>
                <p>{nominee.batch}</p>
                <br />
              </div>
              {!nominee.voted ? (
                <button
                  onClick={() => handleVote(nominee.id, "VicePresident")}
                  disabled={!!selectedNominees["VicePresident"] || isVoting} // Disable button while voting
                >
                  {isVoting ? "Voting..." : "Vote"}
                </button>
              ) : (
                <p className="voted">Voted</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* Treasurer Section
      <div className="election-section">
        <h2>Treasurer</h2>
        <div className="nominee-list">
          {initialNominees["Treasurer"].map((nominee) => (
            <div
              className={`nominee-card ${nominee.voted ? "visible" : ""}`}
              key={nominee.id}
            >
              <div className="nominee-image">
                <img src={nominee.photo} alt={nominee.name} />
              </div>
              <div className="nominee-details">
                <h3>{nominee.name}</h3>
                <p>{nominee.batch}</p>
                <br />
              </div>
              {!nominee.voted ? (
                <button
                  onClick={() => handleVote(nominee.id, "Treasurer")}
                  disabled={!!selectedNominees["Treasurer"] || isVoting} // Disable button while voting
                >
                  {isVoting ? "Voting..." : "Vote"}
                </button>
              ) : (
                <p className="voted">Voted</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br /> */}

      {/* JointSecretary Section */}
      <div className="election-section">
        <h2>JointSecretary</h2>
        <div className="nominee-list">
          {initialNominees["JointSecretary"].map((nominee) => (
            <div
              className={`nominee-card ${nominee.voted ? "visible" : ""}`}
              key={nominee.id}
            >
              <div className="nominee-image">
                <img src={nominee.photo} alt={nominee.name} />
              </div>
              <div className="nominee-details">
                <h3>{nominee.name}</h3>
                <p>{nominee.batch}</p>
                <br />
              </div>
              {!nominee.voted ? (
                <button
                  onClick={() => handleVote(nominee.id, "JointSecretary")}
                  disabled={!!selectedNominees["JointSecretary"] || isVoting} // Disable button while voting
                >
                  {isVoting ? "Voting..." : "Vote"}
                </button>
              ) : (
                <p className="voted">Voted</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />

      {/* Executives Section */}
      <div className="election-section">
        <h2>Executive</h2>
        <div className="nominee-list">
          {initialNominees["Executive"].map((nominee) => (
            <div
              className={`nominee-card ${nominee.voted ? "visible" : ""}`}
              key={nominee.id}
            >
              <div className="nominee-image">
                <img src={nominee.photo} alt={nominee.name} />
              </div>
              <div className="nominee-details">
                <h3>{nominee.name}</h3>
                <p>{nominee.batch}</p>
                <br />
              </div>
              {!nominee.voted ? (
                <button
                  onClick={() => handleVote(nominee.id, nominee.position)}
                  disabled={selectedNominees[nominee.position] || isVoting} // Disable button while voting
                  className={
                    selectedNominees[nominee.position] ? "disabled" : ""
                  }
                >
                  {isVoting ? "Voting..." : "Vote"}
                </button>
              ) : (
                <p className="voted">Voted</p>
              )}
            </div>
          ))}
        </div>
        <div className="header-right">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Vote;
