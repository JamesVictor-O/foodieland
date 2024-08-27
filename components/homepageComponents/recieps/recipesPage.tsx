
import ReciepsCard from '@/components/homepageComponents/recieps/ReciepsCard'
import { allRecipes } from '@/data' 



const AllRecipes = () => {
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
       {allRecipes.map((recipe) => (
         <div className=''key={recipe.id} >
            <ReciepsCard recipe={recipe} style={style} />
       </div>
      ))}
    </div>
  )
}

export default AllRecipes
