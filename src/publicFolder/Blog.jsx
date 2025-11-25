import React from "react";


import aboutBanner from '../assets/aboutbanner.jpg'
const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Choose a Female Physiotherapist?",
      img: "https://i.imgur.com/z0w0lQY.png", // replace with your image
    },
    {
      id: 2,
      title: "Understanding Autism Spectrum Disorder: Awareness & Understanding",
      img: "https://i.imgur.com/xGZcTLx.png", // replace
    },
    {
      id: 3,
      title: "ADHD and Autism Together: Can You Understand?",
      img: "https://i.imgur.com/xvU3G2f.png", // replace
    },
      {
      id: 4,
      title: "Why Choose a Female Physiotherapist?",
      img: "https://i.imgur.com/z0w0lQY.png", // replace with your image
    },
    {
      id: 5,
      title: "Understanding Autism Spectrum Disorder: Awareness & Understanding",
      img: "https://i.imgur.com/xGZcTLx.png", // replace
    },
    {
      id: 6,
      title: "ADHD and Autism Together: Can You Understand?",
      img: "https://i.imgur.com/xvU3G2f.png", // replace
    },
  ];

  return (
    <div className="">


         <div className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center">
        
              {/* Background Image */}
              <img
                src={aboutBanner}
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
            <a
              href="#"
              className="block mt-4 text-xl font-semibold text-black hover:underline"
            >
              {blog.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
