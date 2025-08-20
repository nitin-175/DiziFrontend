import React, { useState } from 'react'
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'

const DropdownArrow = () => (
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
)

const LogoSearchCart = () => (
  <div className="flex items-center justify-between h-20">
    <div className="flex-shrink-0">
      <a href="#">
        <img className="h-16 w-auto" src="/assets/logo.png" alt="Logo" />
      </a>
    </div>
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
            >
              <FiSearch className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center space-x-6">
      <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
        <FiUser className="h-6 w-6 mr-1" />
        <span>Your Account</span>
      </a>
      <div className="relative">
        <a href="#" className="group p-2 flex items-center">
          <FiShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-gray-900" />
          <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-[#facc15] text-center text-xs font-bold text-black ring-2 ring-white">
            0
          </span>
        </a>
      </div>
    </div>
  </div>
)

const NavLinks = () => {
  const [open, setOpen] = useState(false)
  const [dropdowns, setDropdowns] = useState({}) // track open state per menu

  const links = [
    { name: 'Home' },
    { name: 'Veda Store', sub: ['Yantras', 'Rudraksha', 'Gemstones'] },
    { name: 'Astrology Courses' },
    { name: 'Astro Report', sub: ['Kundli', 'Compatibility', 'Career'] },
    { name: 'Talk to astrologer' },
    { name: 'Puja', sub: ['Online Pooja', 'Temple Booking', 'Havan'] },
    { name: 'Contact', sub: ['About Us', 'Support'] },
    { name: 'Articles' },
    { name: 'Blog' }
  ]

  const toggleDropdown = (i) => {
    setDropdowns((prev) => ({
      ...prev,
      [i]: !prev[i]
    }))
  }

  return (
    <nav className="relative z-[999]">
      <div className="lg:hidden flex justify-end px-4 py-3">
        <button onClick={() => setOpen(!open)}>
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      <ul
        className={`lg:flex justify-center items-center space-x-10 py-2 text-base font-medium text-gray-700 ${
          open ? 'block px-4 space-y-4' : 'hidden lg:flex'
        }`}
      >
        {links.map((link, i) => (
          <li
            key={i}
            className="relative"
            onMouseEnter={() => setDropdowns((prev) => ({ ...prev, [i]: true }))}
            onMouseLeave={() => setDropdowns((prev) => ({ ...prev, [i]: false }))}
          >
            <button
              className="flex items-center hover:text-yellow-500 transition-colors duration-200"
              onClick={() => toggleDropdown(i)}
            >
              {link.name}
              {link.sub && <DropdownArrow />}
            </button>

            {link.sub && dropdowns[i] && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-2 w-48 z-[1000]">
                <ul className="py-2">
                  {link.sub.map((s, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-yellow-100"
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

const Navbar = () => (
  <div className="font-sans bg-white relative z-[999]">
    <div className="bg-[#facc15] text-center py-3 px-4">
      <p className="text-sm font-medium text-white">
        Book online Pooja services and get 10% off
      </p>
    </div>
    <header className="border-b border-gray-200 relative z-[999]">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <LogoSearchCart />
      </div>
    </header>
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[999]">
      <NavLinks />
    </div>
  </div>
)

export default Navbar
