"use client"

import { useState } from "react";
import ReciepsCard from "./ReciepsCard";

   

const Recipes = () => {
    const [recipes, setrecipes] = useState([
      {
        description: "Big and Juicy Wagyu Beef Cheeseburger",
        recipeUrl: "/recipes/image1.png",
        type: "Snacks",
        id: "1",
      },
      {
        description: "Fresh Lime Roasted Salmon with Ginger Sauce",
        recipeUrl: "/recipes/image2.png",
        type:"fish",
        id: "2",
      },
      {
        description: "Strawberry Oatmeal Pancake with Honey Syrup",
        recipeUrl: "/recipes/image3.png",
        type:"Breakfast",
        id: "3",
      },
      {
        description: "Fresh and Healthy Mixed Mayonnaise Salad",
        recipeUrl: "/recipes/image6.png",
        type:"Healthy",
        id: "4",
      },
      {
        description: "Chicken Meatballs with Cream Cheese",
        recipeUrl: "/recipes/image4.png",
        type:"Meat",
        id: "5",
      },
      {
        description: "Fruity Pancake with Orange & Blueberry",
        recipeUrl: "/recipes/image7.png",
        type:"Sweet",
        id: "6",
      },
      {
        description: "The Best Easy One Pot Chicken and Rice",
        recipeUrl: "/recipes/image5.png",
        type:"Snacks",
        id: "7",
      },
      {
        description: "The Creamiest Creamy Chicken and Bacon Pasta",
        recipeUrl: "/recipes/image8.png",
        type:"Noodles",
        id: "8",
      },
    ]);
    const style={
      cardWith: '100%',
      cardHight:"434px",
      h2Width: "21%",
      imgHight: "250px",
      imaWidth: "360px",
      text:"24px",
      background:"#e3eff5"
      
  }
  return (
    <div className="w-[100%] h-full mt-30 md:mt-20">
      <div className="w-full flex justify-between items-center flex-col ">
        <h2 className="font-semibold text-2xl  md:text-4xl  h-14">
          Simple and tasty recipes
        </h2>
        <span className=" md:w-[40%] text-center font-normal text-base mt-2  md:mt-6">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </span>
          </div>
          
          {/* recipe card */}
       <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 md:gap-10 justify-center mt-8 md:mt-20">
        {recipes.map(recipe => (
          <ReciepsCard key={recipe.id} recipe={recipe } style={style} />
         ))}
       </div>
    </div>
  );
};

export default Recipes;
