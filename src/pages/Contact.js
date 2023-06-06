import React from "react";
import Navigation from "../components/Navigation";
import Pub from "../components/Pub";
import Footer from "../components/Footer";
import ButtonUp from "../components/ButtonUp";

const Contact = () => {
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
            <h3>Contact</h3>
            <p>
              <a href="/">Accueil</a> {""}/{""} Contact
            </p>
          </div>
          <Navigation />
        </div>
      </div>
      <div className="form-section">
        <div className="form-container">
          <div className="form-info">
            <h1>Besoin d'informations complémentaires ?</h1>
            <p>
              Professionnel aux multiples facettes, compétent dans de nombreux
              domaines de la recherche et du développement et spécialiste de
              l'apprentissage. Plus de 15 ans d'expérience.
            </p>
            <span>
              <i className="fa-solid fa-phone"></i>
              <b>06 12 13 14 15</b>
            </span>
            <span>
              <i className="fa-solid fa-envelope"></i>
              <b>location@gmail.com</b>
            </span>
            <span>
              <i className="fa-solid fa-location-dot"></i>
              <b>Lyon, France</b>
            </span>
          </div>

          <div className="form-content">
            <form action="">
              <label htmlFor="">
                Nom complet {""} <b>*</b>
              </label>
              <input type="text" placeholder="Exemple: Eric André" />
              <label htmlFor="">
                Email {""} <b>*</b>
              </label>
              <input type="text" placeholder="Votremail@gmail.com" />
              <label htmlFor="">
                Racontez-nous {""} <b>*</b>
              </label>
              <input type="text" placeholder="Écrire ici" />
              <button>Envoyez nous un message</button>
            </form>
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

export default Contact;
