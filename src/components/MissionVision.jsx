import React from "react";
import { FiGlobe } from "react-icons/fi";
import waveBg from "../assets/About/About.svg";

const MissionVision = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-24 overflow-visible">
      <div className="absolute top-0 left-0 h-full w-[85%] bg-black z-0 rounded-r-[40px] overflow-visible"></div>

      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src={waveBg}
          alt="Wave Background"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 overflow-visible">
        <div className="w-full lg:w-1/3 text-left">
          <div className="inline-flex items-center space-x-2 bg-[#FEF3C7]/10 border border-[#FDE68A]/20 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#F28C28] rounded-full"></span>
            <span className="text-[#F28C28] text-[10px] font-bold uppercase tracking-widest">
              Engirise India
            </span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-normal leading-tight mb-6">
            Engineering Tomorrow, <br /> Today Engineering
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            A crawler excavator is a heavy-duty machine built on robust tracks,
            designed for powerful operations across rough terrain.
          </p>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-visible">
          <div className="bg-white rounded-[24px] p-10 flex flex-col items-start shadow-2xl">
            <div className="bg-[#F28C28] p-4 rounded-full text-white mb-8">
              <FiGlobe size={32} />
            </div>
            <h3 className="text-[#F28C28] text-xl font-bold mb-4 uppercase tracking-tight">
              Our Mission
            </h3>
            <p className="text-[#6B7280] text-[13px] leading-relaxed">
              Innovating and engineering smarter, stronger, and more reliable
              machines that elevate performance across every industry.
            </p>
          </div>

          <div className="bg-white rounded-[24px] p-10 flex flex-col items-start shadow-2xl relative z-20 translate-x-12 md:translate-x-16 lg:translate-x-24">
            <div className="bg-[#F28C28] p-4 rounded-full text-white mb-8">
              <FiGlobe size={32} />
            </div>
            <h3 className="text-[#F28C28] text-xl font-bold mb-4 uppercase tracking-tight">
              Our Vision
            </h3>
            <p className="text-[#6B7280] text-[13px] leading-relaxed">
              Innovating and engineering smarter, stronger, and more reliable
              machines that elevate performance across every industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
