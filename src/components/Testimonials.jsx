import React from "react";

const BoyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="blue" viewBox="0 0 24 24">
    <path d="M12 2a5 5 0 00-5 5v1a5 5 0 0010 0V7a5 5 0 00-5-5zm0 12c-5.33 0-8 2.67-8 6v2h16v-2c0-3.33-2.67-6-8-6z" />
  </svg>
);

const GirlIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="pink" viewBox="0 0 24 24">
    <path d="M12 2a5 5 0 00-5 5v1a5 5 0 0010 0V7a5 5 0 00-5-5zm0 12c-3.31 0-6 2.02-6 4.5V22h12v-3.5c0-2.48-2.69-4.5-6-4.5z" />
  </svg>
);

const testimonials = [
  {
    name: "Priya Sharma",
    gender: "female",
    rating: 5,
    date: "July 15, 2023",
    review: "The Rudraksha mala I purchased is authentic and radiates such calming energy. Packaging was beautiful and delivery was fast. Jai Shree Ram!",
  },
  {
    name: "Rahul Mehta",
    gender: "male",
    rating: 5,
    date: "June 28, 2023",
    review: "Very impressed with the quality of crystals. The Sphatik mala feels divine during meditation. Highly recommended for spiritual seekers.",
  },
  {
    name: "Ananya Iyer",
    gender: "female",
    rating: 4,
    date: "August 2, 2023",
    review: "I ordered a Shri Yantra for my puja altar. It was beautifully crafted and blessed. Felt the positivity in my home instantly.",
  },
  {
    name: "Arjun Singh",
    gender: "male",
    rating: 5,
    date: "July 5, 2023",
    review: "High quality incense sticks and dhoop cones. They create such a divine fragrance during daily prayers. Will definitely buy again!",
  }
];

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          style={{
            color: index < rating ? "#FFD700" : "#ccc",
            fontSize: "20px",
            marginRight: "2px"
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, gender, rating, date, review }) => (
  <div
    style={{
      background: "linear-gradient(135deg, #FFF8E1, #FFE0B2)",
      borderRadius: "24px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      padding: "24px",
      margin: "0 8px",
      width: "300px",
      minWidth: "250px",
      flexShrink: 0,
      transition: "transform 0.3s",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
      {gender === "male" ? <BoyIcon /> : <GirlIcon />}
      <div style={{ marginLeft: "12px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "600" }}>{name}</h3>
        <p style={{ fontSize: "12px", color: "#666" }}>{date}</p>
      </div>
    </div>
    <StarRating rating={rating} />
    <p style={{ fontSize: "14px", marginTop: "12px", color: "#333", lineHeight: "1.4" }}>
      {review}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <div style={{ fontFamily: "sans-serif", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", width: "100%", padding: "16px" }}>
      <div style={{ display: "flex", width: "100%", borderRadius: "24px", overflow: "hidden", boxShadow: "0 12px 24px rgba(0,0,0,0.3)", flexDirection: "row" }}>
        <div style={{ flex: 2, padding: "24px", overflowX: "hidden", overflowY: "visible", display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              gap: "16px",
              animation: "marquee 30s linear infinite",
              width: "max-content"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
        <div className="testimonial-side" style={{ flex: 1, background: "#FF8C00", color: "white", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h4 style={{ fontSize: "18px", fontWeight: "600", color: "#FFF9C4", marginBottom: "8px" }}>🙏 DEVOTEES SPEAK</h4>
            <h2 style={{ fontSize: "28px", fontWeight: "700", lineHeight: "1.2" }}>TRUSTED FOR AUTHENTIC SPIRITUAL PRODUCTS</h2>
          </div>
          <div>
            <hr style={{ borderColor: "#FFF59D", margin: "16px 0" }} />
            <p style={{ fontSize: "24px", fontWeight: "300", color: "#FFF9C4" }}>Blessed & Verified</p>
            <p style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", color: "#FFF59D", marginTop: "8px" }}>EXCELLENT</p>
            <div style={{ display: "flex", alignItems: "center", marginTop: "8px", gap: "8px" }}>
              <StarRating rating={5} />
              <span style={{ fontSize: "14px", color: "#FFF59D" }}>| from 500+ Devotees</span>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          @media (max-width: 768px) {
            .testimonial-side {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Testimonials;
