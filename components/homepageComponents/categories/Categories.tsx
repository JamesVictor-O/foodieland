
import { useState } from "react";
import ItemCategorie from "./itemCategorie";

const Categories = async () => {
  const request = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  const response = await request.json()
  const categoriesClasses= response.categories
console.log(categoriesClasses)

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
   
      
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex flex-row md:grid lg:grid-cols-6 mt-6 md:mt-0 md:w-full w-[900px]">
          {categoriesClasses.slice(0,6).map((items:any) => (
            <ItemCategorie key={items.idCategory} items={items} />
          ))}
        </div>
      </div>
     
    </main>
  );
};

export default Categories;
