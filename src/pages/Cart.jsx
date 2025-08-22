

import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

// --- SVG Icon Components for Clarity ---
const ShoppingCartIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const CheckoutIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
);

const OrderCompleteIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
);

const DeliveryIcon = () => (
    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.8 11.828l-2.828 2.828M16.2 11.828l2.828 2.828M9 16s-1 3-3 3-3-3 0-3h6zm6 0s1 3 3 3 3-3 0-3h-6z" /></svg>
);

const StoreIcon = () => (
    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
);

const ReturnIcon = () => (
    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4l16 16" /></svg>
);

// --- Reusable Child Components ---
const QuantitySelector = ({ quantity }) => (
    <div className="flex items-center space-x-2">
        <button className="px-2 py-1 text-gray-500">-</button>
        <span className="px-3 py-1 border rounded-md bg-gray-100">{quantity}</span>
        <button className="px-2 py-1 text-gray-500">+</button>
    </div>
);

const PaymentIcons = () => {
    // Use the same payment icons as in the current implementation
    return (
        <div className="flex items-center space-x-2">
            <img src="/assets/visa.png" alt="Visa" className="w-10 h-8 mx-1 bg-white rounded-md shadow-sm border" />
            <img src="/assets/mastercard.png" alt="Mastercard" className="w-10 h-8 mx-1 bg-white rounded-md shadow-sm border" />
            <img src="/assets/bitcoin.png" alt="Bitcoin" className="w-10 h-8 mx-1 bg-white rounded-md shadow-sm border" />
            <img src="/assets/ano.png" alt="Ano" className="w-10 h-8 mx-1 bg-white rounded-md shadow-sm border" />
        </div>
    );
};

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + (item.salePrice || 0), 0);

  return (
    <>
      <Navbar />
  <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-baseline mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
              <span className="text-gray-500">({cartItems.length})</span>
            </div>
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <img src="/assets/empty-cart.png" alt="Empty Cart" className="mx-auto w-32 h-32 mb-4" />
                <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                <a href="/category" className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition">Continue Shopping</a>
              </div>
            ) : (
              <>
                {cartItems.map((item, idx) => (
                  <div key={item.id} className="flex items-center justify-between mb-6 pb-6 border-b">
                    <div className="flex items-center space-x-4">
                      <img src={item.imageUrl} alt={item.name} className="w-14 h-14 object-cover rounded-md" />
                      <p className="font-semibold text-gray-700">{item.quantity || 1}x {item.name}</p>
                    </div>
                    <div className="flex items-center space-x-6">
                      <QuantitySelector quantity={item.quantity || 1} />
                      <p className="text-gray-600">₹{item.salePrice?.toFixed(2)}</p>
                      <p className="font-bold text-gray-800">₹{(item.salePrice * (item.quantity || 1)).toFixed(2)}</p>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">Remove</button>
                    </div>
                  </div>
                ))}
                <div className="text-right mt-4 pr-1">
                  <p className="text-gray-500">Subtotal <span className="font-bold text-gray-800 ml-2">₹{total.toFixed(2)}</span></p>
                </div>
                <div className="flex justify-end mt-6">
                  <button onClick={clearCart} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition">Clear Cart</button>
                </div>

                {/* Bottom Section: Delivery & Returns (now just below cart items) */}
                <div className="mt-12 w-full">
                  <div className="flex items-center mb-10">
                    <span className="text-green-600 font-bold border-b-2 border-green-600 pb-2 pr-10 text-lg">Delivery</span>
                    <span className="text-green-600 font-bold border-b-2 border-green-600 pb-2 pl-10 text-lg ml-auto">Free Returns</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center">
                      <div className="bg-gray-100 rounded-full p-3 mb-4">
                        <DeliveryIcon />
                      </div>
                      <h3 className="font-bold mb-2">Order by 10pm for free next day delivery on Orders overs ₹100</h3>
                      <p className="text-sm text-gray-600">We deliver Monday to Saturday - excluding Holidays</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center">
                      <div className="bg-gray-100 rounded-full p-3 mb-4">
                        <StoreIcon />
                      </div>
                      <h3 className="font-bold mb-2">Free next day delivery to stores.</h3>
                      <p className="text-sm text-gray-600">Home delivery is ₹4.99 for orders under ₹100 and is FREE for all orders over ₹100</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center">
                      <div className="bg-gray-100 rounded-full p-3 mb-4">
                        <ReturnIcon />
                      </div>
                      <h3 className="font-bold mb-2">30 days to return it to us for a refund. We have made returns SO EASY - you can now return your order to a store or send it with FedEx FOR FREE</h3>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>₹{total.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>Discount</p>
                  <p>₹0.0</p>
                </div>
                <div className="flex justify-between font-bold">
                  <p>Shipping Costs</p>
                  <p>₹50.00</p>
                </div>
              </div>

              <div className="mt-6 flex">
                <input type="text" placeholder="Coupon code" className="flex-grow p-2 border rounded-l-md focus:outline-none" />
                <button className="bg-green-100 text-green-700 font-semibold px-4 rounded-r-md hover:bg-green-200">Apply Coupon</button>
              </div>

              <div className="mt-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-center mt-2">Get <span className="font-bold">Free Shipping</span> for orders over <span className="text-orange-500 font-bold">₹100.00</span></p>
                <a href="/category" className="block text-center text-sm text-green-600 font-semibold mt-1 underline">Continue Shopping</a>
              </div>

              <button className="w-full mt-6 bg-gray-300 text-white font-bold py-3 rounded-lg">
                Checkout | ₹{(total + 50).toFixed(2)}
              </button>

              <div className="mt-6">
                <p className="text-xs text-center text-gray-400 font-semibold mb-2">SECURE PAYMENTS PROVIDED BY</p>
                <div className="flex justify-center">
                  <PaymentIcons />
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Cart;
