import React from "react";
import Chu from "../components/Models/Chu";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-layout">
        <figure>
          <div className="hero-3d-layout">
            <Chu />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
