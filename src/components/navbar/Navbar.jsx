import React , { useEffect } from "react";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./navbar.css";
import logo from "../image/logo.png";

const Navbar = () => {
  
  const { t, i18n } = useTranslation(); 

  const navigate = useNavigate();

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="navbar-links-wrapper">
        <ul className="navbar-links">
          <li>
            <a href="/Home">{t('Home')}</a>
          </li>
          <li>
            <a href="/Aboutpage">{t('About Us')}</a>
          </li>
          <li>
            <a href="/Contactbage">{t('contact')}</a>
          </li>
        </ul>
      </div>

      <div className="navbar-buttons">
        <Link to="/login">
          <button className="button login-btn">{t('Login')}</button>
        </Link>
       
        {/* <Link to="/signup">
          <button className="button signup-btn">{t('Sign Up')}</button>
        </Link> */}

       
        <div>
        

     
          {i18n.language === 'ar' && (
          <button  className="button login-btn"  onClick={() => i18n.changeLanguage('en')}>English</button>
          )}
          {i18n.language === 'en' && (
               <button  className="button login-btn"  onClick={() => i18n.changeLanguage('ar')}>العربية</button>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;



