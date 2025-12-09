// import React from 'react'
// import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

// const Footer = () => {
//   return (
//     <div>
//         <footer className="bg-gray-800 text-white py-4">
//               <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-1">
        
//                 {/* Social Icons */}
//                 <div className="flex space-x-6">
//                   <a
//                     href="#"
//                     className="bg-orange-500 p-3 rounded-full hover:bg-orange-400 transition"
//                   >
//                     <FaTwitter size={20} />
//                   </a>
        
//                   <a
//                     href="#"
//                     className="bg-orange-500 p-3 rounded-full hover:bg-orange-400 transition"
//                   >
//                     <FaFacebookF size={20} />
//                   </a>
        
//                   <a
//                     href="#"
//                     className="bg-orange-500 p-3 rounded-full hover:bg-orange-400 transition"
//                   >
//                     <FaInstagram size={20} />
//                   </a>
//                 </div>
        
//                 {/* Copyright */}
//                 <p className="text-sm font-medium">
//                  Copyright © 2025 fusionsport.in Powered by fusionsport.in
//                 </p>
        
//                 {/* Developed text */}
//                 <p className="text-sm">
                
//                   All rights reserved.{" "}
//                   <a href="#" className="hover:underline text-blue-400">Terms & Conditions</a> and{" "}
//                   <a href="#" className="hover:underline text-blue-400">Privacy Policy</a>
//                 </p>
        
//               </div>
//             </footer>
        
//     </div>
//   )
// }

// export default Footer


import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-0 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* BRAND + SOCIAL ICONS */}
        <div>
          <h2 className="text-2xl font-bold mb-3">fusionsport</h2>
          <p className="text-gray-300 mb-4">
            Your trusted online shopping destination.
            Quality products, fast delivery, and top-notch service.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <FaFacebookF className="text-white text-xl" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <FaYoutube className="text-white text-xl" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About us</a></li>
            <li><a href="/gallery" className="hover:text-white">Galary</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Email: fusionsportacademy07@gmail.com</li>
            <li>Phone: +91 8492856107</li>
            <li>Address: Office no5 Prima Garden, Orwad , India</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} fusionsport. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
