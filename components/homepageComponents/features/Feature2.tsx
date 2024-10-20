import React from "react";
import Time from "@/components/Time";
import Image from "next/image";


const Feature2 = () => {
  return (
    <>
      {/* for mobile */}
      <div className="bgImage2">
        <div className="md:hidden w-[100%] h-full p-2 bg-black opacity-55">
          {/* massage */}
          <div className="mt-3">
            <h2 className="text-[30px] font-semibold w-[100%] text-[#41a4f0] text-center">
              Everyone can be a chef in their own kitchen
            </h2>
            <p className="text-[16px] font-normal font-sans text-white text-center mt-2 md:mt-0">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </p>
          </div>

          {/* profile  & play*/}
          <div className="flex flex-row  items-center mt-8 justify-between align-middle w-full">
            {/* play */}
            <div className="w-[163px] bg-white h-[50px] rounded-[15px] flex justify-center items-center flex-row mt-9 ">
              <span className="text-black text-[12px]">Learn More</span>
              <Image width={50} height={50} src="homepage/PlayCircle.svg" alt="play" className="ml-2 w-10 bg-black"/>
            </div>
          </div>
        </div>
      </div>
      {/* for desktop */}
      <div className="hidden relative w-[1280px] h-[449px] bg-white md:flex flex-row items-center rounded-[20px] overflow-hidden mt-12">
        <div className="w-[50%] h-full p-9">
          {/* massage */}
          <div className="mt-3">
            <h2 className="text-[46px] font-semibold w-[516px] text-black text-start">
              Everyone can be a chef in their own kitchen
            </h2>
            <p className="text-[16px] font-normal font-sans">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </p>
          </div>

          {/* profile  & play*/}
          <div className="flex flex-row  items-center mt-8 justify-between">
            {/* play */}
            <div className="w-[163px] bg-black h-[50px] rounded-[15px] flex justify-center items-center flex-row mt-9 ">
              <span className="text-white text-[12px]">Learn More</span>
              <img src="homepage/PlayCircle.svg" alt="play" className="ml-2 w-10" />
            </div>
          </div>
        </div>
        <div className="relative h-[449px] w-[50%]  bg-gradient-to-t from-[#E7FAFE] to-[#f5f7f8]">
          <Image
             width={100}
             height={50}
            alt="recipe image"
            src="/homepage/dressed-uniform.png"
            className="w-[100%] h-[100%] object-cover"
          />
          <Image
             width={100}
             height={50}
            src="/categories/image 21.png"
            alt=""
            className=" absolute top-4 w-[80px] h-[80] left-20"
          />
          <Image
             width={100}
             height={50}
            src="/categories/image 28.png"
            alt=""
            className=" absolute top-11 w-[70px] h-[70] right-32"
          />
          <Image
            width={100}
            height={50}
            src="/categories/image 20.png"
            alt=""
            className=" absolute top-40 w-[60px] h-[80] right-6"
          />
        </div>
      </div>
    </>
  );
}

export default Feature2
