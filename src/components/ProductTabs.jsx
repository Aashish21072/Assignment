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
    <div className="text-center py-14 bg-gray-100">
      <div className="inline-block px-4 py-1 text-sm bg-orange-100 text-orange-500 rounded-full">
        Excavator
      </div>

      <h2 className="text-3xl font-semibold mt-4">
        Engineering Tomorrow,
        <br /> Today Engineering
      </h2>

      <div className="flex justify-center flex-wrap gap-6 mt-8 border-b pb-3">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`flex items-center gap-2 pb-2 text-sm ${
              active === index
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-500"
            }`}
          >
            {tab.name}

            <span
              className={`px-2 py-0.5 rounded-full text-xs ${
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
