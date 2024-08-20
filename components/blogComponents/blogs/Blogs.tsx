import React from "react";
import OtherRecipes from "@/components/otherRecipes/OtherRecipes";
import BlogArticles from "../blog_articles/BlogArticles";
const Blogs = () => {
  return (
    <div className="w-full flex flex-row ">
      <div className=" w-full md:w-[70%] ">
       <BlogArticles/>
       <BlogArticles/>
       <BlogArticles/>
       <BlogArticles/>
       <BlogArticles/>
       <BlogArticles/>
      </div>
      <OtherRecipes />
    </div>
  );
};

export default Blogs;
