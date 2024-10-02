import React from "react";
import OtherRecipes from "@/components/otherRecipes/OtherRecipes";

interface mealIngredientsProps{
  mealIngredients: string[]
}

const Ingredents = ({ mealIngredients }: mealIngredientsProps) => {
  return (
    <div className="w-full mt-10 md:flex flex-row">
      <div className="w-full md:w-[60%] px-4 md:px-0">
              <h2 className="font-semibold text-4xl md:text-4xl ">Ingredients</h2>
              {/* for main dishes */}
        <div className="w-full mt-8 ml-6">
     {/* list of ingredents */}
            <ol>
              {mealIngredients.map((ingredient: string, index) => (
                <li key={index} className="mb-3 text-lg font-medium">{ingredient }</li>
              ))}
             </ol>
        </div>
        
      </div>

          {/* other recipes */}
          <OtherRecipes/>
    </div>
  );
};

export default Ingredents;
