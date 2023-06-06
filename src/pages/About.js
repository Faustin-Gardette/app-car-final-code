import React from "react";
import Navigation from "../components/Navigation";
import PlanBlob from "../components/PlanBlob";
import Pub from "../components/Pub";
import Footer from "../components/Footer";
import ButtonUp from "../components/ButtonUp";

const About = () => {
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
            <h3>Nos services</h3>
            <p>
              <a href="/">Accueil</a> {""}/{""} Services
            </p>
          </div>
          <Navigation />
        </div>
      </div>

      <div className="about-compo">
        <div className="about-content">
          <div className="about-img">
            <img src="./assets/img-about.jpg" alt="" />
          </div>
          <div className="about">
            <div className="about-text">
              <h2>A propos de Nous</h2>
              <h1>Démarrer le moteur et l'aventure commence</h1>
              <p>
                Votre partenaire de confiance pour la location de voitures.
                Notre vaste flotte de véhicules de qualité, associée à notre
                service clientèle exceptionnel, rendra votre expérience de
                location simple et agréable. Profitez de tarifs compétitifs et
                d'options flexibles pour choisir le véhicule idéal et embarquez
                vers de nouvelles aventures avec SpeedCars
              </p>
            </div>
            <div className="about-logo">
              <div className="about-logo1">
                <img src="./assets/about-car1.png" alt="" />
                <span>
                  <h1>20</h1>
                  <p>Marques de voitures</p>
                </span>
              </div>
              <div className="about-logo2">
                <img src="./assets/about-car2.png" alt="" />
                <span>
                  <h1>85</h1>
                  <p>Points de location</p>
                </span>
              </div>
              <div className="about-logo3">
                <img src="./assets/about-car3.png" alt="" />
                <span>
                  <h1>75</h1>
                  <p>Zone de réparation</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PlanBlob />
      <Pub />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
