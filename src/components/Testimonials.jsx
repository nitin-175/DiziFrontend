import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    date: "July 15, 2023",
    review:
      "The Rudraksha mala I purchased is authentic and radiates a calming energy. The packaging felt divine and the delivery was fast. Jai Shree Ram!",
  },
  {
    name: "Rahul Mehta",
    rating: 5,
    date: "June 28, 2023",
    review:
      "The Sphatik mala quality is exceptional — it feels charged with positive vibrations. I felt instant peace during meditation. Pure authenticity.",
  },
  {
    name: "Ananya Iyer",
    rating: 4,
    date: "August 2, 2023",
    review:
      "I ordered a Shri Yantra for my puja altar. It was exquisitely crafted and blessed. You can truly feel the sacred energy it radiates.",
  },
  {
    name: "Arjun Singh",
    rating: 5,
    date: "July 5, 2023",
    review:
      "The incense and dhoop cones are divine. The fragrance fills the room with serenity. A truly spiritual experience — highly recommended.",
  },
];

const StarRating = ({ rating }) => (
  <div style={{ display: "flex", gap: "3px" }}>
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        style={{
          color: i < rating ? "#FFD700" : "#555",
          fontSize: "20px",
          textShadow: i < rating ? "0 0 12px #FFD700" : "none",
        }}
      >
        ★
      </span>
    ))}
  </div>
);

const TestimonialCard = ({ name, rating, date, review }) => (
  <div
    style={{
      minWidth: "360px",
      maxWidth: "400px",
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,215,0,0.3)",
      borderRadius: "24px",
      padding: "28px",
      backdropFilter: "blur(20px)",
      boxShadow: "0 0 40px rgba(255,215,0,0.15)",
      transition: "all 0.5s ease",
      color: "#fff",
      transformStyle: "preserve-3d",
      perspective: "1000px",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px) rotateY(3deg)";
      e.currentTarget.style.boxShadow = "0 0 50px rgba(255,215,0,0.4)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0) rotateY(0deg)";
      e.currentTarget.style.boxShadow = "0 0 40px rgba(255,215,0,0.15)";
    }}
  >
    <h3
      style={{
        fontSize: "20px",
        fontWeight: "600",
        color: "#FFF8DC",
        marginBottom: "6px",
        textShadow: "0 0 10px rgba(255,215,0,0.4)",
      }}
    >
      {name}
    </h3>
    <p style={{ fontSize: "13px", opacity: 0.8, marginBottom: "10px" }}>{date}</p>
    <StarRating rating={rating} />
    <p
      style={{
        fontSize: "15px",
        lineHeight: "1.8",
        marginTop: "14px",
        opacity: 0.9,
        fontWeight: "400",
      }}
    >
      {review}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center, #3e2600 0%, #1a0e00 70%, #0d0500 100%)",
        padding: "120px 0",
      }}
    >
      {/* Glowing aura background */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          width: "700px",
          height: "700px",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(255, 215, 0, 0.15), transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* Floating particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "8px",
            height: "8px",
            background: "rgba(255, 215, 0, 0.9)",
            borderRadius: "50%",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatParticle ${8 + Math.random() * 10}s ease-in-out infinite`,
            opacity: 0.7,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "70px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h4
          style={{
            fontSize: "18px",
            letterSpacing: "5px",
            color: "#FFD700",
            marginBottom: "10px",
          }}
        >
          Our Testimonials
        </h4>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "700",
            background:
              "linear-gradient(90deg, #FFF7B0, #FFD700, #FFB300, #FFD700, #FFF7B0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(255,215,0,0.5)",
            animation: "shine 6s linear infinite",
            backgroundSize: "200% auto",
          }}
        >
          BLESSED EXPERIENCES. DIVINE TRUST.
        </h2>
      </div>

      {/* Testimonials Scroll */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          width: "max-content",
          animation: "scrollX 70s linear infinite",
          paddingLeft: "8%",
          zIndex: 2,
          position: "relative",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>

      <style>
        {`
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes floatParticle {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.8; }
            50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          }

          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }

          @media (max-width: 768px) {
            h2 {
              font-size: 26px !important;
            }
            section {
              padding: 70px 0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
