import React from "react";
import loaderMachine from "../assets/Home/Wheel-Loader.svg";

const GlobalPartner = () => {
  return (
    <section className="relative w-full overflow-visible">

      <div className="relative w-full bg-[#D97706] flex items-center px-8 md:px-16 py-16">
        

        <div className="w-1/2 z-10">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            Engirise Your Global <br />
            Equipment Partner
          </h2>
        </div>

        <img
          src={loaderMachine}
          alt="Wheel Loader"
          className="absolute right-30 w-[340px] md:w-[440px] lg:w-[500px] object-contain -top-10 md:-top-12"
        />

        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90">
          <span className="text-white text-[1.6rem] md:text-[1.8rem] lg:text-[2.4rem] font-extrabold tracking-[0.18em]">
            ENGIRISE
          </span>
        </div>
        
      </div>
    </section>
  );
};

export default GlobalPartner;