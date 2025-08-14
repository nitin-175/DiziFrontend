import React from 'react';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {

    // Dropdown arrow component for navigation links
  const DropdownArrow = () => (
    <svg
      className="w-4 h-4 ml-1.5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="font-sans bg-white">
      {/* 1. Top Promotional Banner */}
      <div className="bg-[#facc15] text-center py-3 px-4 ">
        <p className="text-sm font-medium text-white">
          Book online Pooja services and get 10% off
        </p>
      </div>

      {/* Main Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* 2. Logo */}
            <div className="flex-shrink-0">
              <a href="#" title="Veda Structure Home">
                <img
                  className="h-16 w-auto"
                  src="/assets/logo.png"
                  alt="Logo"
                />
              </a>
            </div>

            {/* 3. Search Bar */}
            <div className="flex-1 flex justify-center px-6 lg:px-8">
              <div className="w-full max-w-lg">
                <div className="relative">
                  <input
                    type="search"
                    className="block w-full rounded-md border-gray-300 py-2.5 pl-4 pr-14 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm"
                    placeholder="Search"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <button
                      type="submit"
                      className="h-full rounded-r-md border-0 bg-[#facc15] px-5 text-gray-800 hover:bg-yellow-400"
                      aria-label="Search"
                    >
                      <FiSearch className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Right-side Icons (Account & Cart) */}
            <div className="flex items-center space-x-6">
              <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                <FiUser className="h-6 w-6 mr-1" />
                <span>Your Account</span>
              </a>
              <div className="relative">
                <a href="#" className="group p-2 flex items-center" aria-label="Shopping Cart">
                  <FiShoppingCart
                    className="h-6 w-6 text-gray-700 group-hover:text-gray-900"
                    aria-hidden="true"
                  />
                  <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-[#facc15] text-center text-xs font-bold text-black ring-2 ring-white">
                    0
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 5. Bottom Navigation Links */}
      <nav >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-center items-center space-x-10 py-2 text-base font-medium text-gray-700">
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">Home</a></li>
            <li><a href="#" className="flex items-center hover:text-yellow-500 transition-colors duration-200">Veda Store <DropdownArrow /></a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">Astrology Courses</a></li>
            <li><a href="#" className="flex items-center hover:text-yellow-500 transition-colors duration-200">Astro Report <DropdownArrow /></a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">Talk to astrologer</a></li>
            <li><a href="#" className="flex items-center hover:text-yellow-500 transition-colors duration-200">Puja <DropdownArrow /></a></li>
            <li><a href="#" className="flex items-center hover:text-yellow-500 transition-colors duration-200">Contact <DropdownArrow /></a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">Articles</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">Blog</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;