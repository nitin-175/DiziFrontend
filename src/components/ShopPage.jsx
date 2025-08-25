import React from 'react';
import Filters from './Filters';
import ProductGrid from './ProductGrid';
import { useState, useMemo } from 'react';


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
        imageUrl: '/assets/Black Obsidian & Lava Stone Bracelet.jpeg',
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
        imageUrl: '/assets/Clear Quartz & Selenite Set.jpeg',
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
        imageUrl: '/assets/7 Chakra Balancing Bracelet.jpeg',
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
        imageUrl: '/assets/Ek Mukhi Rudraksha Pendant.jpeg',
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
        imageUrl: '/assets/Green Aventurine & Lapis Lazuli Healing Set.jpeg',
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
        imageUrl: '/assets/Tulsi Mala Beads (108 Beads).jpeg',
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
        imageUrl: '/assets/Lotus Seed Mala Beads (108 Beads).jpeg',
        status: 'inStock',
        tag: null,
    }
];


const ShopPage = () => {
    // Filter state
    const [activeCategory, setActiveCategory] = useState('All');
    const [price, setPrice] = useState(50000);
    const [selectedRating, setSelectedRating] = useState(0);
    const [activeOrder, setActiveOrder] = useState('Default');

    // Get unique categories from products
    const categories = useMemo(() => {
        const cats = products.reduce((acc, p) => {
            acc[p.category] = (acc[p.category] || 0) + 1;
            return acc;
        }, {});
        return Object.entries(cats).map(([name, count]) => ({ name, count }));
    }, []);

    // Filtering logic
    const filteredProducts = useMemo(() => {
        let filtered = products.filter(p =>
            (activeCategory === 'All' || p.category === activeCategory) &&
            p.salePrice <= price &&
            (selectedRating === 0 || Math.floor(p.rating) >= selectedRating)
        );
        // Sorting
        if (activeOrder === 'Price: Low to High') {
            filtered = filtered.slice().sort((a, b) => a.salePrice - b.salePrice);
        } else if (activeOrder === 'Price: High to Low') {
            filtered = filtered.slice().sort((a, b) => b.salePrice - a.salePrice);
        } else if (activeOrder === 'Average Rating') {
            filtered = filtered.slice().sort((a, b) => b.rating - a.rating);
        } else if (activeOrder === 'Review Count') {
            filtered = filtered.slice().sort((a, b) => b.reviews - a.reviews);
        }
        return filtered;
    }, [activeCategory, price, selectedRating, activeOrder]);

    return (
        <div className="bg-white font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row">
                    <Filters
                        categories={categories}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        price={price}
                        setPrice={setPrice}
                        selectedRating={selectedRating}
                        setSelectedRating={setSelectedRating}
                        activeOrder={activeOrder}
                        setActiveOrder={setActiveOrder}
                    />
                    
                    {/* Main Content Area */}
                    <main className="w-full lg:w-3/4 xl:w-4/5 lg:pl-8">
                        {/* START: ADDED SECTION */}
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-4xl font-extrabold text-gray-800">Explore Our Collections</h1>
                            <select className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-600">
                                <option>Sort By Devotion</option>
                            </select>
                        </div>
                        
                        <div className="mb-10">
                            <h2 className="text-xl font-bold text-orange-600 mb-2">Sacred Offerings</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Welcome to our curated collection of sacred items, designed to support your spiritual journey. Each piece, from authentic Rudraksha beads to healing gemstones, is sourced with intention and reverence. We are dedicated to providing you with high-quality, energetically charged tools to enhance your practice, bring peace to your mind, and connect you with the divine. Embrace the path to inner harmony with our blessed offerings.
                            </p>
                        </div>
                        {/* END: ADDED SECTION */}
                        
                        <ProductGrid products={filteredProducts} />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;