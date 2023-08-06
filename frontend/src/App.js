import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/User/LoginPage";
import LoginPageAdmin from "./components/Admin/LoginPageAdmin";
import Vote from "./components/User/Vote";
import AdminHome from "./components/Admin/adminHome";
import CandidateUpload from "./components/Admin/CandidateUpload";
import Results from "./components/Admin/Results";
import Success from "./components/User/success";

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/vote_" element={<Success />} />
        <Route path="/admin-login" element={<LoginPageAdmin />} />
      <Route path="/admin/*" element={<AdminHome />} />
      <Route path="/admin/candidate-upload" element={<CandidateUpload />} />
           <Route path="/admin/results" element={<Results />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
