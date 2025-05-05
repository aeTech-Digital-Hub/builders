import React from "react";


const PropertyCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[360px]">
      <div className="relative">
        {/* <img src={#} alt="Property" className="w-full h-56 object-cover" /> */}
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-40 text-white p-2 text-sm">
          Western
        </div>
        <div className="absolute top-2 right-2">
          <button className="bg-white p-1 rounded-full shadow">
            ❤️
          </button>
        </div>
        <div className="absolute bottom-0 right-0 bg-black bg-opacity-40 text-white p-2 text-sm font-semibold">
          C18,000
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold mb-1">Grace-view Meadows</h2>
        <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
          18, Macaulay way. <span className="font-semibold">Northern</span>
        </p>

        <div className="flex justify-between text-sm text-gray-700 mb-4">
          <div className="flex items-center gap-1"> 3</div>
          <div className="flex items-center gap-1"> 2</div>
          <div className="flex items-center gap-1"> 4</div>
          <div className="flex items-center gap-1">2</div>
        </div>

        <div className="border rounded-lg p-2 shadow-sm flex flex-col items-center text-center">
          {/* <img src={floorPlanImg} alt="Plan" className="w-20 mb-1" /> */}
          <a href="#" className="text-[#CD9F70] underline font-semibold text-sm">View Plan</a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
