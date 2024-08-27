import React from "react";

const VisualSection = () => {
  return (
    <main className="relative w-full flex flex-col">
      {/* visual properties */}
      <div  className="relative w-full md:h-[500px] flex flex-row">
        {/* video section */}
        <div className="w-full md:w-[65%] h-full rounded-[10px] overflow-hidden">
          <img
            src="/recipes/image7.png"
            alt="food image"
            className="w-full object-cover h-full rounded-xl"
          />
          <div className="absolute w-14 h-14 md:w-28 md:h-28 bg-[#f9f3f3] rounded-full top-[35%] overflow-hidden left-[40%]  md:left-[28%] flex justify-center align-middle items-center">
            <img
              src="/assets/Polygon 1.svg"
              alt="food image"
              className=" w-5 h-5 md:w-10 object-center md:h-10"
            />
          </div>
        </div>

        {/* nutrition section */}
        <div className="hidden md:block w-[30%] h-full rounded-3xl bg-[#E7FAFE] ml-12 p-8">
          {/* header */}
          <h2 className="w-[80%] text-2xl font-bold">Nutrition Information</h2>
          {/* containts */}
          <div className="w-full  mt-7">
            <div className="flex flex-row items-center justify-between border-b-2 pb-2 px-2 border-gray-400 mb-3">
              <span className="text-base font-normal">Calories</span>
              <span className="font-semibold text-base">219.9 kcal</span>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 pb-2 px-2 border-gray-400 mb-3">
              <span className="text-base font-normal">Total Fat</span>
              <span className="font-semibold text-base">10.7 g</span>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 pb-2 px-2 border-gray-400 mb-3">
              <span className="text-base font-normal">Protein</span>
              <span className="font-semibold text-base">7.9 g</span>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 pb-2 px-2 border-gray-400 mb-3">
              <span className="text-base font-normal">Carbohydrate</span>
              <span className="font-semibold text-base">22.2 g</span>
            </div>
            <div className="flex flex-row items-center justify-between border-b-2 pb-2 px-2 border-gray-400 mb-3">
              <span className="text-base font-normal">Cholesterol</span>
              <span className="font-semibold text-base">34.7 mg</span>
            </div>
          </div>
          {/* message */}
          <p className="w-full text-center text-base font-medium  md:mt-16">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
      {/* message */}
      <div className="w-full md:h-20 mt-12">
        <p className="font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </main>
  );
};

export default VisualSection;
