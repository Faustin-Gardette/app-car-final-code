import React from "react";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="footer1">
        <li>
          <h2>NOUS</h2>
        </li>
        <li>
          <p>
            Nous offrons une large gamme de véhicules pour tous vos besoins de
            conduite. Nous avons la voiture idéale pour répondre à vos besoins.
          </p>
        </li>
        <li>
          <span>
            <li>
              <i className="fa-solid fa-phone"></i>
              <b> 06 12 13 14 15 </b>
            </li>
          </span>
        </li>
        <li>
          <span>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <b>location@gmail.com</b>
            </li>
          </span>
        </li>
      </div>
      <div className="footer2">
        <li>
          <h2>ENTREPRISE</h2>
        </li>
        <li>
          <p>Paris</p>
        </li>
        <li>
          <p>Carrière</p>
        </li>
        <li>
          <p>Blog</p>
        </li>
        <li>
          <p>Travail</p>
        </li>
      </div>
      <div className="footer3">
        <li>
          <h2>HORAIRES</h2>
        </li>
        <li>
          <p>Lundi au Vendredi : 8h/18h</p>
        </li>
        <li>
          <p>Samedi : 9h/19h</p>
        </li>
      </div>
      <div className="footer4">
        <h2>ABONNEMENT</h2>
        <p>
          Inscrivez votre adresse e-mail pour recevoir les dernières nouvelles
          et mises à jour
        </p>
        <input type="text" placeholder="Adresse Email" />
        <button>Envoyer</button>
      </div>
    </div>
  );
};

export default Footer;
