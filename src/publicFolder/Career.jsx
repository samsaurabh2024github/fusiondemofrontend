import React from "react";
import {
  FaUsers,
  FaBullseye,
  FaTrophy,
  FaHeart,
  FaBolt,
  FaAward,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

export default function CareerPage() {
  const handleApplyClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-slate-300 to-slate-300  text-black py-24 px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
         <div className="inline-block mb-6 flex items-center gap-4">
  {/* Now Hiring Badge */}
  <span className="bg-yellow-400 text-black text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wider">
    Now Hiring
  </span>

  {/* Contact Button */}
  <button
    onClick={() => (window.location.href = '/contact')}
    className="bg-white cursor-pointer text-purple-700 font-bold text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all"
  >
    Contact Us
  </button>
</div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Elite</span> Coaching Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-black font-light max-w-3xl mx-auto">
            Shape the future. Build champions. Transform lives through the power of sports.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="w-20 h-1 bg-yellow-400 rounded-full"></div>
            <div className="w-20 h-1 bg-cyan-400 rounded-full"></div>
            <div className="w-20 h-1 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Introduction with Bold Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-slate-100 via-slate-300 to-slate-300  rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-300">
            <FaStar className="w-12 h-12 text-yellow-400 mb-6" />
            <h3 className="text-3xl font-bold text-black mb-4">What We're Looking For</h3>
            <p className="text-lg text-black leading-relaxed">
              Passionate individuals with genuine love for working with children and enthusiasm for sports. 
              Experience is valued but not required—what truly matters is your <span className="text-red-800 font-bold">dedication, reliability, and positive attitude</span>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl shadow-2xl p-10 transform hover:scale-105 transition-all duration-300">
            <FaHeart className="w-12 h-12 text-yellow-400 mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-lg text-white leading-relaxed">
              We believe in the power of sports to inspire and empower young minds. Help children develop skills, 
              confidence, and love for the game while creating a fun, supportive environment that makes a real difference.
            </p>
          </div>
        </div>

        {/* Why Join - Dynamic Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Fusion</span>?
            </h2>
            <p className="text-xl text-gray-600">Elevate your coaching career with a premier sports academy</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-2xl p-10 md:p-14 border border-gray-200">
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Fusion Sports Academy is a highly respected organization delivering elite skill-based programs 
              to young athletes. We're dedicated to excellence across Cricket, Football, Basketball, Soccer, and beyond.
            </p>

            {/* Opportunities - Side by Side */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <FaUsers className="w-14 h-14 text-white mb-6 relative z-10" />
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Coaching Positions</h3>
                <p className="text-gray-100 text-lg relative z-10">
                  Lead programs across multiple sports and create lasting impact on young athletes' development journey.
                </p>
                <FaChevronRight className="absolute bottom-4 right-4 w-8 h-8 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </div>

              <div className="group relative bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400 rounded-full filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <FaBullseye className="w-14 h-14 text-white mb-6 relative z-10" />
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Admin & Marketing</h3>
                <p className="text-gray-100 text-lg relative z-10">
                  Power our mission from behind the scenes with dynamic opportunities in operations and growth.
                </p>
                <FaChevronRight className="absolute bottom-4 right-4 w-8 h-8 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </div>
            </div>
          </div>
        </div>

        {/* THRIVE Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">THRIVE</span>
            </h2>
            <p className="text-xl text-gray-600">Our core values drive everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Trust & Helpful */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform shadow-lg">
                  <FaHeart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Trust & Helpful</h3>
                <p className="text-gray-600">Building strong relationships through reliability and unwavering support</p>
              </div>
            </div>

            {/* Respect & Innovative */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-500 transition-all duration-300 overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform shadow-lg">
                  <FaTrophy className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Respect & Innovative</h3>
                <p className="text-gray-600">Honoring everyone while embracing bold, creative approaches</p>
              </div>
            </div>

            {/* Versatile & Excellence */}
            <div className="group relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-200 hover:border-yellow-500 transition-all duration-300 overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform shadow-lg">
                  <FaAward className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Versatile & Excellence</h3>
                <p className="text-gray-600">Adapting dynamically while maintaining the highest standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="relative mb-20 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-300 "></div>
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative z-10 p-12 md:p-16 text-center">
            <FaBolt className="w-20 h-20 mx-auto mb-8 text-red-500" />
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">Our Commitment</h2>
            <p className="text-2xl md:text-3xl font-bold text-black">
              Provide every player with a pathway to THRIVE
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-12 md:p-16 text-center border-2 border-blue-200 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="relative z-10">
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg">
                Join the team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Got That <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">X-Factor</span>?
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              We're seeking coaches who inspire the next generation. If you're ready to make an impact 
              and be part of something extraordinary, let's connect.
            </p>
            
            <button 
              onClick={handleApplyClick}
              className="group cursor-pointer relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-xl px-12 py-5 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <span>Apply Now</span>
              <FaChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-gray-600 text-sm mt-6">Takes less than 2 minutes to get started</p>
          </div>
        </div>
      </section>
    </div>
  );
}
