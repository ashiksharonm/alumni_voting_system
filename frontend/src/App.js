import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/User/LoginPage";
import LoginPageAdmin from "./components/Admin/LoginPageAdmin";
import Vote from "./components/User/Vote";
import AdminHome from "./components/Admin/adminHome";

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin-login" element={<LoginPageAdmin />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
