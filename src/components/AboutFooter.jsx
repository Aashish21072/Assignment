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
      <div className="relative z-20 px-6 md:px-24 -mb-32">
        <div className="bg-[#D97706] rounded-[24px] p-10 md:p-16 flex flex-col md:flex-row items-center relative overflow-visible shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="w-full md:w-1/2 text-left z-10">
            <h2 className="text-white text-3xl md:text-[42px] font-black uppercase leading-[1.1] tracking-tight mb-8">
              Engirise Your Global <br />
              Equipment Partner
            </h2>

            <button className="bg-white text-[#D97706] font-bold py-3 px-10 rounded-lg uppercase text-[11px] tracking-widest hover:bg-gray-100 transition-all shadow-md">
              Contact Us
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-3/5 flex justify-end pointer-events-none">
            <img
              src={loader}
              alt="Industrial Loader"
              className="w-auto h-[150%] object-contain transform translate-x-12 -translate-y-6 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <footer className="bg-black pt-52 pb-10 px-6 md:px-24 relative overflow-hidden">
        <div className="absolute top-8 left-0 w-full text-center opacity-10 pointer-events-none -translate-y-4">
          <span className="text-white text-[80px] md:text-[180px] font-semibold tracking-[0.3em] uppercase whitespace-nowrap">
            ENGIRISE
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gray-800 pb-20">
          <div className="md:col-span-3 space-y-6 text-left">
            <img src={EngiriseLogo} alt="Engirise" className="h-6 md:h-8" />

            <p className="text-gray-400 text-[11px] leading-relaxed font-medium">
              Engirise India manufactures next-gen eco-friendly heavy machinery
              designed for modern industrial projects in India.
            </p>
          </div>

          <div className="md:col-span-2 text-left space-y-4">
            <ul className="text-gray-500 text-[11px] space-y-2 uppercase font-bold tracking-tight">
              <li>Excavators</li>
              <li>Loaders</li>
              <li>Forklifts</li>
              <li>Cranes</li>
              <li>Road Machinery</li>
              <li>MEWPs</li>
              <li>Agriculture</li>
            </ul>
          </div>

          <div className="md:col-span-2 text-left space-y-4">
            <ul className="text-gray-500 text-[11px] space-y-2 uppercase font-bold tracking-tight">
              <li>About</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="md:col-span-1 text-left space-y-4">
            <ul className="text-gray-500 text-[11px] space-y-2 uppercase font-bold tracking-tight">
              <li>Service</li>
              <li>Part</li>
            </ul>
          </div>

          <div className="md:col-span-1 text-left space-y-4">
            <ul className="text-gray-500 text-[11px] space-y-2 uppercase font-bold tracking-tight">
              <li>Find a Dealer</li>
              <li>Become a Dealer</li>
            </ul>
          </div>

          <div className="md:col-span-3 text-left space-y-8">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase">
                India Address
              </h4>

              <p className="text-gray-500 text-[11px] leading-relaxed flex items-start font-bold">
                <span className="mr-3 text-white">📍</span>
                2068, U-Wing, Akshar Business Park <br />
                Sector-25, Vashi, Navi Mumbai-400705
              </p>
            </div>

            <div className="flex space-x-5 text-white">
              <FaFacebookF className="cursor-pointer hover:text-[#D97706] text-lg" />
              <FaInstagram className="cursor-pointer hover:text-[#D97706] text-lg" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#D97706] text-lg" />
              <FaTiktok className="cursor-pointer hover:text-[#D97706] text-lg" />
            </div>
          </div>
        </div>

        <div className="pt-10 text-center">
          <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.25em]">
            Copyright © 2025 Engirise Private Ltd.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutFooter;
