import Image from "next/image";
import FeaturedRecipe from "@/components/homepageComponents/features/FeaturedRecipe";
import Categories from "@/components/homepageComponents/categories/Categories";
import Recipes from "@/components/homepageComponents/recieps/Recieps";
import Feature2 from "@/components/homepageComponents/features/Feature2";
import Recipe2 from "@/components/homepageComponents/recieps/Recipe2";
import SubscribeCard from "@/components/homepageComponents/subscribeCard/SubscribeCard";
import { Suspense } from "react";

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

// interface

export default function Home() {
  return (
      <main className=" p-3 pt-20 md:pt-0 sm:p-5 lg:p-10 ">
        <FeaturedRecipe />
        <Categories />
        <Recipes />
        <Feature2 />
        <Recipe2 />
      </main>
  );
}
