import React, { useRef, useState } from "react";
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function DropdownArrow() {
  return (
    <svg
      className="w-4 h-4 ml-1.5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LogoSearchCart({ showSearch, setShowSearch }) {
  return (
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/" title="Veda Structure Home">
          <img className="h-16 w-auto" src="/assets/logo.png" alt="Logo" />
        </Link>
      </div>

      {/* Search (desktop full / mobile toggle) */}
      <div className="flex-1 flex justify-center px-6 lg:px-8">
        {/* Desktop search */}
        <div className="hidden lg:block w-full max-w-lg">
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

        {/* Mobile search trigger */}
        <div className="lg:hidden">
          <button
            onClick={() => setShowSearch((s) => !s)}
            aria-label={showSearch ? "Close search" : "Open search"}
          >
            {showSearch ? (
              <FiX className="h-6 w-6 text-gray-700" />
            ) : (
              <FiSearch className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Account + Cart */}
      <div className="flex items-center space-x-6">
        <Link
          to="/account"
          className="hidden md:flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          <FiUser className="h-6 w-6 mr-1" />
          <span>Your Account</span>
        </Link>
        <div className="relative">
          <Link
            to="/cart"
            className="group p-2 flex items-center"
            aria-label="Shopping Cart"
          >
            <FiShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-gray-900" />
            <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-[#facc15] text-center text-xs font-bold text-black ring-2 ring-white">
              0
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavLinks() {
  const [openMobile, setOpenMobile] = useState(false);
  const [dropdowns, setDropdowns] = useState({});
  const timersRef = useRef({});

  // Add "All Categories" as the first sub-link under Categories
  const links = [
    { name: "Home", to: "/" },
    {
      name: "Categories",
      to: "/category",
      sub: [
        { name: "All Categories", to: "/category" },
        { name: "Yantras", to: "/category/yantras" },
        { name: "Rudraksha", to: "/category/rudraksha" },
        { name: "Gemstones", to: "/category/gemstones" },
      ],
    },
    { name: "Astrology Courses", to: "/courses" },
    {
      name: "Astro Report",
      sub: [
        { name: "Kundli", to: "/astro-report/kundli" },
        { name: "Compatibility", to: "/astro-report/compatibility" },
        { name: "Career", to: "/astro-report/career" },
      ],
      to: "/astro-report",
    },
    { name: "Talk to astrologer", to: "/astrologer" },
    {
      name: "Puja",
      sub: [
        { name: "Online Pooja", to: "/puja/online" },
        { name: "Temple Booking", to: "/puja/temple-booking" },
        { name: "Havan", to: "/puja/havan" },
      ],
      to: "/puja",
    },
    { name: "Contact", to: "/contact" },
    { name: "Articles", to: "/articles" },
    { name: "Blog", to: "/blog" },
  ];

  const openDropdown = (i) => {
    clearTimeout(timersRef.current[i]);
    setDropdowns((p) => ({ ...p, [i]: true }));
  };

  const scheduleClose = (i) => {
    clearTimeout(timersRef.current[i]);
    timersRef.current[i] = setTimeout(() => {
      setDropdowns((p) => ({ ...p, [i]: false }));
    }, 180);
  };

  const toggleDropdownMobile = (i) => {
    setDropdowns((p) => ({ ...p, [i]: !p[i] }));
  };

  return (
    <nav className="relative z-[999]">
      {/* Mobile toggle */}
      <div className="lg:hidden flex justify-end px-4 py-3">
        <button onClick={() => setOpenMobile((o) => !o)}>
          {openMobile ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      <ul
        className={`lg:flex justify-center items-center space-x-10 py-2 text-base font-medium text-gray-700 ${
          openMobile ? "block px-4 space-y-4" : "hidden lg:flex"
        }`}
      >
        {links.map((link, i) => {
          const hasSub = !!link.sub?.length;
          const isOpen = !!dropdowns[i];

          return (
            <li
              key={i}
              className="relative"
              onMouseEnter={() => hasSub && openDropdown(i)}
              onMouseLeave={() => hasSub && scheduleClose(i)}
            >
              {hasSub ? (
                <>
                  <button
                    className="flex items-center hover:text-yellow-500 transition-colors duration-200"
                    onClick={() => toggleDropdownMobile(i)}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                  >
                    {link.name}
                    <DropdownArrow />
                  </button>
                  {/* Desktop dropdown */}
                  <div
                    className={`${
                      isOpen ? "block" : "hidden"
                    } lg:absolute lg:top-full lg:left-0 lg:w-56 mt-2 bg-white shadow-md rounded-md z-[1000]`}
                    onMouseEnter={() => openDropdown(i)}
                    onMouseLeave={() => scheduleClose(i)}
                    role="menu"
                  >
                    <ul className="py-2">
                      {link.sub.map((s, idx) => (
                        <li key={idx}>
                          <Link
                            to={s.to}
                            className="block px-4 py-2 text-gray-700 hover:bg-yellow-100"
                            role="menuitem"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  to={link.to}
                  className="hover:text-yellow-500 transition-colors duration-200 flex items-center"
                >
                  {link.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function Navbar() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <div className="font-sans bg-white relative z-[999]">
      <div className="bg-[#facc15] text-center py-3 px-4">
        <p className="text-sm font-medium text-white">
          Book online Pooja services and get 10% off
        </p>
      </div>

      <header className="border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <LogoSearchCart
            showSearch={showMobileSearch}
            setShowSearch={setShowMobileSearch}
          />
        </div>
      </header>

      {/* Mobile search bar placed in normal flow below the header */}
      {showMobileSearch && (
        <div className="lg:hidden border-b border-gray-200">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center gap-2">
              <input
                type="search"
                autoFocus
                className="w-full rounded-md border-gray-300 py-2 pl-4 pr-10 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm"
                placeholder="Search"
              />
              <button
                onClick={() => setShowMobileSearch(false)}
                aria-label="Close search"
                className="p-2"
              >
                <FiX className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavLinks />
      </div>
    </div>
  );
}
