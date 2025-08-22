import React from 'react';
import { useCart } from '../context/CartContext';

// Star Icon Component
const StarIcon = ({ filled }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-orange-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.365-2.445a1 1 0 00-1.175 0l-3.365 2.445c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<StarIcon key={i} filled={i <= rating} />);
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col justify-between h-full group">
      <div>
        <div className="relative bg-gray-50 rounded-lg mb-4 p-4 flex items-center justify-center h-48">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
            onError={e => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150?text=Image+Not+Found';
            }}
          />
          {product.tag && (
            <span className="absolute top-2 right-2 bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-md">{product.tag}</span>
          )}
          {product.outOfStock && (
            <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center rounded-lg">
              <span className="bg-gray-700 text-white text-sm font-semibold px-4 py-2 rounded-full">Out Of Stock</span>
            </div>
          )}
        </div>

        <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-800 my-1 group-hover:text-orange-600 transition-colors">{product.name}</h3>

        <div className="flex items-center my-2">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-gray-500 text-sm ml-2">{product.reviews} Reviews</span>
        </div>
        
        {product.strain && (
             <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">{product.strain}</span>
        )}
      </div>

      <div className="mt-4">
    <div className="flex items-center justify-between text-sm mb-3">
      <div className="flex items-center text-gray-800">
        <p className="font-bold text-lg text-orange-600">₹{product.salePrice.toFixed(2)}</p>
        {product.originalPrice && <p className="text-gray-400 line-through ml-2">₹{product.originalPrice.toFixed(2)}</p>}
      </div>
       <p className="text-gray-400">/ gram</p>
        </div>
        
        <div className="flex items-center space-x-3 text-sm text-gray-500 font-medium mb-4">
            <span>28g</span>
            <span>1/2lb</span>
            <span>1/4lb</span>
        </div>

        <button
          className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-gray-300"
          disabled={product.outOfStock}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;