import React from "react";
import Link from "next/link";

const MenuList = () => {
  return (
    <div className="hidden md:block ">
      <ul className="flex flex-row items-center cursor-pointer font-sans">
        <Link href={'/'} className="text-[20px] font-medium mr-4"> Home </Link>
        <li  className="text-[20px] font-medium mr-4"> Recipes </li>
        <Link  href={"/blogs"} className="text-[20px] font-medium mr-4"> Blog </Link>
        <li  className="text-[20px] font-medium mr-4" > Contact </li>
        <li  className="text-[20px] font-medium mr-4"> About </li>
      </ul>
    </div>
  );
};

export default MenuList;
