import React from 'react';
import { FaShippingFast, FaShieldAlt, FaDollarSign } from 'react-icons/fa';

const Hero2 = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12">

          {/* Feature 1: Reliable Shipping */}
          <div className="text-center">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-yellow-400 mx-auto mb-5">
              <FaShippingFast className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Reliable Shipping
            </h3>
            <p className="text-base text-gray-500 leading-relaxed">
              Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!
            </p>
          </div>

          {/* Feature 2: You're Safe With Us */}
          <div className="text-center">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-yellow-400 mx-auto mb-5">
              <FaShieldAlt className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              You're Safe With Us
            </h3>
            <p className="text-base text-gray-500 leading-relaxed">
              Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency.
            </p>
          </div>

          {/* Feature 3: Best Quality & Pricing */}
          <div className="text-center">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-yellow-400 mx-auto mb-5">
              <FaDollarSign className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Best Quality & Pricing
            </h3>
            <p className="text-base text-gray-500 leading-relaxed">
              Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero2;