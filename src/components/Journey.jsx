import React from "react";
import factoryTop from "../assets/About/Image1.svg";
import factoryBottom from "../assets/About/Image2.svg";

const Journey = () => {
  const milestones = [
    { id: "01", title: "2014 Engirise Established" },
    { id: "02", title: "2014 Engirise Established" },
    { id: "03", title: "2014 Engirise Established" },
    { id: "04", title: "2014 Engirise Established" },
    { id: "05", title: "2014 Engirise Established" },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-24 font-sans">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-[#FEF3C7] border border-[#FDE68A] px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 bg-[#F28C28] rounded-full"></span>
          <span className="text-[#F28C28] text-[10px] font-bold uppercase tracking-widest">
            Journey
          </span>
        </div>
        <h2 className="text-3xl md:text-[40px] font-medium text-[#1A1A1A] leading-tight">
          We are a manufacturer. <br /> Tomorrow, Today Engineering
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 relative min-h-[500px]">
          <div className="relative z-10 w-4/5 rounded-[32px] overflow-hidden shadow-2xl">
            <img
              src={factoryTop}
              alt="Manufacturing"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute bottom-[-250px] right-0 w-4/5 rounded-[32px] overflow-hidden shadow-2xl border-[12px] border-white z-20">
            <img
              src={factoryBottom}
              alt="Factory Floor"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className={`group flex items-start border border-[#FDE68A]/30 rounded-[20px] p-6 transition-all duration-300
        ${idx % 2 === 0 ? "ml-8 md:ml-12" : ""} bg-[#FFFBEB] hover:bg-[#FEF3C7]`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F28C28] flex items-center justify-center text-white font-black text-lg mr-6 shadow-lg shadow-orange-200">
                {item.id}
              </div>

              <div className="flex flex-col">
                <h4 className="text-[#F28C28] font-bold text-lg leading-tight mb-1">
                  {item.title}
                </h4>
                <p className="text-[#6B7280] text-[13px] font-medium leading-relaxed">
                  We operate across India, Africa, and the Middle East, with a
                  rapidly expanding global footprint.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
