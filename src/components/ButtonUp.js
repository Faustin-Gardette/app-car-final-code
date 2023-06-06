import React, { useState, useEffect } from "react";

function ButtonUp() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="scrollToTopBtn"
      onClick={scrollToTop}
      style={{ display: showButton ? "block" : "none" }}
    >
      <i className="fa-solid fa-angle-up"></i>
    </button>
  );
}

export default ButtonUp;
