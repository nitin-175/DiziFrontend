import React, { useEffect, useRef, useState } from "react";

function SlideImage({ src, alt, isActive }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      draggable="false"
    />
  );
}

function Overlay() {
  return <div className="absolute inset-0 bg-black/40" />;
}

function HeroTextSection() {
  return (
    <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-8 md:px-16">
      <div className="max-w-xl text-white pb-5">
        {/* Responsive Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Inner Peace
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-2">
          Sacred Healing Products
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
          Discover ancient wisdom through our collection of authentic spiritual
          products. Find peace, prosperity, and spiritual growth with sacred
          items.
        </p>

        <TagList />

        <div className="flex gap-4 mt-6">
          <a
            href="#"
            className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors"
          >
            Shop Products →
          </a>
        </div>
      </div>
    </div>
  );
}

function TagList() {
  const tags = ["Crystal Healing", "Meditation Beads", "Sacred Stones"];
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="px-3 sm:px-4 py-1 font-medium bg-green-400 text-black hover:bg-green-500 rounded-full text-xs sm:text-sm shadow-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function NavigationButton({ direction, onClick }) {
  const iconPath =
    direction === "prev"
      ? "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
      : "m8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z";
  const positionClass = direction === "prev" ? "left-3" : "right-3";

  return (
    <button
      onClick={onClick}
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 grid place-items-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/40 hover:bg-black/60 focus:outline-none`}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5 text-white">
        <path fill="currentColor" d={iconPath} />
      </svg>
    </button>
  );
}

function Indicators({ count, activeIndex, setIndex }) {
  return (
    <div className="absolute left-1/2 bottom-3 -translate-x-1/2 flex gap-2">
      {[...Array(count)].map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all ${
            activeIndex === i
              ? "w-4 sm:w-6 bg-white"
              : "bg-white/60 hover:bg-white/80"
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

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
    while (slides.length < 2) slides.push(images[0] || { src: "", alt: "" });
  }

  const go = (dir) =>
    setIndex((prev) => (prev + dir + slides.length) % slides.length);

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(() => go(1), interval);
    return () => clearInterval(timerRef.current);
  });

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    if (!autoPlay) return;
    timerRef.current = setInterval(() => go(1), interval);
  };

  return (
    <div
      className="relative z-0 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl shadow"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {slides.map((s, i) => (
        <SlideImage key={i} src={s.src} alt={s.alt} isActive={index === i} />
      ))}

      <Overlay />
      <HeroTextSection />

      <NavigationButton direction="prev" onClick={() => go(-1)} />
      <NavigationButton direction="next" onClick={() => go(1)} />

      <Indicators count={slides.length} activeIndex={index} setIndex={setIndex} />
    </div>
  );
}
