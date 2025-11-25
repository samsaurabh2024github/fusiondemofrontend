import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-800 text-white py-4">
              <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-1">
        
                {/* Social Icons */}
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="bg-orange-500 p-3 rounded-full hover:bg-orange-400 transition"
                  >
                    <FaTwitter size={20} />
                  </a>
        
                  <a
                    href="#"
                    className="bg-orange-500 p-3 rounded-full hover:bg-orange-400 transition"
                  >
                    <FaFacebookF size={20} />
                  </a>
        
                  <a
                    href="#"
                    className="bg-orange-500 p-3 rounded-full hover:bg-orange-400 transition"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
        
                {/* Copyright */}
                <p className="text-sm font-medium">
                 Copyright © 2025 fusionsport.in Powered by fusionsport.in
                </p>
        
                {/* Developed text */}
                <p className="text-sm">
                
                  All rights reserved.{" "}
                  <a href="#" className="hover:underline text-blue-400">Terms & Conditions</a> and{" "}
                  <a href="#" className="hover:underline text-blue-400">Privacy Policy</a>
                </p>
        
              </div>
            </footer>
        
    </div>
  )
}

export default Footer