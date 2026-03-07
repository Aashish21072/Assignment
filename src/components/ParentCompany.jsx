import React from "react";
import { FiGlobe } from "react-icons/fi";

const ParentCompany = () => {
  const companyCards = Array(6).fill({
    title: "Parent Company",
    desc: "We operate across India, Africa, and the Middle East, with a rapidly expanding global footprint.",
  });

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-24 font-sans text-center">
      <div className="flex flex-col items-center mb-12 sm:mb-16">
        <div className="inline-flex items-center space-x-2 bg-[#FEF3C7] border border-[#FDE68A] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6">
          <span className="w-2 h-2 bg-[#F28C28] rounded-full"></span>
          <span className="text-[#F28C28] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
            Engirise India
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#1A1A1A] leading-snug sm:leading-tight md:leading-tight max-w-xl sm:max-w-2xl font-semibold">
          Engineering Tomorrow, <br /> Today Engineering
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {companyCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-[20px] sm:rounded-[24px] p-6 sm:p-10 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-[#F28C28] mb-6 sm:mb-8">
              <FiGlobe size={32} className="sm:w-10 sm:h-10" strokeWidth={1.5} />
            </div>

            <h3 className="text-[#F28C28] text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              {card.title}
            </h3>

            <p className="text-[#6B7280] text-[12px] sm:text-[13px] leading-relaxed font-medium">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParentCompany;