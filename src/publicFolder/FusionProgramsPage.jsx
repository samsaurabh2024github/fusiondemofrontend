import React, { useState } from 'react';
import {
  FaSchool,
  FaTrophy,
  FaBullseye,
  FaShieldAlt,
  FaCheckCircle,
  FaStar,
  FaRunning,
  FaChartLine,
  FaHeart,
  FaAppleAlt,
  FaDumbbell,
  FaBookOpen,
  FaUsers,
  FaAward,
  FaBolt,
  FaClock,
  FaVideo,
  FaMapMarkedAlt,
  FaBrain,
  FaSmile,
  FaExclamationCircle,
  FaFlask,
  FaClipboardCheck,
  FaLeaf
} from "react-icons/fa";

export default function FusionProgramsPage() {
  const [activeTab, setActiveTab] = useState('in-school');

  const inSchoolFeatures = [
    { icon: FaRunning, title: 'Warm-up & Stretching', desc: 'Proper routines to prevent injuries' },
    { icon: FaChartLine, title: 'Motor Skill Development', desc: 'Balance, agility, speed, coordination' },
    { icon: FaUsers, title: 'Games-based Learning', desc: 'Fun and engaging activities' },
    { icon: FaTrophy, title: 'Sports Introduction', desc: 'Multiple sports disciplines' },
    { icon: FaStar, title: 'Team-building', desc: 'Collaborative activities' },
    { icon: FaBullseye, title: 'Monthly Challenges', desc: 'Fitness goals and achievements' },
    { icon: FaHeart, title: 'Yoga & Mindfulness', desc: 'Mental wellness sessions' },
    { icon: FaShieldAlt, title: 'Injury Prevention', desc: 'Safety basics and techniques' },
  ];

  const safetyFeatures = [
    { icon: FaShieldAlt, title: 'Background Verification', desc: 'All coaches thoroughly screened' },
    { icon: FaHeart, title: 'First-Aid Certified', desc: 'Medical response ready' },
    { icon: FaCheckCircle, title: 'Safe Equipment', desc: 'Quality standards maintained' },
    { icon: FaExclamationCircle, title: 'Weather Safety', desc: 'Heat and weather protocols' },
  ];

  const schoolValue = [
    { icon: FaBolt, text: 'Smooth operations with zero hassle' },
    { icon: FaUsers, text: 'Trained staff always available' },
    { icon: FaBookOpen, text: 'Zero burden on school resources' },
    { icon: FaStar, text: 'Positive parent feedback' },
    { icon: FaChartLine, text: 'Better PE metrics annually' },
  ];

  const afterSchoolFeatures = [
    { icon: FaTrophy, title: 'Specialized Training', desc: 'Cricket, Football, Basketball, Kho-Kho, Volleyball' },
    { icon: FaBullseye, title: 'Personal Development Plans', desc: 'Customized training roadmaps' },
    { icon: FaDumbbell, title: 'Total Fitness', desc: 'Strength, conditioning, flexibility' },
    { icon: FaVideo, title: 'Performance Analysis', desc: 'Video-based technique review' },
    { icon: FaAward, title: 'Tournament Participation', desc: 'Inter-school leagues and competitions' },
  ];

  const academyFeatures = [
    { icon: FaBullseye, title: 'Dedicated Training', desc: 'Sport-specific equipment & lanes' },
    { icon: FaClipboardCheck, title: 'Weekly Assessments', desc: 'Regular performance evaluation' },
    { icon: FaStar, title: 'Expert Mentorship', desc: 'Guidance from national-level players' },
    { icon: FaTrophy, title: 'Trial Matches', desc: 'Tactical training and real match experience' },
    { icon: FaMapMarkedAlt, title: 'Selection Pathway', desc: 'District and state-level opportunities' },
  ];

  const equipmentBenefits = [
    { icon: FaRunning, title: 'Cones', desc: 'Improve direction change and agility' },
    { icon: FaChartLine, title: 'Ladders', desc: 'Build footwork and agility' },
    { icon: FaBullseye, title: 'Hula Hoops', desc: 'Enhance balance and coordination' },
    { icon: FaStar, title: 'Bean Bags', desc: 'Develop fine motor skills' },
    { icon: FaUsers, title: 'Parachute', desc: 'Teamwork and fun-based learning' },
  ];

  const assessmentMethods = [
    { icon: FaClipboardCheck, title: 'Skill Test Assessments', gradient: 'from-blue-500 to-cyan-500' },
    { icon: FaRunning, title: 'Fitness Measurements', gradient: 'from-green-500 to-emerald-500' },
    { icon: FaUsers, title: 'Teamwork Evaluation', gradient: 'from-purple-500 to-pink-500' },
    { icon: FaTrophy, title: 'Sportsmanship', gradient: 'from-orange-500 to-red-500' },
    { icon: FaBrain, title: 'Psychological Well-being', gradient: 'from-indigo-500 to-violet-500' },
  ];

  const assessmentBenefits = [
    'Clear understanding of strengths',
    'Early identification of talent',
    'Parents stay informed',
    'Builds confidence',
    'Helps teachers track progress'
  ];

  const nutritionOfferings = [
    { icon: FaRunning, title: 'BMI Monitoring', desc: 'Regular health tracking' },
    { icon: FaBookOpen, title: 'Eating Workshops', desc: 'Healthy nutrition education' },
    { icon: FaAppleAlt, title: 'Personalized Diet Charts', desc: 'Custom meal plans' },
    { icon: FaLeaf, title: 'Seasonal Guidance', desc: 'Weather-appropriate nutrition' },
    { icon: FaHeart, title: 'Hydration Habits', desc: 'Proper fluid intake training' },
    { icon: FaBrain, title: 'Stress Reduction', desc: 'Mindfulness for kids' },
  ];

  const wellnessBenefits = [
    { icon: FaBrain, text: 'Better academic focus', color: 'from-blue-500 to-cyan-500' },
    { icon: FaShieldAlt, text: 'Stronger physical immunity', color: 'from-green-500 to-emerald-500' },
    { icon: FaBolt, text: 'Improved stamina', color: 'from-orange-500 to-red-500' },
    { icon: FaSmile, text: 'Better emotional balance', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-100 via-slate-500 to-slate-300 min-h-screen">

      {/* HERO SECTION */}
      <div className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-bold px-6 py-2 rounded-full uppercase tracking-wider inline-block mb-6">
            Our Programs
          </span>
          <h1 className="text-6xl md:text-7xl font-black text-black mb-6 tracking-tight">
            Complete Athletic Development
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* TABS */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { id: 'in-school', label: 'In-School Program', icon: FaSchool },
            { id: 'after-school', label: 'After School', icon: FaClock },
            { id: 'academy', label: 'Sports Academy', icon: FaTrophy }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-2xl scale-105'
                    : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Icon className="w-6 h-6" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* In-School Program */}
      {activeTab === "in-school" && (
        <div id="in-school" className="max-w-7xl mx-auto px-4 pb-20">

          <div className="bg-slate-800/90 p-12 rounded-3xl border-2 border-slate-700 mb-12">
            <h2 className="text-4xl font-black text-white mb-6">Complete Breakdown</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {inSchoolFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-700/50 rounded-xl p-6">
                    <Icon className="w-10 h-10 text-orange-500 mb-4" />
                    <h4 className="text-white font-bold">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Safety Section */}
            <div className="bg-slate-700/40 p-8 rounded-2xl border border-green-700 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FaShieldAlt className="w-10 h-10 text-green-400" />
                <h3 className="text-3xl text-white font-bold">Safety & Child Protection</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {safetyFeatures.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="flex gap-3">
                      <Icon className="w-6 h-6 text-green-400" />
                      <div>
                        <h4 className="text-white font-bold">{feature.title}</h4>
                        <p className="text-gray-300 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Value for Schools */}
            <div className="bg-slate-700/40 p-8 rounded-2xl border border-blue-700">
              <h3 className="text-3xl text-white font-bold mb-6 flex items-center gap-3">
                <FaStar className="text-blue-400" /> Value for Schools
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {schoolValue.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-400" />
                      <span className="text-white font-semibold">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* After School Program */}
      {activeTab === "after-school" && (
        <div id="after-school"  className="max-w-7xl mx-auto px-4 pb-20">
          <div className="bg-slate-800 p-12 rounded-3xl border-2 border-slate-700">

            <h2 className="text-4xl font-black text-white mb-8">After School Sports Program</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {afterSchoolFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="bg-slate-700 p-6 rounded-2xl border border-slate-600">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl text-white font-bold">{feature.title}</h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      )}

      {/* Academy */}
      {activeTab === "academy" && (
        <div id="academy" className="max-w-7xl mx-auto px-4 pb-20">

          <div className="bg-slate-800 p-12 rounded-3xl border-2 border-slate-700">

            <h2 className="text-4xl font-black text-white mb-8">Elite Sports Academy</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {academyFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="bg-slate-700 p-8 rounded-2xl border border-slate-600">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl text-white font-bold">{feature.title}</h3>
                    <p className="text-gray-300 text-lg">{feature.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      )}

      {/* EQUIPMENT SECTION */}
      <div id="equipment" className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-center text-5xl text-white font-black mb-12">Why Our Equipment Matters</h2>

        <div className="bg-slate-800 p-12 rounded-3xl border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {equipmentBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-slate-700 p-6 text-center rounded-xl">
                  <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h4 className="text-white font-bold">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ASSESSMENTS */}
      <div id="assessments" className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-center text-5xl text-white font-black mb-12">Assessments & Reports</h2>

        <div className="bg-slate-800 p-12 rounded-3xl border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {assessmentMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <div key={i} className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-white font-bold">{method.title}</h4>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-700 p-8 rounded-2xl border border-green-700">
            <h4 className="text-2xl font-bold text-white mb-6">Benefits of Assessments</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {assessmentBenefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* NUTRITION & WELLNESS */}
      <div id="wellness" className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-center text-5xl text-white font-black mb-12">Nutrition & Wellness</h2>

        <div className="bg-slate-800 p-12 rounded-3xl border border-slate-700">

          {/* Wellness Offerings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {nutritionOfferings.map((offering, i) => {
              const Icon = offering.icon;
              return (
                <div key={i} className="bg-slate-700 p-6 rounded-xl">
                  <Icon className="w-10 h-10 text-pink-400 mb-4" />
                  <h4 className="text-white font-bold">{offering.title}</h4>
                  <p className="text-gray-400 text-sm">{offering.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Wellness Benefits */}
          <h4 className="text-3xl text-white font-bold mb-8 text-center">Wellness Benefits</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div key={i} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-bold">{benefit.text}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </div>
  );
}
