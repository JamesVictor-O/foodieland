import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import AllRecipes from '@/components/homepageComponents/recieps/recipesPage'
interface mealProps{
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

const recipesPage = () => {
 
  return (
    <div className=''>
     <AllRecipes/>
    </div>
  );
}

export default recipesPage 
