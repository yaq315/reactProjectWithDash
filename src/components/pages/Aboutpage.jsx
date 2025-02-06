import React from "react";
import Navbar from "../navbar/Navbar";
import AboutUs from "../aboutus/AboutUs";
import Team from "../team/Teams";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../aboutus/about.css";
import img1 from "../image/imgstudent6.png";
import img2 from "../image/imgstudent1.png";
import img3 from "../image/imgstudent7.png";
import img4 from "../image/imgstudent2.webp";
import img5 from "../image/imgstudent8.png";
import img6 from "../image/imgstudent3.png";
import img7 from "../image/imgstudent9.jpg";
import img8 from "../image/imgstudent4.png";
import img9 from "../image/imgstudent10.png";
import img10 from "../image/imgstudent5.png";
import img11 from "../image/partner4.png";
import img12 from "../image/partner3.png";
import img13 from "../image/partner2.png";
import img14 from "../image/partner1.webp";

export default function Aboutpage() {
  const { t } = useTranslation();

  const partners = [
    { name: "Code.org", logo: img11 },
    { name: "Scratch", logo: img12 },
    { name: "Raspberry Pi", logo: img13 },
    { name: "Lego Education", logo: img14 },
  ];

  const students = [
    { name:t("students.name.name1") , avatar: img1, bio: t("students.bio.bio1")},
    { name:t("students.name.name2"), avatar: img2, bio:t("students.bio.bio2") },
    { name: t("students.name.name3"), avatar: img3, bio: t("students.bio.bio3")},
    { name: t("students.name.name4"), avatar: img4, bio: t("students.bio.bio4")},
    { name: t("students.name.name5"), avatar: img5, bio: t("students.bio.bio5") },
    { name: t("students.name.name6"), avatar: img6, bio: t("students.bio.bio6") },
    { name: t("students.name.name7"), avatar: img7, bio: t("students.bio.bio7") },
    { name: t("students.name.name8"), avatar: img8, bio: t("students.bio.bio8")},
    { name: t("students.name.name9"), avatar: img9, bio: t("students.bio.bio9") },
    { name: t("students.name.name10"), avatar: img10, bio:t("students.bio.bio10") },
  ];

  return (
    <div>
      <Navbar />
      <AboutUs />
      <Team />

     

  
      <section id="students" className="students-section">
        <h2 className="students-title" >{t("students.title")} </h2>
        <motion.div className="students-slider" whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className="students-track"
            drag="x"
            dragConstraints={{ right: 0, left: -1000 }}
          >
            {students.map((student, index) => (
              <motion.div key={index} className="student-card" whileHover={{ scale: 1.05 }}>
                <img src={student.avatar} alt={student.name} className="student-avatar" />
                <h3 className="student-name">{student.name}</h3>
                <p className="student-description">{student.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <section id="partners" className="partners-section">
        <h2 className="partners-title">{t("partners-title")} </h2>
        <div className="partners-container">
          {partners.map((partner, index) => (
            <motion.img
              key={index}
              src={partner.logo}
              alt={partner.name}
              className="partner-logo"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}