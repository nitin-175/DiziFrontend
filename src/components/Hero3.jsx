import React, { useState, useRef, useMemo, useEffect } from 'react';

// --- Data (Moved outside the component for better organization) ---
const products = [
  {
    id: 1,
    category: "RUDRAKSHA",
    name: "5 Mukhi Rudraksha Mala (108 Beads)",
    rating: 4.6,
    reviews: 135,
    material: "Natural Rudraksha Beads",
    originalPrice: 200.0,
    salePrice: 102.0,
    sizes: ["Small", "Medium", "Large"],
    imageUrl: "/assets/5 Mukhi Rudraksha Mala.jpeg",
    status: "inStock",
    tag: null,
  },
  {
    id: 2,
    category: "GEMSTONES",
    name: "Rose Quartz & Amethyst Healing Stone Set",
    rating: 4.6,
    reviews: 135,
    material: "Natural Crystals",
    originalPrice: null,
    salePrice: 80.0,
    sizes: ["Small", "Medium", "Large"],
    imageUrl: "/assets/Rose Quartz & Amethyst Healing Stone Set.jpeg",
    status: "inStock",
    tag: null,
  },
  {
    id: 3,
    category: "GEMSTONES",
    name: "Tiger Eye & Citrine Energy Stones",
    rating: 4.6,
    reviews: 135,
    material: "Natural Crystals",
    originalPrice: null,
    salePrice: 80.0,
    sizes: ["Small", "Medium", "Large"],
    imageUrl: "/assets/Tiger Eye & Citrine Energy Stones.jpeg",
    status: "inStock",
    tag: null,
  },
  {
    id: 4,
    category: "BRACELETS",
    name: "Black Obsidian & Lava Stone Bracelet",
    rating: 4.6,
    reviews: 135,
    material: "Natural Stones",
    originalPrice: 120.0,
    salePrice: 80.0,
    sizes: ["6mm beads", "8mm beads", "10mm beads"],
    imageUrl: "/assets/Black Obsidian & Lava Stone Bracelet.jpeg",
    status: "inStock",
    tag: "Best Seller",
  },
  {
    id: 5,
    category: "GEMSTONES",
    name: "Clear Quartz & Selenite Set",
    rating: 4.6,
    reviews: 135,
    material: "Natural Crystals",
    originalPrice: null,
    salePrice: 80.0,
    sizes: ["Small", "Medium", "Large"],
    imageUrl: "/assets/Clear Quartz & Selenite Set.jpeg",
    status: "inStock",
    tag: null,
  },
  {
    id: 6,
    category: "BRACELETS",
    name: "7 Chakra Balancing Bracelet",
    rating: 4.6,
    reviews: 135,
    material: "Mixed Semi-Precious Stones",
    originalPrice: 120.0,
    salePrice: 80.0,
    sizes: ["6mm beads", "8mm beads", "10mm beads"],
    imageUrl: "/assets/7 Chakra Balancing Bracelet.jpeg",
    status: "inStock",
    tag: "Limited Edition",
  },
  {
    id: 7,
    category: "RUDRAKSHA",
    name: "Ek Mukhi Rudraksha Pendant",
    rating: 4.6,
    reviews: 135,
    material: "Natural Rudraksha Bead with Silver Cap",
    originalPrice: 200.0,
    salePrice: 102.0,
    sizes: ["Small", "Medium", "Large"],
    imageUrl: "/assets/Ek Mukhi Rudraksha Pendant.jpeg",
    status: "outOfStock",
    tag: null,
  },
  {
    id: 8,
    category: "GEMSTONES",
    name: "Green Aventurine & Lapis Lazuli Healing Set",
    rating: 4.6,
    reviews: 135,
    material: "Natural Crystals",
    originalPrice: null,
    salePrice: 80.0,
    sizes: ["Small", "Medium", "Large"],
    imageUrl: "/assets/Green Aventurine & Lapis Lazuli Healing Set.jpeg",
    status: "inStock",
    tag: null,
  },
];

const tabs = ["Best Sellers", "Bundles & Promotions", "On Sale"];

// --- Child Components ---

const TabButton = ({ label, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(label)}
    className={`px-6 py-2 w-full md:w-80 rounded-full border transition-all duration-300 ${
      activeTab === label
        ? "bg-orange-50 border-orange-500 text-orange-700 shadow-md"
        : "bg-white border-gray-300 text-gray-500 hover:border-gray-400 hover:bg-gray-50"
    }`}
  >
    {label}
  </button>
);

const DesktopBanner = () => (
  <div className="hidden md:flex w-64 bg-orange-500 text-white p-6 rounded-lg flex-col items-center justify-center flex-shrink-0">
    <img
      src="/assets/Ek Mukhi Rudraksha Pendant.jpeg"
      alt="Best Seller"
      className="w-40 h-40 object-cover mb-4 rounded-lg"
    />
    <h2 className="text-xl font-semibold">Shop our Best Sellers</h2>
    <p className="text-sm mt-2 text-gray-200 text-center">
      Discover our spiritual collection of Rudraksha Malas and natural healing gemstones.
    </p>
    <a href="#" className="mt-4 underline">
      View All
    </a>
  </div>
);

const MobileBanner = () => (
  <div className="md:hidden min-w-[240px] bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-300 text-white rounded-xl text-center p-4 flex flex-col items-center justify-center">
    <img
      src="/assets/Ek Mukhi Rudraksha Pendant.jpeg"
      alt="Best Seller"
      className="w-32 h-32 object-cover mb-3 rounded-lg"
    />
    <h2 className="text-lg font-semibold">Shop our Best Sellers</h2>
    <p className="text-xs mt-1 text-gray-200">
      Discover Rudraksha Malas & healing gemstones.
    </p>
    <a href="#" className="mt-2 underline text-sm">
      View All
    </a>
  </div>
);

const ProductCard = ({ product }) => {
  const isOutOfStock = product.status === 'outOfStock';

  const tagColor = product.tag === 'Best Seller' 
    ? 'bg-yellow-400 text-yellow-900' 
    : 'bg-blue-400 text-blue-900';

  return (
    <div className="relative min-w-[240px] bg-white border rounded-xl text-center shadow-sm p-4 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 flex flex-col group hover:z-10">
      {product.tag && (
        <div className={`absolute top-0 left-0 mt-2 ml-2 text-xs font-bold px-2 py-1 rounded-full z-10 ${tagColor}`}>
          {product.tag}
        </div>
      )}
      
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className={`w-full h-52 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105 ${isOutOfStock ? 'grayscale' : ''}`}
        />
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>
      
      <p className="text-xs font-medium text-gray-500 uppercase">{product.category}</p>
      <h3 className="font-semibold text-gray-800 mt-1 flex-grow">{product.name}</h3>
      <div className="flex items-center justify-center space-x-2 text-sm mt-2">
        <span className="text-yellow-500">⭐</span>
        <span>{product.rating}/5</span>
        <span className="text-gray-400">| {product.reviews} Reviews</span>
      </div>
      {product.material && (
        <p className="text-orange-400 text-sm mt-1">{product.material}</p>
      )}
      <div className="mt-2">
        {product.originalPrice && (
          <span className="line-through text-gray-400 mr-2">
            ₹{product.originalPrice.toFixed(2)}
          </span>
        )}
        <span className="text-red-600 font-semibold">
          ₹{product.salePrice.toFixed(2)}
        </span>
      </div>

      <div className="space-x-2 mt-2 flex justify-center flex-wrap">
        {product.sizes.map((size, i) => (
          <button
            key={`${product.id}-size-${i}`}
            className="px-2 py-1 text-xs rounded-md text-gray-600 hover:bg-orange-100 border-0"
          >
            {size}
          </button>
        ))}
      </div>

      <button
        disabled={isOutOfStock}
        className="w-32 rounded-full bg-orange-500 py-2 px-4 font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105 disabled:cursor-not-allowed disabled:bg-gray-300 mt-4 mb-4 mx-auto"
      >
        {isOutOfStock ? 'Unavailable' : 'Add To Cart'}
      </button>
    </div>
  );
};

// --- Main Component ---
const Hero3 = () => {
  const [activeTab, setActiveTab] = useState("Best Sellers");

  // Memoize the filtered products to avoid recalculating on every render
  const filteredProducts = useMemo(() => {
    if (activeTab === "Best Sellers") return products;
    if (activeTab === "On Sale") return products.filter(p => p.originalPrice !== null);
    if (activeTab === "Bundles & Promotions") return products.filter(p => p.category === "GEMSTONES");
    return products;
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-white px-4 md:px-6 py-10 overflow-x-hidden font-sans">
      <style>
        {`
          @keyframes scroll {
            to {
              transform: translateX(calc(-50% - 0.75rem));
            }
          }
          .scroller-track {
            animation: scroll 30s linear infinite;
          }
          .scroller-container:hover .scroller-track {
            animation-play-state: paused;
          }
        `}
      </style>
      <h1 className="text-2xl md:text-5xl font-extrabold text-center text-gray-900">
        AUTHENTIC RUDRAKSHA & GEMSTONES <br className="hidden md:block" /> HEALING COLLECTION
      </h1>

      <div className="flex flex-col md:flex-row justify-center mt-8 gap-4 md:space-x-6">
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            label={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>

      <div className="flex mt-10">
        <DesktopBanner />

        <div
          className="relative flex-1 md:ml-6 overflow-hidden scroller-container"
        >
          <div
            className="flex gap-6 p-2 scroller-track"
          >
            <MobileBanner />
            
            {/* Duplicate the products array for a seamless loop */}
            {[...filteredProducts, ...filteredProducts].map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
