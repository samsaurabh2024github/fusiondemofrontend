import React from 'react';
import {
  FaMedal,
  FaBasketballBall,
  FaUsers,
  FaTrophy,
  FaBolt,
  FaBullseye,
  FaChartLine,
  FaHeart,
  FaStar
} from "react-icons/fa";

export default function FusionStatsSection() {
  const stats = [
    { number: '20+', label: 'Certified Coaches', icon: <FaMedal className="w-8 h-8 text-white" />, color: 'from-orange-500 to-red-500' },
    { number: '15+', label: 'Sports Disciplines', icon: <FaBasketballBall className="w-8 h-8 text-white" />, color: 'from-blue-500 to-cyan-500' },
    { number: '1000+', label: 'Students Trained', icon: <FaUsers className="w-8 h-8 text-white" />, color: 'from-purple-500 to-pink-500' },
    { number: 'Year-round', label: 'Events & Tournaments', icon: <FaTrophy className="w-8 h-8 text-white" />, color: 'from-green-500 to-emerald-500' },
  ];

  const differentiators = [
    {
      icon: <FaBolt className="w-7 h-7 text-white" />,
      title: 'Research-backed Curriculum',
      description: 'Physical education programs based on scientific research and best practices',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <FaBullseye className="w-7 h-7 text-white" />,
      title: 'Age-appropriate Development',
      description: 'Motor skill development tailored to each age group and ability level',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: <FaChartLine className="w-7 h-7 text-white" />,
      title: 'Weekly Progress Tracking',
      description: 'Regular assessments and feedback to monitor student growth',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <FaHeart className="w-7 h-7 text-white" />,
      title: 'Holistic Wellness Support',
      description: 'Wellness and psychology programs for complete student development',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: <FaTrophy className="w-7 h-7 text-white" />,
      title: 'Tournament Exposure',
      description: 'Competitive opportunities and talent identification programs',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: <FaStar className="w-7 h-7 text-white" />,
      title: 'Expert Guidance',
      description: 'Diet and fitness guidance from certified nutrition experts',
      gradient: 'from-purple-500 to-violet-500'
    },
  ];

  const programs = [
    {
      emoji: '📚',
      title: 'In-School Physical Education Program',
      description: 'Comprehensive PE curriculum integrated into school schedules',
      gradient: 'from-blue-600 to-cyan-600',
      accentColor: 'bg-cyan-500'
    },
    {
      emoji: '🏅',
      title: 'After School Sports Academy',
      description: 'Extended training programs for skill enhancement and competitive preparation',
      gradient: 'from-orange-600 to-red-600',
      accentColor: 'bg-red-500'
    },
    {
      emoji: '🎯',
      title: 'Sports-Specific Coaching',
      description: 'Specialized training in Cricket, Football, Basketball, and more',
      gradient: 'from-purple-600 to-pink-600',
      accentColor: 'bg-pink-500'
    },
    {
      emoji: '🏟️',
      title: 'Event Management & Sports Day',
      description: 'Complete support for organizing annual sports events and competitions',
      gradient: 'from-green-600 to-emerald-600',
      accentColor: 'bg-emerald-500'
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Stats */}
        <div className="text-center mb-20">
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wider">
            Our Impact
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Key Stats</h2>

          <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 mx-auto mb-16 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-slate-800/90 p-8 rounded-2xl border-2 border-slate-700 hover:border-slate-600 transform hover:scale-105 hover:-translate-y-2 transition-all">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300">
                  {stat.number}
                </div>
                <p className="text-gray-300 font-semibold mt-2 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-6 py-2 rounded-full uppercase">
            Why Choose Us
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">What Makes Fusion Different</h2>

          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-16 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <div key={i} className="bg-slate-800/80 p-6 rounded-xl border-2 border-slate-700 hover:border-slate-600 transform hover:scale-105 transition-all">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-bold px-6 py-2 rounded-full uppercase">
            Our Programs
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Featured Programs</h2>

          <div className="w-32 h-2 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 mb-16 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, i) => (
              <div key={i} className="bg-slate-800/90 p-8 rounded-2xl border-2 border-slate-700 hover:border-slate-600 transform hover:scale-105 transition-all">
                <div className="text-6xl mb-3">{program.emoji}</div>
                <div className={`w-16 h-1 ${program.accentColor} rounded-full mb-4`}></div>
                <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-400">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
