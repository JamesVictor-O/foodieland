import Image from 'next/image';
import React from 'react'
const Time = ({ mealType }:{ mealType:string}) => {
  
  return (
    <div className="flex flex-row items-center md:mt-1 w-[100%] ">
      {/* timew */}
      <div className="flex flex-row items-center bg-[#f4f0f0] p-1 rounded-full  md:w-[46%] md:h-10 h-7 ">
        <Image width={20} height={20} src="homepage/Timer.svg" alt="timer" />
        <span className="text-[10px] md:text-[14px] font-normal md:ml-2">
          30 Minutes
        </span>
      </div>
      {/* fork */}
      <div className="flex flex-row items-center bg-[#f4f0f0] p-1 rounded-full md:w-[49%] md:h-10 h-7  pl-2 md:ml-5 wh">
        {/* <ForkKnife/> */}
        <Image width={20} height={20}  src="homepage/ForkKnife.svg" alt="timer" />
        <span className="text-[10px] md:text-[14px] font-normal md:ml-2 pr-5 whitespace-nowrap overflow-hidden">{mealType.split(" ")[0]}</span>
      </div>
    </div>
  );
}

export default Time
