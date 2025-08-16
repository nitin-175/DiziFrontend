import React, { useState, useEffect } from 'react';

// --- Data as provided in the prompt ---
const productsData = [
    {
        id: 1,
        category: 'RUDRAKSHA',
        name: '5 Mukhi Rudraksha Mala (108 Beads)',
        rating: 4.6,
        reviews: 135,
        material: 'Natural Rudraksha Beads',
        originalPrice: 200.00,
        salePrice: 102.00,
        sizes: ['Small', 'Medium', 'Large'],
        imageUrl: '/assets/5 Mukhi Rudraksha Mala.jpeg',
        status: 'inStock',
        tag: null,
    },
    {
        id: 2,
        category: 'GEMSTONES',
        name: 'Rose Quartz & Amethyst Healing Stone Set',
        rating: 4.6,
        reviews: 135,
        material: 'Natural Crystals',
        originalPrice: null,
        salePrice: 80.00,
        sizes: ['Small', 'Medium', 'Large'],
        imageUrl: '/assets/Rose Quartz & Amethyst Healing Stone Set.jpeg',
        status: 'inStock',
        tag: null,
    },
     {
        id: 7,
        category: 'RUDRAKSHA',
        name: 'Ek Mukhi Rudraksha Pendant',
        rating: 4.6,
        reviews: 135,
        material: 'Natural Rudraksha Bead',
        originalPrice: 200.00,
        salePrice: 102.00,
        sizes: ['Small', 'Medium', 'Large'],
        imageUrl: '/assets/Ek Mukhi Rudraksha Pendant.jpeg',
        status: 'outOfStock',
        tag: null,
    },
    {
        id: 3,
        category: 'GEMSTONES',
        name: 'Tiger Eye & Citrine Energy Stones',
        rating: 4.6,
        reviews: 135,
        material: 'Natural Crystals',
        originalPrice: null,
        salePrice: 80.00,
        sizes: ['Small', 'Medium', 'Large'],
        imageUrl: '/assets/Tiger Eye & Citrine Energy Stones.jpeg',
        status: 'inStock',
        tag: null,
    },
    {
        id: 4,
        category: 'BRACELETS',
        name: 'Black Obsidian & Lava Stone Bracelet',
        rating: 4.6,
        reviews: 135,
        material: 'Natural Stones',
        originalPrice: 120.00,
        salePrice: 80.00,
        sizes: ['6mm', '8mm', '10mm'],
        imageUrl: '/assets/Black Obsidian & Lava Stone Bracelet.jpeg',
        status: 'inStock',
        tag: 'Best Seller',
    },
    {
        id: 6,
        category: 'BRACELETS',
        name: '7 Chakra Balancing Bracelet',
        rating: 4.6,
        reviews: 135,
        material: 'Mixed Stones',
        originalPrice: 120.00,
        salePrice: 80.00,
        sizes: ['6mm', '8mm', '10mm'],
        imageUrl: '/assets/7 Chakra Balancing Bracelet.jpeg',
        status: 'inStock',
        tag: 'Limited',
    },
    {
        id: 9,
        category: 'MALA BEADS',
        name: 'Tulsi Mala Beads (108 Beads)',
        rating: 4.6,
        reviews: 135,
        material: 'Natural Tulsi Wood',
        originalPrice: 150.00,
        salePrice: 90.00,
        sizes: ['Small', 'Medium', 'Large'],
        imageUrl: '/assets/Tulsi Mala Beads (108 Beads).jpeg',
        status: 'inStock',
        tag: null,
    },
    {
        id: 11,
        category: 'MALA BEADS',
        name: 'Lotus Seed Mala Beads (108 Beads)',
        rating: 4.6,
        reviews: 135,
        material: 'Natural Lotus Seeds',
        originalPrice: 150.00,
        salePrice: 90.00,
        sizes: ['Small', 'Medium', 'Large'],
        imageUrl: '/assets/Lotus Seed Mala Beads (108 Beads).jpeg',
        status: 'inStock',
        tag: null,
    }
];

// --- Star Icon Component ---
const StarIcon = () => (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
);


// --- Product Card Component ---
const ProductCard = ({ product }) => (
    <div className="group relative border border-gray-200 rounded-lg p-4 flex flex-col">
        <div className="aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden relative">
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-center object-cover" />

            {product.status === 'outOfStock' && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">Out Of Stock</span>
                </div>
            )}
             {product.tag && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.tag}
                </div>
            )}
        </div>
        <div className="pt-4 pb-2 flex-grow flex flex-col">
            <p className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</p>
            <h3 className="text-sm font-bold text-gray-800 mt-1 flex-grow">
                <a href="#">{product.name}</a>
            </h3>
            
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
                        <span className="text-lg font-bold text-gray-900">${product.salePrice.toFixed(2)}</span>
                    </>
                ) : (
                    <span className="text-lg font-bold text-gray-900">${product.salePrice.toFixed(2)}</span>
                )}
            </div>

             <div className="flex items-center space-x-2 mt-3 text-xs text-gray-500">
                {product.sizes.map(size => (
                    <button key={size} className="border border-gray-300 rounded px-2 py-1 hover:border-orange-500 hover:text-orange-600 transition">
                        {size}
                    </button>
                ))}
            </div>
        </div>
        <button className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300 disabled:bg-gray-400" disabled={product.status === 'outOfStock'}>
            Add to Cart
        </button>
    </div>
);


// --- Main Recently Added Section Component ---
const RecentlyAdded = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        // In a real app, you might fetch this data. Here we just set it.
        setProducts(productsData);
        setFilteredProducts(productsData);
    }, []);

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const handleFilter = (category) => {
        setActiveFilter(category);
        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(p => p.category === category));
        }
    };


    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-30">
                <h2 className="text-6xl font-extrabold text-gray-900 tracking-tight mb-8">RECENTLY ADDED</h2>

                <div className="flex flex-wrap items-center justify-between mb-8">
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <span className="text-sm font-medium text-gray-700">Filter by Interest</span>
                        <div className="flex items-center space-x-2 flex-wrap">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => handleFilter(category)}
                                    className={`mt-1 mb-1 px-4 py-2 text-sm font-medium border rounded-full transition-colors duration-200 ${
                                        activeFilter === category
                                            ? 'bg-orange-500 text-white border-orange-500'
                                            : 'bg-white text-gray-600 border-gray-300 hover:border-orange-400 hover:text-orange-500'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-500 whitespace-nowrap mt-2 sm:mt-0">
                        Show All
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Horizontal line at the bottom */}
                <hr className="mt-12 border-t border-gray-400" />
            </div>
        </div>
    );
};

export default RecentlyAdded;