import React, { useState } from "react";
import FAQcomp from "./FAQcomp";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question:
        "1. Quelle est la particularité de la comparaison des offres de location de voitures ?",
      answer:
        "Il est important de comparer les offres de location de voitures, car cela permet de trouver la meilleure offre correspondant à votre budget et à vos besoins, et de s'assurer que vous en avez pour votre argent. En comparant plusieurs options, vous pouvez trouver des offres qui proposent des prix plus bas, des services supplémentaires ou de meilleurs modèles de voitures. Vous pouvez trouver des offres de location de voiture en effectuant des recherches en ligne et en comparant les prix de différentes sociétés de location.",
      open: false,
    },
    {
      question: "2. Comment trouver les offres de location de voiture ?",
      answer:
        "Vous pouvez trouver des offres de location de voiture en effectuant des recherches en ligne et en comparant les prix de différentes sociétés de location. Des sites web tels qu'Expedia, Kayak et Travelocity vous permettent de comparer les prix et de voir les options de location disponibles. Il est également recommandé de s'inscrire à des bulletins d'information électroniques et de suivre les sociétés de location de voitures sur les médias sociaux afin d'être informé des offres spéciales ou des promotions.",
      open: false,
    },
    {
      question:
        "3. Comment puis-je trouver des prix de location de voiture aussi bas ?",
      answer:
        "Réservez à l'avance : Réserver votre voiture de location à l'avance permet souvent d'obtenir des prix plus bas. Comparez les prix de plusieurs sociétés : Utilisez des sites web comme Kayak, Expedia ou Travelocity pour comparer les prix de plusieurs sociétés de location de voitures. Recherchez des codes de réduction et des bons de réduction : Recherchez des codes de réduction et des bons de réduction que vous pouvez utiliser pour réduire le prix de la location. Louer dans un endroit situé en dehors de l'aéroport permet parfois d'obtenir des prix plus bas.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className="faq-content">
      <div className="faq-content-all">
        <div className="faq-text">
          <h2>FAQ</h2>
          <h1>Questions fréquentes</h1>
          <p>
            Questions fréquemment posées sur le processus de réservation de
            voitures de location sur notre site web : Réponses aux
            préoccupations et aux demandes les plus courantes.
          </p>
        </div>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQcomp
              faq={faq}
              index={index}
              key={index}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
