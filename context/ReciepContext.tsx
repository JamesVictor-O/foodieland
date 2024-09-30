
"use client"

import React, { createContext, useContext } from "react";
import { useState,useEffect } from "react";

export const RecipeContext = createContext<any>(null)

export const RecipeProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [recipes, setRecipes] = useState<any[]>([])
    const [data, setData] = useState<any[]>([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
                const result = await response.json()          
                if (result.meals) {
                    setRecipes(result.meals)
                } else {
                    console.log("error somewhere")
                }
                setData(result.meals)
                // setRecipes(data);
                
            } catch (error) {
                console.log(error)
            }
        }
    },[])
    
    const value = {
        recipes
    }

    return (
        <RecipeContext.Provider value={value}>
          {children}
        </RecipeContext.Provider>
    )
}

export const UseRecipes = () => useContext(RecipeContext)

// export const UseRecipes = () => {
//     const context = useContext(RecipeContext);
//     if (context === undefined) {
//         throw new Error("useRecipes must be used within a RecipeProvider");
//     }
//     return context;
// };
