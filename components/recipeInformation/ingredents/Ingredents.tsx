import React from "react";
import OtherRecipes from "@/components/otherRecipes/OtherRecipes";

const Ingredents = () => {
  return (
    <div className="w-full mt-10 md:flex flex-row">
      <div className="w-full md:w-[60%] px-4 md:px-0">
              <h2 className="font-semibold text-xl md:text-4xl ">Ingredients</h2>
              {/* for main dishes */}
        <div className="w-full mt-8">
                  <h4 className="font-semibold text-lg md:text-2xl">For main dish</h4>
                  {/* list of ingredents */}
          <div className="w-full h-14 p-2 md:p-4 border-b-2 ">
            <input type="radio" />
            <label className="ml-2 md:ml-4 text-sm md:text-lg font-light">Lorem ipsum dolor sit amet</label>
          </div>
          <div className="w-full h-14 p-2 md:p-4 border-b-2 ">
            <input type="radio" />
            <label className="ml-2 md:ml-4 text-sm md:text-lg font-light">Lorem ipsum dolor sit amet</label>
          </div>
          <div className="w-full h-14 p-2 md:p-4 border-b-2 ">
            <input type="radio" />
            <label className="ml-2 md:ml-4 text-sm md:text-lg font-light">Lorem ipsum dolor sit amet</label>
          </div>
          <div className="w-full h-14 p-2 md:p-4 border-b-2 ">
            <input type="radio" />
            <label className="ml-2 md:ml-4 text-sm md:text-lg font-light">Lorem ipsum dolor sit amet</label>
          </div>
          <div className="w-full h-14 p-2 md:p-4 border-b-2 ">
            <input type="radio" />
            <label className="ml-2 md:ml-4 text-sm md:text-lg font-light">Lorem ipsum dolor sit amet</label>
          </div>
        </div>
              {/* For the sauce*/}
              <div className="w-full mt-8">
                  <h4 className="font-semibold text-lg md:text-2xl">For the sauce</h4>
                  {/* list of ingredents */}
          <div className="w-full h-14 p-2 md:p-4 border-b-2 ">
            <input type="radio" />
            <label className="ml-2 md:ml-4 text-sm md:text-lg font-light">Lorem ipsum dolor sit amet</label>
          </div>
          <div className="w-full h-14 p-2 md:p-4 border-b-2 ">
            <input type="radio" />
            <label className="ml-2 md:ml-4 text-sm md:text-lg font-light">Lorem ipsum dolor sit amet</label>
          </div>
          <div className="w-full h-14 p-2 md:p-4 border-b-2 ">
            <input type="radio" />
            <label className="ml-2 md:ml-4 text-sm md:text-lg font-light">Lorem ipsum dolor sit amet</label>
          </div>
        </div>
      </div>

          {/* other recipes */}
          <OtherRecipes/>
    </div>
  );
};

export default Ingredents;
