import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <main className="header_main ">
      {/* logo */}
      <div className="">
        <Image
          src="/assets/Foodieland.png"
          alt="foodieland logo"
          width={110}
          height={30}
        />
      </div>

      {/* menu */}
      <div className="hidden md:block w-[50%]">
        <ul className="flex flex-row items-center justify-between cursor-pointer">
          <li className="text-40px"> Home </li>
          <li> Recipes </li>
          <li> Blog </li>
          <li> Contact </li>
          <li> About </li>
        </ul>
      </div>

      {/* socilas */}

      <div className="flex flex-row items-center">
        <div className="mr-6">
          <img src="assets/001-facebook.svg" alt="facebook logo" />
        </div>
        <div className="mr-6">
          <img src="assets/003-twitter.svg" alt="twitter logo" />
        </div>
        <div>
          <img src="assets/004-instagram.svg" alt="instagram logo" />
        </div>
      </div>
    </main>
  );
};

export default Header;
