import ReciepsCard from '@/components/homepageComponents/recieps/ReciepsCard';

async function getData() {
  const url="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  const request = await fetch(url,{ cache: 'force-cache' });
  if (!request) {
    throw new Error("fail to fetch data")
  };
  return request.json()


}
const AllRecipes =async () => {
  const meal = await getData();
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
    <div className='bg-[#E7F9FD] mx-5 grid-cols-2 grid md:grid-cols-4 pt-20  md:pt-40'>
       {meal.meals.map((meal:any) => (
            <ReciepsCard  key={meal.idMeal}  meal={meal} style={style} />
      ))}
    </div>
  )
}
export default AllRecipes
