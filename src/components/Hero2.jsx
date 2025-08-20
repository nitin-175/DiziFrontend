import React from 'react';
import { FaShippingFast, FaShieldAlt, FaDollarSign } from 'react-icons/fa';

const Hero2 = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12">

          {/* Feature 1: Reliable & Fast Delivery */}
          <div className="text-center">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-yellow-400 mx-auto mb-5">
              <FaShippingFast className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Reliable & Fast Delivery
            </h3>
            <p className="text-base text-gray-500 leading-relaxed">
              We ensure timely and secure delivery of Rudraksha, gemstones, and spiritual items across India and worldwide, with tracking and support at every step.
            </p>
          </div>

          {/* Feature 2: Authentic & Secure */}
          <div className="text-center">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-yellow-400 mx-auto mb-5">
              <FaShieldAlt className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Authentic & Secure
            </h3>
            <p className="text-base text-gray-500 leading-relaxed">
              Every product is lab-certified and blessed by Vedic pundits. Our secure payment gateway supports cards, UPI, and net banking for a safe shopping experience.
            </p>
          </div>

          {/* Feature 3: Best Quality & Value */}
          <div className="text-center">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-yellow-400 mx-auto mb-5">
              <FaDollarSign className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Best Quality & Value
            </h3>
            <p className="text-base text-gray-500 leading-relaxed">
              We bring you authentic spiritual products at honest pricing, ensuring purity, effectiveness, and accessibility for your spiritual journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero2;
