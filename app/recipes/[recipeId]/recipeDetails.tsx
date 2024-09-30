"use client";
import RecipeHeader from "@/components/recipeInformation/header/RecipeHeader";
import VisualSection from "@/components/recipeInformation/visualSection/VisualSection";
import Printer from "@/components/recipeInformation/printer";
import Ingredents from "@/components/recipeInformation/ingredents/Ingredents";
import Direction from "@/components/recipeInformation/direction/Direction";
import { useParams } from "next/navigation";
import { allRecipes } from "@/data";
import { useEffect, useState } from "react";

const RecipeHome = () => {
  const [mealDetails, setMealDetails] = useState<any>(null);

  const params = useParams();
  const { recipeId } = params;

  useEffect(() => {
    // function to fetch a particular meal details
    const mealDetails = async () => {
      try {
        const request = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        const response = await request.json();
        if (response.meals && response.meals.length > 0) {
          setMealDetails(response.meals[0]);
        } else {
          console.log("no meal found")
        }
      } catch (error) {
        console.log(error);
      }
    };

    // calling the function
    if (recipeId) {
      mealDetails();
    }
    
  }, [recipeId]);
 
  // const recipe = allRecipes.find((recipe) => recipe.id === recipeId);
  if (mealDetails) {
    console.log(mealDetails);
    return (
      <div className="w-[100%] ">
        <RecipeHeader description={mealDetails.strMeal} />
        <VisualSection imageUrl={mealDetails.strMealThumb} />
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
      <p className="text-3xl">Recipe unavailable</p>
    </div>
  );
};

export default RecipeHome;
