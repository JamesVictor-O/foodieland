import React from "react";

const SubscribeCard = () => {
  return (
    <main className=" relative w-[1280px] h-[442px] bg-[#E7F9FD] rounded-[10px] mt-40 overflow-hidden">
      <div className="absolute right-[34%] top-10 w-[420px] h-[282px] flex flex-col justify-center  items-center">
        <h2 className="text-[30px] font-semibold w-[425px] font-sans flex justify-center">
          Deliciousness to your inbox
        </h2>
        <p className=" text-[14px] font-normal text-center w-[410px] mt-4">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
        <div className="w-[480px] h-[50px] rounded-[24px] bg-white mt-10 flex flex-row items-center">
            <input type="email" placeholder="your email address" className="h-[30px] w-[70%] pl-4 outline-none font-light font-sans" />   
            <button className="bg-black w-[28%] text-white h-[40px] rounded-[16px]">Subscribe</button>      
        </div>
      </div>

      <div className="absolute top-12 w-[410px] h-[400px]">
        <img
          src="subscribe/kisspng-salad.png"
          alt="kissing-salad"
          className="w-full object-contain"
        />
      </div>
      <div className="absolute top-40 right-0 w-[410px] h-[400px]">
        <img
          src="subscribe/Photo-plate.png"
          alt="kissing-salad"
          className="w-full object-contain"
        />
      </div>
    </main>
  );
};

export default SubscribeCard;
