import product from "../assets/Product/product.png";

export default function ProductGrid() {
  return (
    <div className="bg-gray-100 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 hover:shadow-lg transition flex flex-col"
            >
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 flex justify-center">
                <img
                  src={product}
                  alt="excavator"
                  className="h-40 sm:h-56 w-full object-contain"
                />
              </div>

              <h3 className="text-orange-500 font-semibold mt-3 sm:mt-4 text-base sm:text-lg">
                EN220
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                Crawler Excavators
              </p>

              <hr className="mb-2 sm:mb-3" />

              <div className="text-xs sm:text-sm space-y-1 flex-1">
                <p>
                  Weight : <span className="font-semibold">19000 kg</span>
                </p>
                <p>
                  Numbers of gears : <span className="font-semibold">8F+8R</span>
                </p>
                <p>
                  Horse Power : <span className="font-semibold">50 Hp</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 sm:mt-4 gap-2 sm:gap-0">
                <button className="w-full sm:w-auto bg-orange-500 text-white px-4 py-2 text-sm rounded-md hover:bg-orange-600 transition">
                  View Details
                </button>

                <label className="flex items-center text-xs sm:text-sm text-gray-500 gap-1 mt-2 sm:mt-0">
                  <input type="checkbox" className="accent-orange-500" />
                  Compare
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}