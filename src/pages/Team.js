import React from "react";
import Navigation from "../components/Navigation";
import Pub from "../components/Pub";
import Footer from "../components/Footer";
import ButtonUp from "../components/ButtonUp";

const Team = () => {
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
            <h3>Notre équipe</h3>
            <p>
              <a href="/">Accueil</a> {""}/{""} Équipe
            </p>
          </div>
          <Navigation />
        </div>
      </div>

      <div className="section-team">
        <div className="section-team-content">
          <div className="team-card">
            <div className="team-card-content">
              <div className="background-color">
                <img src="./assets/type1.png" alt="" />
              </div>
              <div className="team-card-text">
                <h2>Luke Miller</h2>
                <p>Vendeur</p>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-content">
              <div className="background-color">
                <img src="./assets/type2.png" alt="" />
              </div>
              <div className="team-card-text">
                <h2>Michael Diaz</h2>
                <p>Patron</p>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-content">
              <div className="background-color">
                <img src="./assets/type3.png" alt="" />
              </div>
              <div className="team-card-text">
                <h2>Briana Ross</h2>
                <p>Photographe</p>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-content">
              <div className="background-color">
                <img src="./assets/type4.png" alt="" />
              </div>
              <div className="team-card-text">
                <h2>Lauren Rivera</h2>
                <p>Vendeuse</p>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-content">
              <div className="background-color">
                <img src="./assets/type5.png" alt="" />
              </div>
              <div className="team-card-text">
                <h2>Martin Rizz</h2>
                <p>Méchanocien</p>
              </div>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-content">
              <div className="background-color">
                <img src="./assets/type6.png" alt="" />
              </div>
              <div className="team-card-text">
                <h2>Caitlyn Hunt</h2>
                <p>Manageuse</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pub />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Team;
