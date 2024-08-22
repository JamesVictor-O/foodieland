import React from "react";
import MenuList from "../header/menuList";

const MobileMenu = () => {
  return (
    <div className="absolute top-24 right-0 w-[60%] h-screen bg-white flex flex-col items-center justify-center space-y-8 z-50">
      {/* <MenuList /> */}

      {/* socials icon */}

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
  );
};

export default MobileMenu;
