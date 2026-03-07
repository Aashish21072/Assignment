import React from "react";
import product from "../assets/Product/Product.png";

const products = new Array(9).fill({
  name: "EN220",
  category: "Crawler Excavators",
  weight: "19000 kg",
  gears: "8F+8R",
  power: "50 Hp",
});

export default function ProductGrid() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition"
          >
            <img
              src={product}
              alt="product"
              className="w-full h-40 object-contain mb-4"
            />

            <h3 className="text-orange-500 font-semibold">{item.name}</h3>
            <p className="text-gray-500 text-sm mb-3">{item.category}</p>

            <hr className="mb-3" />

            <div className="text-sm text-gray-700 space-y-1">
              <p>
                Weight : <span className="font-semibold">{item.weight}</span>
              </p>
              <p>
                Numbers of gears :{" "}
                <span className="font-semibold">{item.gears}</span>
              </p>
              <p>
                Horse Power :{" "}
                <span className="font-semibold">{item.power}</span>
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600">
                View Details
              </button>

              <label className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer">
                <input type="checkbox" className="accent-orange-500" />
                Compare
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
