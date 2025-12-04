import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import fusionLogo from "../assets/fusionLogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-300  bg-opacity-80 backdrop-blur-md text-black px-6 md:px-10 py-4 flex items-center justify-between shadow">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 font-bold text-lg"
          onClick={closeMenu}
        >
          <img src={fusionLogo} alt="logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-sm">
          <Link to="/" className="hover:text-gray-700 transition">Home</Link>
          <Link to="/programs" className="hover:text-gray-700 transition">Fusion Programs</Link>
          <Link to="/about" className="hover:text-gray-700 transition">About</Link>
            
          <Link to="/gallery" className="hover:text-gray-700 transition">Gallery</Link>
          <Link to="/blog" className="hover:text-gray-700 transition">Blog</Link>
          <Link to="/contact" className="hover:text-gray-700 transition">Contact</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-3xl" onClick={toggleMenu}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div
          className="
            fixed top-0 left-0 right-0 bottom-0 
            bg-blue-300 bg-opacity-95 
            backdrop-blur-md 
            z-40 
            flex flex-col 
            p-8 pt-20 
            space-y-4
            text-xl 
            animate-fadeIn
          "
        >
          <Link to="/" className="hover:text-gray-800" onClick={closeMenu}>
            Home
          </Link>
           <Link to="/program" className="hover:text-gray-800" onClick={closeMenu}>
            Fusion Programs
          </Link>
          <Link to="/about" className="hover:text-gray-800" onClick={closeMenu}>
            About
          </Link>
           
          <Link to="/gallery" className="hover:text-gray-800" onClick={closeMenu}>
            Gallery
          </Link>
          <Link to="/blog" className="hover:text-gray-800" onClick={closeMenu}>
            Blog
          </Link>
          <Link to="/contact" className="hover:text-gray-800" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
