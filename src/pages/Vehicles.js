import React from "react";
import Navigation from "../components/Navigation";
import Pub from "../components/Pub";
import Footer from "../components/Footer";
import ButtonUp from "../components/ButtonUp";

const Vehicle = () => {
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
            <h3>Nos voitures</h3>
            <p>
              <a href="/">Accueil</a> {""}/{""} Voitures
            </p>
          </div>
          <Navigation />
        </div>
      </div>
      <div className="section-car-container">
        <div className="car-box-all">
          <div className="car-box">
            <div className="car-box-img">
              <img src="./assets/audi.png" alt="" />
            </div>
            <div className="car-box-container">
              <div className="car-box-title-price-all">
                <div className="car-box-title">
                  <p>Audi A1</p>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="car-box-price">
                  <h4>45 €</h4>
                  <p>journée</p>
                </div>
              </div>
              <div className="car-box-descr">
                <div className="car-box-descr-grid1">
                  <span>
                    <i className="fa-solid fa-car-side"></i>
                    <b>Audi</b>
                  </span>
                  <span>
                    <i className="fa-solid fa-car-side"></i>
                    <b>4 / 5</b>
                  </span>
                </div>
                <div className="car-box-descr-grid2">
                  <span>
                    <b>Manuel </b>
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                  <span>
                    <b>Diesel</b>
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                </div>
              </div>
              <div className="car-box-button">
                <button>Réservez</button>
              </div>
            </div>
          </div>
          <div className="car-box">
            <div className="car-box-img">
              <img src="./assets/golf.png" alt="" />
            </div>
            <div className="car-box-container">
              <div className="car-box-title-price-all">
                <div className="car-box-title">
                  <p>Golf 6</p>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="car-box-price">
                  <h4>37 €</h4>
                  <p>journée</p>
                </div>
              </div>
              <div className="car-box-descr">
                <div className="car-box-descr-grid1">
                  <span>
                    <i className="fa-solid fa-car-side"></i>
                    <b>VW</b>
                  </span>
                  <span>
                    <i className="fa-solid fa-car-side"></i>
                    <b>4 / 5</b>
                  </span>
                </div>
                <div className="car-box-descr-grid2">
                  <span>
                    <b>Manuel </b>
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                  <span>
                    <b>Diesel</b>
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                </div>
              </div>
              <div className="car-box-button">
                <button>Réservez</button>
              </div>
            </div>
          </div>
          <div className="car-box">
            <div className="car-box-img">
              <img src="./assets/toyota.png" alt="" />
            </div>
            <div className="car-box-container">
              <div className="car-box-title-price-all">
                <div className="car-box-title">
                  <p>Toyota</p>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="car-box-price">
                  <h4>30 €</h4>
                  <p>journée</p>
                </div>
              </div>
              <div className="car-box-descr">
                <div className="car-box-descr-grid1">
                  <span>
                    <i className="fa-solid fa-car-side"></i>
                    <b>Camry</b>
                  </span>
                  <span>
                    <i className="fa-solid fa-car-side"></i>
                    <b>4 / 5</b>
                  </span>
                </div>
                <div className="car-box-descr-grid2">
                  <span>
                    <b>Manuel </b>
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                  <span>
                    <b>Diesel</b>
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                </div>
              </div>
              <div className="car-box-button">
                <button>Réservez</button>
              </div>
            </div>
          </div>
          <div className="car-box">
            <div className="car-box-img">
              <img src="./assets/bmw.png" alt="" />
            </div>
            <div className="car-box-container">
              <div className="car-box-title-price-all">
                <div className="car-box-title">
                  <p>BMW 320</p>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="car-box-price">
                  <h4>35 €</h4>
                  <p>journée</p>
                </div>
              </div>
              <div className="car-box-descr">
                <div className="car-box-descr-grid1">
                  <span>
                    <i className="fa-solid fa-car-side"></i>
                    <b>Modern</b>
                  </span>
                  <span>
                    <i className="fa-solid fa-car-side"></i>
                    <b>4 / 5</b>
                  </span>
                </div>
                <div className="car-box-descr-grid2">
                  <span>
                    <b>Manuel </b>
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                  <span>
                    <b>Diesel</b>
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                </div>
              </div>
              <div className="car-box-button">
                <button>Réservez</button>
              </div>
            </div>
          </div>
          <div className="car-box">
            <div className="car-box-img">
              <img src="./assets/benz.png" alt="" />
            </div>
            <div className="car-box-container">
              <div className="car-box-title-price-all">
                <div className="car-box-title">
                  <p>Mercedes</p>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="car-box-price">
                  <h4>50 €</h4>
                  <p>journée</p>
                </div>
              </div>
              <div className="car-box-descr">
                <div className="car-box-descr-grid1">
                  <span>
                    <i className="fa-solid fa-car-side"></i>
                    <b>Benz GLK</b>
                  </span>
                  <span>
                    <i className="fa-solid fa-car-side"></i>
                    <b>4 / 5</b>
                  </span>
                </div>
                <div className="car-box-descr-grid2">
                  <span>
                    <b>Manuel </b>
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                  <span>
                    <b>Diesel</b>
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                </div>
              </div>
              <div className="car-box-button">
                <button>Réservez</button>
              </div>
            </div>
          </div>
          <div className="car-box">
            <div className="car-box-img">
              <img src="./assets/passat.png" alt="" />
            </div>
            <div className="car-box-container">
              <div className="car-box-title-price-all">
                <div className="car-box-title">
                  <p>VW Passat</p>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <div className="car-box-price">
                  <h4>25 €</h4>
                  <p>journée</p>
                </div>
              </div>
              <div className="car-box-descr">
                <div className="car-box-descr-grid1">
                  <span>
                    <i className="fa-solid fa-car-side"></i>
                    <b>CC</b>
                  </span>
                  <span>
                    <i className="fa-solid fa-car-side"></i>
                    <b>4 / 5</b>
                  </span>
                </div>
                <div className="car-box-descr-grid2">
                  <span>
                    <b>Manuel </b>
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                  <span>
                    <b>Diesel</b>
                    <i className="fa-solid fa-car-side"></i>
                  </span>
                </div>
              </div>
              <div className="car-box-button">
                <button>Réservez</button>
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

export default Vehicle;
