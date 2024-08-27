import React from "react";
import Link from "next/link";

const MenuList = () => {
  return (
    <>
      <Link href={'/'} className="text-xl font-medium mr-4 hover:border-b-2 border-black p-1"> Home</Link>
      <Link href={'/recipes'} className="text-xl font-medium mr-4 hover:border-b-2 border-black p-1">Recipes</Link>
      <Link href={"/blogs"} className="text-xl font-medium mr-4 hover:border-b-2 border-black p-1">Blog</Link>
      <Link  href={"/contact"} className="text-xl font-medium mr-4 hover:border-b-2 border-black p-1">Contact</Link>
      <Link href={'/'} className="text-xl font-medium mr-4 hover:border-b-2 border-black p-1">About</Link>
     
    </>
  );
};

export default MenuList;
