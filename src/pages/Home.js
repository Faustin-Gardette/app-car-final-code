import React from "react";
import Navigation from "../components/Navigation";
import TestimonialsComp from "../components/TestimonialsComp";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import PlanBlob from "../components/PlanBlob";
import ButtonUp from "../components/ButtonUp";

const Home = () => {
  return (
    <div>
      <ButtonUp />
      <div className="home">
        <Navigation />
        <div className="home-content">
          <div className="home-text">
            <h4>Réservez votre voyage !</h4>
            <h1>
              Économisez <span>gros</span> sur votre location de voiture
            </h1>
            <p>
              Louez la voiture de vos rêves. Prix imbattables, kilométrage
              illimité, options de prise en charge flexibles et bien plus
              encore.
            </p>
            <div className="button">
              <li className="button1">
                <h5>Réservation</h5>
                <i className="fa-solid fa-circle-check"></i>
              </li>

              <li className="button2">
                <h5>Informations</h5>
                <i className="fa-solid fa-angle-right"></i>
              </li>
            </div>
          </div>
          <div className="home-car">
            <img src="./assets/home-car.png" alt="" />
          </div>
        </div>
      </div>

      <div className="booking">
        <div className="title">
          <h2>Réservez une voiture</h2>
        </div>
        <div className="form-car">
          <div className="form-car-box">
            <label for="">
              <i className="fa-solid fa-car"></i>Sélectionnez une voiture{" "}
              <b>*</b>
            </label>
            <select name="" id="write">
              <option value="">Sélectionnez votre voiture</option>
              <option value="1">Audi A1</option>
              <option value="2">Golf 6</option>
              <option value="3">Toyota Camry</option>
              <option value="4">BMW 320 </option>
              <option value="5">Mercedes-Benz</option>
              <option value="6">Passat CC</option>
            </select>
          </div>
          <div className="form-car-box">
            <label for="">
              <i className="fa-solid fa-location-dot"></i> Départ <b>*</b>
            </label>
            <select name="" id="write">
              <option value="">Départ</option>
              <option value="1">Paris</option>
              <option value="2">Marseille</option>
              <option value="3">Lyon</option>
              <option value="4">Toulouse</option>
              <option value="5">Bordeaux</option>
              <option value="6">Strasbourg</option>
            </select>
          </div>
          <div className="form-car-box">
            <label for="">
              <i className="fa-solid fa-location-dot"></i>
              Arrivée <b>*</b>
            </label>
            <select name="" id="write">
              <option value="">Arrivée</option>
              <option value="1">Paris</option>
              <option value="2">Marseille</option>
              <option value="3">Lyon</option>
              <option value="4">Toulouse</option>
              <option value="5">Bordeaux</option>
              <option value="6">Strasbourg</option>
            </select>
          </div>
          <div className="form-car-box">
            <label for="">
              <i className="fa-regular fa-calendar-days "></i>
              Date départ <b>*</b>
            </label>
            <input
              type="date"
              id="write"
              name="trip-start"
              value=""
              min="2018-01-01"
              max="2018-12-31"
            />
          </div>
          <div className="form-car-box">
            <label for="">
              <i className="fa-regular fa-calendar-days "></i>
              Date arrivée <b>*</b>
            </label>
            <input
              type="date"
              id="write"
              name="trip-end"
              value=""
              min="2018-01-01"
              max="2018-12-31"
            />
          </div>
          <div className="form-car-box-button">
            <input type="submit" value="Rechercher" />
          </div>
        </div>
      </div>

      <div className="compo-planblob">
        <PlanBlob />
      </div>
      <div className="pub-home">
        <div className="pub-component">
          <h1>Faites des économies avec notre location peu chère !</h1>
          <h4>
            Assistance <b>24/7</b>
          </h4>
        </div>
      </div>

      <div className="why-choose">
        <div className="choose-container">
          <img src="./assets/3cars.png" alt="" />
          <div className="choose-all">
            <div className="choose-text">
              <h4>Pourquoi nous choisir ?</h4>
              <h2>Les meilleures offres que vous puissiez trouver</h2>
              <p>
                Découvrez les meilleures affaires que vous puissiez trouver
                grâce à nos offres imbattables. Nous nous engageons à vous
                fournir le meilleur rapport qualité-prix, afin que vous puissiez
                profiter de services et de produits de qualité supérieure sans
                vous ruiner. Nos offres sont conçues pour vous faire vivre
                l'expérience ultime de la location, alors ne ratez pas
                l'occasion d'économiser
              </p>
              <button>
                Détails <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>

            <div className="choose-elements">
              <div className="element">
                <img src="./assets/car-transport.svg" alt="" />
                <div className="element-right">
                  <h4>Liberté de conduite</h4>
                  <p>
                    Faites passer votre expérience de conduite au niveau
                    supérieur grâce à nos véhicules de premier choix pour vos
                    aventures à travers le pays.
                  </p>
                </div>
              </div>
              <div className="element">
                <img src="./assets/dollar.svg" alt="" />
                <div className="element-right">
                  <h4>Prix tout compris</h4>
                  <p>
                    Obtenez tout ce dont vous avez besoin à un prix bas et
                    transparent grâce à notre politique de prix tout compris.
                  </p>
                </div>
              </div>
              <div className="element">
                <img src="./assets/money.svg" alt="" />
                <div className="element-right">
                  <h4>Pas de frais cachés</h4>
                  <p>
                    Profitez d'une tranquillité d'esprit grâce à notre politique
                    d'absence de frais cachés. Nous croyons en une tarification
                    transparente et honnête.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Testimonials-component">
        <TestimonialsComp />
      </div>

      <div>
        <Faq />
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
