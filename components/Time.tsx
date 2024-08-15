import React from 'react'

const Time = () => {
  return (
        <div className="flex flex-row items-center mt-4">
          {/* timew */}
          <div className="flex flex-row items-center bg-[#f4f0f0] p-1 rounded-full w-[119px] h-[40px]">
            <img src="homepage/Timer.svg" alt="timer" />
            <span className="text-[14px] font-normal ml-2">30 Minutes</span>
          </div>
          {/* fork */}
          <div className="flex flex-row items-center bg-[#f4f0f0] p-1 rounded-full w-[119px] h-[40px] pl-2 ml-10">
            {/* <ForkKnife/> */}
            <img src="homepage/ForkKnife.svg" alt="timer" />
            <span className="text-[14px] font-normal ml-2">Chicken</span>
          </div>

        </div>
  )
}

export default Time
