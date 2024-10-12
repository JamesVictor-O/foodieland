'use client'

import { UseRecipes } from "@/context/ReciepContext";
import Image from "next/image";

import React, { useState } from "react";
interface ItemsProps {
  items: {
   idCategory: string,
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string
  };
}

const ItemCategorie = ({ items }: ItemsProps) => {
  const { setCategories, categories } = UseRecipes()
  const [currentCategory, setCurrentCategory]=useState<boolean>(false)
  const HandleClick = (newCategorie:string) => {
    setCategories((previous:any) => ({
      ...previous,
      current_Categorie: newCategorie,
    }));
  }
  const isCurrentcategory = items.strCategory === categories.current_Categorie;
  return (
    <div
      onClick={e=> HandleClick(items.strCategory)}
      className={`relative w-[180px] h-40 rounded-[18px] flex flex-col items-center overflow-hidden  ${isCurrentcategory ? "bg-[#E7FAFE]" : "bg-red-50" }`}
    >
      <div className="w-28 h-20 bg-red-2g 00 rounded mt-4">
        <Image width={100} height={100} src={items.strCategoryThumb} alt="name" className="object-contain w-full h-full"/>
      </div>
      <div className="w-[180px] h-[152px] flex flex-col align-bottom justify-center items-center text-lg">
        <span className="mt-10">{items.strCategory}</span>
      </div>
    </div>
  );
};

export default ItemCategorie;
