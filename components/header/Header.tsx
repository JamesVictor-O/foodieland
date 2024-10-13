"use client"

import React, { useEffect, useState } from "react";
import MenuList from "./menuList";
import Image from "next/image";
import MobileMenu from "../mobleHumburger/mobileMenu";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleMenuOpen = () => {
    setIsOpen(prev=> !prev)
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = "";
    }
  },[isOpen])
  return (
    <main className="header_main ">
      {/* mobile */}
      <div className=" flex md:hidden flex-row items-center justify-between w-full p-4 ">
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
            <Image  width={100} height={50} src="/assets/icons8-hamburger-menu.svg" alt="humbugerIcon" className="w-ful h-full object-contain"/> :
            <Image src="/assets/icons8-close.svg" width={100} height={50} alt="humbugerIcon" className="w-ful h-full object-contain" />
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
            <Image width={10} height={50} src="/assets/001-facebook.svg" alt="facebook logo" className=" w-7 p-2" />
          </div>
          <div className="mr-6">
            <Image width={20} height={50} src="/assets/003-twitter.svg" alt="twitter logo" className=" w-10 p-2"/>
          </div>
          <div>
            <Image width={20} height={50} src="/assets/004-instagram.svg" alt="instagram logo" className=" w-10 p-2" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
