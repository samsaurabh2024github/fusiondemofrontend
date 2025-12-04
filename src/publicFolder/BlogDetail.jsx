import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../publicFolder/blogData";

const BlogDetail = () => {
  const { id } = useParams();                // Get blog ID from URL
  const blog = blogData.find((b) => b.id === Number(id));   // Find matching blog

  if (!blog) {
    return <h2 className="text-center text-2xl mt-20">Blog Not Found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>

      <img src={blog.img} className="w-full rounded-xl mb-8" />

      <p className="text-lg leading-8 whitespace-pre-line">{blog.content}</p>

      <div className="mt-10 text-center">
        <a
          href="/blog"
          className="px-6 py-3 bg-green-700 text-white rounded-lg"
        >
          ← Back to Blogs
        </a>
      </div>
    </div>
  );
};

export default BlogDetail;
