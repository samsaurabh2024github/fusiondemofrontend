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

import outdoor1 from '../assets/outdoor1.jpg';
import outdoor2 from '../assets/outdoor2.jpg';
import outdoor3 from '../assets/outdoor3.jpg';
import outdoor4 from '../assets/outdoor4.jpg';
import outdoor5 from '../assets/outdoor5.jpg';
import outdoor6 from '../assets/outdoor6.jpg';
import outdoor7 from '../assets/outdoor7.jpg';
import outdoor8 from '../assets/outdoor8.jpg';
import outdoor9 from '../assets/outdoor9.jpg';
import outdoor10 from '../assets/outdoor10.jpg';

import outdoor11 from '../assets/outdoor11.jpg';
import outdoor12 from '../assets/outdoor12.jpg';
import outdoor13 from '../assets/outdoor13.jpg';
import outdoor14 from '../assets/outdoor14.jpg';
import outdoor15 from '../assets/outdoor15.jpg';
import outdoor16 from '../assets/outdoor16.jpg';
import outdoor17 from '../assets/outdoor17.jpg';
import outdoor18 from '../assets/outdoor18.jpg';
import outdoor19 from '../assets/outdoor19.jpg';
// import outdoor20 from '../assets/outdoor20.jpg';


import indoor1 from '../assets/inschool1.jpg'
import indoor2 from '../assets/inschool6.jpg'

import beforeafter1 from '../assets/cricketWin1.jpg';
import beforeafter2 from '../assets/cricketWin2.jpg';
import beforeafter3 from '../assets/cricketwin3.jpg';
import beforeafter4 from '../assets/cricketwin4.jpg';
import beforeafter5 from '../assets/cricketwin5.jpg';
import beforeafter6 from '../assets/cricketwin6.jpg';
import beforeafter7 from '../assets/cricketwin7.jpg';
import beforeafter8 from '../assets/cricketwin8.jpg';

import yoga1 from '../assets/yoga1.jpg';
import yoga2 from '../assets/yoga2.jpg';  
import yoga3 from '../assets/yoga3.jpg';
import yoga4 from '../assets/yoga4.jpg';

import video1 from '../assets/vid1.mp4';
import video2 from '../assets/vid2.mp4';
import video3 from '../assets/vid3.mp4';
import video4 from '../assets/vid4.mp4';
import video5 from '../assets/vid5.mp4';
import video6 from '../assets/vid6.mp4';
import video7 from '../assets/vid7.mp4';
import video8 from '../assets/vid8.mp4';
import video9 from '../assets/vid9.mp4';
import video10 from '../assets/vid10.mp4';
import video11 from '../assets/vid11.mp4';
import video12 from '../assets/vid12.mp4';
import video13 from '../assets/vid13.mp4';
import video14 from '../assets/vid14.mp4';
import video15 from '../assets/vid15.mp4';
import video16 from '../assets/vid16.mp4';
import video17 from '../assets/vid17.mp4';
import video18 from '../assets/vid18.mp4';






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
        beforeafter1,
        beforeafter2,
        beforeafter3,
        beforeafter4,
        beforeafter5,
        beforeafter6,
        beforeafter7,
        beforeafter8
      ],
       videos: [
        video1,
        video2,
        video3,
  ]
    },

    { 
      id: 2,
      category: "before-after",
      title: "After School Basketball",
      description: "Evening basketball drills.",
      color: "from-orange-500 to-red-500",
      images: [
      
       indoor1,
        indoor2,
        beforeafter4,
        beforeafter5,
        // beforeafter6,
        // beforeafter7,
        // beforeafter8
      ]
    },

    // Fitness
    {
      id: 3,
      category: "fitness",
      title: "Inter-House Fitness Day",
      description: "Endurance challenges.",
      color: "from-green-500 to-emerald-600",
      videos: [
        video4,
        video5,],
      images: [
        outdoor1,
        outdoor2,
        outdoor3, 
        outdoor4,
        outdoor5,
        outdoor6,

      ],
      
    },

    {
      id: 4,
      category: "fitness",
      title: "Sprint Challenge 2024",
      description: "100m dash highlights.",
      color: "from-green-500 to-emerald-600",
      images: [
       
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
         outdoor7,
        outdoor8,
        outdoor9,
        outdoor10 
      ],
      videos: [
        video6,
        video7,]
    },

    // Coaching
    {
      id: 6,
      category: "coaching",
      title: "One-on-One Coaching",
      description: "Personalized improvement.",
      color: "from-purple-500 to-pink-500",
      images: [
        outdoor11,
        outdoor12,
        outdoor13,  
        outdoor14,
        outdoor15,
        outdoor16,
        
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
        outdoor17,
        outdoor18,
        outdoor19,
        outdoor14
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
      beforeafter1,
      beforeafter2,
      beforeafter3,
      beforeafter4,
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
        yoga1,
        yoga2,
        yoga3,
        yoga4
        
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
      Explore our multiple images from each of our sports programs.
    </p>
    <p>our galary </p>
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
       {filteredItems.map((item) => (
  <>

   {/* Render Videos */}
    {item.videos?.map((vid, index) => (
      <div
        key={`${item.id}-vid-${index}`}
        onClick={() => setLightboxImage({ type: "video", url: vid, item })}
        className="group relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
      >
        <video
          src={vid}
          className="w-full h-64 object-cover"
          muted
          autoPlay
          loop
        />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-5">
          <h3 className="text-white font-bold">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.description}</p>
        </div>
      </div>
    ))}
    {/* Render Images */}
    {item.images?.map((img, index) => (
      <div
        key={`${item.id}-img-${index}`}
        onClick={() => setLightboxImage({ type: "image", url: img, item })}
        className="group relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
      >
        <img src={img} className="w-full h-64 object-cover" />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-5">
          <h3 className="text-white font-bold">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.description}</p>
        </div>
      </div>
    ))}

   
  </>
))}

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
