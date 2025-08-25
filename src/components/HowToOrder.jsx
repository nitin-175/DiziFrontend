import React from 'react';
import { FaClipboardList, FaShoppingBag, FaCreditCard, FaCheckCircle } from 'react-icons/fa';

function ConnectingLine({ reverse = false }) {
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
      <path d={path} stroke="rgba(249, 115, 22, 0.3)" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
  );
}

function Step({ number, icon: Icon, title, description }) {
  return (
    <div className="relative z-10 text-center">
      <div className="relative mb-6 inline-block">
        <div className="absolute -top-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white ring-4 ring-gray-900">
          {number}
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-800">
          <Icon className="h-12 w-12 text-orange-400" />
        </div>
      </div>
      <h3 className="text-xl font-bold uppercase text-white">{title}</h3>
      <p className="mt-4 text-gray-400">{description}</p>
    </div>
  );
}

function StepsGrid() {
  return (
    <div className="relative pt-16">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
        <div className="pointer-events-none absolute hidden h-full w-full md:block">
          <ConnectingLine />
          <ConnectingLine reverse={true} />
        </div>
        <Step
          number="1"
          icon={FaClipboardList}
          title="Register"
          description="Create your account to access our spiritual resources. It takes only a few minutes to begin your journey."
        />
        <Step
          number="2"
          icon={FaShoppingBag}
          title="Explore"
          description="Browse through our sacred texts, gemstones, and spiritual products. Each item is curated to support your path."
        />
        <Step
          number="3"
          icon={FaCreditCard}
          title="Contribute"
          description="Offer your donation or purchase with trust. Our secure platform ensures safe and seamless transactions."
        />
        <Step
          number="4"
          icon={FaCheckCircle}
          title="Receive"
          description="Your chosen items will be delivered with care. Experience blessings as you connect with ancient traditions."
        />
      </div>
    </div>
  );
}

export default function HowToOrder() {
  return (
    <div className="bg-gray-900">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-24 text-center text-white">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-5xl">
            How to Order Sacred Products Online
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Ordering from us is simple. With a few easy steps, you can bring home authentic spiritual products that carry timeless wisdom and energy.
          </p>
        </div>
        <StepsGrid />
        <div className="py-24 text-center">
          <a
            href="#"
            className="inline-block rounded-full bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
}