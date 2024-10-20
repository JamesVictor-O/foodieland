"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { type ChangeEvent, useTransition } from "react";
import { useInView } from "react-intersection-observer";
import Categories from "../categories/Categories";
import { UseRecipes } from "@/context/ReciepContext";

interface categorieProps {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}
interface RecipesSearchBarProps {
  setIsCurrentCategorie: React.Dispatch<React.SetStateAction<string>>;
}

const RecipesSearchBar = ({ setIsCurrentCategorie }: RecipesSearchBarProps) => {
  const [finalCategories, setFinalCategories] = useState<string[]>([]);
  const { setSearch } = UseRecipes()
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setIsCurrentCategorie(e.target.value);
  };
   
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    
    setSearch(e.target.value)
  }
  const { ref, inView } = useInView({ triggerOnce: false });
  useEffect(() => {
    const mealCategories = async () => {
      try {
        const request = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const response = await request.json();
        if (!request.ok) {
          throw new Error("Network response was not ok");
        }
        const data = response.categories;

        if (response.categories) {
          const only_categories = data.map(
            (Categories: categorieProps) => Categories.strCategory
          );
          setFinalCategories(only_categories);
        } else {
          alert("error");
          throw new Error("no categories available");
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (inView) {
      mealCategories();
    }
  }, [inView]);

  return (
    <div className=" flex  justify-center align-middle pt-20 md:pt-0 mx-8 items-center " ref={ref}>
      <div className="w-full md:w-[85%] mr-4">
        <label className="text-xl font-normal ">CATEGORIES :</label>
        <select
          className="outline-none border border-[#4a4848] p-2 rounded-xl"
          onChange={handleChange}
        >
          <option value="" disabled>
            Select a category
          </option>
          {finalCategories.map((cat:string, index:number) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      
        <div className=" mt-8 md:mt-0">
          <input
            onChange={(e:any)=>handleSearch(e)}
            placeholder="search type of food"
            type="text"
            className="border-black md:w-52 w-40 h-8 md:h-9 outline-none rounded-lg px-4"
          />
        </div>
    </div>
  );
};

export default RecipesSearchBar;
