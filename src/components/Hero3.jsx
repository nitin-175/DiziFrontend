import { useRef, useState, useEffect } from "react";

const Hero3 = () => {
  const [activeTab, setActiveTab] = useState("Best Sellers");
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // Full dataset
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

  const filteredProducts = products.filter((p) => {
    if (activeTab === "Best Sellers") return true;
    if (activeTab === "On Sale") return p.originalPrice !== null;
    if (activeTab === "Bundles & Promotions") return p.category === "GEMSTONES";
    return true;
  });

  // Auto-scrolling (smooth + resets when tab changes)
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        scrollContainer.scrollLeft += 1; // smoother speed
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isPaused, filteredProducts]);

  return (
    <div className="min-h-screen bg-white px-4 md:px-6 py-10 overflow-x-hidden font-sans">
      {/* Header */}
      <h1 className="text-2xl md:text-5xl font-extrabold text-center text-gray-900">
        AUTHENTIC RUDRAKSHA & GEMSTONES <br className="hidden md:block" /> HEALING COLLECTION
      </h1>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row justify-center mt-8 gap-4 md:space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 w-full md:w-80 rounded-full border transition ${
              activeTab === tab
                ? "bg-orange-50 border-orange-500 text-orange-700"
                : "bg-white border-gray-300 text-gray-500 hover:border-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Section */}
      <div className="flex mt-10">
        {/* Desktop Banner */}
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

        {/* Scrollable Products */}
        <div
          className="relative flex-1 md:ml-6 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide p-2 no-scrollbar"
          >
            {/* Mobile Banner */}
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

            {[...filteredProducts, ...filteredProducts].map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="min-w-[240px] bg-white border rounded-xl text-center shadow-sm p-4 hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-52 object-cover rounded-lg mb-4"
                />
                <p className="text-xs font-medium text-gray-500 uppercase">{product.category}</p>
                <h3 className="font-semibold text-gray-800 mt-1">{product.name}</h3>
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
                  className="w-32 rounded-full bg-orange-500 py-2 px-4 font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105 disabled:cursor-not-allowed disabled:bg-gray-300 mt-auto mb-4 mx-auto"
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
