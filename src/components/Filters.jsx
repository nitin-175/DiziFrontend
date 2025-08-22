import React, { useState } from 'react';

// A simple reusable star rating component for the filter
const StarRatingFilter = ({ rating, selectedRating, setSelectedRating }) => (
  <div className="flex items-center cursor-pointer" onClick={() => setSelectedRating(rating)}>
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-5 h-5 ${i < rating ? (selectedRating >= rating ? 'text-orange-500' : 'text-orange-400') : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.365-2.445a1 1 0 00-1.175 0l-3.365 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  </div>
);


const Filters = ({
  categories = [],
  activeCategory,
  setActiveCategory,
  price,
  setPrice,
  selectedRating,
  setSelectedRating,
  activeOrder,
  setActiveOrder
}) => {
  const orderByOptions = [
    'Default', 'Review Count', 'Popularity', 'Average Rating',
    'Newness', 'Price: Low to High', 'Price: High to Low',
    'Random Products', 'Product Name'
  ];

  const handleClearFilters = () => {
    setPrice(50000);
    setActiveCategory('All');
    setActiveOrder('Default');
    setSelectedRating(0);
  };

  return (
  <aside className="w-[304px] flex-shrink-0 pr-8 border-r border-transparent">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>
      <div className="space-y-5">
        {/* Product Category */}
        <div>
          <h3 className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-4">Product Category</h3>
          <ul>
            <li
              key="All"
              className={`flex items-center py-2 cursor-pointer ${activeCategory === 'All' ? 'text-orange-600 font-bold' : 'text-gray-700'}`}
              onClick={() => setActiveCategory('All')}
            >
              <div className="flex items-center">
                <span className={`w-2.5 h-2.5 rounded-full mr-3 ${activeCategory === 'All' ? 'bg-orange-500' : 'bg-transparent border border-gray-300'}`}></span>
                All
              </div>
            </li>
            {categories.map(cat => (
              <li
                key={cat.name}
                className={`flex items-center py-2 cursor-pointer ${activeCategory === cat.name ? 'text-orange-600 font-bold' : 'text-gray-700'}`}
                onClick={() => setActiveCategory(cat.name)}
              >
                <div className="flex items-center">
                  <span className={`w-2.5 h-2.5 rounded-full mr-3 ${activeCategory === cat.name ? 'bg-orange-500' : 'bg-transparent border border-gray-300'}`}></span>
                  {cat.name}
                  <span className="ml-1 text-gray-400 font-medium">{cat.count}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Filter by Price */}
        <div>
          <h3 className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-4">Filter by Price</h3>
          <input
            type="range"
            min="0"
            max="50000"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm accent-orange-500"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>₹0</span>
            <span>₹{Number(price).toLocaleString()}</span>
          </div>
        </div>

        {/* Order By */}
        <div>
          <h3 className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-4">Order By</h3>
          <ul>
            {orderByOptions.map(opt => (
              <li
                key={opt}
                className={`flex items-center py-1.5 cursor-pointer ${activeOrder === opt ? 'text-orange-600 font-bold' : 'text-gray-700'}`}
                onClick={() => setActiveOrder(opt)}
              >
                <span className={`w-2.5 h-2.5 rounded-full mr-3 ${activeOrder === opt ? 'bg-orange-500' : 'bg-transparent border border-gray-300'}`}></span>
                {opt}
              </li>
            ))}
          </ul>
        </div>

        {/* Filter by Reviews */}
        <div>
          <h3 className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-4">Filter by Reviews</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(r => (
              <StarRatingFilter key={r} rating={r} selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
            ))}
          </div>
        </div>

        {/* Clear Filters Button */}
        <button
          onClick={handleClearFilters}
          className="w-full bg-orange-100 text-orange-600 font-bold py-2 rounded-lg hover:bg-orange-200 transition-colors"
        >
          Clear Filters
        </button>
      </div>
    </aside>
  );
};

export default Filters;