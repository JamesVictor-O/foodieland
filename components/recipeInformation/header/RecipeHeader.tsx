import React from "react";
import Image from "next/image";

const RecipeHeader = ({ headerDetails}:{ headerDetails:[string,string]}) => {
  return (
    <div className="w-full md:w-[70%] mb-4 md:h-44 md:mb-0 mt-24">
      <h2 className="w-full h-10 md:h-20 font-bold md:font-semibold text-lg sm:text-2xl lg:text-4xl mb-6 md:mb-3">
        {headerDetails[0]}
      </h2>
      <div className="w-full md:w-[100%] h-12 flex flex-row items-center">
        {/* sections */}
        <div className="w-44 h-14 flex flex-row items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden ">
            <Image src={'/homepage/Untitled design.jpg'} alt="profile Picture" width={100} height={100} className="w-full object-contain"/>
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
            <h3 className="  text-[10px] md:text-sm">{headerDetails[1]}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;
