"use client"
import React from 'react'
import Image from 'next/image'
import Time from '@/components/Time'
import { useRouter } from 'next/navigation'
import { Suspense } from "react";
import { Rings } from "react-loader-spinner";

interface RecipesProps{
    meal: {
      strMeal: string,
      strMealThumb: string,
      idMeal: string
  },
   style:{
     cardWith: string,
     cardHight:string,
    h2Width: string,
     imgHight: string,
     background: string,
     imaWidth: string,
     text:string,
     mt?:number
}
   
}
const ReciepsCard:React.FC<RecipesProps> = ({ meal, style }) => {
  const router=useRouter()
  const handleClick = () => {
     router.push(`/recipes/${meal.idMeal}`)
  }
  if (!meal || Object.keys(meal).length === 0) {
    return (
      <div> no meals available for now </div>
    )
  }
    
  
  return (
      <main className={`w-[${style.cardWith}] h-[${style.cardHight}] rounded-[15px] flex flex-col items-center overflow-hidden bg-[${style.background}] p-3`}>
      {/* recipe image */}
      <Suspense fallback={<Rings/>}>
      <div className={`relative w-[${style.imaWidth}] h-[${style.imgHight}] overflow-hidden mt-[${style.mt}] rounded-[20px]`} onClick={handleClick}>
            
            <Image src={meal.strMealThumb} alt='recipe image'width={500} height={500} className='object-contain w-full h-full' />

            <div className=' absolute top-4 right-4 w-5 rounded-full'>
              <Image width={50} height={50} src="/assets/likeIcon.png" alt=" heart"  className='w-full object-cover bg-transparent'/>         
            </div>

      </div>
      </Suspense>
       
          <div className={`flex items-start w-full overflow-hidden text-ellipsis whitespace-nowrap h-[54px] mt-2`}>
              <p className={`md:text-xl lg:text-[${style.text}] font-semibold text-start`}>{meal.strMeal }</p>
          </div>
          <Time mealType={meal.strMeal} />

    </main>
  )
}

export default ReciepsCard
