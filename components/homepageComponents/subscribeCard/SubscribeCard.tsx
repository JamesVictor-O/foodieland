import React from "react";

const SubscribeCard = () => {
  return (
    <main className="my-5 p-4 md:p-10 md:my-10">
      <div className=" relative  w-full h-[442px] bg-[#E7F9FD] rounded-[30px] overflow-hidden">

      <div className="absolute mt-10 md:mt-0 md:right-[30%] md:top-10 w-[100%] md:w-[45%] h-[282px] flex flex-col justify-center  items-center">
        <h2 className="text-lg md:text-[30px] font-semibold w-full font-sans flex justify-center">
          Deliciousness to your inbox
        </h2>
        <p className=" text-[14px] font-normal text-center md:w-[80%] mt-4 px-2 md:px-0">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
        <div className="w-[80%] md:w-[60%] h-[50px] rounded-[24px] bg-white mt-10 flex flex-row items-center overflow-hidden">
            <input type="email" placeholder="your email address" className="h-full w-[90%] pl-4 outline-none font-light font-sans" /> 
            {/* <input type="email" placeholder="your email address" className="h-full outline-none border w-[90%] pl-4 rounded-[24px]"/> */}
            <button className="bg-black w-[28%] text-white h-[40px] text-xs rounded-[16px] ">Subscribe</button>      
        </div>
      </div>
  
        
        {/* flower images */}
      <div className="absolute bottom-0 md:top-16- w-52 h-52 md:w-[410px] md:h-[400px]">
        <img
          src="/subscribe/kisspng-salad.png"
          alt="kissing-salad"
          className="w-full object-contain"
        />
      </div>
      <div className="absolute bottom-1 md:top-40 right-0  w-28 h-28 md:w-[410px] md:h-[400px]">
        <img
          src="/subscribe/Photo-plate.png"
          alt="kissing-salad"
          className="w-full object-contain"
        />
      </div>
    </div>
    </main>
   
  );
};

export default SubscribeCard;
