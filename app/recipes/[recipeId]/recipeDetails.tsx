"use client";
import RecipeHeader from "@/components/recipeInformation/header/RecipeHeader";
import VisualSection from "@/components/recipeInformation/visualSection/VisualSection";
import Printer from "@/components/recipeInformation/printer";
import Ingredents from "@/components/recipeInformation/ingredents/Ingredents";
import Direction from "@/components/recipeInformation/direction/Direction";
import { useParams } from "next/navigation";
import { allRecipes } from "@/data";

const RecipeHome = () => {
  const params = useParams();
  const { recipeId } = params;
  const recipe = allRecipes.find((recipe) => recipe.id === recipeId);
  if (recipe) {
    return (
      <div className="w-[100%] ">
        <RecipeHeader description={recipe.description} />
        <VisualSection imageUrl={recipe.recipeUrl} />
        <div className="absolute top-32 right-40 hidden md:block">
          <Printer />
        </div>
        <Ingredents />
        <Direction />
      </div>
    );
  }
  return (
    <div className="w-[100%] ">
      <p>Recipe unavailable</p>
    </div>
  );
};

export default RecipeHome;
