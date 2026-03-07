import React from "react";

const About = () => {
  return (
    <section className="bg-white py-14 md:py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
      
      <div className="w-full md:w-1/2">
        <div className="inline-flex items-center space-x-2 bg-orange-100/50 px-3 py-1 rounded-full mb-5 md:mb-6">
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
          <span className="text-orange-600 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
            About Us
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10 leading-tight">
          Lorem ipsum dolor sit amet, <br className="hidden md:block" />
          consectetur
        </h2>

        <div className="flex space-x-10 md:space-x-12">
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-orange-500 tracking-tighter">
              2.5M +
            </h3>
            <p className="text-gray-400 text-[10px] md:text-[11px] font-bold uppercase mt-2">
              A crawler excavator
            </p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-black text-orange-500 tracking-tighter">
              25M +
            </h3>
            <p className="text-gray-400 text-[10px] md:text-[11px] font-bold uppercase mt-2">
              A crawler excavator
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
        <div className="space-y-5 md:space-y-6 text-gray-500 text-sm leading-relaxed mt-8 md:mt-16 mb-8 md:mb-10">
          <p>
            A crawler excavator is a heavy-duty machine built on robust tracks,
            designed for powerful digging, lifting, and earthmoving across rough
            or uneven terrain. Its stability and traction make it ideal for
            construction, mining, and infrastructure projects, and it is
            available in two types: electric crawler excavator and diesel
            crawler excavator.
          </p>

          <p>
            A crawler excavator is a heavy-duty machine built on robust tracks,
            designed for powerful digging, lifting, and earthmoving across rough
            or uneven terrain. Its stability and traction make it ideal for
            construction, mining, and infrastructure projects, and it is
            available in two types: electric crawler excavator and diesel
            crawler excavator.
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 md:py-3.5 md:px-10 rounded-md transition-all text-[11px] md:text-xs uppercase tracking-widest w-fit shadow-lg shadow-orange-200">
          About Us
        </button>
      </div>

    </section>
  );
};

export default About;