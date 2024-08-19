import React from "react";
import RecipeHeader from "@/components/recipeInformation/header/RecipeHeader";
import VisualSection from "@/components/recipeInformation/visualSection/VisualSection";
import Printer from "@/components/recipeInformation/printer";
const RecipeInformation = () => {
  return (
    <div className="relative p-3 sm:p-5 lg:p-10 mt-2 md:mt-5 w-[100%]">
      <div className="w-[100%] h-[1003px]">
        <RecipeHeader />
        <VisualSection />
        <div className="absolute top-16 right-40 hidden md:block">
          <Printer/>
        </div>
      </div>
    </div>
  );
};

export default RecipeInformation;
