
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import HeroSection from "../herosection/HeroSection";
import AboutUs from "../aboutus/AboutUs";
import Services from "../services/Services";
import Activity from "../Activity/Activity";
import Teams from "../team/Teams";
import Contact from "../Contact/Contact";


export  default function Homepage (){
  
        return (
    <div>
            <Navbar />
            <main>
              <HeroSection />
              <AboutUs />
              <Services />
              <Activity />
              <Teams />
              <Contact />
            </main>
            <Footer />
            </div>
        );
    
}
