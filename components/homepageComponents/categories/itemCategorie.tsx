import React from "react";
interface ItemsProps {
  items: {
   idCategory: string,
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string
  };
}

const ItemCategorie = ({ items }: ItemsProps) => {
  return (
    <div className=" relative w-[180px] h-40 rounded-[18px] flex flex-col items-center overflow-hidden">
      <div className="w-28 h-20 bg-red-2g 00 rounded">
        <img src={items.strCategoryThumb} alt="name" className="object-contain w-full h-full"/>
      </div>
      <div className="w-[180px] h-[152px] flex flex-col align-bottom justify-center items-center">
        <span className="mt-10">{items.strCategory}</span>
      </div>
    </div>
  );
};

export default ItemCategorie;
