
import ReciepsCard from "./ReciepsCard";

const Recipes = async () => {
  
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast");
  const data = await response.json()


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
    <div className="w-[100%] h-full mt-30 md:mt-20">
      <div className="w-full flex justify-between items-center flex-col ">
        <h2 className="font-semibold text-2xl  md:text-4xl  h-14">
          Simple and tasty recipes
        </h2>
        <span className=" md:w-[40%] text-center font-normal text-base mt-2  md:mt-6">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </span>
          </div>
          
          {/* recipe card */}
       <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 md:gap-10 justify-center mt-8 md:mt-20">
        {data.meals.map((meal:any)=> (
          <ReciepsCard key={meal.idMeal} meal={meal} style={style} />
         ))}
       </div>
    </div>
  );
};

export default Recipes;
