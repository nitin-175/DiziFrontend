import React from "react";

export default function RecentlyAdded() {
  const productsData = [
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
      tag: null,
    },
    {
      id: 3,
      category: "BRACELETS",
      name: "Black Obsidian & Lava Stone Bracelet",
      rating: 4.6,
      reviews: 135,
      material: "Natural Stones",
      originalPrice: 120.0,
      salePrice: 80.0,
      sizes: ["6mm", "8mm", "10mm"],
      imageUrl: "/assets/Black Obsidian & Lava Stone Bracelet.jpeg",
      tag: "Best Seller",
    },
    {
      id: 4,
      category: "MALA BEADS",
      name: "Tulsi Mala Beads (108 Beads)",
      rating: 4.6,
      reviews: 135,
      material: "Natural Tulsi Wood",
      originalPrice: 150.0,
      salePrice: 90.0,
      sizes: ["Small", "Medium", "Large"],
      imageUrl: "/assets/Tulsi Mala Beads (108 Beads).jpeg",
      tag: null,
    },
  ];

  const StarIcon = () => (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
  );

  const renderProductCard = (product) => (
    <div key={product.id} className="group relative border border-gray-200 rounded-lg p-4 flex flex-col hover:shadow-xl transition">
      <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-center object-cover transform group-hover:scale-105 transition duration-500"
        />
        {product.tag && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.tag}
          </div>
        )}
      </div>
      <div className="pt-4 pb-2 flex-grow flex flex-col">
        <p className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</p>
        <h3 className="text-sm font-bold text-gray-800 mt-1 flex-grow">{product.name}</h3>
        <div className="flex items-center mt-2">
          <StarIcon />
          <span className="text-xs text-gray-600 ml-1">{product.rating}/5</span>
          <span className="text-xs text-gray-500 ml-2">| {product.reviews} Reviews</span>
        </div>
        <p className="mt-2 text-xs text-orange-600 bg-orange-100 rounded-full px-2 py-1 self-start">
          {product.material}
        </p>
        <div className="mt-3">
          {product.originalPrice ? (
            <>
              <span className="text-gray-400 line-through mr-2">${product.originalPrice.toFixed(2)}</span>
              <span className="text-lg font-bold text-orange-600">${product.salePrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-orange-600">${product.salePrice.toFixed(2)}</span>
          )}
        </div>
        <div className="mt-2 flex gap-2">
          {product.sizes.map((size, idx) => (
            <span key={idx} className="text-xs border border-gray-300 px-2 py-1 rounded-full text-gray-600">
              {size}
            </span>
          ))}
        </div>
      </div>
      <button className="mt-4 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition">Add to Cart</button>
    </div>
  );

  return (
    <div>

      {/* All Products */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Spiritual Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productsData.map(renderProductCard)}
          </div>
        </div>
      </div>
    </div>
  );
}
