import React from "react";

const GetInTouch = () => {
  const contactCards = [
    {
      title: "Find a Dealer",
      desc: (
        <>
          Kickstart your project by contacting <br /> an authorized Engirise
          dealer.
        </>
      ),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
    },
    {
      title: "Contact Us",
      desc: (
        <>
          Reach out to our team of experts <br /> for information and assistance.
        </>
      ),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
    },
    {
      title: "Explore Engirise Africa",
      desc: (
        <>
          Discover our innovative solutions <br /> for the world's fastest growing markets.
        </>
      ),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9-9H3m9 9V3m0 18a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6 md:px-20 font-sans">
      <div className="flex flex-col items-center text-center mb-10 md:mb-12">
        <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full mb-4">
          <span className="w-2 h-2 bg-[#F28C28] rounded-full"></span>
          <span className="text-[#F28C28] text-[10px] font-bold uppercase tracking-widest">
            Contact Us
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Get In Touch
        </h2>
      </div>

      <div className="relative w-full rounded-[20px] overflow-hidden bg-black min-h-[450px] md:min-h-[380px]">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/src/assets/Home/product.png"
            alt="Machinery Background"
            className="w-full h-full object-cover grayscale brightness-50"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-10">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A]/70 backdrop-blur-md border border-gray-700/50 rounded-[15px] p-6 md:p-8 flex flex-col items-center text-center justify-between transition-transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-[#F28C28] rounded-[10px] flex items-center justify-center text-white mb-5">
                {card.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-base md:text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[220px] mx-auto">
                  {card.desc}
                </p>
              </div>

              <button className="mt-6 bg-[#F28C28] hover:bg-orange-600 text-white text-[10px] md:text-xs font-bold py-2.5 px-6 md:px-8 rounded-[5px] uppercase tracking-wider flex items-center transition-all">
                Learn More <span className="ml-2">›</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;