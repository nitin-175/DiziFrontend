import React, { useState } from "react";

export default function Filters() {
  const [selectedCategory, setSelectedCategory] = useState("Rudraksha");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [orderBy, setOrderBy] = useState("Popularity");
  const [selectedRating, setSelectedRating] = useState(null);

  const categories = [
    { name: "Rudraksha", count: 120 },
    { name: "Gems", count: 80 },
    { name: "Bracelets", count: 65 },
    { name: "Meditation Beads", count: 50 },
    { name: "Sacred Stones", count: 40 },
    { name: "Incense", count: 30 },
    { name: "Essential Oils", count: 25 },
    { name: "Yantras", count: 20 },
    { name: "Spiritual Books", count: 15 },
    { name: "Prayer Flags", count: 10 },
    { name: "Pooja Kits", count: 18 },
    { name: "Other Accessories", count: 12 },
  ];

  const orderOptions = [
    "Popularity",
    "Price: Low to High",
    "Price: High to Low",
    "New Arrivals",
    "Average Rating",
  ];

  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="w-72 p-6 bg-gradient-to-b from-[#FFF8F0] to-[#FEF6EE] rounded-3xl shadow-lg space-y-8 font-sans">
      
      {/* Categories */}
      <div>
        <h3 className="text-lg font-serif font-bold text-[#7C3AED] mb-4">Product Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3 py-1 rounded-full text-sm font-medium shadow-inner transition-transform duration-200 ${
                selectedCategory === cat.name
                  ? "bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white shadow-lg scale-105"
                  : "bg-[#FEF3C7] text-[#78350F] hover:bg-gradient-to-r hover:from-[#FDE68A] hover:to-[#FCD34D] hover:scale-105"
              }`}
            >
              {cat.name} <span className="ml-1 text-[#92400E]">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-2">
        <h3 className="text-lg font-serif font-bold text-[#7C3AED]">Filter by Price</h3>
        <div className="flex justify-between text-sm text-[#78350F]">
          <span>${priceRange[0].toLocaleString()}</span>
          <span>${priceRange[1].toLocaleString()}</span>
        </div>
        <input
          type="range"
          min={0}
          max={50000}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full h-3 rounded-full accent-[#F59E0B] cursor-pointer bg-gradient-to-r from-[#FDE68A] to-[#FBBF24] shadow-inner"
        />
        <button className="w-full mt-2 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] hover:from-[#B45309] hover:to-[#F59E0B] text-white py-2 rounded-lg font-semibold transition-transform shadow-lg transform hover:scale-105">
          Apply
        </button>
      </div>

      {/* Order By */}
      <div>
        <h3 className="text-lg font-serif font-bold text-[#7C3AED] mb-2">Order By</h3>
        <div className="flex flex-col gap-1">
          {orderOptions.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 cursor-pointer text-[#78350F] hover:text-[#F59E0B] transition-colors duration-200"
            >
              <input
                type="radio"
                name="order"
                value={opt}
                checked={orderBy === opt}
                onChange={() => setOrderBy(opt)}
                className="accent-[#F59E0B]"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      {/* Ratings */}
      <div>
        <h3 className="text-lg font-serif font-bold text-[#7C3AED] mb-2">Filter by Reviews</h3>
        <div className="flex flex-col gap-1">
          {ratings.map((r) => (
            <label
              key={r}
              className="flex items-center gap-2 cursor-pointer hover:text-[#FBBF24] transition-transform duration-200"
            >
              <input
                type="checkbox"
                checked={selectedRating === r}
                onChange={() =>
                  setSelectedRating(selectedRating === r ? null : r)
                }
                className="accent-[#FBBF24]"
              />
              <div className="flex">
                {Array.from({ length: r }).map((_, i) => (
                  <span key={i} className="text-gradient bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] shadow-sm">★</span>
                ))}
                {Array.from({ length: 5 - r }).map((_, i) => (
                  <span key={i} className="text-[#E5E7EB]">★</span>
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>

      <button className="w-full mt-2 border border-[#FCD34D] rounded-lg py-2 hover:bg-[#FEF3C7] text-[#78350F] font-semibold transition-transform shadow-sm hover:scale-105">
        Clear Filters
      </button>
    </div>
  );
}
