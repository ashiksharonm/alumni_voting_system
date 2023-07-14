
const userproModel = require("../mongo_bio");
const userModel = require("../mongo");


//==================> Login user <=======================

const loginUser = async function (req, res) {
  try {
    let Body = req.body;
    const { regno, dob } = Body;
    
    const regnoRegex = /^[0-9]{12}$/;
    const dobRegex = /^\d{2}-\d{2}-\d{4}$/;

    if (!regnoRegex.test(Body.regno)) {
    alert("Invalid Register Number");
    return res.status(400).json("Registration number should contain only letters and numbers.");
    } 

    if (!dobRegex.test(Body.dob)) {
      alert("Invalid Date of Birth");
      return res.status(400).json("Please use DD-MM-YYYY");
    } 

    if (!Body.regno) {
      return res.status(400).json("Please enter a valid Register");
    }
    
    if (!Body.dob) {
      return res.status(400).json("Please enter password");
    }
    
    let getUser = await userModel.findOne({ regno : regno });
    if (!getUser) return res.status(401).json("RegNo or DOB is incorrect");
    
    let matchuser = (regno === getUser.regno);
    let matchuserd= (dob === getUser.dob);
    if (!matchuser) return res.status(401).json("Incorrect Register Number.");
    if (!matchuserd) return res.status(401).json("Incorrect DOB.");
    console.log(getUser);
    
    return res.status(200).send({ data: getUser });
      
    } catch (error) {
      return res.status(500).json(error.message);
    }
};




//==================> Create user <=======================
const register = async (req, res) => {
  try {
    let Body = req.body;
    const { name ,email, password, cpass } = Body;

    if (!Body.name) {
      return res.status(400).json("Please enter username");
    }

    const dublicateName = await userModel.findOne({ name: name });
    if (dublicateName) {
      return res.status(400).json(" Name Already Exists");
    }

    //==================> Email validation <=======================
    if (!Body.email) {
      return res.status(400).json("Please enter email");
    }
    const Emailregx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let Email = Emailregx.test(Body.email);
    if (!Email) {
      return res.status(400).json("Please enter valid email.");
    }

    //<===================
    const dublicateEmail = await userModel.findOne({ email: email });
    if (dublicateEmail) {
      return res.status(400).json(" Email Already Exists");
    }
    
   

    //==================> password validation <=======================
    if (!Body.password) {
      return res.status(400).json("Please enter password");
    }
    const Passregx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&]).{6,}$/;
    let Password = Passregx.test(Body.password);
    if (!Password) {
      return res
        .status(400)
        .json(
          "Password must have atleast 1 uppercase\n, 1 lowercase, 1 special charecter\n 1 number and must consist atleast 6 characters."
        );
    }

    if (!Body.cpass) {
      return res.status(400).json("Please re-enter password");
    }
    const cPassregx =Body.password
    let cnf= (cPassregx === Body.password);
    if (!cnf) {
      return res
        .status(400)
        .json(
          "Password must have atleast 1 uppercase\n, 1 lowercase, 1 special charecter\n 1 number and must consist atleast 6 characters."
        );
    }

   

    let savedData = await userModel.create(Body);
    res.status(201).send({ data: savedData });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


//==================> Fetch user Bio <=======================

 const fetchCandi= async function ( req,res) {
  try {
  
    // let data = req.body
    // let {id , name, regno, dob, batch , position , votecnt } = data

    let getUsers = await userproModel.find();

    const positions = ["President", "VicePresident", "Treasurer", "JointSecretary", "Executive"];

    const groupedNominees = {};
    
    for (const position of positions) {
      groupedNominees[position] = getUsers.filter(nominee => nominee.position === position);
    }
    console.log(groupedNominees);

    const jsonDocuments = (groupedNominees);

    console.log(jsonDocuments);
    if (getUsers)
      return res.status(201).send({ data: jsonDocuments});;

    } catch (error) {
      return res.status(500).json(error.message);
    }
};

//==================> Fetch Candidates Bio <=======================

const fetchCandidates= async function ( req,res) {
  try {
  
    // let data = req.body
    // let {id , name, regno, dob, batch , position , votecnt } = data

    let getUsers = await userproModel.find();

    // const positions = ["President", "VicePresident", "Treasurer", "JointSecretary", "Executive"];

    // const groupedNominees = {};
    
    // for (const position of positions) {
    //   groupedNominees[position] = getUsers.filter(nominee => nominee.position === position);
    // }
    // console.log(groupedNominees);

    // const jsonDocuments = (groupedNominees);

    // console.log(jsonDocuments);
    if (getUsers)
      return res.status(201).send({ data: getUsers});;

    } catch (error) {
      return res.status(500).json(error.message);
    }
};




//==================> Fetch user , candidates Bio <=======================

const setusrcandivtcnt = async (req, res) => {
  try {

    let Body = req.body;
    const { id , regno } = Body;
    
   console.log("USER"+regno);
   console.log("Cadidate"+id);
   

     
  // Candidate count incrementation
  let getUsers = await userproModel.findOne({ id : id });
  let cndcnt = getUsers.votecnt;
  cndcnt = cndcnt + 1;
   
  const findOneQuery1 = { id: id };
  const updateOptions1 = { returnOriginal: false };
  const updateDoc1 = { $set: { votecnt : cndcnt} };
  const updateResult1 = await userproModel.findOneAndUpdate(
          findOneQuery1,
          updateDoc1,
          updateOptions1,
  );

  getUsers = await userproModel.findOne({ id : id });
  console.log("CandidateCount");
      console.log(getUsers);
      
   // User count incremetation
    let getUser = await userModel.findOne({ regno : regno });
    let uservtc = getUser.votecnt;
    uservtc = uservtc + 1;

      const findOneQuery = { regno : regno };
      const updateOptions = { returnOriginal: false };
      const updateDoc = { $set: { votecnt : uservtc} };
      const updateResult = await userModel.findOneAndUpdate(
              findOneQuery,
              updateDoc,
              updateOptions,
      );
 
      getUser = await userModel.findOne({ regno : regno });
       console.log("UserVoteCount");
       console.log(getUser);
   
    res.status(201).send({ data: getUser });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


//==================> Logout user <=======================
const logout = (req, res) => {
  res.status(200).json( "User has been logged out. ")
};


// =========================== UNUSED =====================================================
// =========================== UNUSED =====================================================
// =========================== UNUSED =====================================================



//==================> Incremet user profile <=======================


const setusrvtcnt = async (req, res) => {
  try {
    let Body = req.body;
    const { regno } = Body;
    
    console.log(regno);

    let getUser = await userModel.findOne({ regno : regno});
    
    if (!getUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    

    let uservtc = getUser.votecnt;
   uservtc = uservtc + 1;

    const findOneQuery = { regno : regno };
    const updateOptions = { returnOriginal: false };
    const updateDoc = { $set: { votecnt : uservtc } };
    const updateResult = await userModel.findOneAndUpdate(
      findOneQuery,
      updateDoc,
      updateOptions
    );

    getUser = await userModel.findOne({ regno : regno });
    console.log("UserVoteCount");
    console.log(getUser);

    res.status(201).send({ data: getUser });
  } catch (error) {
    return res.status(500).json(error.message);
  }
}; 


//==================> Fetch user Bio <=======================

const updatecandiVote = async function (req, res) {
  try {
    let Body = req.body;
    const { id } = Body;
  //  const userId = Body._id;
   //const id = userId;

   let getUsers = await userproModel.findOne({ id : id });
   let cndcnt = getUsers.votecnt;
   cndcnt = cndcnt + 1;
    
   const findOneQuery = { id: id };
   const updateOptions = { returnOriginal: false };
   const updateDoc = { $set: { votecnt : cndcnt} };
   const updateResult = await userproModel.findOneAndUpdate(
           findOneQuery,
           updateDoc,
           updateOptions,
   );

   getUsers = await userproModel.findOne({ id : id });
   console.log("CandidateCount");
       console.log(getUsers);
      return res.status(200).send({ data: getUsers });
    }
catch (error) {
      return res.status(500).json(error.message);
    }
};


module.exports = {loginUser, logout ,updatecandiVote ,setusrvtcnt,fetchCandi,setusrcandivtcnt,fetchCandidates};

