import React from "react";
import Time from "@/components/Time";
import Image from "next/image";


const FeaturedRecipe = () => {
  return (

    <>
      {/* for mobile */}
      <div className="bgImage h-screen hidden mt-24">
        <div className="h-full p-4 bg-black opacity-60 flex flex-col items-center">
          {/* hot spices */}
          <div className=" p-1 w-[40%] lg:w-[25%] h-11 flex flex-row bg-white items-center justify-center rounded-full">
            <img src="homepage/hotRecipe.svg" alt="Hot Recipe" />
            <span className="ml-1 md:ml-4  font-serif font-bold">Hot recipe</span>
          </div>

          {/* massage */}
          <div className="mt-8 w-full">
            <h2 className=" text-2xl w-full font-semibold text-center  text-white">Spicy delicious chicken wings</h2>
            <p className="text-xl font-normal font-sans text-white text-center mt-2">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
          </div>
            
          {/* timer and fork */}
          <div className="mt-8 ">
          <Time mealType={ "chicken" } />
         </div>
          {/* profile  & play*/}
          <div className="flex flex-row  items-center mt-20 justify-between">
            {/* profile */}
            <div className="w-[163px] h-[50px] flex flex-row items-center ">
              <img src="homepage/Untitled design.jpg" alt="" className="object-cover w-[50px] h-[50px] rounded-full" />
              <div className="ml-4">
                <h2 className="text-[12px] font-bold">James Victor</h2>
                <span className="text-[10px]">15 March 2022</span>
              </div>
            </div>

            {/* play */}
            <div className="w-[163px] bg-white h-14 rounded-[15px] flex justify-center items-center flex-row  ">
              <span className="text-black font-bold text-[12px]">View Recipes</span>
              <img src="homepage/PlayCircle.svg" alt="play" className="ml-2 bg-black"/>
            </div>
          </div>
        </div>
     </div>
      {/* for deskstops */}
    <div className="relative  w-[100%] h-full md:h-[449px] bg-[#E7FAFE] flex flex-col md:flex-row items-center rounded-[20px] overflow-hidden mt-20">
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
        <div className=" h-full md:w-[50%] ">
          <Image src={"/homepage/Mask Group.png"} width={500} height={500} alt="recipe image" className="w-[100%] h-[100%] object-cover"/>
      </div>

      {/* badge */}
        <div className="hidden md:flex absolute w-[150px] h-[150px] right-[45%] top-10">
          <Image src={"/homepage/Badge(1).png"} alt="badge" width={100} height={100}/>
      </div>
    </div>
    </>
  );
};

export default FeaturedRecipe;
