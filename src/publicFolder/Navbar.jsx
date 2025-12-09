import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

import fusionLogo from "../assets/fusionLogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => {
    setOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-300 bg-opacity-80 backdrop-blur-md text-black px-6 md:px-10 py-4 flex items-center justify-between shadow">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 font-bold text-lg" onClick={closeMenu}>
          <img src={fusionLogo} alt="logo" className="h-8 w-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 font-medium text-sm items-center">

          <Link to="/" className="hover:text-gray-700 transition">
            Home
          </Link>

          {/* DESKTOP DROPDOWN */}
          <div className="relative group">
            <button className="hover:text-gray-700 transition flex items-center gap-1">
              Fusion Programs <IoChevronDown className="text-sm" />
            </button>

            <div
              className="
                absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-56 py-2 
                opacity-0 group-hover:opacity-100 
                group-hover:translate-y-0 transition-all duration-200 
                transform -translate-y-2
              "
            >
              <a href="/programs" className="block px-4 py-2 hover:bg-gray-100">
                Fusion Program (Overview)
              </a>

              <a href="/programs#in-school" className="block px-4 py-2 hover:bg-gray-100">
                In-School Program
              </a>

              <a href="/programs#after-school" className="block px-4 py-2 hover:bg-gray-100">
                After-School Program
              </a>

              <a href="/programs#academy" className="block px-4 py-2 hover:bg-gray-100">
                Sports Academy
              </a>

              <a href="/programs#equipment" className="block px-4 py-2 hover:bg-gray-100">
                Equipment & Resources
              </a>

              <a href="/programs#assessments" className="block px-4 py-2 hover:bg-gray-100">
                Assessments & Reports
              </a>

              <a href="/programs#wellness" className="block px-4 py-2 hover:bg-gray-100">
                Nutrition & Wellness
              </a>
            </div>
          </div>

          <Link to="/about" className="hover:text-gray-700 transition">About</Link>
          <Link to="/gallery" className="hover:text-gray-700 transition">Gallery</Link>
          <Link to="/blog" className="hover:text-gray-700 transition">Blog</Link>
          <Link to="/contact" className="hover:text-gray-700 transition">Contact</Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-3xl" onClick={toggleMenu}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-slate-100 via-slate-300 to-slate-300 bg-opacity-95 
            backdrop-blur-md z-40 flex flex-col p-8 pt-20 space-y-6 text-xl
          "
        >
          <Link to="/" onClick={closeMenu} className="hover:text-gray-900">
            Home
          </Link>

          {/* MOBILE SUBMENU */}
          <div>
            <button
              onClick={() => setSubmenuOpen(!submenuOpen)}
              className="flex justify-between items-center w-full"
            >
              Fusion Programs
              {submenuOpen ? <IoChevronUp /> : <IoChevronDown />}
            </button>

            {submenuOpen && (
              <div className="ml-4 mt-2 space-y-3 text-lg">

                <a href="/programs" onClick={closeMenu} className="block hover:text-gray-900">
                  Fusion Program (Overview)
                </a>

                <a href="/programs#in-school" onClick={closeMenu} className="block hover:text-gray-900">
                  In-School Program
                </a>

                <a href="/programs#after-school" onClick={closeMenu} className="block hover:text-gray-900">
                  After-School Program
                </a>

                <a href="/programs#academy" onClick={closeMenu} className="block hover:text-gray-900">
                  Sports Academy
                </a>

                <a href="/programs#equipment" onClick={closeMenu} className="block hover:text-gray-900">
                  Equipment & Resources
                </a>

                <a href="/programs#assessments" onClick={closeMenu} className="block hover:text-gray-900">
                  Assessments & Reports
                </a>

                <a href="/programs#wellness" onClick={closeMenu} className="block hover:text-gray-900">
                  Nutrition & Wellness
                </a>

              </div>
            )}
          </div>

          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/blog" onClick={closeMenu}>Blog</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </>
  );
}
