"use client";

import ReciepsCard from '@/components/homepageComponents/recieps/ReciepsCard'
import { allRecipes } from '@/data' 
import { UseRecipes } from '@/context/ReciepContext';
import { useEffect, useState } from 'react';


const AllRecipes = () => {

  const [meals, setMeals] = useState<any[]>([])
  useEffect(() => {
    const url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    const getAllMeals = async() => {
      const request = await fetch(url)
      const response = await request.json();
      setMeals(response.meals)
    }

    getAllMeals()
  },[])
  const style={
    cardWith: '100%',
    cardHight:"434px",
    h2Width: "21%",
    imgHight: "250px",
    imaWidth: "360px",
    text:"24px",
    background:"#e3eff5"
    
}
  return (
    <div className='bg-[#E7F9FD] mx-5 grid-cols-2 grid md:grid-cols-3 pt-20  md:pt-40'>
       {meals.map((meal:any) => (
            <ReciepsCard  key={meal.idMeal}  meal={meal} style={style} />
      ))}
    </div>
  )
}

export default AllRecipes
