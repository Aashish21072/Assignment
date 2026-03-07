import React from "react";
import forkliftImg from "../assets/About/forklift.png";

const AboutInfo = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-24 font-sans">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-[#FEF3C7] border border-[#FDE68A] px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-[#F28C28] rounded-full"></span>
          <span className="text-[#F28C28] text-[10px] font-bold uppercase tracking-widest">
            Engirise India
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl text-[#1A1A1A] leading-tight font-semibold">
          Engineering Tomorrow, <br /> Today Engineering
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2">
          <div className="space-y-8 text-[#6B7280] text-[13px] leading-relaxed font-medium">
            <p>
              A crawler excavator is a heavy-duty machine built on robust
              tracks, designed for powerful digging, lifting, and earthmoving
              across rough or uneven terrain. Its stability and traction make it
              ideal for construction, mining, and infrastructure projects, and
              it is available in two types: electric crawler excavator and
              diesel crawler excavator.
            </p>

            <p>
              A crawler excavator is a heavy-duty machine built on robust
              tracks, designed for powerful digging, lifting, and earthmoving
              across rough or uneven terrain. Its stability and traction make it
              ideal for construction, mining, and infrastructure projects, and
              it is available in two types: electric crawler excavator and
              diesel crawler excavator.
            </p>
          </div>

          <div className="flex space-x-12 mt-12">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-[#F28C28] leading-none">
                2014
              </span>
              <span className="text-[10px] uppercase font-bold text-[#9CA3AF] mt-2 tracking-widest text-center">
                Founded
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl font-black text-[#F28C28] leading-none">
                28+
              </span>
              <span className="text-[10px] uppercase font-bold text-[#9CA3AF] mt-2 tracking-widest text-center">
                States
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl font-black text-[#F28C28] leading-none">
                30+
              </span>
              <span className="text-[10px] uppercase font-bold text-[#9CA3AF] mt-2 tracking-widest text-center">
                Products
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center items-center py-12">
          <div className="relative">
            <img
              src={forkliftImg}
              alt="Engirise FL35 Forklift"
              className="w-full max-w-lg object-contain"
            />


            <div className="absolute -top-4 -right-8 bg-[#1A1A1A]/70 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-[12px] text-white text-center shadow-xl">
              <div className="font-bold text-2xl md:text-3xl leading-none">
                28+
              </div>
              <div className="text-[9px] uppercase font-black text-[#F28C28] mt-1 tracking-tighter">
                States
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 -translate-y-1/2 bg-[#1A1A1A]/70 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-[12px] text-white text-center shadow-xl">
              <div className="font-bold text-2xl md:text-3xl leading-none">
                30+
              </div>
              <div className="text-[9px] uppercase font-black text-[#F28C28] mt-1 tracking-tighter">
                Products
              </div>
            </div>

            <div className="absolute bottom-4 -left-8 bg-[#1A1A1A]/70 backdrop-blur-md border border-white/10 px-6 py-2.5 rounded-[12px] text-white text-center shadow-xl">
              <div className="font-bold text-2xl md:text-3xl leading-none">
                2014
              </div>
              <div className="text-[9px] uppercase font-black text-[#F28C28] mt-1 tracking-tighter">
                Founded
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfo;
