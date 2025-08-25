import React from 'react';

// Boy Icon (SVG)
const BoyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-14 h-14 text-blue-500"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2a5 5 0 00-5 5v1a5 5 0 0010 0V7a5 5 0 00-5-5zm0 12c-5.33 0-8 2.67-8 6v2h16v-2c0-3.33-2.67-6-8-6z" />
  </svg>
);

// Girl Icon (SVG)
const GirlIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-14 h-14 text-pink-500"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2a5 5 0 00-5 5v1a5 5 0 0010 0V7a5 5 0 00-5-5zm0 12c-3.31 0-6 2.02-6 4.5V22h12v-3.5c0-2.48-2.69-4.5-6-4.5z" />
  </svg>
);

// Testimonials data with gender
const testimonials = [
  {
    name: 'Priya Sharma',
    gender: 'female',
    rating: 5,
    date: 'July 15, 2023',
    review:
      'The Rudraksha mala I purchased is authentic and radiates such calming energy. Packaging was beautiful and delivery was fast. Jai Shree Ram!',
  },
  {
    name: 'Rahul Mehta',
    gender: 'male',
    rating: 5,
    date: 'June 28, 2023',
    review:
      'Very impressed with the quality of crystals. The Sphatik mala feels divine during meditation. Highly recommended for spiritual seekers.',
  },
  {
    name: 'Ananya Iyer',
    gender: 'female',
    rating: 4,
    date: 'August 2, 2023',
    review:
      'I ordered a Shri Yantra for my puja altar. It was beautifully crafted and blessed. Felt the positivity in my home instantly.',
  },
  {
    name: 'Arjun Singh',
    gender: 'male',
    rating: 5,
    date: 'July 5, 2023',
    review:
      'High quality incense sticks and dhoop cones. They create such a divine fragrance during daily prayers. Will definitely buy again!',
  },
];

// Star rating component
const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          className={`w-6 h-6 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// Testimonial Card
const TestimonialCard = ({ name, gender, rating, date, review }) => (
  <div className="bg-white rounded-3xl shadow-lg mx-4 p-8 w-[450px] flex-shrink-0">
    <div className="flex items-center mb-4">
      <div className="mr-4">
        {gender === 'male' ? <BoyIcon /> : <GirlIcon />}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    </div>
    <hr className="border-gray-200 my-4" />
    <div className="mb-4">
      <StarRating rating={rating} />
    </div>
    <p className="text-gray-600 leading-relaxed mb-6 h-32">{review}</p>
    <p className="text-gray-400 text-sm">{date}</p>
  </div>
);

// Main Component
const Testimonials = () => {
  return (
    <div className="bg-gray-50 font-sans flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row rounded-3xl shadow-2xl">
        {/* Left Section */}
        <div className="bg-orange-700 text-white p-10 rounded-t-3xl md:rounded-l-3xl md:rounded-r-none md:w-1/3 flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-semibold text-orange-200 mb-4">DEVOTEES SPEAK</h4>
            <h2 className="text-4xl font-bold leading-tight">
              TRUSTED FOR AUTHENTIC SPIRITUAL PRODUCTS
            </h2>
          </div>
          <div className="mt-8">
            <hr className="border-orange-500" />
            <div className="mt-6">
              <p
                className="text-3xl font-light text-gray-200"
                style={{ fontFamily: '"Google Sans", "Product Sans", sans-serif' }}
              >
                Blessed & Verified
              </p>
              <p className="text-lg uppercase tracking-widest text-orange-200 mt-4">EXCELLENT</p>
              <div className="flex items-center space-x-4 mt-2">
                <StarRating rating={5} />
                <p className="text-lg text-orange-200">| from 500+ Devotees</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Marquee */}
        <div className="relative bg-gray-100 p-8 rounded-b-3xl md:rounded-r-3xl md:rounded-l-none md:w-2/3 flex items-center overflow-hidden">
          <div
            className="marquee-track flex items-center gap-8"
            style={{
              animation: 'marquee 30s linear infinite',
              willChange: 'transform',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              min-width: 100%;
              display: flex;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
