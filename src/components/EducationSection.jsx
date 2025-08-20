import React from "react";

function SectionHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800">Spiritual Education</h2>
      <a href="#" className="text-yellow-600 font-medium hover:underline">
        Show All
      </a>
    </div>
  );
}

function ArticleCard({ date, title, description, image, link }) {
  return (
    <div className="bg-white border-2 border-yellow-500 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition flex flex-col">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-gray-400 text-sm">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 mt-2">{title}</h3>
        <p className="text-gray-600 text-sm mt-3 flex-1">{description}</p>
        <a href={link} className="text-yellow-600 font-semibold hover:underline mt-4">
          Read More →
        </a>
      </div>
    </div>
  );
}

export default function EducationSection() {
  const articles = [
    {
      date: "August 15, 2025",
      title: "12 Things To Know Before Buying Rudraksha Online",
      description:
        "Not all Rudraksha beads are the same. Learn how to identify authentic beads, choose the right mukhi, and buy from trusted sources.",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1705575480602-8bbd28173fdc?q=80&w=1170&auto=format&fit=crop",
    },
    {
      date: "August 12, 2025",
      title: "How To Store Gemstones and Keep Their Energy Pure",
      description:
        "Gemstones absorb energies from the environment. Discover how to cleanse, recharge, and store them to maintain their healing power.",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1086&auto=format&fit=crop",
    },
    {
      date: "August 10, 2025",
      title: "A Complete Guide to Choosing Spiritual Bracelets",
      description:
        "From Rudraksha malas to crystal healing bracelets, explore how to select the right bracelet based on your intention and lifestyle.",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1675703818188-cee153b831f3?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((item, index) => (
            <ArticleCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
