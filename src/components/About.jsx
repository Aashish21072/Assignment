import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20 px-12 md:px-24 flex flex-col md:flex-row gap-16 items-start">
      <div className="w-full md:w-1/2">
        <div className="inline-flex items-center space-x-2 bg-orange-100/50 px-3 py-1 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
          <span className="text-orange-600 text-[10px] font-bold uppercase tracking-widest">
            About Us
          </span>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mb-10 leading-tight">
          Lorem ipsum dolor sit amet, <br />
          consectetur
        </h2>

        <div className="flex space-x-12">
          <div>
            <h3 className="text-5xl font-black text-orange-500 tracking-tighter">
              2.5M +
            </h3>
            <p className="text-gray-400 text-[11px] font-bold uppercase mt-2">
              A crawler excavator
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-orange-500 tracking-tighter">
              25M +
            </h3>
            <p className="text-gray-400 text-[11px] font-bold uppercase mt-2">
              A crawler excavator
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
        <div className="space-y-6 text-gray-500 text-sm leading-relaxed mt-16 mb-10">
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

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-10 rounded-md transition-all text-xs uppercase tracking-widest w-fit shadow-lg shadow-orange-200">
          About Us
        </button>
      </div>
    </section>
  );
};

export default About;
