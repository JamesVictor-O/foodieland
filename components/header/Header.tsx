"use client"

import React, { useState } from "react";
import MenuList from "./menuList";
import Image from "next/image";
import MobileMenu from "../mobleHumburger/mobileMenu";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleMenuOpen = () => {
    setIsOpen(prev=> !prev)
  }
  return (
    <main className="header_main ">
      {/* mobile */}
      <div className=" flex md:hidden flex-row items-center justify-between w-full  p-5">
        {/* logo */}
        <div className="">
          <Image
            src="/assets/Foodieland.png"
            alt="foodieland logo"
            width={110}
            height={30}
          />
        </div>

        

        
        <div onClick={handleMenuOpen} className="w-8 h-8">
          {!isOpen ?
            <img src="/assets/icons8-hamburger-menu.svg" alt="humbugerIcon" className="w-ful h-full object-contain" /> :
            <img src="/assets/icons8-close.svg" alt="humbugerIcon" className="w-ful h-full object-contain" />
        }
          
        </div>

        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
        {/* humbuger */}
        
      </div>

      {/* deckstop */}

      <div className="hidden  md:flex flex-row items-center justify-between w-full  p-10">
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
        <div className="font-sans">
          <MenuList />
        </div>

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
