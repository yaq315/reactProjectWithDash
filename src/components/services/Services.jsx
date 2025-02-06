import React from "react";
import "./services.css";
import { useTranslation } from 'react-i18next';


const Services = () => {
     const { t, i18n } = useTranslation(); 

  return (
    <section id="services" className="services-section">
      <h1 className="services-title">{t("Services")}</h1>
      <div className="cards-container">
        <div className="service-card">
          <h3 className="card-title">{t('services.title.title1')}</h3>
          <ul className="card-list">
            <li>{t('services.list1.lis1')}</li>
            <li>{t('services.list1.lis2')}</li>
            <li>{t('services.list1.lis3')}</li>
            <li>{t('services.list1.lis4')}</li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="card-title">{t('services.title.title2')}</h3>
          <ul className="card-list">
            <li>{t('services.list2.lis1')}</li>
            <li>{t('services.list2.lis2')}</li>
            <li>{t('services.list2.lis3')}</li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="card-title">{t('services.title.title3')}</h3>
          <ul className="card-list">
            <li>{t('services.list3.lis1')}</li>
            <li>{t('services.list3.lis2')}</li>
            <li>{t('services.list3.lis3')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;

