import React from 'react';
import './Navbardash.css';

function Navbardash({ toggleTheme, isDarkMode, toggleSideMenu }) {
  return (
    <div className={`navbar ${isDarkMode ? 'dark' : ''}`}>
      <div className="navbar-left">
        <button id="menu_bar" onClick={toggleSideMenu}>
          <span className="material-symbols-sharp">menu</span>
        </button>
      </div>

      <div className="navbar-center">
        <div className="theme-toggler" onClick={toggleTheme}>
          <span className={`material-symbols-sharp ${!isDarkMode ? 'active' : ''}`}>light_mode</span>
          <span className={`material-symbols-sharp ${isDarkMode ? 'active' : ''}`}>dark_mode</span>
        </div>
      </div>

      <div className="navbar-right">
        <div className="profile">
          <div className="info">
            <p><b>Babar</b></p>
            <p>Admin</p>
          </div>
          <div className="profile-photo">
            <img src="./images/profile-1.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbardash;
