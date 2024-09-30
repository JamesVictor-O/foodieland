import React from "react";
import OtherRecipes from "@/components/otherRecipes/OtherRecipes";
import BlogArticles from "../blog_articles/BlogArticles";
import { blogPosts } from "@/data";
const Blogs = () => {
  return (
    <div className="w-full flex flex-row ">
      <div className=" w-full md:w-[70%] ">
        {blogPosts.map(post => (
          <BlogArticles key={post.post_ID} post={post} />
        ))}
      </div>
      <OtherRecipes />
    </div>
  );
};

export default Blogs;
