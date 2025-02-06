import React from 'react'
import Navbar from '../navbar/Navbar'
import Contact from '../Contact/Contact'
import Footer from '../footer/Footer'
import Image2 from '../image/imagelocation.jpeg';
import { useTranslation } from 'react-i18next';
export default function Contactbage() {
   const { t } = useTranslation();
           
  const cards = [
    {
      
      titel: t("phone"),
      Description: t("+123 456 7890"),
    },
    {
      
      titel: t("Location"),
      Description: t("Aqaba-Jordan"),
    },
    {
     
      titel: t("Email"),
      Description: "codersfuture@gmail.com",
    },
  ];
  return (
    <div>
        <Navbar />
        <section id="information" className="information-section"> 
    <h2 className="information-title">{t("information")}</h2>
    <div className="cards2-container">
      {cards.map((card, index) => (
        <div key={index} className="card1">
          <h3 className="card1-title">{card.titel}</h3>
          <p className="card1-description">{card.Description}</p>
        </div>
      ))}
    </div>
  </section>
   <Contact />
   <section className="location-contact">
          <div className="location">
            <h1>{t("Our Location")}</h1>
            <a href="https://www.google.com/maps/place/Orange+Digital+Village+Aqaba/@29.535652,35.0123723,17z/data=!3m1!4b1!4m6!3m5!1s0x150071875a9fca41:0xf5d61d999f967371!8m2!3d29.535652!4d35.0123723!16s%2Fg%2F11t2b3tv6d?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D">
              <img style={{width:"300px",borderRadius:"50px",gap:"30px"}} src={Image2} alt="Map" />
            </a>
          </div>
        </section>
   <Footer />
    </div>
  )
}
