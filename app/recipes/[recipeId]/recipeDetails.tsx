"use client";
import RecipeHeader from "@/components/recipeInformation/header/RecipeHeader";
import VisualSection from "@/components/recipeInformation/visualSection/VisualSection";
import Printer from "@/components/recipeInformation/printer";
import Ingredents from "@/components/recipeInformation/ingredents/Ingredents";
import Direction from "@/components/recipeInformation/direction/Direction";
import { useParams } from "next/navigation";
import { allRecipes } from "@/data";
import { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";


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
          console.log("no meal found");
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

  if (mealDetails) {
    // filtering the ingredients
    const getAllIngredient = (meal: any) => {
      const Ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient && ingredient.trim() !== "") {
          Ingredients.push(ingredient);
        }
      }
      return Ingredients;
    };
    const fetchedIngredients = getAllIngredient(mealDetails);


    return (
      <div className="w-[100%] ">
        <RecipeHeader mealDetails={mealDetails} />
        <VisualSection mealDetails={mealDetails} />
        <div className="absolute top-32 right-40 hidden md:block">
          <Printer />
        </div>
        <Ingredents mealIngredients={fetchedIngredients} />
        <Direction direction={mealDetails.strInstructions} />
      </div>
    );
  }
  return (
    <div className="w-[100%] mt-20 md:mt-28 flex justify-center align-middle ">
      <Rings color="#36D7B7" size={60} />
    </div>
  );
};

export default RecipeHome;
