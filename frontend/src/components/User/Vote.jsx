import React, { useContext, useState, useEffect } from "react";
import "./Vote.css";
import LICETLogo from "../alumni-logo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/Authcontext";

const VOTED_STATUS_KEY = "votedStatus";

const Vote = () => {
  const {
    logout,              // getCandidatesvtcnt,  currentUsers, setUservtcnt,    setCandidates,  setUservtcnt,  fetchcandi,
    currentUser,
    currentCandidates,
    setusercandivote
  } = useContext(AuthContext);

  const [nominees, setNominees] = useState(currentCandidates);
  const history = useNavigate();
  const [selectedNominees, setSelectedNominees] = useState({});
  const [hasVoted, setHasVoted] = useState(0);
  const [Votecard, setVoteCard] = useState(false);
  const [isVoting, setIsVoting] = useState(false); // Track voting status

  const initialVotedStatus =
    JSON.parse(localStorage.getItem(VOTED_STATUS_KEY)) || {};

  // Merge the initial voted status with the nominees data
  const initialNominees = {
    President: nominees["President"].map((nominee) => ({
      ...nominee,
      voted: initialVotedStatus[nominee.id] || 0,
      position : "President",
    })),
    "VicePresident": nominees["VicePresident"].map((nominee) => ({
      ...nominee,
      voted: initialVotedStatus[nominee.id] || 0,
    })),
    // Treasurer: nominees["Treasurer"].map((nominee) => ({
    //   ...nominee,
    //   voted: initialVotedStatus[nominee.id] || false,
    // })),
    "JointSecretary": nominees["JointSecretary"].map((nominee) => ({
      ...nominee,
      voted: initialVotedStatus[nominee.id] || 0,
    })),
    Executive: nominees["Executive"].map((nominee) => ({
      ...nominee,
      voted: initialVotedStatus[nominee.id] || 0,
    })),
  };

  const reno = currentUser?.data?.regno;

  const [bio] = useState({
    id: 0,
    regno: "",
  });

  const logcheck = async() => {
    if (currentUser?.data?.votecnt === 13) {
      alert("Thank you for voting!!");
      // Redirect to login page
      await logout();
      history("/"); 
      localStorage.setItem(VOTED_STATUS_KEY,null);
    }
  };


  useEffect(() => {
    setTimeout(() => {
     logcheck()
    }, 1000);
  });


  const vsubmit = async (input) => {
    try {
      setIsVoting(true); // Start voting
      await setusercandivote(input);
      let pos = "";
      const updatedNominees = { ...nominees };
      for (const position in updatedNominees) {
        updatedNominees[position] = updatedNominees[position].map((nominee) => {
          if (nominee.id === input.id) {
            pos = nominee.position;
            return { ...nominee, voted: 1 };
          }
            return  nominee;
        });
      }
      setNominees(updatedNominees);
      
      const updatedVotedStatus = { ...initialVotedStatus };
      console.log(updatedVotedStatus);
  
 if ( pos != "Executive")
{      updatedNominees[pos] = updatedNominees[pos].map((nominee) => {
        if (nominee.id != input.id) {
          updatedVotedStatus[nominee.id] = -1 ;
        }
          return nominee;
      });
}
      updatedVotedStatus[input.id] = 1;
 
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

  const maxVotesForExecutive = 10; // Maximum votes allowed for the "Executive" section
  const [votesForExecutive, setVotesForExecutive] = useState(0);

  useEffect(() => {
    // Count the initial votes for the "Executive" section
    const initialVotesCount = initialNominees["Executive"].reduce(
      (count, nominee) => (nominee.voted ? count + 1 : count),
      0
    );
    setVotesForExecutive(initialVotesCount);
  }, [initialNominees]);

// ====================== Executive Section ======================================

  const handleVotee = async (id, position) => {
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

      setVoteCard(true);

      bio.id = id;
      bio.regno = reno;
      const updatedVotedStatus = { ...initialVotedStatus };

      await vsubmit(bio);

      // Update votes count for the "Executive" section
      setVotesForExecutive((prevVotes) => prevVotes + 1);
    }
  };

// ====================== Other Section ======================================

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

      //setVoteCard(true);
      bio.id = id;
      bio.regno = reno;
      const updatedVotedStatus = { ...initialVotedStatus };

      if (updatedVotedStatus[id] !== 1) 
         await vsubmit(bio);
       else 
       alert(`You Already Voted for the ${position}`);
    }
  };


  
  

  const handleLogout = async () => {
    if (currentUser?.data?.votecnt === 13) {
      const confirmed = window.confirm(
        "You have voted for all the elections! Please logout!!"
      );
      if (confirmed) {
        await logout();
        history("/"); // Redirect to login page
        localStorage.setItem(VOTED_STATUS_KEY,null);
      }
    } else {
      alert("You must vote for all elections before logging out.");
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      return (event.returnValue = "Are you sure you want to leave?");
    };                                                                     //Deletion of data in Accidental  touch

    window.addEventListener("beforeunload", handleBeforeUnload);

    return async () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
        await logout();
        history('/');
      localStorage.setItem(VOTED_STATUS_KEY,null);
    };
  }, []);

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
              { (nominee.voted  === 0 || nominee.voted  === -1 ) ? (
                <button
                  onClick={() => handleVote(nominee.id, "President")}
                  disabled={ nominee.voted  === -1  ? true : false || isVoting } // Disable button while voting
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
        <h2>Vice President</h2>
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
              {(nominee.voted  === 0 || nominee.voted  === -1 ) ? (
                <button
                  onClick={() => handleVote(nominee.id, "VicePresident")}
                  disabled={ nominee.voted  === -1  ? true : false || isVoting } // Disable button while voting
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
              {(nominee.voted  === 0 || nominee.voted  === -1 ) ? (
                <button
                  onClick={() => handleVote(nominee.id, "Treasurer")}
                  disabled={ nominee.voted  === -1  ? true : false || isVoting } // Disable button while voting
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
        <h2>Joint Secretary</h2>
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
              {(nominee.voted  === 0 || nominee.voted  === -1 ) ? (
                <button
                  onClick={() => handleVote(nominee.id, "JointSecretary")}
                  disabled={ nominee.voted  === -1  ? true : false || isVoting }  // Disable button while voting
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
                onClick={() => handleVotee(nominee.id, nominee.position)}
                disabled={
                  votesForExecutive >= maxVotesForExecutive || isVoting
                } // Disable button if max votes are reached or while voting
                className={selectedNominees[nominee.position] ? "disabled" : ""}
              >
                {isVoting ? "Voting..." : "Vote"}
              </button>
            ) : (
              <p className="voted">Voted</p>
            )}
          </div>
        ))}
      </div>
      <br/> <br/>
        <br/> <br/>
        {/* <div className="footer-right">
          <button className="logout-button1" onClick={handleLogout}>
            Logout
          </button>
        </div> */}
      </div>
    </div>
   
  );
};

export default Vote;