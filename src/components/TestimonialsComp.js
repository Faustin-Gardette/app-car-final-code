import React from "react";

const TestimonialsComp = () => {
  return (
    <div className="testimonials-compo">
      <div className="testimonials-content">
        <div className="testimonials-intro">
          <h2>Ils ont utilisé nos services</h2>
          <h1>Avis de nos clients</h1>
          <p>
            Nos clients ont fait l'expérience de nos services et de nos
            résultats, et ils sont impatients de partager leurs expériences
            positives avec vous.
          </p>
        </div>
        <div className="testimonials">
          <div className="testi">
            <h3>
              "Nous avons loué une voiture sur ce site et nous avons eu une
              expérience extraordinaire ! La réservation était facile et les
              tarifs abordables. "
            </h3>
            <div className="testi-type">
              <div className="testi-name">
                <img src="./assets/harry.jpg" alt="" />
                <span>
                  <h4>Parry Hotter</h4>
                  <p>Lyon</p>
                </span>
              </div>
              <div className="testi-i">
                <i className="fa-solid fa-quote-right"></i>
              </div>
            </div>
          </div>
          <div className="testi">
            <h3>
              "La voiture était en très bon état et a rendu notre voyage encore
              meilleur. Je recommande vivement ce site de location de voitures
              !"
            </h3>
            <div className="testi-type">
              <div className="testi-name">
                <img src="./assets/ron.jpg" alt="" />
                <span>
                  <h4>Ron Rizzly</h4>
                  <p>Paris</p>
                </span>
              </div>
              <div className="testi-i">
                <i className="fa-solid fa-quote-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComp;
