import React, { useState } from "react";
import { FaCertificate,
  FaTruck,
  FaStar,
  FaRing,
  FaPrayingHands,
  FaCrown,
  FaGem,
  FaShieldAlt,
  FaCheckCircle,
  FaGift,} from "react-icons/fa";

const GemDescription = () => {
  const products = [
    { 
    id: 1, 
    name: 'Natural Pearl', 
    price: 1150, 
    carat: 5.25, 
    sku: "GP1001",
    images: [
      '/assets/gemstones/img2.avif',
      '/assets/gemstones/img2a.avif',
      '/assets/gemstones/img2b.avif'
    ],
    description: 'Natural Pearls are timeless treasures of the ocean, admired for purity and elegance. They symbolize innocence, beauty, and grace.',
    details: [
      { title: "Origin", value: "South Sea, Australia" },
      { title: "Weight", value: "5.25 Carats" },
      { title: "Clarity", value: "Opaque" },
      { title: "Treatment", value: "None (Natural)" }
    ]
  },
  { 
    id: 2, 
    name: 'Red Coral', 
    price: 850, 
    carat: 6.0, 
    sku: "GP1002",
    images: [
      '/assets/gemstones/img3.avif',
      '/assets/gemstones/img3a.avif',
      '/assets/gemstones/img3b.avif'
    ],
    description: 'Red Coral, with its fiery hue, embodies courage, energy, and vitality. It protects against negativity and fuels determination.',
    details: [
      { title: "Origin", value: "Mediterranean Sea" },
      { title: "Weight", value: "6.0 Carats" },
      { title: "Clarity", value: "Translucent" },
      { title: "Treatment", value: "Polished Only" }
    ]
  },
  { 
    id: 3, 
    name: 'Hessonite', 
    price: 950, 
    carat: 4.5, 
    sku: "GP1003",
    images: [
      '/assets/gemstones/img4.avif',
      '/assets/gemstones/img4a.avif',
      '/assets/gemstones/img4b.avif'
    ],
    description: 'Hessonite shines with a honey glow, dispels confusion, attracts prosperity, and brings focus in life.',
    details: [
      { title: "Origin", value: "Sri Lanka Mines" },
      { title: "Weight", value: "4.5 Carats" },
      { title: "Clarity", value: "Included" },
      { title: "Treatment", value: "Heat Treated" }
    ]
  },
  { 
    id: 4, 
    name: "Cat's Eye", 
    price: 1300, 
    carat: 3.75, 
    sku: "GP1004",
    images: [
      '/assets/gemstones/img5.avif',
      '/assets/gemstones/img5a.avif',
      '/assets/gemstones/img5b.avif'
    ],
    description: 'Cat’s Eye gemstone shows a luminous band, believed to protect against evil and enhance intuition.',
    details: [
      { title: "Origin", value: "India (Chrysoberyl)" },
      { title: "Weight", value: "3.75 Carats" },
      { title: "Clarity", value: "Semi-Transparent" },
      { title: "Treatment", value: "Unheated" }
    ]
  },
  { 
    id: 5, 
    name: 'Amethyst', 
    price: 450, 
    carat: 7.0, 
    sku: "GP1005",
    images: [
      '/assets/gemstones/img6.avif',
      '/assets/gemstones/img6a.avif',
      '/assets/gemstones/img6b.avif'
    ],
    description: 'Amethyst is a stone of clarity and peace. It calms the mind, reduces stress, and promotes wisdom.',
    details: [
      { title: "Origin", value: "Brazil" },
      { title: "Weight", value: "7.0 Carats" },
      { title: "Clarity", value: "Eye Clean" },
      { title: "Treatment", value: "Heat Treated" }
    ]
  },
  { 
    id: 6, 
    name: 'Turquoise', 
    price: 600, 
    carat: 8.25, 
    sku: "GP1006",
    images: [
      '/assets/gemstones/img7.avif',
      '/assets/gemstones/img7a.avif',
      '/assets/gemstones/img7b.avif'
    ],
    description: 'Turquoise is a gemstone of protection and healing, fostering communication and success.',
    details: [
      { title: "Origin", value: "Iran (Nishapur)" },
      { title: "Weight", value: "8.25 Carats" },
      { title: "Clarity", value: "Opaque" },
      { title: "Treatment", value: "Stabilized" }
    ]
  },
  { 
    id: 7, 
    name: 'Opal', 
    price: 2100, 
    carat: 4.0, 
    sku: "GP1007",
    images: [
      '/assets/gemstones/img8.avif',
      '/assets/gemstones/img8a.avif',
      '/assets/gemstones/img8b.avif'
    ],
    description: 'Opal, the “Queen of Gemstones,” inspires creativity, boosts confidence, and brings balance.',
    details: [
      { title: "Origin", value: "Ethiopia" },
      { title: "Weight", value: "4.0 Carats" },
      { title: "Clarity", value: "Translucent with Fire" },
      { title: "Treatment", value: "None" }
    ]
  },
  { 
    id: 8, 
    name: 'Garnet', 
    price: 720, 
    carat: 5.5, 
    sku: "GP1008",
    images: [
      '/assets/gemstones/img9.avif',
      '/assets/gemstones/img9a.avif',
      '/assets/gemstones/img9b.avif'
    ],
    description: 'Garnet symbolizes love and vitality, energizing the body and strengthening relationships.',
    details: [
      { title: "Origin", value: "Mozambique" },
      { title: "Weight", value: "5.5 Carats" },
      { title: "Clarity", value: "Transparent" },
      { title: "Treatment", value: "Unheated" }
    ]
  },
  { 
    id: 9, 
    name: 'Blue Topaz', 
    price: 300, 
    carat: 9.0, 
    sku: "GP1009",
    images: [
      '/assets/gemstones/img10.avif',
      '/assets/gemstones/img10a.avif',
      '/assets/gemstones/img10b.avif'
    ],
    description: 'Blue Topaz represents calmness and creativity, helping reduce stress and align thoughts.',
    details: [
      { title: "Origin", value: "Russia" },
      { title: "Weight", value: "9.0 Carats" },
      { title: "Clarity", value: "Transparent" },
      { title: "Treatment", value: "Irradiated & Heated" }
    ]
  },
  { 
    id: 10, 
    name: 'Peridot', 
    price: 550, 
    carat: 6.5, 
    sku: "GP1010",
    images: [
      '/assets/gemstones/img11.avif',
      '/assets/gemstones/img11a.avif',
      '/assets/gemstones/img11b.avif'
    ],
    description: 'Peridot radiates a fresh green glow, bringing abundance, happiness, and protection.',
    details: [
      { title: "Origin", value: "Arizona, USA" },
      { title: "Weight", value: "6.5 Carats" },
      { title: "Clarity", value: "Eye Clean" },
      { title: "Treatment", value: "None" }
    ]
  },
  { 
    id: 11, 
    name: 'Citrine', 
    price: 400, 
    carat: 8.0, 
    sku: "GP1011",
    images: [
      '/assets/gemstones/img12.avif',
      '/assets/gemstones/img12a.avif',
      '/assets/gemstones/img12b.avif'
    ],
    description: 'Citrine, the “merchant’s stone,” attracts wealth, positivity, and confidence.',
    details: [
      { title: "Origin", value: "Madagascar" },
      { title: "Weight", value: "8.0 Carats" },
      { title: "Clarity", value: "Transparent" },
      { title: "Treatment", value: "Heat Treated" }
    ]
  },
  { 
    id: 12, 
    name: 'Aquamarine', 
    price: 1800, 
    carat: 5.0, 
    sku: "GP1012",
    images: [
      '/assets/gemstones/img13.avif',
      '/assets/gemstones/img13a.avif',
      '/assets/gemstones/img13b.avif'
    ],
    description: 'Aquamarine, with sea-blue radiance, calms tempers and enhances communication.',
    details: [
      { title: "Origin", value: "Pakistan" },
      { title: "Weight", value: "5.0 Carats" },
      { title: "Clarity", value: "Transparent" },
      { title: "Treatment", value: "Heat Treated" }
    ]
  },
  { 
    id: 13, 
    name: 'Moonstone', 
    price: 650, 
    carat: 7.5, 
    sku: "GP1013",
    images: [
      '/assets/gemstones/img14.avif',
      '/assets/gemstones/img14a.avif',
      '/assets/gemstones/img14b.avif'
    ],
    description: 'Moonstone glows with silvery sheen, enhancing intuition and emotional balance.',
    details: [
      { title: "Origin", value: "Sri Lanka" },
      { title: "Weight", value: "7.5 Carats" },
      { title: "Clarity", value: "Semi-Transparent" },
      { title: "Treatment", value: "None" }
    ]
  },
  { 
    id: 14, 
    name: 'Lapis Lazuli', 
    price: 480, 
    carat: 10.0, 
    sku: "GP1014",
    images: [
      '/assets/gemstones/img15.avif',
      '/assets/gemstones/img15a.avif',
      '/assets/gemstones/img15b.avif'
    ],
    description: 'Lapis Lazuli, with its celestial blue, has been prized as a stone of wisdom and truth.',
    details: [
      { title: "Origin", value: "Afghanistan" },
      { title: "Weight", value: "10.0 Carats" },
      { title: "Clarity", value: "Opaque with Pyrite" },
      { title: "Treatment", value: "Polished Only" }
    ]
  },
  { 
    id: 15, 
    name: 'Sunstone', 
    price: 520, 
    carat: 6.75, 
    sku: "GP1015",
    images: [
      '/assets/gemstones/img16.avif',
      '/assets/gemstones/img16a.avif',
      '/assets/gemstones/img16b.avif'
    ],
    description: 'Sunstone sparkles with golden inclusions, inspiring joy, positivity, and independence.',
    details: [
      { title: "Origin", value: "Oregon, USA" },
      { title: "Weight", value: "6.75 Carats" },
      { title: "Clarity", value: "Translucent" },
      { title: "Treatment", value: "None" }
    ]
  },
  { 
    id: 16, 
    name: 'Jade', 
    price: 900, 
    carat: 5.0, 
    sku: "GP1016",
    images: [
      '/assets/gemstones/img17.avif',
      '/assets/gemstones/img17a.avif',
      '/assets/gemstones/img17b.avif'
    ],
    description: 'Jade is a stone of luck and longevity, balancing emotions and attracting prosperity.',
    details: [
      { title: "Origin", value: "Myanmar" },
      { title: "Weight", value: "5.0 Carats" },
      { title: "Clarity", value: "Opaque" },
      { title: "Treatment", value: "Dyed" }
    ]
  },
  { 
    id: 17, 
    name: 'Iolite', 
    price: 350, 
    carat: 4.25, 
    sku: "GP1017",
    images: [
      '/assets/gemstones/img18.avif',
      '/assets/gemstones/img18a.avif',
      '/assets/gemstones/img18b.avif'
    ],
    description: 'Iolite, the “Viking’s Compass,” enhances vision, determination, and clarity of purpose.',
    details: [
      { title: "Origin", value: "India" },
      { title: "Weight", value: "4.25 Carats" },
      { title: "Clarity", value: "Transparent" },
      { title: "Treatment", value: "Unheated" }
    ]
  },
  { 
    id: 18, 
    name: 'Spinel', 
    price: 1500, 
    carat: 3.5, 
    sku: "GP1018",
    images: [
      '/assets/gemstones/img19.avif',
      '/assets/gemstones/img19a.avif',
      '/assets/gemstones/img19b.avif'
    ],
    description: 'Spinel is a stone of rejuvenation, bringing vitality, resilience, and strength.',
    details: [
      { title: "Origin", value: "Myanmar" },
      { title: "Weight", value: "3.5 Carats" },
      { title: "Clarity", value: "Transparent" },
      { title: "Treatment", value: "Unheated" }
    ]
  },
  { 
    id: 19, 
    name: 'Zircon', 
    price: 700, 
    carat: 6.0, 
    sku: "GP1019",
    images: [
      '/assets/gemstones/img5.avif',
      '/assets/gemstones/img5a.avif',
      '/assets/gemstones/img5b.avif'
    ],
    description: 'Zircon shines with fiery brilliance, attracting prosperity and boosting self-confidence.',
    details: [
      { title: "Origin", value: "Cambodia" },
      { title: "Weight", value: "6.0 Carats" },
      { title: "Clarity", value: "Transparent" },
      { title: "Treatment", value: "Heat Treated" }
    ]
  },
  { 
    id: 20, 
    name: 'Tanzanite', 
    price: 2500, 
    carat: 3.0, 
    sku: "GP1020",
    images: [
      '/assets/gemstones/img11.avif',
      '/assets/gemstones/img11a.avif',
      '/assets/gemstones/img11b.avif'
    ],
    description: 'Tanzanite displays violet-blue hues, enhancing intuition and symbolizing rare elegance.',
    details: [
      { title: "Origin", value: "Tanzania" },
      { title: "Weight", value: "3.0 Carats" },
      { title: "Clarity", value: "Eye Clean" },
      { title: "Treatment", value: "Heat Treated" }
    ]
  }
  ];

  const product = products[0];

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [certification, setCertification] = useState("Free Lab Certificate");
  const [energization, setEnergization] = useState("No Energization");
  const [selection, setSelection] = useState("Loose Gemstone");

  return (
    <main className="bg-gradient-to-br from-purple-50 via-white to-amber-50 min-h-screen text-neutral-800 font-serif">
      <section className="container mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left: Image Gallery */}
        <div>
          <div className="rounded-2xl overflow-hidden border-2 border-amber-200 p-4 flex justify-center items-center bg-gradient-to-br from-white to-amber-50 shadow-xl">
            <img
              src={selectedImage}
              alt={product.name}
              className="max-h-[320px] w-auto object-contain"
            />
          </div>

          {/* Thumbnails */}
          <div className="mt-4 grid grid-cols-5 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`rounded-xl p-2 flex justify-center items-center transition-all duration-300 ${
                  selectedImage === img
                    ? "ring-2 ring-amber-500 shadow-md"
                    : "hover:ring-1 hover:ring-gray-400"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="max-h-14 w-auto object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide">
            {product.name} - {product.carat} Carats
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-3xl font-semibold text-amber-700">
              ₹{product.price.toLocaleString()}
            </p>
            <span className="text-sm text-red-500">Only 1 Left!</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            SKU: <span className="font-medium">{product.sku}</span>
          </p>

          {/* Certification */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <FaCertificate className="text-amber-600" />
              Certification *
            </label>
            <select
              value={certification}
              onChange={(e) => setCertification(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500"
            >
              <option>Free Lab Certificate</option>
              <option>Premium Certificate (+₹2000)</option>
            </select>
          </div>

          {/* Pooja / Energization */}
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
              <FaPrayingHands className="text-emerald-600" />
              Pooja / Energization *
            </label>
            <select
              value={energization}
              onChange={(e) => setEnergization(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-emerald-500"
            >
              <option>No Energization</option>
              <option>Basic Energization</option>
              <option>Advanced Energization</option>
            </select>
          </div>

          {/* Select for Ring / Pendant / Bracelet */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <FaRing className="text-pink-600" />
              Select for Ring / Pendant / Bracelet *
            </label>
            <div className="grid grid-cols-5 gap-3">
              {["Loose Gemstone", "Ring", "Pendant", "Bracelet", "Brooch"].map(
                (opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelection(opt)}
                    className={`rounded-xl px-3 py-2 text-sm transition-all duration-300 ${
                      selection === opt
                        ? "ring-2 ring-amber-500 bg-amber-50 shadow-md"
                        : "border hover:ring-1 hover:ring-gray-400"
                    }`}
                  >
                    {opt}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="mt-8 w-full py-4 rounded-xl font-semibold text-white text-lg bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:to-amber-500 shadow-lg transition-all flex items-center justify-center gap-3">
            <FaStar className="text-white" />
            ADD TO CART
          </button>

          {/* Dispatch Date */}
          <p className="mt-6 text-sm text-gray-700 flex items-center gap-2">
            <FaTruck className="text-blue-600" />
            Expected Dispatch Date:
            <span className="font-medium ml-1 text-gray-900">
              17 SEP, 2025
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default GemDescription;