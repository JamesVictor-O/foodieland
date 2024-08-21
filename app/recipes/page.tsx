import React from 'react'
import AllRecipes from '@/components/homepageComponents/recieps/recipesPage'
import { allRecipes } from '@/data' 

const recipesPage = () => {
  return (
    <div>
          {allRecipes.map(recipe => (
              <AllRecipes key={recipe.id} recipes={ recipe} />
      ))}
    </div>
  )
}

export default recipesPage
