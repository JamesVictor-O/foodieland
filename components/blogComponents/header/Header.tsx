import React from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-center align-middle mt-14 md:mt-24 py-4 px-2 md:px-0">
      <div className="w-full md:w-[55%] md:h-72  flex-col items-center justify-center align-middle ">
        <h2 className="font-semibold text-4xl md:text-6xl text-center">Blog & Article</h2>
        <p className="text-sm text-center font-normal mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className=" flex items-center justify-center align-middle">
          <div className="w-[90%] md:w-[60%] h-14  rounded-[16px] bg-white mt-8 md:mt-10 flex flex-row items-center border overflow-hidden ">
            <input
              type="email"
              placeholder="Search article, news or recipe..."
              className="w-[68%] h-full pl-4 outline-none font-light font-sans"
            />
            <button className="bg-black w-[25%] text-white h-[40px] rounded-[16px] ml-3">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
