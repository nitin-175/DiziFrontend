import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

// Star Icon for Ratings
const StarIcon = () => (
    <svg className="w-4 h-4" style={{ color: '#f3bd10' }} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.365-2.445a1 1 0 00-1.175 0l-3.365 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
);

// Carousel Arrow Icon
const ArrowIcon = ({ direction = 'left' }) => (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {direction === 'left' ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        )}
    </svg>
);

// --- Product Data for the Carousel ---
const featuredProducts = [
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
];

const FeaturedProduct = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // Initialize activeSize based on the first product's first size option
    const [activeSize, setActiveSize] = useState(featuredProducts[0].sizes[0]);

    const product = featuredProducts[currentIndex];

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? featuredProducts.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        // Update active size to the first option of the new product
        setActiveSize(featuredProducts[newIndex].sizes[0]);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === featuredProducts.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        // Update active size to the first option of the new product
        setActiveSize(featuredProducts[newIndex].sizes[0]);
    };

    const { addToCart } = useCart();
    return (
        // Section wrapper to control spacing and alignment
        <section className="py-6 px-2 flex justify-end w-full">
            <div
                className="relative rounded-2xl shadow-lg p-8 text-white overflow-hidden w-full max-w-4xl flex items-center"
                style={{ minHeight: 330, height: 320, background: '#f3bd10' }}
            >
                <div className="relative z-10 flex flex-row gap-8 items-center w-full">
                    {/* Left Column: Product Details */}
                    <div className="flex flex-col gap-y-4 flex-1">
                        <p className="font-semibold text-xs tracking-widest uppercase" style={{ color: '#f3bd10' }}>{product.category}</p>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: '#fff' }}>{product.name}</h2>
                        <div className="flex items-center gap-x-3 text-sm">
                            <StarIcon />
                            <span className="font-semibold" style={{ color: '#fff' }}>{product.rating} / 5</span>
                            <span style={{ color: '#fff' }}>{product.reviews} Reviews</span>
                        </div>
                        <div className="flex items-center gap-x-2 pt-2">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setActiveSize(size)}
                                    className={`px-4 py-2 rounded-md text-xs font-semibold transition-colors duration-300 ${activeSize === size ? '' : ''}`}
                                    style={activeSize === size ? { background: '#fff', color: '#f3bd10', boxShadow: '0 2px 8px #f3bd10' } : { background: '#fff2c2', color: '#b88a00' }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                            <button
                                className="font-bold py-2 px-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
                                style={{ background: '#fff', color: '#f3bd10' }}
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                            <div className="flex items-baseline gap-x-2">
                                <span className="text-2xl font-bold" style={{ color: '#fff' }}>₹{product.salePrice.toFixed(2)}</span>
                                {product.originalPrice && <span className="text-lg line-through" style={{ color: '#fff' }}>₹{product.originalPrice.toFixed(2)}</span>}
                            </div>
                        </div>
                    </div>
                    {/* Product Image Carousel (smaller, aligned) */}
                    <div className="relative flex items-center justify-center h-48 w-48 flex-shrink-0">
                        <button onClick={goToPrevious} className="absolute left-0 z-20 p-2 rounded-full transition-colors" style={{ background: '#b88a00', color: '#fff' }}>
                            <ArrowIcon direction="left" />
                        </button>
                        <div className="w-full h-full rounded-2xl p-2 flex items-center justify-center border-2" style={{ background: '#fff2c2', borderColor: '#f3bd10' }}>
                            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain aspect-square" />
                        </div>
                        <button onClick={goToNext} className="absolute right-0 z-20 p-2 rounded-full transition-colors" style={{ background: '#b88a00', color: '#fff' }}>
                            <ArrowIcon direction="right" />
                        </button>
                    </div>
                </div>
                {/* Bottom: Carousel Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex justify-center items-center gap-x-2">
                    {featuredProducts.map((_, slideIndex) => (
                        <div key={slideIndex} className="w-2 h-2 rounded-full transition-all duration-300" style={{ background: currentIndex === slideIndex ? '#fff' : '#fff2c2' }}></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;