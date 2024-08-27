import React from "react";
import RecipeHeader from "@/components/recipeInformation/header/RecipeHeader";
import VisualSection from "@/components/recipeInformation/visualSection/VisualSection";
import Printer from "@/components/recipeInformation/printer";
import Ingredents from "@/components/recipeInformation/ingredents/Ingredents";
import Direction from "@/components/recipeInformation/direction/Direction";
const RecipeInformation = () => {
  return (
    <div className="relative p-3 sm:p-5 lg:p-10  w-[100%]">
      <div className="w-[100%] ">
        <RecipeHeader />
        <VisualSection />
        <div className="absolute top-32 right-40 hidden md:block">
          <Printer/>
        </div>
        <Ingredents />
        <Direction/>
      </div>
    </div>
  );
};

export default RecipeInformation;
