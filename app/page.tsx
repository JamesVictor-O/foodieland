import Image from "next/image";
import FeaturedRecipe from "@/components/homepageComponents/FeaturedRecipe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <FeaturedRecipe/>
    </main>
  );
}
