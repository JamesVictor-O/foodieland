"use client"
import { UseRecipes } from "@/context/ReciepContext";
import ServerSideRecieps from "./ServerSideRecieps";

const Recipes = () => {
  const { categories } = UseRecipes()
  return (
    <ServerSideRecieps categories={categories } />
  );
};

export default Recipes;
