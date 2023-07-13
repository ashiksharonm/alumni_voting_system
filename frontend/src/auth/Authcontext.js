import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null);
    const [currentUsers, setCurrentUsers] = useState(
      JSON.parse(localStorage.getItem("userbio")) || null);
      const [currentCandidates, setCandidates] = useState(
        JSON.parse(localStorage.getItem("candis")) || null);

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:5000/api/user/login", inputs);
    const userData = res.data;
    setCurrentUser(userData);
  };


  // const adminlogin= async (inputs) => {
  //   const res = await axios.post("http://localhost:5000/api/admin-login", inputs);
  //   const userData = res.data;
  //   setCurrentUsers(userData);
  // };


  const adminhome = async () => {
    const res = await axios.post("http://localhost:5000/api/admin-login");
    const usersData = res.data;
    setCurrentUsers(usersData);
  };


  const getCandidatesvtcnt = async (input) => {
    const res = await axios.post("http://localhost:5000/api/user/vote",input);
    const userbio = res.data;
    setCurrentUsers(userbio);
  };

  const setUservtcnt = async (input) => {
    const res = await axios.post("http://localhost:5000/api/user/vote",input);
    const userb = res.data;
    setCurrentUser(userb);
  };

  const setusercandivote = async (input) => {
    const res = await axios.post("http://localhost:5000/api/user/vote",input);
    const userbio = res.data;
    setCurrentUser(userbio);
  };



  const fetchcandi = async (candis) => {
    setCandidates(candis);
  };


  const logout = async () => {
    await axios.post("http://localhost:5000/api/user/logout");
    setCurrentUser(null);
    setCurrentUsers(null);
    setCandidates(null);
  };

 
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("userbio", JSON.stringify(currentUsers));
    localStorage.setItem('candis',JSON.stringify(currentCandidates) );
  }, [currentUser,currentUsers,currentCandidates]);

  return (
    <AuthContext.Provider value={{ currentUser,currentUsers,currentCandidates,login, logout ,getCandidatesvtcnt,setusercandivote,setUservtcnt,fetchcandi,adminhome}}>
      {children}
    </AuthContext.Provider>
  );
};