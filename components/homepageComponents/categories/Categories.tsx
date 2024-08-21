"use client";

import { useState } from "react";
import ItemCategorie from "./itemCategorie";

const Categories = () => {
  const [categoriesClasses, setCategorieClasses] = useState([
    {
      name: "Breakfast",
      imageUrl: "categories/image 25.png",
      id: "1",
    },
    {
      name: "Vagan",
      imageUrl: "categories/image 20.png",
      id: "2",
    },
    {
      name: "Meat",
      imageUrl: "categories/image 21.png",
      id: "3",
    },
    {
      name: "Dessert",
      imageUrl: "categories/image 22.png",
      id: "4",
    },
    {
      name: "Lunch",
      imageUrl: "categories/image 23.png",
      id:"5"
    },
    {
      name: "Chocolate",
      imageUrl: "categories/image 24.png",
      id:"6"
    },
  ]);

  return (
    <main className="w-[100%] h-80 mt-6 lg:mt-9">
      <div className="flex flex-row justify-between items-center  p-2 md:p-9 overflow-hidden">
        <h2 className="w-[238px] lg:h-14 text-sm lg:text-4xl font-semibold ml-5 md:ml-0">
          Categories
        </h2>
        <button className="bg-[#E7FAFE] w-[200px] rounded-[16px] p-1 lg:p-3 text-xs md:text-base">
          View All Categories
        </button>
      </div>
   
      
      <div className="w-full overflow-x-auto ">
        <div className="flex flex-row md:grid lg:grid-cols-6 mt-6 md:mt-0 md:w-full w-[900px]">
          {categoriesClasses.map(items => (
            <ItemCategorie key={items.id } items={items} />
          ))}
        </div>
      </div>
     
    </main>
  );
};

export default Categories;
