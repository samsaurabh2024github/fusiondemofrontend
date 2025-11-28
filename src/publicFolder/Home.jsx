// import Image from "next/image";

// import { Trophy, Shield, Lightbulb, Users } from 'lucide-react';

import { FaTrophy, FaShieldAlt, FaLightbulb, FaUsers, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import {
  FaHeartbeat,
  FaBrain,
  FaRunning,
  FaFutbol,
  FaUserInjured,
  FaChild,
  FaSadCry,
  FaBed,
} from "react-icons/fa";



import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import sportsImage from "../assets/banner2.png";
import company1 from "../assets/fusionPartner1.png";
import company2 from "../assets/fusionPartner2.png";
import company3 from "../assets/fusionPartner3.png";
import company4 from "../assets/fusionPartner4.png";
import company5 from "../assets/fusionPartner1.png";
import { Link } from 'react-router-dom';

export default function Home() {


    
      const items2 = [
    "HOCKEY",
    "FOOTBALL",
    "LAWN TENNIS",
    "RUNNING",
    "BADMINTON",
    "BASKETBALL",
  ];

    const items = [
    {
      icon: <FaHeartbeat className="text-pink-500" size={45} />,
      title: "Back Pain",
      desc: "Avail spine Surgeries with our advanced Treatment...",
    },
    
    {
      icon: <FaBrain className="text-pink-500" size={45} />,
      title: "Neck Pain",
      desc: "Vertigo, Migraine, headache and Giddiness...",
    },
    {
      icon: <FaRunning className="text-pink-500" size={45} />,
      title: "Knee Pain",
      desc: "1000 patient to avoid knee surgeries...",
    },
    {
      icon: <FaFutbol className="text-pink-500" size={45} />,
      title: "Sports Injury",
      desc: "Our main aim to avoid sport injuries with our rehab...",
    },
    {
      icon: <FaUserInjured className="text-pink-500" size={45} />,
      title: "Shoulder Pain",
      desc: "We have advanced treatment for shoulder...",
    },
    {
      icon: <FaChild className="text-pink-500" size={45} />,
      title: "Child Development",
      desc: "Advanced treatment for special children...",
    },
    {
      icon: <FaSadCry className="text-pink-500" size={45} />,
      title: "Migraine & Headache",
      desc: "We have the advanced solutions for headache...",
    },
    {
      icon: <FaBed className="text-pink-500" size={45} />,
      title: "Sleeping Issues",
      desc: "Advanced treatment for Depression & Anxiety due...",
    },
  ];

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const values = [
    {
      number: "01",
      title: "Excellence",
      description: "We strive for the highest standards in all our programs and services, helping individuals achieve excellence in fitness, performance, and sports endeavors.",
      icon: FaTrophy,
      color: "from-amber-500 to-orange-600"
    },
    {
      number: "02",
      title: "Integrity",
      description: "We uphold honesty, transparency, and respect in all our interactions, fostering a culture of trust and fairness.",
      icon: FaShieldAlt,
      color: "from-blue-500 to-cyan-600"
    },
    {
      number: "03",
      title: "Innovation",
      description: "We embrace continuous learning and adapt our practices based on the latest research in sports science and wellness to offer cutting-edge programs.",
      icon: FaLightbulb,
      color: "from-purple-500 to-pink-600"
    },
    {
      number: "04",
      title: "Community",
      description: "We believe in the power of a positive and supportive community that inspires, uplifts, and nurtures every individual's growth.",
      icon: FaUsers,
      color: "from-green-500 to-emerald-600"
    }
  ];
  return (
    <div className="">
       <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-20  gap-8 sm:gap-12 md:gap-16 lg:gap-28 max-w-[1400px] mx-auto">
        {/* Left content */}
        <div className="flex flex-col items-start text-left w-full md:w-1/2 md:max-w-xl">
          <p className="text-sm sm:text-base md:text-sm text-black font-bold font-orbitron   sm:mb-6">
            Empowering INDIA'S FUTURE CHAMPIONS
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-extrabold leading-tight mb-6 sm:mb-8">
            Evaluate Your Game to a New Dimension
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 font-space-grotesk text-gray-700">
            Welcome to Fusion Sports & Education academy
          </p>
          
       <Link to="/contact">
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-4 px-6 sm:px-8 md:px-10 rounded-lg transition duration-300 text-base sm:text-lg md:text-xl w-full sm:w-auto cursor-pointer">
    Contact Us
  </button>
</Link>
        </div>

        {/* Right image */}
        <div className="relative w-full md:w-1/2 max-w-2xl mt-8 md:mt-0">
          <img 
            src={sportsImage}
            alt="Sports Training" 
            className="relative z-10 w-full rounded-2xl shadow-2xl" 
          />
        </div>
      </section>


      {/* ============================== */}
       


      {/* =========================== */}

          <section className="py-16 px-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Our Company
              </span>
              <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-orbitron">
              Who we are?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed font-space-grotesk">
              Fusion Sports is a dynamic team of physical education teachers, sports trainers, 
              wellness coaches, nutritionists, fitness experts, and psychologists committed to 
              enhancing your physical, mental, social, and emotional well-being.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed font-space-grotesk">
              We believe in the synergy between sports and wellness, empowering individuals to 
              reach their full potential through a holistic approach to training and development.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-black">20+</div>
                <div className="text-sm text-black mt-1">Expert Trainers</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-black">500+</div>
                <div className="text-sm text-black mt-1">Happy Clients</div>
              </div>
            </div>
            
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-3xl transition-colors duration-300 shadow-md hover:shadow-lg">
              Learn More About Us
            </button>
          </div>
          
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1000&fit=crop"
                alt="Fusion Sports Team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>


{/* ======================= */}

<section className="px-6 md:px-20 py-1 bg-gray-50">


<div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Experts
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-md">
            Learn from international professionals and gain valuable industry insights from sport leaders.
          </p>

          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full w-fit flex items-center gap-2">
            View all Experts
            <span className="text-xl">›</span>
          </button> */}
        </div>

        {/* RIGHT SIDE – 3 EXPERT CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* CARD 1 */}
          <div className="text-center">
            <img
              src="path_to_antoine_image.jpg"
              className="w-40 h-40 object-cover rounded-lg mx-auto mb-4"
              alt="Expert"
            />
            <h3 className="text-lg font-semibold text-gray-900">
             Ujjawal kumar, Mped
            </h3>
            <p className="text-gray-600 text-sm">
              National Hockey player
            </p>
          </div>

          {/* CARD 2 */}
          <div className="text-center">
            <img
              src="path_to_daniela_image.jpg"
              className="w-40 h-40 object-cover rounded-lg mx-auto mb-4"
              alt="Expert"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              Sapna Choudhary, Mped
            </h3>
            <p className="text-gray-600 text-sm">
            National Cricket and gymnastics
            </p>
          </div>

          {/* CARD 3 */}
          <div className="text-center">
            <img
              src="path_to_deniz_image.jpg"
              className="w-40 h-40 object-cover rounded-lg mx-auto mb-4"
              alt="Expert"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              Kishor kachhad, Mped
            </h3>
            <p className="text-gray-600 text-sm">
              National Kho-Kho player
            </p>
          </div>
        </div>
      </div>

      </section>



{/* ==================== */}
  

 {/* Certification Partners Slider Section */}
      <section className="px-6 md:px-20 py-1 bg-gray-50">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Our Certification Partners
        </h2>

        <Slider {...settings}>
          {[company1, company2, company3, company4, company5].map((logo, index) => (
            <div key={index} className="p-4">
              <div className="bg-white  flex items-center justify-center h-24">
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* ================ */}
       <div className="relative w-full bg-black py-20 overflow-hidden">

      {/* WHITE STRIP */}
      <div className="absolute top-10 w-[150%] -rotate-6 left-[-10%]">
        <div className="bg-white py-4 flex overflow-hidden whitespace-nowrap">
          <div className="marquee-left flex gap-10">
            {items2.map((item, idx) => (
              <span key={idx} className="text-black text-3xl font-bold tracking-wider">
                {item} •
              </span>
            ))}
          </div>

          {/* duplicate for seamless loop */}
          <div className="marquee-left flex gap-10">
            {items2.map((item, idx) => (
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
            {items2.map((item, idx) => (
              <span key={idx} className="text-black text-3xl font-bold tracking-wider">
                {item} •
              </span>
            ))}
          </div>

          {/* duplicate */}
          <div className="marquee-right flex gap-10">
            {items2.map((item, idx) => (
              <span key={idx} className="text-black text-3xl font-bold tracking-wider">
                {item} •
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>


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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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



    {/* LOCATION & CONTACT SECTION */}


<section className="py-20 px-6 md:px-20 bg-gradient-to-br from-slate-50 to-blue-50">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">


{/* Left Side Content */}
<div className="text-center md:text-left space-y-6">
<h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 leading-tight">
Location & <br /> Contact
</h2>


<motion.a
href="https://maps.app.goo.gl/"
target="_blank"
rel="noopener noreferrer"
whileHover={{ scale: 1.03 }}
className="text-lg text-gray-700 flex items-center justify-center md:justify-start gap-3 cursor-pointer"
>
Office no 5 Prima garden, Orwad, Saran Road, Valsad
<FaMapMarkerAlt className="text-orange-500 text-xl" />
</motion.a>


<motion.a
href="https://maps.app.goo.gl/"
target="_blank"
rel="noopener noreferrer"
whileHover={{ scale: 1.03 }}
className="text-lg text-gray-700 flex items-center justify-center md:justify-start gap-3 cursor-pointer"
>
Gujarat – 396185
<FaMapMarkerAlt className="text-orange-500 text-xl" />
</motion.a>


<motion.a
href="tel:+918492856107"
whileHover={{ scale: 1.05 }}
className="text-lg text-gray-700 flex items-center justify-center md:justify-start gap-3 cursor-pointer"
>
Call us: (+91) 84928 56107
<FaPhoneAlt className="text-orange-500 text-xl" />
</motion.a>


<motion.a
href="mailto:contactus@fusionmain.com"
whileHover={{ scale: 1.05 }}
className="text-lg text-gray-700 flex items-center justify-center md:justify-start gap-3 cursor-pointer"
>
contactus@fusionmain.com
<FaEnvelope className="text-orange-500 text-xl/" />
</motion.a>
</div>


{/* Google Map */}
<motion.div
whileHover={{ scale: 1.01 }}
className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
>
<a
href="https://maps.app.goo.gl/"
target="_blank"
rel="noopener noreferrer"
>
<iframe
title="Fusion Sports Location"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.854584114817!2d77.38129457452611!3d28.608187975672874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55e98d7b5c5%3A0xa70b4957332b267!2sRise%20Sports%20School!5e0!3m2!1sen!2sin!4v1700000000000"
width="100%"
height="100%"
style={{ border: 0 }}
allowFullScreen=""
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
></iframe>
</a>
</motion.div>


</div>
</section>

   

{/* ==================== */}
 {/* <section className="py-16 px-6 bg-white">
    
      <h1 className="text-4xl font-bold text-green-700 text-center">
        Are you suffering from any of this?
      </h1>

      
      <div className="flex justify-center mt-3 mb-12">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-700 rounded-full"></div>
          <div className="w-2 h-2 bg-green-700 rounded-full"></div>
          <div className="w-2 h-2 bg-green-700 rounded-full"></div>
          <div className="w-14 border-b-4 border-green-700 rounded-full"></div>
        </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 ">
         
            <div>{item.icon}</div>

          
            <div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section> */}


    {/* ========================== */}


{/* ======================== */}





   
    </div>
  );
}
