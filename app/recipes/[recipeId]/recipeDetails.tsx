"use client";
import RecipeHeader from "@/components/recipeInformation/header/RecipeHeader";
import VisualSection from "@/components/recipeInformation/visualSection/VisualSection";
import Printer from "@/components/recipeInformation/printer";
import Ingredents from "@/components/recipeInformation/ingredents/Ingredents";
import Direction from "@/components/recipeInformation/direction/Direction";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Rings } from "react-loader-spinner";

interface MealDetailsProps {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: string;
  strYoutube?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strIngredient16?: string;
  strIngredient17?: string;
  strIngredient18?: string;
  strIngredient19?: string;
  strIngredient20?: string;
  // Continue for all other ingredients and measures up to 20
  strMeasure1?: string;
  strMeasure2?: string;
  // Continue for all other measures
}
const RecipeHome = () => {
  const [mealDetails, setMealDetails] = useState<MealDetailsProps | any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string|null>(null);

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
          setIsLoading(false);
        } else {
          console.log("no meal found");
        }
      } catch (error: any) {
        setIsLoading(false);
        setError(error.message || "An unknown error occurred");
      }
    };

    // calling the function
    if (recipeId) {
      mealDetails();
    }
  }, [recipeId]);

  if (isLoading) {
    return (
      <div className="w-[100%] mt-20 md:mt-28 flex justify-center align-middle ">
        <Rings />
      </div>
    );
  }
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

    // extract header details
    const getHeaderDetails = (meal: any) => {
      const { strCategory, strMeal } = meal;
      const details = [strCategory, strMeal];
      return details;
    };

    const headerDetails: any[] = getHeaderDetails(mealDetails);

    return (
      <div className="w-[100%] ">
        <RecipeHeader headerDetails={headerDetails} />
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
        Oops! Something went wrong. Please refresh again or check your internet Connectivity.{ error}
    </div>
  );
};

export default RecipeHome;
