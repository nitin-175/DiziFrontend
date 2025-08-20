import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const products = [
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
        imageUrl: 'assets/5 Mukhi Rudraksha Mala.jpeg',
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
        imageUrl: 'assets/Rose Quartz & Amethyst Healing Stone Set.jpeg',
        status: 'inStock',
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
        sizes: ['6mm beads', '8mm beads', '10mm beads'],
        imageUrl: 'assets/Black Obsidian & Lava Stone Bracelet.jpeg',
        status: 'inStock',
        tag: 'Best Seller',
    },
    {
        id: 5,
        category: 'GEMSTONES',
        name: 'Clear Quartz & Selenite Set',
        rating: 4.6,
        reviews: 135,
        material: 'Natural Crystals',
        originalPrice: null,
        salePrice: 80.00,
        sizes: ['Small', 'Medium', 'Large'],
        imageUrl: 'assets/Clear Quartz & Selenite Set.jpeg',
        status: 'inStock',
        tag: null,
    },
    {
        id: 6,
        category: 'BRACELETS',
        name: '7 Chakra Balancing Bracelet',
        rating: 4.6,
        reviews: 135,
        material: 'Mixed Semi-Precious Stones',
        originalPrice: 120.00,
        salePrice: 80.00,
        sizes: ['6mm beads', '8mm beads', '10mm beads'],
        imageUrl: 'assets/7 Chakra Balancing Bracelet.jpeg',
        status: 'inStock',
        tag: 'Limited Edition',
    },
    {
        id: 7,
        category: 'RUDRAKSHA',
        name: 'Ek Mukhi Rudraksha Pendant',
        rating: 4.6,
        reviews: 135,
        material: 'Natural Rudraksha Bead with Silver Cap',
        originalPrice: 200.00,
        salePrice: 102.00,
        sizes: ['Small', 'Medium', 'Large'],
        imageUrl: 'assets/Ek Mukhi Rudraksha Pendant.jpeg',
        status: 'outOfStock',
        tag: null,
    },
    {
        id: 8,
        category: 'GEMSTONES',
        name: 'Green Aventurine & Lapis Lazuli Healing Set',
        rating: 4.6,
        reviews: 135,
        material: 'Natural Crystals',
        originalPrice: null,
        salePrice: 80.00,
        sizes: ['Small', 'Medium', 'Large'],
        imageUrl: 'assets/Green Aventurine & Lapis Lazuli Healing Set.jpeg',
        status: 'inStock',
        tag: null,
    },
    {
        id: 9,
        category: 'Mala Beads',
        name: 'Tulsi Mala Beads (108 Beads)',
        rating: 4.6,
        reviews: 135,
        material: 'Natural Tulsi Wood',
        originalPrice: 150.00,
        salePrice: 90.00,
        sizes: ['Small', 'Medium', 'Large'],
        imageUrl: 'assets/Tulsi Mala Beads (108 Beads).jpeg',
        status: 'inStock',
        tag: null,
    },
    {
        id: 11,
        category: 'Mala Beads',
        name: 'Lotus Seed Mala Beads (108 Beads)',
        rating: 4.6,
        reviews: 135,
        material: 'Natural Lotus Seeds',
        originalPrice: 150.00,
        salePrice: 90.00,
        sizes: ['Small', 'Medium', 'Large'],
        imageUrl: 'assets/Lotus Seed Mala Beads (108 Beads).jpeg',
        status: 'inStock',
        tag: null,
    }
];

const categories = ['Shop All Products','RUDRAKSHA', 'GEMSTONES', 'BRACELETS', 'Mala Beads'];

function ProductCard({ product, onAddToCart }) {
    const isOutOfStock = product.status === 'outOfStock';

    return (
        <div className=" group relative flex flex-col rounded-lg bg-white shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
            <div className="relative bg-gray-50 p-4 rounded-t-lg h-56 flex items-center justify-center overflow-hidden">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={`max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3 ${isOutOfStock ? 'opacity-60' : 'opacity-100'}`}
                />
                {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm">
                        <div className="flex items-center justify-center w-28 h-28 bg-gray-900 bg-opacity-70 rounded-full animate-pulse">
                            <span className="text-white font-bold text-lg">Out Of Stock</span>
                        </div>
                    </div>
                )}
                {product.tag && !isOutOfStock && (
                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-md animate-bounce">
                        {product.tag}
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col p-5 text-center transition-all duration-500 group-hover:bg-orange-50">
                <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">{product.category}</p>
                    <h3 className="text-base font-bold text-gray-800 mb-3">{product.name}</h3>
                    <div className="flex items-center justify-center text-sm text-gray-500 mb-3">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span>{product.rating}/5</span>
                        <span className="mx-2">|</span>
                        <span>{product.reviews} Reviews</span>
                    </div>
                    <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-800 mb-4">
                        {product.material}
                    </span>
                    <div className="text-xl font-bold text-gray-800 mb-4">
                        {product.originalPrice && <span className="text-base font-normal text-gray-400 line-through mr-2">₹{product.originalPrice.toFixed(2)}</span>}
                        <span className={product.originalPrice ? 'text-red-500' : ''}>₹{product.salePrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-center space-x-4 text-xs text-gray-500 mb-5">
                        {product.sizes.map(s => <span key={s} className="transition-colors duration-300 hover:text-orange-600">{s}</span>)}
                    </div>
                </div>
                <button
                    onClick={() => onAddToCart(product)}
                    disabled={isOutOfStock}
                    className="w-32 rounded-full bg-orange-500 py-2 px-4 font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:scale-105 disabled:cursor-not-allowed disabled:bg-gray-300 mx-auto"
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default function SpiritualProducts() {
    const [activeFilter, setActiveFilter] = useState('Shop All Products');
    const [cart, setCart] = useState([]);

    const handleAddToCart = (productToAdd) => {
        setCart(prevCart => [...prevCart, productToAdd]);
        alert(`${productToAdd.name} has been added to your cart!`);
    };

    const getNormalizedFilter = (filter) => filter.toUpperCase();

    const filteredProducts = activeFilter === 'Shop All Products'
        ? products
        : products.filter(p => p.category.toUpperCase() === getNormalizedFilter(activeFilter));

    return (
        <div className="bg-orange-50 ">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-left ml-9">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Discover Your Spiritual Tools
                    </h1>
                </div>
                <div className="mt-12 flex flex-wrap justify-start items-center gap-x-4 gap-y-4 ml-8">
                    <span className="text-base font-medium text-gray-800 mr-4">Filter by Interest</span>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105
                                ${activeFilter === category
                                    ? 'border-orange-500 bg-orange-500 text-white'
                                    : 'border-gray-300 bg-white text-gray-700 hover:bg-orange-100'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
}
