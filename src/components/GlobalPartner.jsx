import React from "react";
import loaderMachine from "../assets/Home/Wheel-Loader.svg";

const GlobalPartner = () => {
  return (
    <section className="relative w-full overflow-visible">
      <div className="relative w-full bg-[#D97706] flex flex-col md:flex-row items-center px-4 sm:px-8 md:px-16 py-12 sm:py-16">
        <div className="w-full md:w-1/2 z-10 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Engirise Your Global <br />
            Equipment Partner
          </h2>
        </div>

        <img
          src={loaderMachine}
          alt="Wheel Loader"
          className="absolute right-0 md:right-10 lg:right-16 w-[200px] sm:w-[280px] md:w-[340px] lg:w-[440px] object-contain -top-6 sm:-top-8 md:-top-12"
        />

        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 md:rotate-90">
          <span className="text-white text-[1.2rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.4rem] font-extrabold tracking-[0.15em] sm:tracking-[0.18em]">
            ENGIRISE
          </span>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartner;