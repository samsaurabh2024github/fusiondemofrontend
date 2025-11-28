import React, { useState } from 'react';
import {
  FaTrophy,
  FaUsers,
  FaDumbbell,
  FaMedal,
  FaClock,
  FaHeart,
  FaCommentDots,
  FaBolt,
  FaTimes
} from "react-icons/fa";

import galarybanner from '../assets/galaryBanner1.jpg';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Programs', icon: FaBolt },
    { id: 'before-after', name: 'Before & After School', icon: FaClock },
    { id: 'fitness', name: 'Fitness Challenges', icon: FaDumbbell },
    { id: 'drills', name: 'Drills & Training', icon: FaUsers },
    { id: 'coaching', name: 'Coach Mentoring', icon: FaCommentDots },
    { id: 'talent', name: 'Talent Showcase', icon: FaMedal },
    { id: 'tournaments', name: 'Tournament Highlights', icon: FaTrophy },
    { id: 'wellness', name: 'Wellness Sessions', icon: FaHeart }
  ];

  const galleryItems = [
    // Before & After School
    { 
      id: 1,
      category: "before-after",
      title: "Morning Energy Sessions",
      description: "Warm-ups to start the day.",
      color: "from-orange-500 to-red-500",
      images: [
        "/images/before1.jpg",
        "/images/before2.jpg",
        "/images/before3.jpg"
      ]
    },

    { 
      id: 2,
      category: "before-after",
      title: "After School Basketball",
      description: "Evening basketball drills.",
      color: "from-orange-500 to-red-500",
      images: [
        "/images/before2.jpg",
        "/images/before1.jpg"
      ]
    },

    // Fitness
    {
      id: 3,
      category: "fitness",
      title: "Inter-House Fitness Day",
      description: "Endurance challenges.",
      color: "from-green-500 to-emerald-600",
      images: [
        "/images/fitness1.jpg",
        "/images/fitness2.jpg",
        "/images/fitness3.jpg"
      ]
    },

    {
      id: 4,
      category: "fitness",
      title: "Sprint Challenge 2024",
      description: "100m dash highlights.",
      color: "from-green-500 to-emerald-600",
      images: [
        "/images/fitness3.jpg",
        "/images/fitness2.jpg"
      ]
    },

    // Drills
    {
      id: 5,
      category: "drills",
      title: "Football Dribbling Drills",
      description: "Ball control sessions.",
      color: "from-blue-500 to-cyan-500",
      images: [
        "/images/drills1.jpg",
        "/images/drills2.jpg"
      ]
    },

    // Coaching
    {
      id: 6,
      category: "coaching",
      title: "One-on-One Coaching",
      description: "Personalized improvement.",
      color: "from-purple-500 to-pink-500",
      images: [
        "/images/coaching1.jpg"
      ]
    },

    // Talent Showcase
    {
      id: 7,
      category: "talent",
      title: "Rising Stars Tournament",
      description: "Best young athletes.",
      color: "from-yellow-500 to-orange-500",
      images: [
        "/images/talent1.jpg",
        "/images/talent2.jpg"
      ]
    },

    // Tournaments
    {
      id: 8,
      category: "tournaments",
      title: "Cricket League Finals",
      description: "Thrilling match moments.",
      color: "from-red-500 to-rose-600",
      images: [
        "/images/tournament1.jpg",
        "/images/tournament2.jpg"
      ]
    },

    // Wellness
    {
      id: 9,
      category: "wellness",
      title: "Yoga & Meditation",
      description: "Mental wellness sessions.",
      color: "from-teal-500 to-cyan-500",
      images: [
        "/images/wellness1.jpg",
        "/images/wellness2.jpg"
      ]
    }
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900">

      {/* Hero */}
    <div
  className="relative bg-cover bg-center min-h-60vh text-white py-24"
  style={{ backgroundImage: `url(${galarybanner})` }}
>
  {/* Optional overlay for better text readability */}
 

  <div className="relative max-w-7xl mx-auto text-center px-6">
    <h1 className="text-5xl md:text-6xl text-black font-bold">
      Our <span className="text-black">Champions</span> in Action
    </h1>
    <p className="text-xl text-black mt-4">
      Explore multiple images from each of our sports programs.
    </p>
  </div>
</div>


      {/* Filter */}
      <div className="sticky top-0 z-40 bg-gray-800/90 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold whitespace-nowrap transition ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <Icon className="w-5 h-5" />
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) =>
          item.images?.map((img, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => setLightboxImage({ url: img, item })}
              className="group relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
            >
              <img src={img} className="w-full h-64 object-cover" />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-5">
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button className="absolute top-6 right-6 text-white text-3xl">
            <FaTimes />
          </button>

          <img
            src={lightboxImage.url}
            className="max-w-4xl w-full rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <h2 className="text-white mt-4 text-xl font-bold text-center">
            {lightboxImage.item.title}
          </h2>
        </div>
      )}
    </div>
  );
}
