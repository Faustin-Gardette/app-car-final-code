import React from "react";

const FAQcomp = ({ faq, index, toggleFAQ }) => {
  return (
    <div className="faq-box">
      <div
        className={"faq-question " + (faq.open ? "open" : "")}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        {faq.question} <i className="fa-solid fa-angle-down"></i>
      </div>
      <div
        className={"faq-answer " + (faq.open ? "open" : "")}
        key={index}
        onClick={() => toggleFAQ(index)}
      >
        {faq.answer}
      </div>
    </div>
  );
};

export default FAQcomp;
