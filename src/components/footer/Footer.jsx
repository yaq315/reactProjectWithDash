import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from "../image/logo.png";
import Linkedin from '../image/linkdin.png'
import Facebbok from '../image/logofacebook.png'
import Insagram from '../image/insta-.png'
import "./Footer.css";


 function Footer()   {
    const { t } = useTranslation();

    const SocialFooter = {
      height: "29px",
      width: "29px",
      marginRight: "17px",
      marginTop: "16px",
      marginBottom: "15px",
      padding : "1px",
    };

    return (
      <div>
        <footer>
          <div className="content">

            <div className="link-boxes">
              <ul className="box">
                <li className="logo-footer">
                  <img
                    src={logo}
                    alt="logo footer"
                    style={{ width: "100px", height: "100px" }}
                  />
                </li>
                <li style={{ fontSize: "13px" }}>
                  {" "}
                  {t('location1')} 
                </li>
              </ul>
              <ul className="box">
                <li className="link_name"> {t('Footer.Box1.link1')}</li>
                <li>
                  <a href="./team">{t('Footer.Box1.link2')}</a>
                </li>
                <li>
                  <a href="./team">{t('Footer.Box1.link3')}</a>
                </li>
                <li>
                  <a href="./team">{t('Footer.Box1.link4')}</a>
                </li>
                <li>
                  <a href="./team">{t('Footer.Box1.link5')}</a>
                </li>
              </ul>
              <ul className="box">
                <li className="link_name">{t('Footer.Box2.link1')}</li>
                <li>
                  <a href="./team">{t('Footer.Box2.link2')}</a>
                </li>
                <li>
                  <a href="./join">{t('Footer.Box2.link3')}</a>
                </li>
                <li>
                  <a href="./team">{t('Footer.Box2.link4')}</a>
                </li>
                {/* <li><a href='#'>Home</a></li> */}
              </ul>
              <ul className="box">
                <li className="link_name"> {t('Footer.Box3.link1')} </li>
                <li>
                  <a href="./join">{t('Footer.Box3.link2')}</a>
                </li>
                <li>
                  <a href="./team">{t('Footer.Box3.link3')}</a>
                </li>
                <li>
                  <a href="./about">{t('Footer.Box3.link4')}</a>
                </li>
              </ul>
              <ul className="box input-box">
                <li className="link_name"> {t('Footer.Box4.link1')}</li>
                <div className="media-icon">
                  <a href="https://www.facebook.com/profile.php?id=61555057022902" target='_blank' rel="noopener noreferrer">
                    <img
                      src={Linkedin}
                      alt="Linkedin"
                      style={SocialFooter}
                    />
                  </a>
                  <a href="https://www.instagram.com/ballersaqaba/?igsh=ZTBhY2FoeG5tcnEw&utm_source=qr" target='_blank' rel="noopener noreferrer">
                    <img
                    src={Facebbok}
                    alt="Facebook"
                      style={SocialFooter}
                    />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61555057022902" target='_blank' rel="noopener noreferrer">
                    <img
                    src={Insagram}
                    alt="Instagram"
                      style={SocialFooter}
                      
                    />
                  </a>
                </div>
               
              </ul>
            </div>
          </div>

          <div className="bottom-details">
          {t('Future Coders&; 2025 Future Coders. All rights reserved.')}
          </div>
        </footer>
      </div>
    );
  }

  export default Footer


