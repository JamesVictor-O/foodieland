import Image from "next/image";
import FeaturedRecipe from "@/components/homepageComponents/FeaturedRecipe";
import Categories from "@/components/homepageComponents/categories/Categories";
import Recipes from "@/components/homepageComponents/recieps/Recieps";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <FeaturedRecipe />
      <Categories />
      < Recipes/>
    </main>
  );
}
