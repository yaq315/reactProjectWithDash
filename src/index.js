import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Homepage from "./components/pages/home";
import Signup from "./components/pages/signup";
import Login from "./components/pages/login";
import Aboutpage from "./components/pages/Aboutpage";
import Contactbage from "./components/pages/Contactbage";
import Dashboard from './srcdash/Dashboard/Dashboard';
import Table from "./srcdash/Table/Table"
import Profile from "./srcdash/Profile/profile"

import './i18n'; 




  const Index = () => {
return(
  <Router>
  <Routes>
    <Route path="/" element={<Homepage />} /> 
    <Route path="/Home" element={<Homepage />} /> 
    <Route path="/Admin" element={<Signup />} /> 
    <Route path="/login" element={<Login />} /> 
    <Route path="/Aboutpage" element={< Aboutpage/>} /> 
    <Route path="/Contactbage" element={< Contactbage/>} /> 
    <Route path="/Dashboard" element={< Dashboard/>} /> 
    <Route path="/Profile" element={< Profile/>} /> 
    
    <Route path="/Student-Table" element={< Table />} /> 

  
  </Routes>

</Router>

 
)

  }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);




