import React from "react";
interface ItemsProps {
  items: {
    name: string;
    imageUrl: string;
    id: string;
  };
}

const ItemCategorie = ({ items }: ItemsProps) => {
  return (
    <div className=" relative w-[180px] h-40 rounded-[18px] flex flex-col items-center overflow-hidden">
      <div className="w-20 h-20 bg-transparent">
        <img src={items.imageUrl} alt="name" className="object-contain"/>
      </div>
      <div className="w-[180px] h-[152px] flex flex-col align-bottom justify-center items-center">
        <span className="mt-10">{items.name}</span>
      </div>
    </div>
  );
};

export default ItemCategorie;
