import React from "react";
import EngiriseLogo from "../assets/Home/Engirise.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-6 md:px-24 font-sans mt-16">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        <div className="flex flex-col items-start space-y-4">
          <img src={EngiriseLogo} alt="Engirise" className="h-6 md:h-8" />

          <p className="text-gray-400 text-[14px] max-w-[250px]">
            Engirise India manufactures next-gen, eco-conscious heavy machinery
            adapted to Indian industrial projects.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-[15px] font-bold">Machinery</h4>

          <ul className="text-gray-400 text-[14px] space-y-2 font-medium">
            <li className="hover:text-white cursor-pointer transition-colors">
              Products
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Service
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Part
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[15px] font-bold">Company</h4>

          <ul className="text-gray-400 text-[14px] space-y-2">
            <li className="hover:text-white cursor-pointer transition-colors">
              About Us
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Career
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Contact Us
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-[15px] font-bold">Help</h4>

          <ul className="text-gray-400 text-[14px] space-y-2 font-medium">
            <li className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </li>
          </ul>
        </div>


        <div className="flex flex-col space-y-4">
          <h4 className="text-[15px] font-bold">Address</h4>

          <p className="text-gray-400 text-[14px] leading-relaxed">
            2068, U-Wing, Akshar Business Park,
            <br /> Sector-25, Vashi,
            <br /> Navi Mumbai-400705
          </p>

          <div className="flex space-x-3">
            <a
              href="#"
              className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="#"
              className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <FaInstagram size={14} />
            </a>

            <a
              href="#"
              className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="#"
              className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <FaTiktok size={14} />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-800 pt-4 text-center">
        <p className="text-gray-400 text-[14px] uppercase tracking-widest font-bold">
          Copyright © 2025 Engirise Private Ltd.
        </p>
      </div>

    </footer>
  );
};

export default Footer;