import React from "react";
import about from "../assets/About/About.svg";

const PageBanner = () => {
  return (
    <section className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] bg-black overflow-hidden flex flex-col justify-center px-4 sm:px-6 md:px-24 rounded-br-[60px] sm:rounded-br-[70px] md:rounded-br-[80px]">
      <img
        src={about}
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="relative z-10 space-y-2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          Excavator
        </h1>
        <div className="flex justify-center md:justify-start items-center space-x-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mt-1">
          <span className="text-white">Home</span>
          <span className="text-[#F28C28] font-black">{">>"}</span>
          <span className="text-[#F28C28]">Product</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;