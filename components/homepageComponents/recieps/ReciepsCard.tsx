"use client"
import React from 'react'
import Image from 'next/image'
import Time from '@/components/Time'
import { useRouter } from 'next/navigation'

interface RecipesProps{
    recipe: {
        description: string,
        recipeUrl: string,
        type: string,
        id: string,
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
const ReciepsCard = ({ recipe, style }: RecipesProps) => {
  const router=useRouter()
  const handleClick = () => {
     router.push(`/recipes/${recipe.id}`)
  }

  return (
      <main className={`w-[${style.cardWith}] h-[${style.cardHight}] rounded-[15px] flex flex-col items-center overflow-hidden bg-[${style.background}] p-3`}>
          {/* recipe image */}
        <div className={`relative w-[${style.imaWidth}] h-[${style.imgHight}] overflow-hidden mt-[${style.mt}] rounded-[20px]`} onClick={handleClick}>
            
              <Image src={recipe.recipeUrl} alt='recipe image'width={500} height={500} className='object-contain w-full h-full' />

              <div className=' absolute top-4 right-4 w-[30px] bg-white rounded-full'>
                <img src="recipes/Vector.png" alt=" heart"  className='w-[20px] p-3 '/>         
              </div>

          </div>
          <div className={`flex justify-center align-middle items-center w-[${style.h2Width}] h-[64px] mt-4`}>
              <p className={`md:text-2xl lg:text-[${style.text}] font-semibold`}>{recipe.description }</p>
          </div>
          <Time mealType={ recipe.type} />

    </main>
  )
}

export default ReciepsCard
