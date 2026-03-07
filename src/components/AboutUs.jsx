import React from 'react';
import about from '../assets/About/About.svg';

const AboutUs = () => {
  return (
    <section className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] bg-black overflow-hidden flex flex-col justify-center px-4 sm:px-6 md:px-24 rounded-br-[60px] sm:rounded-br-[70px] md:rounded-br-[80px]">
      
      <img
        src={about}
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative z-10 space-y-1 sm:space-y-2">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
          About Us
        </h1>

        <div className="flex items-center space-x-1 sm:space-x-2 text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
          <span className="text-white">Home</span>
          <span className="text-[#F28C28] font-black">{'>>'}</span>
          <span className="text-[#F28C28]">About Us</span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;