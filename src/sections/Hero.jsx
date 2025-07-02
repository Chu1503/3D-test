import React from "react";
import Chu from "../components/Models/Chu";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="w-full h-[100vh]">
        <figure>
          <div className="w-full h-[100vh]">
            <Chu />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
