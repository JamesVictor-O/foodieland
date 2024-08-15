"use client"

import { useState } from "react";

   

const Recipes = () => {
    const [recipes, setrecipes] = useState([
        {
            description: "Big and Juicy Wagyu Beef Cheeseburger",
            recipeUrl: 'recipes/image1.png',
            id:"1"
        },
        {
            description: "Fresh Lime Roasted Salmon with Ginger Sauce",
            recipeUrl: 'recipes/image2.png',
            id:"2"
        },
        {
            description: "Strawberry Oatmeal Pancake with Honey Syrup",
            recipeUrl: 'recipes/image3.png',
            id:"3"
        },
        {
            description: "Fresh and Healthy Mixed Mayonnaise Salad",
            recipeUrl: 'recipes/image6.png',
            id:"4"
        },
        {
            description: "Chicken Meatballs with Cream Cheese",
            recipeUrl: 'recipes/image4.png',
            id:"5"
        },
        {
            description: "Fruity Pancake with Orange & Blueberry",
            recipeUrl: 'recipes/image7.png',
            id:"6"
        },
        {
            description: "The Best Easy One Pot Chicken and Rice",
            recipeUrl: 'recipes/image5.png',
            id:"7"
        },
        {
            description: "The Creamiest Creamy Chicken and Bacon Pasta",
            recipeUrl: 'recipes/image8.png',
            id:"8"
        },
    ])
  return (
    <div className="w-[1280px] h-[1616px] mt-20">
      <div className="w-full flex justify-between items-center flex-col ">
        <h2 className="font-semibold text-[38px] w-[526px] h-[58px]">
          Simple and tasty recipes
        </h2>
        <span className="w-[706px] text-center font-normal text-[15px] mt-6">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </span>
          </div>
          
          {/* recipe card */}

    </div>
  );
};

export default Recipes;
