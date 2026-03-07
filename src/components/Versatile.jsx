import React from "react";

import v1 from "../assets/Home/versatile1.svg";
import v2 from "../assets/Home/versatile2.png";
import v3 from "../assets/Home/versatile3.png";
import v4 from "../assets/Home/versatile4.png";
import v5 from "../assets/Home/versatile5.png";
import v6 from "../assets/Home/versatile6.png";
import v7 from "../assets/Home/versatile7.png";
import v8 from "../assets/Home/versatile8.png";
import v9 from "../assets/Home/versatile9.png";

const versatileImages = [v1, v2, v3, v4, v5, v6, v7, v8, v9];

const Versatile = ({ index = 0 }) => {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen overflow-hidden bg-black">
      <img
        src={versatileImages[index]}
        alt="Versatile Section"
        className="w-full h-full object-cover object-center"
      />

      <button
        onClick={() => console.log("Contact Clicked")}
        className="absolute bottom-[8%] sm:bottom-[12%] md:bottom-[14%] lg:bottom-[15%] left-[6%] sm:left-[8%] md:left-[10%] w-[110px] sm:w-[140px] md:w-[160px] h-[38px] sm:h-[45px] md:h-[50px] bg-transparent cursor-pointer"
      />
    </section>
  );
};

export default Versatile;