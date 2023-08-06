import React, { useContext, useState, useEffect ,useRef} from "react"
import { useNavigate } from "react-router-dom"
// import LICETLogo from "../licet-logo.png";
import c1 from "../img/1.jpg";
import c2 from "../img/2.jpg";
import c3 from "../img/3.jpg";
import c4 from "../img/4.jpeg";
import c5 from "../img/5.jpeg";
import c6 from "../img/6.jpg";
import c7 from "../img/7.JPG";
import c8 from "../img/8.JPG";
import c9 from "../img/9.jpg";
import c10 from "../img/10.jpeg";
import c11 from "../img/11.jpeg";
import c12 from "../img/12.JPG";
import c13 from "../img/13.jpeg";
import c14 from "../img/14.jpg";
import c15 from "../img/15.jpeg";
import c16 from "../img/16.jpeg";
import c17 from "../img/17.jpg";
import c18 from "../img/18.jpeg";
import c19 from "../img/19.jpg";
import c20 from "../img/20.jpg";
import c21 from "../img/21.jpg";
import c22 from "../img/22.jpg";
import c23 from "../img/23.jpg";
import c24 from "../img/24.jpeg";

import alumnilogo from "../alumni-logo.png";
//import licetcmp from "../licet-cmp.jpeg";
import lc from "../licet-logo-circle.png";
import "./LoginPage.css";
import { AuthContext } from "../../auth/Authcontext";

import { disableReactDevTools } from '@fvilers/disable-react-devtools';

disableReactDevTools();

const LoginPage = () => {


  const myElementRef = useRef(null);
  const history = useNavigate();
  const {login, fetchcandi , currentUser, logout} = useContext(AuthContext);

    const [input, setInputs] = useState({
      regno: "",
      dob: "",
    });

    const [isInputValid, setInputValid] = useState(false);
    const [err, setError] = useState(null);



    const initialNominees = [{
      
      id: 1,
      name: "Pon Rahul M",
      regno: "311117205041",
      dob: "20-01-2000",
      batch: "2017-2021",
      position: "Executive",
      photo : c1,
      votect: 0
    },
    {
      
      id: 2,
      name: "Alex Ezhil Arasu",
      regno: "311117104010",
      dob: "10-02-1999",
      batch: "2017-2021",
      position: "Executive",
      photo : c2,  
      votect: 0
    },
    {
      
      id: 3,
      name: "Devadarshan Nirmal",
      regno: "311116205011",
      dob: "29-05-1999",
      batch: "2016-2020",
      position: "VicePresident",
      photo : c3,      
      votect: 0
    },
    {
      
      id: 4,
      name: "Subashree ",
      regno: "311117205057",
      dob: "28-08-1999",
      batch: "2017-2021",
      position: "Executive",
      photo : c4,  
      votect: 0
    },
    {
      
      id: 5,
      name: "Joish",
      regno: "311114104027",
      dob: "23-03-1997",
      batch: "2014-2018",
      position: "President",
      photo : c5,  
      votect: 0
    },
    {
      
      id: 6,
      name: "Elizabeth Subhiksha Victoria",
      regno: "311119205013",
      dob: "11-10-2001",
      batch: "2019-2023",
      position: "Executive",
      photo : c6,  
      votect: 0
    },
    {
      
      id: 7,
      name: "Vimal R",
      regno: "32810114059",
      dob: "22-05-1993",
      batch: "2010-2014",
      position: "President",
      photo : c7,  
      votect: 0
    },
    {
      
      id: 8,
      name: "Charles M D ",
      regno: "311112106301",
      dob: "21-03-1993",
      batch: "2012- 2016",
      position: "Executive",
      photo : c8, 
       votect: 0
    },
    {
      
      id: 9,
      name: "VEL KUMAR V",
      regno: "32810105054",
      dob: "01-07-1992",
      batch: "2010-2014",
      position: "President",
      photo : c9,  
      votect: 0
    },
    {
      
      id: 10,
      name: "Rachel Celin Judith ",
      regno: "311112205046",
      dob: "13-08-1994",
      batch: "2012- 2016",
      position: "Executive",
      photo : c10, 
       votect: 0
    },
    {
      
      id: 11,
      name: "Ahamed Anas S N",
      regno: "311119114004",
      dob: "22-07-2001",
      batch: "2019-2023",
      position: "Executive",
      photo : c11, 
       votect: 0
    },
    {
      
      id: 12,
      name: "Sergius Joe M",
      regno: "311111114098",
      dob: "08-10-1993",
      batch: "2011-2015",
      position: "Executive",
       photo : c12, 
        votect: 0
    },
    {
      
      id: 13,
      name: "RAHUL RANJIT",
      regno: "311116105044",
      dob: "03-11-1998",
      batch: "2016-2020",
      position: "VicePresident",
          photo : c13,     
           votect: 0
    },
    {
      
      id: 14,
      name: "Kiran J",
      regno: "32810105027",
      dob: "12-07-1992",
      batch: "2010-2014",
      position: "Executive",
   
       photo : c14,  
       votect: 0
    },
    {
      
      id: 15,
      name: "Govind Raj K",
      regno: "32810205017",
      dob: "17-04-1993",
      batch: "2010-2014",
      position: "JointSecretary",
      photo : c15,
      votect: 0
    },
    {
      
      id: 16,
      name: "Jessy S",
      regno: "311113104030",
      dob: "11-06-1995",
      batch: "2013-2017",
      position: "President",
       photo : c16,
         votect: 0
    },
    {
      
      id: 17,
      name: "Arulius Savio ",
      regno: "311112114018",
      dob: "21-05-1995",
      batch: "2012- 2016",
      position: "JointSecretary",
        photo : c17,
      votect: 0
    },
    {
      
      id: 18,
      name: "Luvin",
      regno: "311114114073",
      dob: "09-10-1996",
      batch: "2014-2018",
      position: "Executive",
      photo : c18,  
      votect: 0
    },
    {
      
      id: 19,
      name: "Nitin S",
      regno: "311116104031",
      dob: "01-10-1998",
      batch: "2016-2020",
      position: "VicePresident",
      photo : c19,    
        votect: 0
    },
    {
      
      id: 20,
      name: "Theliban Aravindan",
      regno: "311112114104",
      dob: "01-12-1994",
      batch: "2012- 2016",
      position: "Executive",
       photo : c20,  
       votect: 0
    },
    {
      
      id: 21,
      name: "Arulious Jora",
      regno: "311115105007",
      dob: "26-06-1998",
      batch: "2015-2019",
      position: "Executive",
   photo : c21,  
   votect: 0
    },
    {
      
      id: 22,
      name: "Garwin L",
      regno: "311115104305",
      dob: "23-04-1997",
      batch: "2015-2019",
      position: "President",
     photo : c22, 
      votect: 0
    },
    {
      
      id: 23,
      name: "Joselina Sherin ",
      regno: "311115106026",
      dob: "06-08-1997",
      batch: "2015-2019",
      position: "JointSecretary",
      photo : c23,
      votect: 0
    },
    {
      
      id: 24,
      name: "Robin John",
      regno: "32810114042",
      dob: "25-08-1992",
      batch: "2010-2014",
      position: "VicePresident",
      photo : c24,
      votect: 0
    },];
  
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
  

    const positions = [...new Set(initialNominees.map(nominee => nominee.position))];
    const nomineesByPosition = {};
    positions.forEach(position => {
    nomineesByPosition[position] = initialNominees.filter(nominee => nominee.position === position);
    });  
    const jsonDocuments = (nomineesByPosition);


    // const positions = ["President", "VicePresident", "Treasurer", "Joint Secretary", "Executive"];

    // const groupedNominees = {};
    
    // for (const position of positions) {
    //   groupedNominees[position] = initialNominees.filter(nominee => nominee.position === position);
    // }
    // console.log(groupedNominees);
    // const jsonDocuments = (groupedNominees);



    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      
      const { regno, dob } = input;
      setInputValid(regno.trim().length > 0 && dob.trim().length > 0);
      };
    
     

      const logcheck = async () => {
        if (currentUser?.data?.votecnt === 13) {
          alert("You have already voted for all the elections!");
         await logout();
      
          history("/"); // Redirect to login page
        }
      };

      const DisableInspect = () => {
        useEffect(() => {
          // Disable right-click
          document.addEventListener("contextmenu", (e) => e.preventDefault());
      
          function ctrlShiftKey(e, keyCode) {
            return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
          }
      
          document.onkeydown = (e) => {
            // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
            if (
              e.keyCode === 123 ||
              ctrlShiftKey(e, "I") ||
              ctrlShiftKey(e, "J") ||
              ctrlShiftKey(e, "C") ||
              (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
            )
              return false;
          };
        }, []);
      
        return <div>{/* Your component JSX here */}</div>;
      };

      const hsubmit = async (e) => {
        e.preventDefault();
    
       // enterFullscreen();

        try{
              
              await login(input);
               history('/');
              //console.log(currentUser?.data?.votecnt);
              logcheck();
              await fetchcandi(jsonDocuments);
            // DisableInspect();
              // await fetchcandi();  - DB
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
    <div className="container" style={{"backgroundColor" : "#efe6d1"}}>
      <div className="login-header-container">
      <img src={lc}  style = {{ "height" : "120px" ,  "width": "120px" , "margin" : "15px" }}alt="LICET Logo" className="logo" />
      <h1 className="election-title" style={{"fontSize": "35px" ,  "color": "#1e1445" , "marginTop" : "40px"}}>LICET ALUMNI ASSOCIATION ELECTION</h1>
      <img src={alumnilogo} alt="LICET Logo" style = {{ "height" : "150px" ,  "width": "100px" }}className="logo" />
      <br /></div>
      <div className="login-card" style={{"backgroundColor":"#FFF"}}>
        <form>
          <label htmlFor="regno" style={{"color" : "#1e1445"}}>Registration Number</label>
          <input required
            type="text"
            id="regno"
            name="regno"
            onChange={handleChange}
            placeholder="Eg. 311XXXXXXXXX"
          />
          <br />
          <label htmlFor="dob" style={{"color" : "#1e1445"}}>Date of Birth</label>
          <input required
            type="text"
            id="dob"
            name="dob"
            onChange={handleChange}
            placeholder="DD-MM-YYYY"
          />
          <br />
          <br />
          <input type="submit" onClick={hsubmit} disabled={!isInputValid } value="Login"/>
          {/* style={{"background-color": "#1e1445", "color":"#d3b25f"}} */}
          {err && <p>{err}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;



// >===========================================================================================================

// FULL SCREEN

// const [isFullScreen, setIsFullScreen] = useState(false);

// const enterFullScreen = () => {
//   const element = document.documentElement;
//   if (element.requestFullscreen) {
//     element.requestFullscreen();
//   } else if (element.mozRequestFullScreen) {
//     element.mozRequestFullScreen();
//   } else if (element.webkitRequestFullscreen) {
//     element.webkitRequestFullscreen();
//   } else if (element.msRequestFullscreen) {
//     element.msRequestFullscreen();
//   }
//   setIsFullScreen(true);
// };

// // const fetchcandis = async () => {

// //     alert("Candidates Fetched Successfully !!");
// //     await fetchcandi();
// //     history("/");
// // };
// // useEffect(() => {
// //   console.log("UseEffect running");
// //   fetchcandis();
// // }, []);


// useEffect(() => {
// const handleKeyDown = (event) => {
// if (event.key === "Escape") {
//   event.preventDefault();
//   enterFullScreen();
// }
// };

// if (isFullScreen) {
// document.addEventListener("keydown", handleKeyDown);

// }

// return () => {
// document.removeEventListener("keydown", handleKeyDown);

// };
// }, [isFullScreen]);

// // const exitFullScreen = () => {
// //   if (document.exitFullscreen) {
// //     document.exitFullscreen();
// //   } else if (document.mozCancelFullScreen) {
// //     document.mozCancelFullScreen();
// //   } else if (document.webkitExitFullscreen) {
// //     document.webkitExitFullscreen();
// //   } else if (document.msExitFullscreen) {
// //     document.msExitFullscreen();
// //   }
// // };
