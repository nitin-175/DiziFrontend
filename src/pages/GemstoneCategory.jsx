import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- SVG ICONS ---
// Using inline SVGs to keep everything in one file and avoid external dependencies.

const PhoneIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const MailIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const SearchIcon = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const HeartIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);
const ShoppingCartIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
);
const UserIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);
const MenuIcon = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

// --- MOCK DATA ---
const gemstoneCategories = [
    { name: 'Blue Sapphire', image: 'https://placehold.co/250x200/4682B4/FFFFFF?text=Blue+Sapphire' },
    { name: 'Yellow Sapphire', image: 'https://placehold.co/250x200/FFD700/000000?text=Yellow+Sapphire' },
    { name: 'Emerald', image: 'https://placehold.co/250x200/50C878/FFFFFF?text=Emerald' },
    { name: 'Ruby', image: 'https://placehold.co/250x200/E0115F/FFFFFF?text=Ruby' },
    { name: 'Hessonite', image: 'https://placehold.co/250x200/C2B280/000000?text=Hessonite' },
    { name: 'Red Coral', image: 'https://placehold.co/250x200/FF7F50/FFFFFF?text=Red+Coral' },
];

const astrologicalStones = [
    { id: 1, name: 'Natural Pearl', price: '1,150', carat: '5.25', image: '/assets/gemstones/img2.avif' },
    { id: 2, name: 'Red Coral', price: '850', carat: '6.0', image: '/assets/gemstones/img3.avif' },
    { id: 3, name: 'Hessonite', price: '950', carat: '4.5', image: '/assets/gemstones/img4.avif' },
    { id: 4, name: 'Cat\'s Eye', price: '1,300', carat: '3.75', image: '/assets/gemstones/img5.avif' },
    { id: 5, name: 'Amethyst', price: '450', carat: '7.0', image: '/assets/gemstones/img6.avif' },
    { id: 6, name: 'Turquoise', price: '600', carat: '8.25', image: '/assets/gemstones/img7.avif' },
    { id: 7, name: 'Opal', price: '2,100', carat: '4.0', image: '/assets/gemstones/img8.avif' },
    { id: 8, name: 'Garnet', price: '720', carat: '5.5', image: '/assets/gemstones/img9.avif' },
    { id: 9, name: 'Blue Topaz', price: '300', carat: '9.0', image: '/assets/gemstones/img10.avif' },
    { id: 10, name: 'Peridot', price: '550', carat: '6.5', image: '/assets/gemstones/img11.avif' },
    { id: 11, name: 'Citrine', price: '400', carat: '8.0', image: '/assets/gemstones/img12.avif' },
    { id: 12, name: 'Aquamarine', price: '1800', carat: '5.0', image: '/assets/gemstones/img13.avif' },
    { id: 13, name: 'Moonstone', price: '650', carat: '7.5', image: '/assets/gemstones/img14.avif' },
    { id: 14, name: 'Lapis Lazuli', price: '480', carat: '10.0', image: '/assets/gemstones/img15.avif' },
    { id: 15, name: 'Sunstone', price: '520', carat: '6.75', image: '/assets/gemstones/img16.avif' },
    { id: 16, name: 'Jade', price: '900', carat: '5.0', image: '/assets/gemstones/img17.avif' },
    { id: 17, name: 'Iolite', price: '350', carat: '4.25', image: '/assets/gemstones/img18.avif' },
    { id: 18, name: 'Spinel', price: '1500', carat: '3.5', image: '/assets/gemstones/img19.avif' },
    { id: 19, name: 'Zircon', price: '700', carat: '6.0', image: '/assets/gemstones/img5.avif' },
    { id: 20, name: 'Tanzanite', price: '2500', carat: '3.0', image: '/assets/gemstones/img11.avif' },
];

const newArrivals = [...astrologicalStones].reverse(); 

// --- REUSABLE COMPONENTS ---

import { useNavigate } from 'react-router-dom';

const ProductCard = ({ gem }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-white rounded-lg overflow-hidden group text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
            <div className="relative bg-gray-50 cursor-pointer" onClick={() => navigate(`/gem/${gem.id}`)}>
                <img src={gem.image} alt={gem.name} className="w-full h-56 object-contain transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow mb-4">
                    <h3 className="text-lg font-serif text-gray-800 group-hover:text-yellow-600 min-h-[56px] flex items-center justify-center">{gem.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{gem.carat} Ratti</p>
                    <p className="text-xl font-bold font-sans text-gray-900 mt-2">${gem.price}</p>
                </div>
                {/* Removed View Details Link */}
            </div>
        </div>
    );
};

const CategoryCard = ({ category }) => (
    <div className="text-center group">
        <div className="rounded-lg overflow-hidden p-1 transition-all duration-300 group-hover:shadow-xl">
            <img src={category.image} alt={category.name} className="w-full h-auto object-contain rounded-md transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="mt-4 text-lg font-serif text-gray-700 group-hover:text-yellow-600 transition-colors">{category.name}</h3>
    </div>
);

const SimpleProductCard = ({ gem }) => {
    const navigate = useNavigate();
    return (
        <div className="text-center group">
            <div className="rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl cursor-pointer" onClick={() => navigate(`/gem/${gem.id}`)}>
                <img src={gem.image.replace()} alt={gem.name} className="w-full h-auto object-contain aspect-square rounded-md transition-transform duration-300 group-hover:scale-105" />
            </div>
            <h3 className="mt-4 text-xl font-medium font-sans  text-gray-700 group-hover:text-yellow-600 transition-colors min-h-[48px] flex items-center justify-center">{gem.name}</h3>
            {/* Removed View Details Link */}
        </div>
    );
};



const HeroSection = () => (
    <div className="relative bg-gray-800 h-80 md:h-[500px]">
        <img 
            src="/assets/gemcrousel.jpg" 
            alt="Beautiful gemstones banner" 
            className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-start text-center">
            <div className="  p-8 md:p-12 rounded-lg">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">Authentic, Precious & <br/> Semi-Precious Gemstones</h1>
                <p className="text-gray-200 mt-4 max-w-2xl mx-auto">Discover a curated collection of the world's finest, ethically sourced gems, certified for authenticity.</p>
                <div className="mt-8 flex justify-center space-x-4">
                    <a href="#" className="px-8 py-3 bg-yellow-400 text-white font-bold rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">Shop Gemstones</a>
                    <a href="#" className="px-8 py-3 bg-white/20 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105">Astrology Consultation</a>
                </div>
            </div>
        </div>
    </div>
);




// --- MAIN APP COMPONENT ---

export default function GemstoneCategory() {
  return (
    <>
        {/* Google Fonts Import */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@700;900&display=swap');
            body { 
                font-family: 'Lato', sans-serif;
            }
            .font-serif { 
                font-family: 'Playfair Display', serif; 
            }
          `}
        </style>
        <div className="bg-gray-50">
          <Navbar/>
          <main>
            <HeroSection />

            {/* Categories Section */}
             <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-12">Shop by Category</h2>
                    <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-6 gap-8">
                        {gemstoneCategories.map(category => <CategoryCard key={category.name} category={category} />)}
                    </div>
                </div>
            </section>

            {/* New Arrivals Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-12">New Arrivals</h2>
                    <div className="grid grid-cols-5 sm:grid-cols-5 gap-8">
                        {newArrivals.slice(0, 5).map(gem => <ProductCard key={gem.id} gem={gem} />)}
                    </div>
                </div>
            </section>

            

            {/* Astrological Gemstones Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-12">Astrological Gemstones</h2>
                    <div className="grid grid-cols-5 sm:grid-cols-5 gap-8">
                        {astrologicalStones.map(gem => <SimpleProductCard key={gem.id} gem={gem} />)}
                    </div>
                </div>
            </section>

            {/* Featured Gemstones Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-12">Featured Gemstones</h2>
                    <div className="grid grid-cols-5 sm:grid-cols-5 gap-8">
                        {astrologicalStones.slice(0, 5).map(gem => <SimpleProductCard key={gem.id} gem={gem} />)}
                    </div>
                </div>
            </section>

          </main>
          <Footer/>
        </div>
    </>
  );
}