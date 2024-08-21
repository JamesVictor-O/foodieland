import React from "react";
import MenuList from "./menuList";
import Image from "next/image";

const Header = () => {
  return (
    <main className="header_main ">
      <div className="flex flex-row items-center justify-between w-[71.87%]  mx-[20px] sm:mx-[40px] lg:mx-[80px] my-[40px]">
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
        <MenuList/>

        {/* socilas */}

        <div className="flex flex-row items-center">
          <div className="mr-3">
            <img src="/assets/001-facebook.svg" alt="facebook logo" />
          </div>
          <div className="mr-6">
            <img src="/assets/003-twitter.svg" alt="twitter logo" />
          </div>
          <div>
            <img src="/assets/004-instagram.svg" alt="instagram logo" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
