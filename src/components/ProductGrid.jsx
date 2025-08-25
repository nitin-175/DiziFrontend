import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  if (!products.length) {
    return <div className="w-full lg:w-3/4 xl:w-4/5 p-8 text-center text-gray-500">No products found for selected filters.</div>;
  }
  // Top selling: first 3 by reviews
  const sortedByReviews = products.slice().sort((a, b) => b.reviews - a.reviews);
  const topSellingProducts = sortedByReviews.slice(0, 3);
  const otherProducts = products.filter(p => !topSellingProducts.includes(p));

  return (
    <main className="w-full lg:w-3/4 xl:w-4/5">
      {/* Top Selling Section */}
      <div className="bg-gray-100 rounded-xl p-6 mb-10">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Top Selling</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topSellingProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
      {/* Main Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  );
};

export default ProductGrid;