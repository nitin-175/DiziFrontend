import React, { useEffect, useRef, useState } from "react";

export default function LandingHero({
  images = [
    { src: "/assets/crosel1.jpg", alt: "Slide 1" },
    { src: "/assets/crausel2.jpg", alt: "Slide 2" },
  ],
  autoPlay = true,
  interval = 4000,
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

 

  const slides = images.slice(0, 2);
  if (slides.length < 2) {
    console.warn("TwoImageCarousel needs 2 images. Using fallback duplicates.");
    while (slides.length < 2) slides.push(images[0] || { src: "", alt: "" });
  }

  const go = (dir) => setIndex((prev) => (prev + dir + 2) % 2);

 
  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(() => go(1), interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval]);

  const pause = () => timerRef.current && clearInterval(timerRef.current);
  const resume = () => {
    if (!autoPlay) return;
    timerRef.current = setInterval(() => go(1), interval);
  };

  return (
    <div
      className="relative z-0 w-full h-[400px] sm:h-[500px] overflow-hidden rounded-xl shadow"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.src}
          alt={s.alt || `Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === i ? "opacity-100" : "opacity-0"
          }`}
          draggable="false"
        />
      ))}

      
      <button
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 focus:outline-none"
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
          <path
            fill="currentColor"
            d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
          />
        </svg>
      </button>

      
      <button
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 focus:outline-none"
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
          <path
            fill="currentColor"
            d="m8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"
          />
        </svg>
      </button>

      
      <div className="absolute left-1/2 bottom-3 -translate-x-1/2 flex gap-2">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === i
                ? "w-6 bg-white"
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
