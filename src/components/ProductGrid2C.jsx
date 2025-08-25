import React, { useState } from 'react';
import ProductCard from './ProductCard';

// --- DATA ---
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

// --- ICONS ---
const StarIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.365-2.445a1 1 0 00-1.175 0l-3.365 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
);

// --- CHILD COMPONENTS ---

const Pagination = ({ currentPage, totalPages, onPageChange, totalResults, itemsPerPage }) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalResults);

    const getPageNumbers = () => {
        const pages = [];
        // Previous Arrow
        pages.push(<button key="prev" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 rounded-md hover:bg-gray-200 disabled:opacity-50">&lt;</button>);

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(<button key={i} onClick={() => onPageChange(i)} className={`px-3 py-1 rounded-md ${currentPage === i ? 'bg-gray-800 text-white' : 'hover:bg-gray-200'}`}>{i}</button>);
            }
        } else {
             pages.push(<button key={1} onClick={() => onPageChange(1)} className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-800 text-white' : 'hover:bg-gray-200'}`}>{1}</button>);
             if (currentPage > 3) pages.push(<span key="start-ellipsis" className="px-3 py-1">...</span>);
             
             let startPage = Math.max(2, currentPage - 1);
             let endPage = Math.min(totalPages - 1, currentPage + 1);

             for (let i = startPage; i <= endPage; i++) {
                  pages.push(<button key={i} onClick={() => onPageChange(i)} className={`px-3 py-1 rounded-md ${currentPage === i ? 'bg-gray-800 text-white' : 'hover:bg-gray-200'}`}>{i}</button>);
             }

             if (currentPage < totalPages - 2) pages.push(<span key="end-ellipsis" className="px-3 py-1">...</span>);
             pages.push(<button key={totalPages} onClick={() => onPageChange(totalPages)} className={`px-3 py-1 rounded-md ${currentPage === totalPages ? 'bg-gray-800 text-white' : 'hover:bg-gray-200'}`}>{totalPages}</button>);
        }

        // Next Arrow
        pages.push(<button key="next" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 rounded-md hover:bg-gray-200 disabled:opacity-50">&gt;</button>);

        return pages;
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 text-sm text-gray-600">
            <p className="mb-4 sm:mb-0">
                Showing {startItem}-{endItem} of {totalResults} results
            </p>
            <div className="flex items-center gap-1">
                {getPageNumbers()}
            </div>
        </div>
    );
};


// --- MAIN COMPONENT (RENAMED) ---

const ProductGrid2C = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;

    const totalPages = Math.ceil(productsData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProducts = productsData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <section className="py-6 px-2 flex justify-end w-full">
            <div className="w-full max-w-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProducts.map(product => {
                        // Map 'status' to 'outOfStock' for ProductCard compatibility
                        const mappedProduct = {
                            ...product,
                            outOfStock: product.status === 'outOfStock',
                        };
                        return <ProductCard key={product.id} product={mappedProduct} />;
                    })}
                </div>
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    totalResults={productsData.length}
                    itemsPerPage={ITEMS_PER_PAGE}
                />
            </div>
        </section>
    );
};

export default ProductGrid2C;