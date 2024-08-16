import Image from "next/image";
import FeaturedRecipe from "@/components/homepageComponents/features/FeaturedRecipe";
import Categories from "@/components/homepageComponents/categories/Categories";
import Recipes from "@/components/homepageComponents/recieps/Recieps";
import Feature2 from "@/components/homepageComponents/features/Feature2";
import Recipe2 from "@/components/homepageComponents/recieps/Recipe2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <FeaturedRecipe />
      <Categories />
      <Recipes />
      <Feature2 />
      <Recipe2/>
    </main>
  );
}
