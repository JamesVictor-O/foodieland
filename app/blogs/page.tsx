import React from "react";
import Blogs from "@/components/blogComponents/blogs/Blogs";
import Header from "@/components/blogComponents/header/Header";

const Blog = () => {
  return (
    <div className="p-5">
      <Header />
      <Blogs />
    </div>
  );
};

export default Blog;
