import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-champagne font-quicksand text-xl sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 md:justify-center">
        {/* Logo or optional left space */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-m justify-center mt-[70px]">
          <Link
            to="/"
            className="hover:text-golden font-bold text-center"
          >
            Home
          </Link>
          <Link
            to="/intro-to-java"
            className="hover:text-golden font-bold text-center"
          >
            Intro To Java
          </Link>
          <Link
            to="/beginner"
            className="hover:text-golden font-bold text-center"
          >
            Beginner
          </Link>
          <Link
            to="/intermediate"
            className="hover:text-golden font-bold text-center"
          >
            Intermediate
          </Link>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 mt-[70px]">
          <Link
            to="/"
            className="hover:text-golden font-bold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/intro-to-java"
            className="hover:text-golden font-bold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Intro To Java
          </Link>
          <Link
            to="/beginner"
            className="hover:text-golden font-bold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Beginner
          </Link>
          <Link
            to="/intermediate"
            className="hover:text-golden font-bold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Intermediate
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
