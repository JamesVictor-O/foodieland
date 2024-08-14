import React from "react";
import Image from "next/image";

const FeaturedRecipe = () => {
  return (
    <div className="relative w-[1280px] h-[449px] bg-red-200 flex flex-row items-center rounded-[20px] overflow-hidden">
      <div className="w-[50%] h-full">
        <div>
          <img src="homepage/hotRecipe.svg" alt="Hot Recipe" />
          <span>Hot recipe</span>
        </div>
      </div>
      <div className=" h-[449px] w-[50%] ">
        <img alt="recipe image" src="/homepage/Mask Group.png" className="w-[100%] h-[100%] object-cover"/>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
