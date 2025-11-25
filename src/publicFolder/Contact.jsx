import React from 'react'

import aboutBanner from '../assets/aboutBanner.jpg'

const Contact = () => {
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
                     
                        <h1 className="font-orbitron text-5xl font-bold text-white">CONTACT US</h1>
        
                
                        <p className="text-white text-sm sm:text-base md:text-lg mt-4 font-medium">
                         Empowering Students Through Sports, Fitness & Wellness
                        </p>

                        <p>skldfj ksdfjk</p>
                      </div>
                
                      
                    </div>
    </div>
  )
}

export default Contact