"use client"

import { useEffect, useState } from 'react';
import ReciepsCard from './ReciepsCard';
import { Rings } from "react-loader-spinner";
import { useInView } from 'react-intersection-observer';

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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true)
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories.current_Categorie}`;
        const request = await fetch(url);
        if (!request.ok) {
          throw new Error("Network response was not ok")
        }
        const response = await request.json();
        
        if (response.meals) {
          setData(response.meals)
        } else {
          throw new Error("no meal available")
        }
      } catch (err: any) {
        setError(err.message || "An unknown error occurred")
      } finally {
        setLoading(false)
      }
      
      }

    if (inView) {
      fetchData()
    }

  }, [categories,inView]);
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
    <div  ref={ref} className="w-[100%] h-full mt-30 md:mt-20">
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
          <Rings/>
          <h2>Loading...</h2>
        </div>
      )
      }
     
      {/* display error */}
      {
        error && (
        <div className="w-full text-center my-14   text-red-600 text-2xl">
            Oops! Something went wrong. Please refresh again or check your internet Connectivity.{ error}
        </div>
        )
      }
      
      {/* display datas */}

      {
        !error && !loading && (
          <div className="w-[100%] grid grid-cols-2 md:grid-cols-4 md:gap-10 justify-center mt-8 md:mt-20">
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
