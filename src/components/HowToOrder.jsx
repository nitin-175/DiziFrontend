import React from 'react';
import { FaClipboardList, FaShoppingBag, FaCreditCard, FaCheckCircle } from 'react-icons/fa';
import ReferAFriend from './ReferAFriend'; 

// SVG dashed connecting line
const ConnectingLine = ({ reverse = false }) => {
    const path = reverse ? "M0 100 Q50 20, 100 0" : "M0 0 Q50 80, 100 100";
    return (
        <svg
            width="100"
            height="100"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            fill="none"
            viewBox="0 0 100 100"
        >
            <path
                d={path}
                stroke="rgba(249, 115, 22, 0.3)"
                strokeWidth="2"
                strokeDasharray="4 4"
            />
        </svg>
    );
};

const HowToOrder = () => {
    return (
        <div className="bg-gray-900">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ✅ Refer a Friend banner appears here */}
                <div className="relative z-10 -mt-16">
                    <ReferAFriend />
                </div>

                {/* How to Order Section */}
                <div className="pt-24 text-center text-white">
                    <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-5xl">
                        How to order weed online <br /> from top shelf bc - mail order marijuana
                    </h2>
                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                        Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis products online.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="relative pt-16">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
                        {/* Connecting lines (hidden on mobile) */}
                        <div className="pointer-events-none absolute hidden h-full w-full md:block">
                            <ConnectingLine />
                            <ConnectingLine reverse={true} />
                        </div>

                        {/* Step 1 */}
                        <div className="relative z-10 text-center">
                            <div className="relative mb-6 inline-block">
                                <div className="absolute -top-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white ring-4 ring-gray-900">1</div>
                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-800">
                                    <FaClipboardList className="h-12 w-12 text-orange-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold uppercase text-white">REGISTER</h3>
                            <p className="mt-4 text-gray-400">
                                Sign up for an account with us. This is quick and simple. We don’t require any more details than the bare minimum needed for you to place an order and get your product delivered.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative z-10 text-center">
                            <div className="relative mb-6 inline-block">
                                <div className="absolute -top-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white ring-4 ring-gray-900">2</div>
                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-800">
                                    <FaShoppingBag className="h-12 w-12 text-orange-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold uppercase text-white">SHOP</h3>
                            <p className="mt-4 text-gray-400">
                                Decide on what you want to purchase. We stock a wide range of edibles, flowers, concentrates and much more; there is bound to be something for everyone.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative z-10 text-center">
                            <div className="relative mb-6 inline-block">
                                <div className="absolute -top-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white ring-4 ring-gray-900">3</div>
                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-800">
                                    <FaCreditCard className="h-12 w-12 text-orange-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold uppercase text-white">MAKE PAYMENT</h3>
                            <p className="mt-4 text-gray-400">
                                Pay securely. Our site boasts sturdy protection certificates to keep your card details and related data safe.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="relative z-10 text-center">
                            <div className="relative mb-6 inline-block">
                                <div className="absolute -top-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white ring-4 ring-gray-900">4</div>
                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-800">
                                    <FaCheckCircle className="h-12 w-12 text-orange-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold uppercase text-white">RELAX</h3>
                            <p className="mt-4 text-gray-400">
                                Your product will be packaged discretely and shipped by Canada Post Xpresspost. We will provide you with a tracking number so that you can follow your mail order marijuana every step of the way.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="py-24 text-center">
                    <a
                        href="#"
                        className="inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105"
                    >
                        Choose your weed
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HowToOrder;
