import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import LICETLogo from "../licet-logo.png";
import dhoniImage from "../dhoni.jpg";
import kohliImage from "../kohli.png";
import cand1 from "../002.jpg";
import cand2 from "../antony.jpg";
import "./LoginPage.css";
import { AuthContext } from "../../auth/Authcontext";

const LoginPage = () => {

  const history = useNavigate();
  const {login, fetchcandi , currentUser, logout} = useContext(AuthContext);

    const [input, setInputs] = useState({
      regno: "",
      dob: "",
    });

    const [isInputValid, setInputValid] = useState(false);
    const [err, setError] = useState(null);



    const initialNominees = [
      {
        id: 1,
        name: "John Doe",
      regno:"L311112104009",
      dob:"5-11-1996",
      batch:"2012-2016",
      position: "President",
      photo :cand1,
      votecnt: 0,
      voted: false,
      },
      {
        id: 2,
        name: "Jane Smith",
      regno:"311111104015",
      dob:"16-03-1994",
      batch:"2011-2015",
      position: "Vice President",
      photo : cand2,
      votecnt: 0,
      voted: false,
      },
      {
         id: 3,
         name: "James",
      regno:"311120104010",
      dob:"16-03-2002",
      batch:"2020-2024",
      position: "Vice President",
      photo : dhoniImage,
      votecnt: 0,
      voted: false,
      },
      {
        id: 4,
        name: "Jones",
      regno:"311112104025",
      dob:"30-06-2003",
      batch:"2012-2016",
      position: "Executive",
      photo : kohliImage,
      votecnt: 0,
      voted: false,
      },
      {
        
        id: 5,
        name: "Raina",
      regno:"311120104054",
      dob:"25-06-1994",
      batch:"2020-2024",
      position: "Treasurer",
      photo : dhoniImage,
      votecnt: 0,
      voted: false,
      },
      {
        id: 6,
        name: "Farukh",
      regno:"311118104058",
      dob:"25-06-2001",
      batch:"2018-2022",
      position: "Treasurer",
      photo : kohliImage,
      votecnt: 0,
      voted: false,
      },
      {
        id: 7,
        name: "Sharon",
      regno:"311113104028",
      dob:"30-06-2003",
      batch:"2013-2017",
      position: "Joint Secretary",
      photo : dhoniImage,
      votecnt: 0,
      voted: false,
      },
      {
        id: 8,
        name: "Rasesh",
      regno:"311115104005",
      dob:"10-08-1999",
      batch:"2015-2019",
      position: "Executive",
      photo : kohliImage,
      votecnt: 0,
      voted: false,
      },
      {
        id: 9,
        name: "Ramesh",
      regno:"311111104018",
      dob:"18-04-1998",
      batch:"2011-2015",
      position: "Executive",
      photo : dhoniImage,
      votecnt: 0,
      voted: false,
      },
      {
        id: 10,
        name: "Rahul",
      regno:"311116104052",
      dob:"26-03-2000",
      batch:"2016-2020",
      position: "Joint Secretary",
      photo : kohliImage,
      votecnt: 0,
      voted: false,
      },
      {
        id: 11,
        name: "Danush",
      regno:"311117104059",
      dob:"15-07-2001",
      batch:"2017-2021",
      position: "Executive",
      photo : dhoniImage,
      votecnt: 0,
      voted: false,
      },
      {
        id: 12,
        name: "Senthil",
      regno:"311114104068",
      dob:"31-12-2000",
      batch:"2014-2018",
      position: "Executive",
      photo : kohliImage,
      votecnt: 0,
      voted: false,
      },
      {
        id: 13,
        name: "Faisal",
      regno:"311119104008",
      dob:"12-05-2000",
      batch:"2019-2021",
      position: "Executive",
      photo : dhoniImage,
      votecnt: 0,
      voted: false,
      },
      {
        id: 14,
        name: "Gautam",
        regno: "31111104026",
        dob: "15-03-2001",
        batch: "2011-2015",
        position: "Executive",
        photo : kohliImage,
        votecnt: 0,
        voted: false,
      },
      {
        id: 15,
        name: "Harish",
        regno: "311112104027",
        dob: "05-11-2000",
        batch: "2012-2016",
        position: "Executive",
        photo : dhoniImage,
        votecnt: 0,
        voted: false,
      },
      {
        id: 16,
        name: "Sarah",
        regno: "311113104028",
        dob: "20-09-1999",
        batch: "2013-2017",
        position: "Executive",
        photo : kohliImage,
        votecnt: 0,
        voted: false,
      },
      {
        id: 17,
        name: "Patrick",
        regno: "311114104029",
        dob: "10-12-1998",
        batch: "2014-2018",
        position: "Executive",
        photo : dhoniImage,
        votecnt: 0,
        voted: false,
      },
      {
        id: 18,
        name: "Emily",
        regno: "311115104030",
        dob: "12-08-1997",
        batch: "2015-2019",
        position: "Executive",
        photo : kohliImage,
        votecnt: 0,
        voted: false,
      },
      {
        id: 19,
        name: "Daniel",
        regno: "311116104031",
        dob: "03-04-1996",
        batch: "2016-2020",
        position: "Executive",
        photo : dhoniImage,
        votecnt: 0,
        voted: false,
      },
      {
        id: 20,
        name: "Olivia",
        regno: "311117104032",
        dob: "25-11-1995",
        batch: "2017-2021",
        position: "Executive",
        photo : kohliImage,
        votecnt: 0,
        voted: false,
      },
      {
        id: 21,
        name: "Benjamin",
        regno: "311118104033",
        dob: "09-07-1994",
        batch: "2018-2022",
        position: "Executive",
        photo : dhoniImage,
        votecnt: 0,
        voted: false,
      },
      {
        id: 22,
        name: "Sophia",
        regno: "311119104034",
        dob: "18-02-1993",
        batch: "2019-2023",
        position: "Executive",
        photo : kohliImage,
        votecnt: 0,
        voted: false,
      },
      {id: 23,
        name: "Johnny",
        regno: "311111104032",
        dob: "01-01-1995",
        batch: "2011-2015",
        position: "President",
        photo : dhoniImage,
        votecnt: 0,
        voted: false,
        },
  
        {id: 24,
        name: "Emma",
        regno: "311115104032",
        dob: "02-02-1996",
        batch: "2015-2019",
        position: "Vice President",
        photo : kohliImage,
        votecnt: 0,
        voted: false,
        },
        {id: 25,
        name: "Mike",
        regno: "311119104032",
        dob: "03-03-1997",
        batch: "2018-2022",
        position: "Joint Secretary",
        photo : dhoniImage,
        votecnt: 0,
        voted: false,
        },
        {id: 26,
        name: "Sofia",
        regno: "311113104032",
        dob: "04-04-1998",
        batch: "2013-2017",
        position: "Treasurer",
        photo : kohliImage,
        votecnt: 0,
        voted: false,
        },
        {id: 27,
        name: "Williams",
        regno: "311111104032",
        dob: "05-05-1999",
        batch: "2011-2015",
        position: "President",
        photo : dhoniImage,
        votecnt: 0,
        voted: false,
        },
        {id: 28,
        name: "Oliversmith",
        regno: "311115104032",
        dob: "06-06-2000",
        batch: "2015-2019",
        position: "Vice President",
        photo : kohliImage,
        votecnt: 0,
        voted: false,
        },
        {id: 29,
        name: "Ava",
        regno: "311119104032",
        dob: "07-07-2001",
        batch: "2018-2022",
        position: "Joint Secretary",
        photo : dhoniImage,
        votecnt: 0,
        voted: false,
        },
        {id: 30,
          name: "Jesed",
          regno: "311114104032",
          dob: "08-08-1999",
          batch: "2014-2017",
          position: "Treasurer",
          photo : kohliImage,
          votecnt: 0,
          voted: false
          },
      // Rest of the nominees...
    ];
  
    // Assuming you have an array of MongoDB documents
  /*const documents = [
    {
      id: 17,
      name: "Patrick",
      regno: "311114104029",
      dob: "10-12-1998",
      batch: "2014-2018",
      position: "Executive",
      photo: "dhoniImage",
      voted: false,
      votecnt: 0,
      voted: false,
    },
    // Other documents...
  ];*/
  
  // Convert the documents array to JSON format
  
    
    // const positions = [...new Set(initialNominees.map(nominee => nominee.position))];
    // const nomineesByPosition = {};
    // positions.forEach(position => {
    // nomineesByPosition[position] = initialNominees.filter(nominee => nominee.position === position);
    // });  const jsonDocuments = (nomineesByPosition);


    const positions = ["President", "Vice President", "Treasurer", "Joint Secretary", "Executive"];

    const groupedNominees = {};
    
    for (const position of positions) {
      groupedNominees[position] = initialNominees.filter(nominee => nominee.position === position);
    }
    console.log(groupedNominees);
    const jsonDocuments = (groupedNominees);



    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      
      const { regno, dob } = input;
      setInputValid(regno.trim().length > 0 && dob.trim().length > 0);
      };
    
      const hsubmit = async (e) => {
        e.preventDefault();

        try{
              
              await login(input);
              history('/');
              //console.log(currentUser?.data?.votecnt);
              await fetchcandi(jsonDocuments);
             // alert('Logged In !!');
              history('/vote');
            
            
              
          }
      catch(err)
      {
                alert("wrong details")
                console.log(err);
                setError(err.response.data);
            }

        };
 
  return (
    <div className="container">
      <img src={LICETLogo} alt="LICET Logo" className="logo" />
      <h1 className="election-title" style={{"font-size": "35px"}}>LICET ALUMNI COUNCIL ELECTION</h1>
      <br />
      <div className="login-card">
        <form>
          <label htmlFor="regno">Registration Number</label>
          <input required
            type="text"
            id="regno"
            name="regno"
            onChange={handleChange}
            placeholder="Eg. 311XXXXXXXXX"
          />
          <br />
          <label htmlFor="dob">Date of Birth</label>
          <input required
            type="text"
            id="dob"
            name="dob"
            onChange={handleChange}
            placeholder="DD-MM-YYYY"
          />
          <br />
          <br />
          <input type="submit" onClick={hsubmit} disabled={!isInputValid } value="Login" />
          {err && <p>{err}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
