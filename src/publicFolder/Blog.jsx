import React from "react";
import Img1 from '../assets/blog1.jpeg';
import Img2 from '../assets/blog2.jpeg';
import Img3 from '../assets/blog3.jpeg';

import Img4 from '../assets/blog4.jpeg';
import Img5 from '../assets/blog5.jpg';
import Img6 from '../assets/blog6.jpeg';

// import aboutBanner from '../assets/aboutBanner.jpg'

import blogbanner from '../assets/blogBanner1.jpg'
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "How Sports Improve Academic Performance",
      img: Img1, // replace with your image
    },
    {
      id: 2,
      title: "Importance of Physical Literacy in Kids",
      img: Img2, // replace
    },
    {
      id: 3,
      title: "Why Movement Matters for Mental Health",
      img: Img3, // replace
    },
      {
      id: 4,
      title: "The Science Behind Motor Skills",
      img: Img4, // replace with your image
    },
    {
      id: 5,
      title: "How to Prevent Sports Injuries in Children",
      img: Img5, // replace
    },
    {
      id: 6,
      title: "Role of Nutrition in Childhood Growth",
      img: Img6, // replace
    },
  ];

  return (
    <div className="">


         <div className="relative w-full h-[80vh] md:h-[70vh] flex items-center justify-center">
        
              {/* Background Image */}
              <img
                src={blogbanner}
                alt="Parenting Tips"
                className="absolute inset-0 w-full h-full object-cover"
              />
        
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
        
              {/* Content */}
              <div className="relative z-10 text-center px-4 md:px-10 max-w-4xl">
             
                <h1 className="font-orbitron text-5xl font-bold text-white">OUR BLOGS </h1>

        
                <p className="text-white text-sm sm:text-base md:text-lg mt-4 font-medium">
                 Empowering Students Through Sports, Fitness & Wellness
                </p>
              </div>
        
              
            </div>
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-3  font-orbitron ">Blogs</h1>

      {/* Decorative Line */}
      <div className="flex justify-center mb-4">
        <div className="w-20 border-b-4 border-green-700 rounded-full"></div>
      </div>

      {/* Subtitle */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        professional, or advocate, discover valuable content that educates,
        empowers, and builds awareness.
      </p>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-3xl shadow-xl p-4 hover:shadow-2xl transition"
          >
            {/* Image */}
            <img
              src={blog.img}
              alt={blog.title}
              className="rounded-xl w-full h-42 object-cover"
            />

            {/* Title */}
           <Link
              to={`/blogs/${blog.id}`}
              className="text-xl font-bold mt-4 block hover:underline"
            >
              {blog.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
