"use client"

import { useState } from "react";
import ReciepsCard from "./ReciepsCard";

   

const Recipe2 = () => {
    const [recipes, setRecipes] = useState([
      {
        description: "Mixed Tropical Fruit Salad with Superfood Boosts ",
        recipeUrl: "recipe2/image1.png",
        type: "Healthy",
        id: "1",
      },
      {
        description: "Big and Juicy Wagyu Beef Cheeseburger",
        recipeUrl: "recipe2/image2.png",
        type:"Western",
        id: "2",
      },
      {
        description: "Healthy Japanese Fried Rice with Asparagus",
        recipeUrl: "recipe2/image3.png",
        type:"Healthy",
        id: "3",
      },
      {
        description: "Cauliflower Walnut Vegetarian Taco Meat",
        recipeUrl: "recipe2/image4.png",
        type:"Eastern",
        id: "4",
      },
      {
        description: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
        recipeUrl: "recipe2/image5.png",
        type:"Healthy",
        id: "5",
      },
      {
        description: "Barbeque Spicy Sandwiches with Chips ",
        recipeUrl: "recipe2/image6.png",
        type:"snacks",
        id: "6",
      },
      {
        description: "Firecracker Vegan Lettuce Wraps - Spicy! ",
        recipeUrl: "recipe2/image7.png",
        type:"Seafood",
        id: "7",
      },
      {
        description: "Chicken Ramen Soup with Mushroom ",
        recipeUrl: "recipe2/image8.png",
        type:"Japanese",
        id: "8",
      },
    ]);
    const style={
      cardWith: '100%',
      cardHight:"316px",
        h2Width: "18%px",
        imgHight: "250px",
        imaWidth: "290px",
        text:"18px",
        background:"",
        mt:2
    }
  return (
    <div className="w-[100%] h-full mt-20">
      <div className="w-full flex justify-between items-center flex-col md:flex-row ">
        <h2 className="font-semibold text-4xl md:w-[526px] md:h-14 text-balance md:text-left ">
        Try this delicious recipe
        to make your day
        </h2>
        <span className="text-wrap md:text-left font-normal text-[15px] mt-6">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </span>
          </div>
          
          {/* recipe card */}
       <div className="w-[100%] grid gap-2 grid-cols-2 md:grid-cols-4 md:gap-5 justify-center mt-8 md:mt-20">
        {recipes.map(recipe => (
            <ReciepsCard key={recipe.id} recipe={recipe} style={style } />
         ))}
       </div>
    </div>
  );
};

export default Recipe2 ;
