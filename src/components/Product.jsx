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
    <div className="w-full relative flex items-center justify-center overflow-hidden">

      <img
        src={images[index]}
        alt="machine"
        className="w-full h-auto object-contain"
      />

      <div className="absolute right-4 bottom-6 flex gap-3">
        <button
          onClick={prevImage}
          className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold"
        >
          &lt;
        </button>

        <button
          onClick={nextImage}
          className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold"
        >
          &gt;
        </button>
      </div>

    </div>
  );
};

export default Product;