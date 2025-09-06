
import React from 'react';
import { useParams } from 'react-router-dom';

// Gemstone data from GemstoneCategory.jsx
const gemstones = [
	{ id: 1, name: 'Natural Pearl', price: 1150, carat: '5.25', image: '/assets/gemstones/img2.avif', description: 'A symbol of purity and wisdom, perfect for astrological benefits and jewelry.', highlights: ['Certified Natural Pearl', 'Ideal for Moon sign', 'Premium luster', 'Astrological benefits'], stock: 12 },
	{ id: 2, name: 'Red Coral', price: 850, carat: '6.0', image: '/assets/gemstones/img3.avif', description: 'Red Coral is known for its vibrant color and astrological significance for Mars.', highlights: ['Premium Italian Coral', 'Astrological use', 'Rich color', 'Certified origin'], stock: 7 },
	{ id: 3, name: 'Hessonite', price: 950, carat: '4.5', image: '/assets/gemstones/img4.avif', description: 'Hessonite garnet, also called Gomed, is worn for Rahu and brings clarity.', highlights: ['Natural Hessonite', 'Astrological remedy for Rahu', 'Rich honey color', 'Lab certified'], stock: 5 },
	{ id: 4, name: 'Cat\'s Eye', price: 1300, carat: '3.75', image: '/assets/gemstones/img5.avif', description: 'Cat’s Eye is worn for Ketu and is believed to bring protection and insight.', highlights: ['Natural Cat’s Eye', 'Astrological use for Ketu', 'Distinct chatoyancy', 'Certified stone'], stock: 3 },
	{ id: 5, name: 'Amethyst', price: 450, carat: '7.0', image: '/assets/gemstones/img6.avif', description: 'Amethyst is a calming stone, ideal for meditation and spiritual growth.', highlights: ['Natural Amethyst', 'Deep purple color', 'Calming energy', 'Astrological benefits'], stock: 10 },
	// ...add more as needed
];


export default function GemDescription() {
	const { id } = useParams();
	const gem = gemstones.find(g => g.id === Number(id));

	if (!gem) {
		return <div className="p-8 text-center text-red-600 text-xl">Gemstone not found.</div>;
	}

	return (
		<div className="container mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
			{/* Image Section */}
			<div className="flex-1 flex flex-col items-center md:items-start">
				<img src={gem.image} alt={gem.name} className="w-64 h-64 object-contain rounded-lg shadow-lg mb-4" />
				<div className="flex gap-2 mt-2">
					<span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">In Stock</span>
					<span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">Fast Delivery</span>
				</div>
			</div>

			{/* Details & Buy Box */}
			<div className="flex-1 flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-gray-900">{gem.name}</h1>
				<div className="flex items-center gap-2 text-yellow-500 text-lg">
					<span>★ 4.7</span>
					<span className="text-gray-500 text-base">(210 ratings)</span>
				</div>
				<div className="text-lg text-gray-700">{gem.carat} Ratti</div>
				<div className="text-2xl font-bold text-green-700">₹{gem.price.toLocaleString()}</div>
				<div className="text-sm text-gray-500">Inclusive of all taxes</div>
				<div className="mt-2">
					<span className="font-semibold">Description: </span>
					<span>{gem.description}</span>
				</div>
				<ul className="list-disc pl-5 mt-2 text-gray-700">
					{gem.highlights.map((h, i) => <li key={i}>{h}</li>)}
				</ul>

				{/* Buy Box */}
				<div className="border rounded-lg p-4 mt-4 bg-gray-50 shadow-sm w-full max-w-xs">
					<div className="text-xl font-bold text-green-700 mb-2">₹{gem.price.toLocaleString()}</div>
					<div className="text-sm text-gray-600 mb-2">FREE delivery: <span className="font-semibold text-black">Tomorrow</span></div>
					<div className="text-sm text-gray-600 mb-4">Sold by <span className="font-semibold text-black">Dizi Gems</span></div>
					<button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded mb-2 transition">Add to Cart</button>
					<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded transition">Buy Now</button>
					<div className="text-xs text-gray-500 mt-2">Secure transaction • 7-day return policy</div>
				</div>
			</div>
		</div>
	);
}
