import React from "react";
import img1 from "../assets/Home/Image1.png";
import img2 from "../assets/Home/Image2.png";
import img3 from "../assets/Home/Image3.png";
import img4 from "../assets/Home/Image4.png";
import img5 from "../assets/Home/Image5.png";
import img6 from "../assets/Home/Image6.png";
import img7 from "../assets/Home/Image7.png";
import img8 from "../assets/Home/Image8.png";
import img9 from "../assets/Home/Image9.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Product = ({ index, setIndex }) => {

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full h-[80vh] sm:h-[90vh] md:h-screen relative flex items-center justify-center overflow-x-hidden">

      <img
        src={images[index]}
        alt="machine"
        className="max-w-full max-h-[70vh] sm:max-h-[80vh] md:max-h-screen object-contain"
      />

      <div className="absolute right-4 sm:right-6 md:right-10 bottom-12 sm:bottom-16 flex gap-3 sm:gap-4">
        <button
          onClick={prevImage}
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold"
        >
          &lt;
        </button>

        <button
          onClick={nextImage}
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold"
        >
          &gt;
        </button>
      </div>

    </div>
  );
};

export default Product;