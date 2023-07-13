import React, { useContext,useState,useEffect } from "react";
import "./Vote.css";
import axios from "axios";
import LICETLogo from "../licet-logo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/Authcontext";

const Vote = () => {

  const { getCandidatesvtcnt, logout, currentUser, currentUsers,currentCandidates,setCandidates,setusercandivote, setUservtcnt ,fetchcandi} = useContext(AuthContext);

  const [nominees, setNominees] = useState(currentCandidates);
  const history = useNavigate();
  const [selectedNominees, setSelectedNominees] = useState({});
  const [hasVoted, setHasVoted] = useState(false);
  let ucount = 0;


  const reno= currentUser?.data?.regno;
   
  const [bio] = useState({
    id : 0 ,
    regno: ""
  });
 
  // const input  = currentUser?.data?.regno;
  //const userid =  currentUser?.data?._id;
 //console.log(bio);
    /* const candsubmit = async (uvc) => {
      try{
          
           //await setUservtcnt(uvc); 
           await getCandidatesvtcnt(uvc); 
           //await logout();
          // if( userid != null ) { setCandidates(null); }
          // history('/');
        }
    catch(err)
    {
              alert("Retry")
              console.log(err);
          }
    
      };

      const usrsubmit = async (inpu) => {
        try{
            
             await setUservtcnt(inpu); 
             //await getCandidatesvtcnt(uvc); 
             //await logout();
            // if( userid != null ) { setCandidates(null); }
            // history('/');
          }
      catch(err)
      {
                alert("Retry User")
                console.log(err);
            }
      
        }; */
        const vsubmit = async (input) => {
          try{
              
               await setusercandivote(input); 
               //await getCandidatesvtcnt(uvc); 
               //await logout();
              // if( userid != null ) { setCandidates(null); }
              // history('/');
            }
        catch(err)
        {
                  alert("Retry User")
                  console.log(err);
              }
        
          };


  const handleVote = (id, position) => {
    if (
      window.confirm(
        `Are you sure you want to vote for ${
          nominees[position].find((nominee) => nominee.id === id).name
        } as ${position}?`
      )
    ) {
      console.log(id);
      setSelectedNominees((prevSelectedNominees) => ({
        ...prevSelectedNominees,
        [position]: [...(prevSelectedNominees[position] || []), id],
      }));

      // Check if user has voted for all elections
      const allVoted = nominees[position].every(
        (nominee) => nominee.voted
      );
      setHasVoted(allVoted);

      bio.id = id;
      bio.regno = reno;
      vsubmit(bio);
    }
   
    // console.log(bio);
   // const input = {_id};   
   
  //  usrsubmit(bio);
  //  candsubmit(uvc);

  };

  
    async function handleLogout () {
    if (currentUser?.data?.votecnt === 14) {
      // Implement your logout logic here
      // For example, redirect the user to the logout page or clear the session/local storage
      // and then navigate them to the login page.
    
      await logout();

      //alert('"User has been logged out !!')
      history('/');
      console.log("Logout");
    } else {
      // Display a message to the user indicating they cannot log out until they have voted for all elections
      alert("You must vote for all elections before logging out.");
    }
  };
  return (
    <div className="vote-container">
      <div className="header">
        <div className="header-left">
          <img src={LICETLogo} alt="LICET Logo" className="logo" />
        </div>
        <div className="header-center">
          <h1 className="election-title">LICET ALUMNI COUNCIL ELECTION</h1>
        </div>
        <div className="header-right">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

     {/* President Section */}
      <div className="election-section">
        <h2>President</h2>
        <div className="nominee-list">
         {  nominees["President"].map((nominee) => (
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
                    onClick={() => handleVote(nominee.id,"President")}
                    disabled={!!selectedNominees["President"]}
                  >
                    Vote
                  </button>
                ) : (
                  <p>Voted</p>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Vice President Section */}
      <div className="election-section">
        <h2>Vice President</h2>
        <div className="nominee-list">
        {nominees['Vice President']
            .map((nominee) => (
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
                    onClick={() => handleVote(nominee.id, 'Vice President')}
                    disabled={!!selectedNominees['Vice President']}
                  >
                    Vote
                  </button>
                ) : (
                  <p>Voted</p>
                )}
              </div>
            ))}
        </div>
      </div>

       {/* Treasurer Section */}
      <div className="election-section">
        <h2>Treasurer</h2>
        <div className="nominee-list">
        {nominees['Treasurer']
            .map((nominee) => (
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
                    onClick={() => handleVote(nominee.id, 'Treasurer')}
                    disabled={!!selectedNominees['Treasurer']}
                  >
                    Vote
                  </button>
                ) : (
                  <p>Voted</p>
                )}
              </div>
            ))}
        </div>
      </div>

       {/* Joint Secretary Section */}
      <div className="election-section">
        <h2>Joint Secretary</h2>
        <div className="nominee-list">
        {nominees['Joint Secretary']
            .map((nominee) => (
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
                    onClick={() => handleVote(nominee.id, 'Joint Secretary')}
                    disabled={!!selectedNominees['Joint Secretary']}
                  >
                    Vote
                  </button>
                ) : (
                  <p>Voted</p>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Executives Section */}
      <div className="election-section">
        <h2>Executive</h2>
        <div className="nominee-list">
        {nominees['Executive']
            .map((nominee) => (
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
                    disabled={
                      (selectedNominees[nominee.position] || []).length >= 10
                    }
                  >
                    Vote
                  </button>
                ) : (
                  <p>Voted</p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );

};


export default Vote;

