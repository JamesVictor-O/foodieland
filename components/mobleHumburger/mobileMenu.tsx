import React from "react";
import Link from "next/link";
import MenuList from "../header/menuList";
import Image from "next/image";
interface MobileProps{
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({setIsOpen}: MobileProps) => {
  
  const handleModelClosing = () => {
    setIsOpen(prev=> !prev)
  }
  return (
    <div className="absolute top-16 right-0 w-full h-screen bg-white flex flex-col items-center  space-y-8 z-50">
      <div className="flex flex-col items-center mt-10">
      <Link href={'/'} onClick={handleModelClosing} className="text-base font-normal bg-[#c0e2ee] p-2 rounded-lg w-24 text-center mb-2"> Home</Link>
      <Link href={'/recipes'} onClick={handleModelClosing} className="text-base font-normal bg-[#c0e2ee] p-2 rounded-lg w-24 text-center mb-2">Recipes</Link>
      <Link href={"/blogs"} onClick={handleModelClosing} className="text-base font-normal bg-[#c0e2ee] p-2 rounded-lg w-24 text-center mb-2">Blog</Link>
      <Link  href={"/contact"} onClick={handleModelClosing} className="text-base font-normal bg-[#c0e2ee] p-2 rounded-lg w-24 text-center mb-2">Contact</Link>
      <Link href={'/about'} onClick={handleModelClosing} className="text-base font-normal bg-[#c0e2ee] p-2 rounded-lg w-24 text-center mb-2">About</Link>
     </div>

      {/* socials icon */}

      <div className="flex flex-row items-center">
        <div className="mr-3">
          <Image width={50} height={50} src="/assets/001-facebook.svg" alt="facebook logo" className="w-5 h-5" />
        </div>
        <div className="mr-6">
          <Image width={50} height={50} src="/assets/003-twitter.svg" alt="twitter logo" className="w-5 h-5" />
        </div>
        <div>
          <Image width={50} height={50} src="/assets/004-instagram.svg" alt="instagram logo" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
