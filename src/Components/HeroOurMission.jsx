import React from "react";
import overlayandBlur from "../assets/images/Overlay+Blur.svg";

function HeroOurMission() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <img
        src={overlayandBlur}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl text-center">
        <p className="inter text-[10px] md:text-xs tracking-[0.5em] uppercase text-gray-400 mb-8">
          OUR VISION 2026
        </p>

        <h1 className="inter text-5xl sm:text-6xl md:text-7xl font-bold text-[#DCE6F5] leading-none">
          Building the Web's
          <br />
          Fastest Engines.
        </h1>

        <p className="inter mt-8 text-gray-400 max-w-2xl mx-auto leading-7 text-sm md:text-base">
          We engineer digital infrastructure that doesn't just run—it
          excels. LiteHunt is dedicated to the pursuit of absolute
          performance and infinite scalability.
        </p>
      </div>
    </div>
  );
}

export default HeroOurMission;