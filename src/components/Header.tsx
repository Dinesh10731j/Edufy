"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); 
  const headerRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-[#1E88E5] text-white py-2 px-3 md:px-0 fixed w-full z-10 transition-all duration-300 ${
        isSticky ? "shadow-lg transition-opacity" : ""
      }`}
      ref={headerRef}
    >
      <div className="max-w-screen-xl flex justify-between items-center">
        {/* Logo or Name */}
        <div className="text-2xl md:hidden font-bold">Edufy</div>

        {/* Get Started Button (Mobile View) */}
        <button className="lg:hidden bg-[#FB8C00] text-white px-6 py-2 rounded-full hover:bg-[#FF9800]">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Side Navigation */}
      <div
        className={`fixed inset-0 z-20 bg-[#1E88E5] transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <nav className="flex flex-col items-center pt-12">
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-[#43A047]">
                Home
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-[#43A047]">
                Courses
              </a>
            </li>

            {/* Categories Dropdown */}
            <li className="relative">
              <button
                onClick={handleDropdownToggle}
                className="flex items-center space-x-2 hover:text-[#43A047] focus:outline-none"
              >
                <span>Categories</span>
                {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              {isDropdownOpen && (
                <ul className="bg-white text-[#424242] shadow-lg rounded-md w-48 z-10 mt-2">
                  <li className="px-4 py-2 hover:bg-[#F5F5F5]">
                    <a href="#">Web Development</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#F5F5F5]">
                    <a href="#">Data Science</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#F5F5F5]">
                    <a href="#">Design</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#F5F5F5]">
                    <a href="#">Business</a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="#about" className="hover:text-[#43A047]">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#43A047]">
                Contact
              </a>
            </li>
          </ul>

          {/* Get Started Button in Mobile Menu */}

          <Link href={'/user/signup'}>
          <button className="bg-[#FB8C00] text-white px-6 py-2 rounded-full hover:bg-[#FF9800] mt-4">
            Get Started
          </button>
          </Link>
         
        </nav>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          X
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-center max-w-screen-xl mx-auto px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Edufy</div>

        {/* Desktop Navigation */}
        <nav className="flex space-x-8">
          <Link href="/" className="hover:text-[#43A047]">
            Home
          </Link>
          <a href="#courses" className="hover:text-[#43A047]">
            Courses
          </a>

          {/* Categories Dropdown in Desktop */}
          <div
            className="relative"
            onMouseLeave={closeDropdown} // Close dropdown on mouse leave
          >
            <button
              onClick={handleDropdownToggle}
              className="flex items-center space-x-2 hover:text-black focus:outline-none"
            >
              <span>Categories</span>
              {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-white text-[#424242] shadow-lg rounded-md w-48 z-10 mt-2">
                <li className="px-4 py-2 hover:bg-[#F5F5F5]">
                  <a href="#">Web Development</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#F5F5F5]">
                  <a href="#">Data Science</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#F5F5F5]">
                  <a href="#">Design</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#F5F5F5]">
                  <a href="#">Business</a>
                </li>
              </ul>
            )}
          </div>

          <a href="#about" className="hover:text-[#43A047]">
            About
          </a>
          <a href="#contact" className="hover:text-[#43A047]">
            Contact
          </a>
        </nav>

        {/* Get Started Button in Desktop */}
        <Link href={'/user/signup'}>
        <button className="bg-[#FB8C00] text-white px-6 py-2 rounded-full hover:bg-[#FF9800]">
          Get Started
        </button>
        </Link>
      
      </div>
    </header>
  );
};

export default Header;
