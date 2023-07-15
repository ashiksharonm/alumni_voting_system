const express = require("express");
const router = express.Router();
const userController = require("../Controller/controller");
const cors = require("cors")


//=======================> User <====================

//router.post("/api/user/signup", userController.register);
router.get("/api/user/login", userController.fetchLCandidate);
router.post("/api/user/login", userController.loginUser);
// router.get("/api/user/vote",userController.fetchCandi);
// router.post("/api/user/vote", userController.setusrvtcnt);
// router.post("/api/user/vote", userController.updatecandiVote);
router.post("/api/user/vote", userController.setusrcandivtcnt);
//router.post("/api/user/vote", userController.updatecandiVote);
router.post("/api/user/logout", userController.logout);

//=======================> User <====================

router.post("/api/admin-login", userController.fetchCandi);
router.post("/api/admin/candidate-upload", userController.fetchCandidates);

module.exports = router;
  /*
  
  const recipes = [
    {
    name:"Jesed",
    regno:"311110104025",
    dob:"25-06-1994",
    batch:"2010-2014",
    position: "President",
    votecnt: 0
    },
    {
      id: 1,
      name: "John Doe",
    regno:"L311112104009",
    dob:"5-11-1996",
    batch:"2012-2016",
    position: "President",
    votecnt: 0
    },
    {
      id: 2,
      name: "Jane Smith",
    regno:"311111104015",
    dob:"16-03-1994",
    batch:"2011-2015",
    position: "Vice President",
    votecnt: 0
    },
    {
       id: 3,
       name: "James",
    regno:"311120104010",
    dob:"16-03-2002",
    batch:"2020-2024",
    position: "Vice President",
    votecnt: 0
    },
    {
      id: 4,
      name: "Jones",
    regno:"311112104025",
    dob:"30-06-2003",
    batch:"2012-2016",
    position: "Executive",
    votecnt: 0
    },
    {
      
      id: 5,
      name: "Raina",
    regno:"311120104054",
    dob:"25-06-1994",
    batch:"2020-2024",
    position: "Treasurer",
    votecnt: 0
    },
    {
      id: 6,
      name: "Farukh",
    regno:"311118104058",
    dob:"25-06-2001",
    batch:"2018-2022",
    position: "Treasurer",
    votecnt: 0
    },
    {
      id: 7,
      name: "Sharon",
    regno:"311113104028",
    dob:"30-06-2003",
    batch:"2013-2017",
    position: "Joint Secretary",
    votecnt: 0
    },
    {
      id: 8,
      name: "Rasesh",
    regno:"311115104005",
    dob:"10-08-1999",
    batch:"2015-2019",
    position: "Executive",
    votecnt: 0
    },
    {
      id: 9,
      name: "Ramesh",
    regno:"311111104018",
    dob:"18-04-1998",
    batch:"2011-2015",
    position: "Executive",
    votecnt: 0
    },
    {
      id: 10,
      name: "Rahul",
    regno:"311116104052",
    dob:"26-03-2000",
    batch:"2016-2020",
    position: "Joint Secretary",
    votecnt: 0
    },
    {
      id: 11,
      name: "Danush",
    regno:"311117104059",
    dob:"15-07-2001",
    batch:"2017-2021",
    position: "Executive",
    votecnt: 0
    },
    {
      id: 12,
      name: "Senthil",
    regno:"311114104068",
    dob:"31-12-2000",
    batch:"2014-2018",
    position: "Executive",
    votecnt: 0
    },
    {
      id: 13,
      name: "Faisal",
    regno:"311119104008",
    dob:"12-05-2000",
    batch:"2019-2021",
    position: "Executive",
    votecnt: 0
    },
    {
      id: 14,
      name: "Gautam",
      regno: "31111104026",
      dob: "15-03-2001",
      batch: "2011-2015",
      position: "Executive",
      votecnt: 0
    },
    {
      id: 15,
      name: "Harish",
      regno: "311112104027",
      dob: "05-11-2000",
      batch: "2012-2016",
      position: "Executive",
      votecnt: 0
    },
    {
      id: 16,
      name: "Chozhan",name: "Sarah",
      regno: "311113104028",
      dob: "20-09-1999",
      batch: "2013-2017",
      position: "Executive",
      votecnt: 0
    },
    {
      id: 17,
      name: "Patrick",
      regno: "311114104029",
      dob: "10-12-1998",
      batch: "2014-2018",
      position: "Executive",
      votecnt: 0
    },
    {
      id: 18,
      name: "Emily",
      regno: "311115104030",
      dob: "12-08-1997",
      batch: "2015-2019",
      position: "Executive",
      votecnt: 0
    },
    {
      id: 19,
      name: "Daniel",
      regno: "311116104031",
      dob: "03-04-1996",
      batch: "2016-2020",
      position: "Executive",
      votecnt: 0
    },
    {
      id: 20,
      name: "Olivia",
      regno: "311117104032",
      dob: "25-11-1995",
      batch: "2017-2021",
      position: "Executive",
      votecnt: 0
    },
    {
      id: 21,
      name: "Benjamin",
      regno: "311118104033",
      dob: "09-07-1994",
      batch: "2018-2022",
      position: "Executive",
      votecnt: 0
    },
    {
      id: 22,
      name: "Sophia",
      regno: "311119104034",
      dob: "18-02-1993",
      batch: "2019-2023",
      position: "Executive",
      votecnt: 0
    }
  */