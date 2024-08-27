import React from "react";

const RecipeHeader = () => {
  return (
    <div className="w-full md:w-[70%] mb-4 md:h-44 md:mb-0 mt-24">
      <h2 className="w-full h-10 md:h-20 font-medium md:font-semibold text-2xl sm:text-4xl lg:text-6xl ">
        Health Japanese Fried Rice
      </h2>
      <div className="w-full md:w-[100%] h-12 flex flex-row items-center">
        {/* sections */}
        <div className="w-44 h-14 flex flex-row items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden ">
             <img src="/homepage/Untitled design.jpg" alt="profile Picture"  className="w-full object-contain"/>
          </div>
          
          <div className="  ml-2">
            <h3 className=" text-[10px] md:text-sm font-bold">John Smith</h3>
            <h3  className="  text-[10px] md:text-xs">15 March 2022</h3>
          </div>
        </div>
        {/* sections */}
        <div className="w-44 h-14 flex flex-row items-center">
          <div className="w-6 h-6 rounded-full overflow-hidden ">
             <img src="/homepage/Timer.svg" alt="profile Picture"  className="w-full object-contain"/>
          </div>
          
          <div className="  ml-2">
            <h3 className="  text-[10px] md:text-sm font-bold">PREP TIME</h3>
            <h3  className="  text-[10px] md:text-xs">15 Minutes</h3>
          </div>
        </div>
        {/* sections */}
        <div className="w-44 h-14 flex flex-row items-center">
          <div className="w-6 h-6 rounded-full overflow-hidden ">
             <img src="/homepage/Timer.svg" alt="profile Picture"  className="w-full object-contain"/>
          </div>
          
          <div className="  ml-2">
            <h3 className="  text-[10px] md:text-sm font-bold">COOK TIME</h3>
            <h3  className="  text-[10px] md:text-xs mt-1">15 Minutes</h3>
          </div>
        </div>
        {/* sections */}
        <div className="w-44 h-14 flex flex-row items-center">
          <div className="w-6 h-6 rounded-full overflow-hidden ">
             <img src="/homepage/ForkKnife.svg" alt="profile Picture"  className="w-full object-contain"/>
          </div>
          
          <div className="  ml-2">
            <h3 className="  text-[10px] md:text-sm">Chicken</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;
