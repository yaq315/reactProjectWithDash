import React from 'react';
import { Link } from 'react-router-dom';
import './sidebardash.css';
import logo from '../logo.png';

function Sidebar() {
  return (
    <div className="aside">
      <div className="logo1">
        <img src={logo} alt="Logo" />
      </div>
      <div className="sidebar">
        <Link to="/Profile" className="active">Profile</Link>
        <Link to="/Student-Table" className="Students">Student</Link>
        <Link to="/Home" className="active">Log out</Link>
      </div>
    </div>
  );
}

export default Sidebar;
