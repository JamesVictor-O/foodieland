import React from "react";
import Time from "@/components/Time";
import Image from "next/image";


const FeaturedRecipe = () => {
  return (

    <>
      {/* for mobile */}
      <div className=" md:w-[50%] h-full p-4 lg:p-9 md:hidden bgImage opacity-60">
        {/* hot spices */}
        <div className=" p-1 w-[40%] lg:w-[25%] h-11 flex flex-row bg-white items-center justify-center rounded-full">
          <img src="homepage/hotRecipe.svg" alt="Hot Recipe" />
          <span className="ml-1 md:ml-4 font-medium font-serif">Hot recipe</span>
        </div>

        {/* massage */}
        <div className="mt-3 w-full">
          <h2 className=" text-[23px] w-full  lg:text-[46px] font-semibold  lg:w-[86%] text-black">Spicy delicious chicken wings</h2>
          <p className="text-[13px] md:text-[16px] font-normal font-sans">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
           
        {/* timer and fork */}
        <Time mealType={ "chicken" } />
        {/* profile  & play*/}
        <div className="flex flex-row  items-center mt-8 justify-between">
          {/* profile */}
          <div className="w-[163px] h-[50px] flex flex-row items-center ">
            <img src="homepage/Untitled design.jpg" alt="" className="object-cover w-[50px] h-[50px] rounded-full" />
            <div className="ml-4">
              <h2 className="text-[12px] font-bold">James Victor</h2>
              <span className="text-[10px]">15 March 2022</span>
            </div>
          </div>

          {/* play */}
          <div className="w-[163px] bg-black h-[50px] rounded-[15px] flex justify-center items-center flex-row  ">
            <span className="text-white text-[12px]">View Recipes</span>
            <img src="homepage/PlayCircle.svg" alt="play" className="ml-2"/>
          </div>
        </div>
      </div>
      {/* for deskstops */}
    <div className="relative hidden w-[100%] h-[449px] bg-[#E7FAFE] md:flex flex-row items-center rounded-[20px] overflow-hidden">
      <div className=" md:w-[50%] h-full p-4 lg:p-9">
        {/* hot spices */}
        <div className=" p-1 w-[40%] lg:w-[25%] h-11 flex flex-row bg-white items-center justify-center rounded-full">
          <img src="homepage/hotRecipe.svg" alt="Hot Recipe" />
          <span className="ml-1 md:ml-4 font-medium font-serif">Hot recipe</span>
        </div>

        {/* massage */}
        <div className="mt-3 w-full">
          <h2 className=" text-[23px] w-full  lg:text-[46px] font-semibold  lg:w-[86%] text-black">Spicy delicious chicken wings</h2>
          <p className="text-[13px] md:text-[16px] font-normal font-sans">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
           
        {/* timer and fork */}
        <Time mealType={ "chicken" } />
        {/* profile  & play*/}
        <div className="flex flex-row  items-center mt-8 justify-between">
          {/* profile */}
          <div className="w-[163px] h-[50px] flex flex-row items-center ">
            <img src="homepage/Untitled design.jpg" alt="" className="object-cover w-[50px] h-[50px] rounded-full" />
            <div className="ml-4">
              <h2 className="text-[12px] font-bold">James Victor</h2>
              <span className="text-[10px]">15 March 2022</span>
            </div>
          </div>

          {/* play */}
          <div className="w-[163px] bg-black h-[50px] rounded-[15px] flex justify-center items-center flex-row  ">
            <span className="text-white text-[12px]">View Recipes</span>
            <img src="homepage/PlayCircle.svg" alt="play" className="ml-2"/>
          </div>
        </div>
      </div>
      <div className="hidden md:flex h-[449px] w-[50%] ">
        <img alt="recipe image" src="/homepage/Mask Group.png" className="w-[100%] h-[100%] object-cover"/>
      </div>

      {/* badge */}
      <div className="hidden md:flex absolute w-[150px] h-[150px] right-[45%] top-10">
        <img src="homepage/Badge(1).png" alt="" />
      </div>
    </div>
    </>
  );
};

export default FeaturedRecipe;
