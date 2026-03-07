import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import loader from "../assets/Home/Wheel-Loader.svg";
import EngiriseLogo from "../assets/Home/Engirise.svg";

const AboutFooter = () => {
  return (
    <div className="bg-white">
      {/* Top CTA Section */}
      <div className="relative z-20 px-4 sm:px-6 md:px-24 -mb-24 md:-mb-32">
        <div className="bg-[#D97706] rounded-[24px] p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center relative overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="w-full md:w-1/2 text-left z-10 mb-6 md:mb-0">
            <h2 className="text-white text-2xl sm:text-3xl md:text-[42px] font-black uppercase leading-[1.1] tracking-tight mb-6 md:mb-8">
              Engirise Your Global <br className="hidden md:block" />
              Equipment Partner
            </h2>

            <button className="bg-white text-[#D97706] font-bold py-2.5 px-8 sm:py-3 sm:px-10 rounded-lg uppercase text-[10px] sm:text-[11px] tracking-widest hover:bg-gray-100 transition-all shadow-md">
              Contact Us
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-3/5 flex justify-end pointer-events-none">
            <img
              src={loader}
              alt="Industrial Loader"
              className="w-auto h-[120%] sm:h-[140%] md:h-[150%] object-contain transform translate-x-8 sm:translate-x-12 -translate-y-6 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black pt-36 sm:pt-44 md:pt-52 pb-10 px-4 sm:px-6 md:px-24 relative overflow-hidden">
        {/* Background text */}
        <div className="absolute top-8 left-0 w-full text-center opacity-10 pointer-events-none -translate-y-4">
          <span className="text-white text-[60px] sm:text-[120px] md:text-[180px] font-semibold tracking-[0.3em] uppercase whitespace-nowrap">
            ENGIRISE
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8 md:gap-12 border-b border-gray-800 pb-16 sm:pb-20">
          <div className="md:col-span-3 space-y-4 sm:space-y-6 text-left">
            <img src={EngiriseLogo} alt="Engirise" className="h-5 sm:h-6 md:h-8" />
            <p className="text-gray-400 text-[10px] sm:text-[11px] leading-relaxed font-medium">
              Engirise India manufactures next-gen eco-friendly heavy machinery
              designed for modern industrial projects in India.
            </p>
          </div>

          <div className="md:col-span-2 text-left space-y-2 sm:space-y-4">
            <ul className="text-gray-500 text-[9px] sm:text-[11px] space-y-1 sm:space-y-2 uppercase font-bold tracking-tight">
              <li>Excavators</li>
              <li>Loaders</li>
              <li>Forklifts</li>
              <li>Cranes</li>
              <li>Road Machinery</li>
              <li>MEWPs</li>
              <li>Agriculture</li>
            </ul>
          </div>

          <div className="md:col-span-2 text-left space-y-2 sm:space-y-4">
            <ul className="text-gray-500 text-[9px] sm:text-[11px] space-y-1 sm:space-y-2 uppercase font-bold tracking-tight">
              <li>About</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="md:col-span-1 text-left space-y-2 sm:space-y-4">
            <ul className="text-gray-500 text-[9px] sm:text-[11px] space-y-1 sm:space-y-2 uppercase font-bold tracking-tight">
              <li>Service</li>
              <li>Part</li>
            </ul>
          </div>

          <div className="md:col-span-1 text-left space-y-2 sm:space-y-4">
            <ul className="text-gray-500 text-[9px] sm:text-[11px] space-y-1 sm:space-y-2 uppercase font-bold tracking-tight">
              <li>Find a Dealer</li>
              <li>Become a Dealer</li>
            </ul>
          </div>

          <div className="md:col-span-3 text-left space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-4">
              <h4 className="text-white font-bold text-[10px] sm:text-sm uppercase">
                India Address
              </h4>

              <p className="text-gray-500 text-[9px] sm:text-[11px] leading-relaxed flex items-start font-bold">
                <span className="mr-2 sm:mr-3 text-white">📍</span>
                2068, U-Wing, Akshar Business Park <br />
                Sector-25, Vashi, Navi Mumbai-400705
              </p>
            </div>

            <div className="flex space-x-4 sm:space-x-5 text-white">
              <FaFacebookF className="cursor-pointer hover:text-[#D97706] text-base sm:text-lg" />
              <FaInstagram className="cursor-pointer hover:text-[#D97706] text-base sm:text-lg" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#D97706] text-base sm:text-lg" />
              <FaTiktok className="cursor-pointer hover:text-[#D97706] text-base sm:text-lg" />
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-10 text-center">
          <p className="text-gray-600 text-[8px] sm:text-[10px] uppercase font-bold tracking-[0.25em]">
            Copyright © 2025 Engirise Private Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutFooter;