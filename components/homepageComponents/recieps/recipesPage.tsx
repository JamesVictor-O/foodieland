"use client"



import ReciepsCard from '@/components/homepageComponents/recieps/ReciepsCard';
import RecipesSearchBar from "./RecipesSearchBar";
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Rings } from 'react-loader-spinner';
import { useInView } from 'react-intersection-observer';
import { getData } from "@/data";
import { UseRecipes } from '@/context/ReciepContext';

const AllRecipes = () => {
  const {search}=UseRecipes()
  const { ref, inView } = useInView({ triggerOnce: false });
  
  const [isCurrentCategorie, setIsCurrentCategorie] = useState<string>("side")
  const [meals,setMeals]=useState<any[]>([])
  useEffect(() => {
    const mealCategories = async () => {
        try {
            const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${isCurrentCategorie}`,{ next: { revalidate: 30 }});
            const response = await request.json()
            if (!request.ok) {
                throw new Error("Network response was not ok")
              }
            const data = response.meals;

            if (response.meals) {
              setMeals(data)
              console.log(data)
            } else {
                alert("error")
                throw new Error("no categories available")
              }
          
        } catch (error) {
            console.log(error)
        }
    }

    if (inView) {
        mealCategories()
    }
        

},[inView,isCurrentCategorie])
  

  const style = {
    cardWith: "100%",
    cardHight: "434px",
    h2Width: "21%",
    imgHight: "250px",
    imaWidth: "360px",
    text: "24px",
    background: "#e3eff5",
  };
  return (
    <div className="bg-[#cedbde] " ref={ref}>
      <div className="  w-full   justify-center align-middle  md:py-9">
        <RecipesSearchBar setIsCurrentCategorie={setIsCurrentCategorie} />
      </div>
      <Suspense fallback={<Rings/>}>
         <div className="grid-cols-2 grid md:grid-cols-4 pt-10  md:pt-0 mx-5">
          {meals.filter(items =>  search === '' || items.strMeal.toLowerCase().includes(search.toLowerCase())).map((meal: any) => (
            <div key={meal.idMeal} className="">
              <ReciepsCard meal={meal} style={style} />
            </div>
          ))}
        </div>
      </Suspense>
        
    </div>
  );
};
export default AllRecipes
