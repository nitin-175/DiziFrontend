import React from "react";

export default function ItemsCategory() {
  const categories = [
    {
      title: "Rudraksha",
      description:
        "Rudraksha beads are sacred seeds traditionally used for meditation and spiritual practices. They are believed to bring inner peace, clarity, and protection to the wearer, while also enhancing concentration and focus.",
      link: "Shop Rudraksha",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1650809652935-2e5002ba40bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Gems",
      description:
        "Gemstones are known for their unique energies and healing properties. They are often used to attract positivity, balance emotions, and enhance different aspects of life such as health, wealth, and relationships.",
      link: "Shop Gems",
      href: "#",
      image:
        "https://images.unsplash.com/photo-1705575531401-7aafdfc0a3bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Bracelets",
      description:
        "Bracelets are a stylish way to carry spiritual energy with you. Made with Rudraksha beads, gemstones, or crystals, they not only look beautiful but also bring strength, harmony, and protection in everyday life.",
      link: "Shop Bracelets",
      href: "#",
      image:
        "https://plus.unsplash.com/premium_photo-1682097691349-afa9e86a166c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 sm:h-64 md:h-72 object-cover transform hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base flex-grow">
                {item.description}
              </p>
              <a
                href={item.href}
                className="mt-4 text-green-600 font-medium hover:underline self-start"
              >
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
