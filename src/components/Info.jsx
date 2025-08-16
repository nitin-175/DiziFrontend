import React from 'react';

const Info = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight ml-4">
            WHAT MAKES US THE <span className="text-yellow-500">#1</span><br />
            ONLINE MARIJUANA<br />
            DISPENSARY IN CANADA?
          </h2>
          <p className="mt-4 max-w-2xl text-lg lg:px-5 text-gray-500">
            When it comes to what makes us the foremost online marijuana dispensary in Canada, we could wax lyrical about our positive qualities. Instead, to make this information clearer, we've highlighted the six prioritized features that we feel makes us a cut above the rest.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Customer Service */}
          <div className="p-8 border border-gray-200 rounded-lg text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-50 text-green-600 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M12 12v.01M12 12H4.5m0 0a9 9 0 0112.728 0m-12.728 0L3 21m0 0l2.828-2.828M5.636 5.636a9 9 0 0112.728 0m0 0L21 3m-2.828 2.828l-2.829 2.829" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">CUSTOMER SERVICE</h3>
            <p className="mt-4 text-base text-gray-500">
              Whether it is answering any questions you have before making a purchase, helping out with the buying process itself or taking your feedback under consideration, we are proud to provide high quality customer service that makes you - the customer - the most important person in the transaction.
            </p>
          </div>

          {/* Security */}
          <div className="p-8 border border-gray-200 rounded-lg text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-50 text-green-600 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">SECURITY</h3>
            <p className="mt-4 text-base text-gray-500">
              When it comes to security, we only keep what details are necessary for you to have an account with us and make an order. When it comes to shipping your mail order marijuana out, we use only tamper-proof and discrete packaging so then what you've purchased is your business only.
            </p>
          </div>

          {/* Best Value */}
          <div className="p-8 border border-gray-200 rounded-lg text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-50 text-green-600 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1.646a4.002 4.002 0 00-4-3.854 4.002 4.002 0 00-4 3.854V6m8 0v1m0-1V4.5M7.5 4.5V6m0-1.5A2.5 2.5 0 015 2a2.5 2.5 0 012.5 2.5zM12 21.5V12" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">BEST VALUE</h3>
            <p className="mt-4 text-base text-gray-500">
              We are continually adjusting what we supply and our prices to ensure that we maintain an optimal balance of affordable and quality for our products. We invest in the best quality strains that we can find and are always on the lookout for new, affordable and high quality weed products.
            </p>
          </div>

          {/* Delivery Insurance */}
          <div className="p-8 border border-gray-200 rounded-lg text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-50 text-green-600 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-2h8a1 1 0 001-1z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">DELIVERY INSURANCE</h3>
            <p className="mt-4 text-base text-gray-500">
              If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120.
            </p>
          </div>

          {/* Highest Quality */}
          <div className="p-8 border border-gray-200 rounded-lg text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-50 text-green-600 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.482l.962-.962a2.25 2.25 0 013.182 0l.962.962M9 19.5v-2.25m0 0a2.25 2.25 0 012.25-2.25h1.5A2.25 2.25 0 0115 17.25m-6 0v-2.25" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">HIGHEST QUALITY</h3>
            <p className="mt-4 text-base text-gray-500">
              All of our cannabis products are tested to ensure that they are the highest quality possible. We work with expert suppliers and are always revising what makes a quality cannabis product to ensure that we have only the best available.
            </p>
          </div>

          {/* Trust */}
          <div className="p-8 border border-gray-200 rounded-lg text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-50 text-green-600 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-3-3h-1m-4-8a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-900">TRUST</h3>
            <p className="mt-4 text-base text-gray-500">
              With over 15 years in the weed business, you can rest assured that you will be taken care of. You can guarantee that we have your best interests in mind. Feel free to check out our reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;