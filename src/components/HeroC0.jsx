import React from 'react';

const ReliableShippingIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-7 w-7 text-orange-400" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path d="M22.5 16h-1.88c0-1.66-1.34-3-3-3s-3 1.34-3 3H8.38c0-1.66-1.34-3-3-3s-3 1.34-3 3H1v-4h15V8h-3l2-4h4.5c.83 0 1.5.67 1.5 1.5v8.5h2v2zM7 17.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm10.5 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM15 11H3V8h12v3z"/>
    <rect x="4" y="9.25" width="10" height="0.5" fill="#fff"/>
  </svg>
);

const YoureSafeWithUsIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-7 w-7 text-orange-400" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 2L2 8.5V20h20V8.5L12 2z"/>
    <path 
      fill="white" 
      d="M10.21,15.21_L7.4,12.4_l1.41,-1.41_l1.4,1.4_l4.24,-4.24_l1.41,1.41_L10.21,15.21_z"
      transform="translate(1 0)"
    />
  </svg>
);

const BestQualityPricingIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-7 w-7 text-orange-400" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-3-3 1.41-1.41L11 13.17l4.59-4.59L17 10l-6 6z"/>
  </svg>
);

const HeroC0 = () => {
  return (
    <section className="bg-slate-50 w-full py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-around items-center gap-6 sm:gap-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-md">
              <ReliableShippingIcon />
            </div>
            <span className="ml-4 text-base font-semibold text-slate-700">Reliable Shipping</span>
          </div>

          <div className="hidden sm:block h-12 w-px bg-slate-300"></div>

          <div className="flex items-center">
            <div className="flex-shrink-0 bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-md">
              <YoureSafeWithUsIcon />
            </div>
            <span className="ml-4 text-base font-semibold text-slate-700">You're Safe With Us</span>
          </div>
          
          <div className="hidden sm:block h-12 w-px bg-slate-300"></div>

          <div className="flex items-center">
            <div className="flex-shrink-0 bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-md">
              <BestQualityPricingIcon />
            </div>
            <span className="ml-4 text-base font-semibold text-slate-700">Best Quality & Pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroC0;
