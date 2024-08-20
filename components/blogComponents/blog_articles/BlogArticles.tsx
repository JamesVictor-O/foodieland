import React from "react";

const BlogArticles = () => {
  return (
    <div className="w-full h-40 md:h-52 flex flex-row p-2  border border-gray-300 rounded-3xl mb-4">
      <div className="overflow-hidden rounded-xl w-[70%]  md:w-72 h-32 md:h-48 ">
        <img
          src="recipes/image5.png"
          alt="image of food"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4 md:py-3">
        <h2 className="font-semibold text-sm md:text-xl md:mb-2">
          Crochet Projects for Noodle Lovers
        </h2>
        <p className="font-normal text-xs md:text-sm md:w-[80%]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim{" "}
        </p>
        <div className="mt-2  md:mt-7 flex flex-row items-center">
          <div className="w-36 h-8 md:h-10 flex flex-row items-center">
            <div className="w-10 h-10 overflow-hidden rounded-full">
              <img
                src="homepage/Untitled design.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xs md:text-sm font-bold ml-2">James Victor</h3>
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-medium md:ml-4">
              12 November 2021
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticles;
