import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Vehicles from "./pages/Vehicles";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<About />} />
        <Route path="/voitures" element={<Vehicles />} />
        <Route path="/avis" element={<Testimonials />} />
        <Route path="/nous" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
