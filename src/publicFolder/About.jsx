import React from 'react'
import aboutBanner from '../assets/aboutbanner.jpg'
import { FaHeart, FaHeartbeat, FaLightbulb, FaRunning, FaShieldAlt, FaTrophy, FaUsers } from 'react-icons/fa';

import { FaMedal, FaClipboardCheck, FaTools, FaUserCheck, FaFutbol } from "react-icons/fa";
import { FaBullseye, FaEye } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {

     const roles = [
    "Physical Education Teachers",
    "Sports Coaches & Trainers",
    "Fitness Experts",
    "Nutritionists",
    "Physiotherapists",
    "Sports Psychologists",
    "Event Coordinators",
  ];

    const settings = {
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    speed: 800,
    cssEase: "linear",
  };


     const values = [
        {
          number: "01",
          title: "Excellence",
          description: "We deliver structured programs designed with research-based techniques and expert guidance.",
          icon: FaTrophy,
          color: "from-amber-500 to-orange-600"
        },
        {
          number: "02",
          title: "Discipline & Respect",
          description: "We teach children important life skills such as responsibility, teamwork, respect, and self-control.",
          icon: FaShieldAlt,
          color: "from-blue-500 to-cyan-600"
        },
        {
          number: "03",
          title: "Inclusiveness",
          description: "Every child, regardless of skill level, participates, learns, and grows.",
          icon: FaLightbulb,
          color: "from-purple-500 to-pink-600"
        },
        {
          number: "04",
          title: "Holistic Development",
          description: "We focus on physical fitness, mental well-being, nutrition, teamwork, and emotional health.",
          icon: FaUsers,
          color: "from-green-500 to-emerald-600"
        },
         {
          number: "05",
          title: "Continuous Learning",
          description: "Our coaches regularly train and upgrade their knowledge to offer high-quality sessions.",
          icon: FaUsers,
          color: "from-green-500 to-emerald-600"
        }
      ];

    

      const items = [
    "HOCKEY",
    "FOOTBALL",
    "LAWN TENNIS",
    "RUNNING",
    "BADMINTON",
    "BASKETBALL",
  ];

   const items4 = [
    { icon: <FaUserCheck />, text: "Expert coaches assigned as per school needs" },
    { icon: <FaClipboardCheck />, text: "Fully structured curriculum for all age groups" },
    { icon: <FaTools />, text: "Complete sports equipment & regular maintenance" },
    { icon: <FaMedal />, text: "Twice-a-year student assessments and report cards" },
    { icon: <FaUsers />, text: "Weekly activity tracking for parents & schools" },
    { icon: <FaHeart />, text: "Regular nutritionist and physiotherapist visits" },
    { icon: <FaFutbol />, text: "Support for sports days and inter-school events" },
  ];

  return (
    <div>


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
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-6xl leading-tight font-orbitron">
       About Us – Fusion Sports Academy 
        </h1>

        <p className="text-white text-sm sm:text-base md:text-lg mt-4 font-medium font-space-grotesk">
         Empowering Students Through Sports, Fitness & Wellness
        </p>
      </div>

      
    </div>

     <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-8xl  text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-orbitron">
          About Fusion Sports Academy
        </h2>

        {/* Description Box */}
        <div className="bg-gray-50 p-6 md:p-1 rounded-xl  ">
          <p className="text-black text-lg md:text-xl leading-relaxed mb-4 font-space-grotesk">
            Fusion Sports Academy is a dynamic team of Physical Education teachers,
            certified coaches, fitness trainers, nutritionists, wellness experts, and
            sports psychologists working together to bring world-class physical
            education to schools.
          </p>

          <p className="text-black text-lg md:text-xl leading-relaxed font-space-grotesk">
            We believe that sports is not just an activity—it is a foundation for life.
            Our mission is to nurture children’s physical, mental, social, and emotional
            growth through structured sports programs and holistic wellness practices.
          </p>
        </div>

       
      </div>
    </section>
     {/* Icon Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-800">
          
          <div className="flex flex-col items-center">
            <FaRunning className="text-green-500 text-5xl mb-3" />
            <h3 className="font-semibold text-lg font-orbitron">Physical Growth</h3>
            <p classN8ame="text-gray-600 text-sm mt-1 ">
              Building strength, stamina & coordination
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaUsers className="text-blue-500 text-5xl mb-3" />
            <h3 className="font-semibold text-lg">Social Development</h3>
            <p className="text-gray-600 text-sm mt-1">
              Encouraging teamwork & communication
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaHeartbeat className="text-red-500 text-5xl mb-3" />
            <h3 className="font-semibold text-lg">Mental Wellness</h3>
            <p className="text-gray-600 text-sm mt-1">
              Enhancing focus, discipline & confidence
            </p>
          </div>

        </div>


         <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🧑‍🏫 Our Team
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Fusion Sports is built by a passionate group of professionals including:
          </p>

          <p className="text-gray-600 mt-4">
            Together, we work to transform school sports programs into engaging,
            structured, and result-oriented experiences.
          </p>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="relative h-64 md:h-80 border border-gray-200 rounded-xl bg-gray-50 shadow-lg p-4">
          <Slider {...settings}>
            {roles.map((role, i) => (
              <div key={i} className="px-2">
                <div className="bg-white shadow-md rounded-lg p-4 text-center text-gray-800 font-medium border border-gray-100">
                  {role}
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>


{/* ==================== */}


<section className="py-0 px-6 bg-white">
  {/* Title */}
  <h1 className="text-3xl md:text-4xl font-bold text-black text-center">
    What Makes Fusion Sports Different?
  </h1>


  {/* Decorative Line */}
  <div className="flex justify-center mt-4 mb-12">
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-black rounded-full"></div>
      <div className="w-2 h-2 bg-black rounded-full"></div>
      <div className="w-2 h-2 bg-black rounded-full"></div>
      <div className="w-16 border-b-4 border-black rounded-full"></div>
    </div>
  </div>

  {/* Grid Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
    {items4.map((item, index) => (
      <div
        key={index}
        className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
      >
        {/* Icon */}
        <div className="text-orange-400 text-3xl flex-shrink-0">
          {item.icon}
        </div>

        {/* Text */}
        <div>
          <p className="text-gray-700 text-base font-medium leading-snug">
            {item.text}
          </p>
        </div>
      </div>
    ))}
  </div>

    <p className='text-center justify-center py-4 font-semibold text-xl'>We combine sports + fitness + wellness to build confident, active, and healthy students.</p>
</section>


{/* ====================== */}

    {/* <section className="max-w-4xl mx-auto my-16 px-6 md:px-0">
      <div className="space-y-12 text-gray-900">

        <div className="flex items-start space-x-4">
          <FaBullseye className="text-green-600 text-4xl flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">🎯 Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To inspire and empower children and youth to achieve their peak performance and overall well-being through a balanced and scientifically designed blend of sports, physical education, and wellness activities.
            </p>
          </div>
        </div>

       
        <div className="flex items-start space-x-4">
          <FaEye className="text-blue-600 text-4xl flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">👁️ Our Vision</h3>
            <p className="text-lg leading-relaxed">
              To create a future where every child has access to quality sports training, life-skill development, and a healthy lifestyle within their school environment.
            </p>
          </div>
        </div>

      </div>
    </section> */}




    
 <section className="relative py-20 px-4 bg-gray-900 overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px)`
             }}>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
              Our Values
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building a Stronger
            <span className="block mt-2 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Future Together
            </span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Gradient Border Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}></div>
                
                {/* Number Badge */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-6xl font-black text-gray-700/50 group-hover:text-gray-600/50 transition-colors duration-300">
                    {value.number}
                  </span>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${value.color} shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                    <IconComponent className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {value.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${value.color}`}></div>
                  <div className={`absolute top-6 right-6 w-1 h-1 rounded-full bg-gradient-to-br ${value.color}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>








        <div className="relative w-full bg-black py-20 overflow-hidden">

      {/* WHITE STRIP */}
      <div className="absolute top-10 w-[150%] -rotate-6 left-[-10%]">
        <div className="bg-white py-4 flex overflow-hidden whitespace-nowrap">
          <div className="marquee-left flex gap-10">
            {items.map((item, idx) => (
              <span key={idx} className="text-black text-3xl font-bold tracking-wider">
                {item} •
              </span>
            ))}
          </div>

          {/* duplicate for seamless loop */}
          <div className="marquee-left flex gap-10">
            {items.map((item, idx) => (
              <span key={idx} className="text-black text-3xl font-bold tracking-wider">
                {item} •
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* GREEN STRIP */}
      <div className="absolute top-28 w-[150%] rotate-6 left-[-10%]">
        <div className="bg-blue-400 py-4 flex overflow-hidden whitespace-nowrap">
          <div className="marquee-right flex gap-10">
            {items.map((item, idx) => (
              <span key={idx} className="text-black text-3xl font-bold tracking-wider">
                {item} •
              </span>
            ))}
          </div>

          {/* duplicate */}
          <div className="marquee-right flex gap-10">
            {items.map((item, idx) => (
              <span key={idx} className="text-black text-3xl font-bold tracking-wider">
                {item} •
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>


    <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Side: Only Image */}
            <div className="relative w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="your-left-image-source.jpg" // replace with your actual image source
                alt="Physiotherapy"
                className="w-full h-full object-cover"
              />
            </div>
    
            {/* Right Side: 4 Boxes with alternate image positions */}
            <div className="space-y-8">
              
              {/* First Box (Image on Left, Text on Right) */}
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="relative w-full md:w-1/2 h-[200px] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="your-first-image-source.jpg" // replace with your actual image source
                    alt="Physiotherapy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-xl font-semibold">Physiotherapy Heals Motion</h3>
                  <a href="#" className="text-blue-500 hover:underline">View more →</a>
                </div>
              </div>
    
              {/* Second Box (Image on Right, Text on Left) */}
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
    
                 <div className="md:w-1/2 text-center md:text-right">
                  <h3 className="text-xl font-semibold">Play-Based Physio for Autism</h3>
                  <a href="#" className="text-blue-500 hover:underline">View more →</a>
                </div>
                <div className="relative w-full md:w-1/2 h-[200px] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="your-second-image-source.jpg" // replace with your actual image source
                    alt="Physiotherapy"
                    className="w-full h-full object-cover"
                  />
                </div>
               
              </div>
    
    
            </div>
          </div>
        </div>
        



    </div>
  )
}

export default About