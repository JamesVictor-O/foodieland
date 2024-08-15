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
    <div className=" relative w-[180px] h-[170px] rounded-[18px] flex flex-col items-center justify-between ml-2 overflow-hidden">
      <div className="w-[80px] h-[80px] bg-transparent">
        <img src={items.imageUrl} alt="name" className="object-contain"/>
      </div>
      <div className="w-[180px] h-[152px] flex flex-col align-bottom justify-center items-center">
        <span className="mt-10">{items.name}</span>
      </div>
    </div>
  );
};

export default ItemCategorie;
