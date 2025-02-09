import React from "react";
import GlitchEffect from "../components/GlitchEffect";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/main.css";
import "../assets/fonts/PhelixBoomgartner.otf";
import "../assets/fonts/Doctor Glitch.otf";
import "../assets/css/bootstrap4-neon-glow.css";
import "../assets/css/bootstrap4-neon-glow.min.css";

const Home = () => {
  return (
    <div id="main">
      <GlitchEffect />
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
