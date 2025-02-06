import React from "react";
import './Hero.css'; 
import { useTranslation } from 'react-i18next';


const HeroSection = () => {
 
   const { t, i18n } = useTranslation(); 


 
 
  return (
    <section id="hero" className="section1">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title" >{t('hero.title')}</h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <p className="hero-description"> {t('hero.description')}  </p>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;


