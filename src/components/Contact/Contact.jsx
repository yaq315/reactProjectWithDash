import React, { useState } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const [inputFocus, setInputFocus] = useState(null);
  const [buttonHover, setButtonHover] = useState(false);
  const { t } = useTranslation();



  return (
<div>
    

    <section className="contact-section" id="contact">
      <h2 className="section-title">{t("Contact Us")}</h2>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t("Name")}</label>
            <input 
              type="text"
              id="name"
              onFocus={() => setInputFocus('name')}
              onBlur={() => setInputFocus(null)}
              style={{
                borderColor: inputFocus === 'name' ? 'rgb(129, 45, 45)' : '#7A4B4B'
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t("Email")}</label>
            <input 
              type="email"
              id="email"
              onFocus={() => setInputFocus('email')}
              onBlur={() => setInputFocus(null)}
              style={{
                borderColor: inputFocus === 'email' ? 'rgb(129, 45, 45)' : '#7A4B4B'
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t("Message")}</label>
            <textarea
              id="message"
              onFocus={() => setInputFocus('message')}
              onBlur={() => setInputFocus(null)}
              style={{
                borderColor: inputFocus === 'message' ? 'rgb(129, 45, 45)' : '#7A4B4B'
              }}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="submit-btn"
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            style={{
              background: buttonHover ? 'rgb(129, 45, 45)' : '#7A4B4B',
              transform: buttonHover ? 'scale(1.05)' : 'scale(1)'
            }}
          >
           {t("Send Message")} 
          </button>
        </form>
      </div>
    
    </section>
    </div>
  );
}
