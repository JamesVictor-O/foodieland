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
    <main className="w-[1280px] h-[342px] mt-9">
      <div className="flex flex-row justify-between items-center p-9">
        <h2 className="w-[238px] h-[58px] text-[38px] font-semibold">
          Categories
        </h2>
        <button className="bg-[#E7FAFE] w-[200px] rounded-[16px] p-3">
          View All Categories
        </button>
      </div>

      <div className="flex flex-row w-full justify-center align-middle">
        {categoriesClasses.map(items => (
          <ItemCategorie key={items.id } items={items} />
        ))}
      </div>
    </main>
  );
};

export default Categories;
