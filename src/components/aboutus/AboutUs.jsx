import React, { useState } from "react";
import { motion } from "framer-motion";
import "./about.css";  
import Img1 from '../image/aboutimg.webp';
import Img2 from '../image/aboutimg1.jpeg';
import Img3 from '../image/aboutimg2.jpeg';
import Img4 from '../image/aboutimg4.jpg';
import { useTranslation } from 'react-i18next';

const images = [Img1, Img2, Img3, Img4];

const AboutUs = () => {
    const { t } = useTranslation(); 
    const [isHovered, setIsHovered] = useState(false); 

    return (
 <div className="about1">
  <section id="about" className="about1-section">
    <h2 className="about1-title">{t("about-title")}</h2>
  <div className="about1-paragraph">{t("about-p2")}</div>

               
<div className="slider-container">
<motion.div 
className="image-slider"
 animate={{ x: isHovered ? 0 : "-50%" }} 
  transition={{
  x: { repeat: Infinity, duration: isHovered ? 7: 15, ease: "linear" }
  }}


   onHoverStart={() => setIsHovered(true)}  
  onHoverEnd={() => setIsHovered(false)} 
     >
  {[...images, ...images].map((img) => ( 
   <div  className="slide">
  <img src={img}  className="about1-image" />
 </div>
))}
 </motion.div>
  </div>
   </section>
        </div>
    );
};

export default AboutUs;
