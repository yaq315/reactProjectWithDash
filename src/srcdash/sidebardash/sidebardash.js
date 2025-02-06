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
        <Link to="/teachers" className="active">Teachers</Link>
        <Link to="/add-student" className="add-student-link">Add Student</Link>
        <Link to="/logout" className="active">Log out</Link>
      </div>
    </div>
  );
}

export default Sidebar;
