import { useState } from "react";

const tabs = [
  { name: "All product", count: 20 },
  { name: "Excavator", count: 4 },
  { name: "Crawler Excavators", count: 6 },
  { name: "Wheel Excavators", count: 10 },
  { name: "Diesel Crawler Excavator", count: 12 },
  { name: "Electric Crawler Excavator", count: 4 },
];

export default function ProductTabs() {
  const [active, setActive] = useState(0);

  return (
    <div className="text-center py-10 sm:py-14 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="inline-block px-3 py-1 text-xs sm:text-sm bg-orange-100 text-orange-500 rounded-full">
        Excavator
      </div>

      <h2 className="text-2xl sm:text-3xl font-semibold mt-3 sm:mt-4 leading-snug">
        Engineering Tomorrow,
        <br /> Today Engineering
      </h2>

      <div className="flex justify-center flex-wrap gap-3 sm:gap-6 mt-6 sm:mt-8 border-b pb-2 sm:pb-3 overflow-x-auto scrollbar-hide">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`flex items-center gap-2 pb-1 sm:pb-2 text-xs sm:text-sm whitespace-nowrap ${
              active === index
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-500"
            }`}
          >
            {tab.name}
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs ${
                active === index
                  ? "bg-orange-100 text-orange-500"
                  : "bg-gray-200"
              }`}
            >
              {String(tab.count).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}