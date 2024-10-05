"use client"

import { useEffect, useState } from 'react';
import ReciepsCard from './ReciepsCard';
import { Rings } from "react-loader-spinner";

interface CategoriesProps {
  categories: {
    current_Categorie: string;
    next_Categorie: string;
  };
}

const ServerSideRecieps = ({ categories }: CategoriesProps) => {
  // const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories.current_Categorie}`);
  // const data = await response.json()
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading,setLoading]=useState<boolean>(true)

  useEffect(() => {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories.current_Categorie}`;
      const fetchData = async () => {
        const request = await fetch(url);
        const response = await request.json();
        setData(response.meals);
      };
      fetchData();
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false)
    }
  }, [categories]);
  // styling properties
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

      {/* display loading */}
      {loading && (
        <div className='w-full flex flex-col justify-center items-center'>
          <Rings size={70} />
          <h2>Loading...</h2>
        </div>
      )
      }
     
      {/* display error */}
      {
        error && (
        <div className="w-full text-center bg-blue-700  text-red-600 text-2xl">
          Oops! Something went wrong. Please try again later.
        </div>
        )
      }
      
      {/* display datas */}

      {
        !error && !loading && (
          <div className="w-[100%] grid grid-cols-2 md:grid-cols-3 md:gap-10 justify-center mt-8 md:mt-20">
          {data.map((meal: any) => (
            <ReciepsCard key={meal.idMeal} meal={meal} style={style} />
          ))}
        </div>
        )
      }
    </div>
  );
};

export default ServerSideRecieps
