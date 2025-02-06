import React from "react";
import { useTranslation } from "react-i18next";
import "./activity.css";
import imag1 from "../image/imag1s1.jpeg";
import imag2 from "../image/imag2s1.jpeg";
import imag3 from "../image/imag3s1.jpeg";

const Activity = () => {
  const { t } = useTranslation();

  const cards = [
    {
      image: imag1,
      titel: t("activity.title.Title1"),
      Description: t("activity.desc.Description1"),
      date: t("activity.date.Date1"),
    },
    {
      image: imag2,
      titel: t("activity.title.Title2"),
      Description: t("activity.desc.Description2"),
      date: t("activity.date.Date2"),
    },
    {
      image: imag3,
      titel: t("activity.title.Title3"),
      Description: t("activity.desc.Description3"),
      date: t("activity.date.Date3"),
    },
  ];

  return (
    <section id="activity" className="activity-section"> 
      <h1 className="activity-title">{t("Activity")}</h1>
      <div className="cards1-container">
        {cards.map((card, index) => (
          <div key={index} className="card1">
            <img src={card.image} alt="error" className="card1-image" />
            <h3 className="card1-title">{card.titel}</h3>
            <p className="card1-description">{card.Description}</p>
            <p className="card1-date">{card.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;