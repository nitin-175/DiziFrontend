import React from 'react';

export default function CuponSection() {
  return (
    <div className="flex justify-center items-center px-4 mt-5 relative -mb-24">
      <div className="bg-[#05422C] rounded-2xl sm:w-4/5 md:w-3/6 p-4 sm:p-6">
        <h1 className="text-white text-3xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
          UNLOCK 20% OFF YOUR <br className="hidden sm:block" /> FIRST ORDER
        </h1>
        <p className="text-gray-300 mt-3">Reveal coupon code by entering your email</p>
        <hr className="my-6 border-gray-600" />
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-4 py-3 rounded-full border border-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 bg-transparent text-white placeholder-gray-400"
          />
          <button className="bg-green-300 hover:bg-green-400 text-black px-6 py-3 rounded-full font-medium transition-colors">
            Reveal coupon
          </button>
        </div>
      </div>
    </div>
  );
}
