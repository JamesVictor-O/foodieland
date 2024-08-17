import React from "react";

const MenuList = () => {
  return (
    <div className="hidden md:block ">
      <ul className="flex flex-row items-center cursor-pointer font-sans">
        <li className="text-[20px] font-medium mr-4"> Home </li>
        <li  className="text-[20px] font-medium mr-4"> Recipes </li>
        <li  className="text-[20px] font-medium mr-4"> Blog </li>
        <li  className="text-[20px] font-medium mr-4" > Contact </li>
        <li  className="text-[20px] font-medium mr-4"> About </li>
      </ul>
    </div>
  );
};

export default MenuList;
