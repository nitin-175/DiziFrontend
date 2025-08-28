import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CouponSection from "./CuponSection";

const gemstones = [
  { id: 1, name: "Yellow Sapphire", description: "Enhances wisdom and prosperity.", price: 12500, image: "/assets/gemstones/amber.jpg", rating: 4 },
  { id: 2, name: "Ruby", description: "Boosts energy, courage, and passion.", price: 15000, image: "/assets/gemstones/img2.avif", rating: 5 },
  { id: 3, name: "Emerald", description: "Promotes harmony, healing, and balance.", price: 10800, image: "/assets/gemstones/img3.avif", rating: 4 },
  { id: 4, name: "Blue Sapphire", description: "Enhances clarity, mental focus, and cosmic protection.", price: 20000, image: "/assets/gemstones/img4.avif", rating: 5 },
  { id: 5, name: "Garnet", description: "Revitalizes energy and encourages spiritual awakening.", price: 8500, image: "/assets/gemstones/img5.avif", rating: 3 },
  { id: 6, name: "Amethyst", description: "Promotes calm, clarity, and meditation.", price: 9500, image: "/assets/gemstones/img6.avif", rating: 4 },
  { id: 7, name: "Pearl", description: "Brings purity, balance, and spiritual insight.", price: 7800, image: "/assets/gemstones/img7.avif", rating: 3 },
  { id: 8, name: "Topaz", description: "Encourages truth, wisdom, and spiritual growth.", price: 11200, image: "/assets/gemstones/img8.avif", rating: 4 },
  { id: 9, name: "Moonstone", description: "Enhances intuition, love, and inner peace.", price: 6900, image: "/assets/gemstones/img9.avif", rating: 4 },
  { id: 10, name: "Carnelian", description: "Boosts confidence, motivation, and spiritual energy.", price: 5800, image: "/assets/gemstones/img10.avif", rating: 3 },
  { id: 11, name: "Citrine", description: "Attracts abundance and enhances personal power.", price: 10500, image: "/assets/gemstones/img11.avif", rating: 4 },
  { id: 12, name: "Spinel", description: "Revitalizes energy and inspires spiritual growth.", price: 12000, image: "/assets/gemstones/img12.avif", rating: 4 },
  { id: 13, name: "Peridot", description: "Encourages healing, prosperity, and positive energy.", price: 9300, image: "/assets/gemstones/img13.avif", rating: 3 },
  { id: 14, name: "Aquamarine", description: "Promotes calm, courage, and spiritual clarity.", price: 13500, image: "/assets/gemstones/img14.avif", rating: 5 },
  { id: 15, name: "Tourmaline", description: "Protects against negativity and enhances spiritual growth.", price: 14000, image: "/assets/gemstones/img15.avif", rating: 4 },
  { id: 16, name: "Kyanite", description: "Aligns chakras and promotes spiritual balance.", price: 8900, image: "/assets/gemstones/img16.avif", rating: 3 },
  { id: 17, name: "Lapis Lazuli", description: "Enhances wisdom, truth, and inner power.", price: 16500, image: "/assets/gemstones/img17.avif", rating: 5 },
  { id: 18, name: "Onyx", description: "Provides protection, strength, and grounding.", price: 7200, image: "/assets/gemstones/img18.avif", rating: 3 },
  { id: 19, name: "Chrysoberyl", description: "Encourages clarity, focus, and spiritual awareness.", price: 11800, image: "/assets/gemstones/img19.avif", rating: 4 },
  { id: 20, name: "Zircon", description: "Promotes wisdom, prosperity, and spiritual growth.", price: 10000, image: "/assets/gemstones/img20.avif", rating: 4 },
];

export default function GemstoneCategory() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [showFilters, setShowFilters] = useState(false);

  const filteredGemstones = gemstones.filter(
    (gem) => gem.rating >= selectedRating && gem.price <= maxPrice
  );

  return (
    <section className="bg-gradient-to-b from-yellow-100 via-purple-50 to-orange-50 min-h-screen">
      <Navbar />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 mt-10 text-yellow-700">
        Spiritual Gemstones Collection
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 px-4 md:px-8">
        {/* Filter Toggle (Mobile Only) */}
        <button
          className="lg:hidden bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md mb-4"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Filters */}
        <div
          className={`${
            showFilters ? "block" : "hidden"
          } lg:block lg:w-1/4 bg-gradient-to-b from-purple-100 via-yellow-50 to-orange-100 p-5 rounded-2xl shadow-lg border border-yellow-200`}
        >
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Filters</h3>

          <div className="mb-6">
            <label className="block font-medium text-purple-700 mb-2">Minimum Rating</label>
            <select
              className="w-full border border-purple-300 rounded-lg p-2 bg-purple-50 text-purple-900"
              value={selectedRating}
              onChange={(e) => setSelectedRating(Number(e.target.value))}
            >
              <option value={0}>All Ratings</option>
              <option value={3}>3 Stars & Up</option>
              <option value={4}>4 Stars & Up</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block font-medium text-purple-700 mb-2">Maximum Price (₹)</label>
            <input
              type="range"
              min="5000"
              max="20000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-yellow-600"
            />
            <p className="text-purple-800 mt-2">Up to ₹{maxPrice}</p>
          </div>
        </div>

        {/* Products */}
        <div className="w-full lg:w-4/5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
  {filteredGemstones.map((gem) => (
    <div
      key={gem.id}
      className="bg-white rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-yellow-200"
    >
      {/* Product Image */}
      <img
        src={gem.image}
        alt={gem.name}
        className="w-full h-28 sm:h-36 lg:h-48 object-contain p-2"
      />

      {/* Product Info */}
      <div className="p-3 sm:p-4 lg:p-6">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-purple-800 mb-1 lg:mb-2">
          {gem.name}
        </h3>

        <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-2 lg:mb-3 line-clamp-2 lg:line-clamp-3">
          {gem.description}
        </p>

        {/* Price + Rating */}
        <div className="flex items-center justify-between mb-3 lg:mb-4">
          <p className="text-yellow-800 font-bold text-sm sm:text-base lg:text-lg">
            ₹{gem.price}
          </p>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }, (_, index) =>
              index < gem.rating ? (
                <FaStar
                  key={index}
                  className="text-yellow-500 text-xs sm:text-sm lg:text-base"
                />
              ) : (
                <FaRegStar
                  key={index}
                  className="text-yellow-300 text-xs sm:text-sm lg:text-base"
                />
              )
            )}
          </div>
        </div>

        {/* Buttons */}
        {/* Mobile: Only Buy Now */}
        <button className="w-full bg-yellow-600 text-white py-2 lg:py-3 rounded-lg hover:bg-yellow-700 shadow-md transition-all text-sm sm:text-base lg:hidden">
          Buy Now
        </button>

        {/* Desktop: Buy Now + Add to Cart */}
        <div className="hidden lg:flex gap-3">
          <button className="flex-1 bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 shadow-md transition-all text-lg">
            Buy Now
          </button>
          <button className="flex-1 border border-yellow-500 text-yellow-700 py-3 rounded-lg hover:bg-yellow-100 shadow-md transition-all text-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}

  {/* No Products Case */}
  {filteredGemstones.length === 0 && (
    <p className="text-purple-800 text-center col-span-full">
      No products match the selected filters.
    </p>
  )}
</div>




      </div>

      <CouponSection />
      <Footer />
    </section>
  );
}
