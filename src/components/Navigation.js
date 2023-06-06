import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="nav">
      <div className="nav-logo">
        <ul>
          <NavLink to="/">
            <img src="./assets/logo.svg" alt="" />
          </NavLink>
        </ul>
      </div>

      <div className="nav-content">
        <div className="navlinks">
          <ul>
            <NavLink to="/">
              <li>Acceuil</li>
            </NavLink>
            <NavLink to="/service">
              <li>Service</li>
            </NavLink>
            <NavLink to="/voitures">
              <li>Voitures</li>
            </NavLink>
            <NavLink to="/avis">
              <li>Avis</li>
            </NavLink>
            <NavLink to="/nous">
              <li>Équipe</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="nav-co">
          <ul>
            <NavLink>
              <li className="connexion">Connexion</li>
            </NavLink>
            <NavLink>
              <li className="register">Inscription</li>
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="nav-mobile">
        <div className="mobile-burger" onClick={toggle}>
          <i className="fa-solid fa-bars"></i>
        </div>

        {show && (
          <div className="nav-content-mobile-all">
            <div className="nav-content-mobile">
              <div className="navlinks-mobile">
                <ul>
                  <NavLink to="/">
                    <li onClick={toggle}>Accueil</li>
                  </NavLink>
                  <NavLink to="/service">
                    <li onClick={toggle}>Service</li>
                  </NavLink>
                  <NavLink to="/voitures">
                    <li onClick={toggle}>Voitures</li>
                  </NavLink>
                  <NavLink to="/avis">
                    <li onClick={toggle}>Avis</li>
                  </NavLink>
                  <NavLink to="/nous">
                    <li onClick={toggle}>Équipe</li>
                  </NavLink>
                  <NavLink to="/contact">
                    <li onClick={toggle}>Contact</li>
                  </NavLink>
                </ul>
              </div>
              <div className="nav-co-mobile">
                <ul>
                  <NavLink>
                    <li className="connexion">Connexion</li>
                  </NavLink>
                  <NavLink>
                    <li className="register">Inscription</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
