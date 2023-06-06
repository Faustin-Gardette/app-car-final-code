import React from "react";
import Navigation from "../components/Navigation";
import TestimonialsComp from "../components/TestimonialsComp";
import Pub from "../components/Pub";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import ButtonUp from "../components/ButtonUp";

const Testimonials = () => {
  return (
    <div>
      <ButtonUp />
      <div
        className="nav-back"
        style={{
          backgroundImage: `url(./assets/back-car.png)`,
        }}
      >
        <div className="nav-overlay">
          <div className="nav-back-content">
            <h3>Avis</h3>
            <p>
              <a href="/">Accueil</a> {""}/{""} Avis
            </p>
          </div>
          <Navigation />
        </div>
      </div>
      <TestimonialsComp />
      <Pub />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Testimonials;
