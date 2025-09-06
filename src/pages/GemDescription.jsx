
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const astrologicalStones = [
	{ id: 1, name: 'Natural Pearl', price: '1,150', carat: '5.25', image: '/assets/gemstones/img2.avif', description: 'A beautiful natural pearl for prosperity.', images: ['/assets/gemstones/img2.avif'], poojaOptions: ['Basic', 'Premium'] },
	{ id: 2, name: 'Red Coral', price: '850', carat: '6.0', image: '/assets/gemstones/img3.avif', description: 'Red Coral for strength and courage.', images: ['/assets/gemstones/img3.avif'], poojaOptions: ['Basic', 'Premium'] },
	// ...add more stones as needed
];

const GemDescription = () => {
	const { id } = useParams();
	const product = astrologicalStones.find(gem => gem.id === Number(id));
	const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || product?.image || '');
	const [quantity, setQuantity] = useState(1);

	if (!product) {
		return <div className="container mx-auto p-8 text-center text-xl text-red-600">Product not found.</div>;
	}

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const handleQuantityChange = (type) => {
		if (type === 'increment') {
			setQuantity(quantity + 1);
		} else if (type === 'decrement' && quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	return (
		<div className="container mx-auto p-4 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
			{/* Product Image Gallery */}
			<div className="w-full lg:w-1/2 flex flex-col-reverse lg:flex-row-reverse lg:space-x-reverse space-x-0 lg:space-x-4">
				<div className="flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-y-auto w-full lg:w-auto mt-4 lg:mt-0">
					{product.images.map((image, index) => (
						<div
							key={index}
							className={`w-20 h-20 flex-shrink-0 cursor-pointer border-2 ${selectedImage === image ? 'border-blue-500' : 'border-gray-300'}`}
							onClick={() => handleImageClick(image)}
						>
							<img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
						</div>
					))}
				</div>
				<div className="flex-grow relative">
					<img src={selectedImage} alt={product.name} className="w-full h-auto object-contain rounded-lg shadow-lg" />
				</div>
			</div>

			{/* Product Details */}
			<div className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-lg">
				<div className="flex justify-between items-start mb-4">
					<h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
				</div>

				<div className="mb-6">
					<span className="text-4xl font-extrabold text-green-600">₹{product.price}</span>
				</div>

				<div className="mb-6">
					<label htmlFor="pooja" className="block text-gray-700 text-sm font-bold mb-2">
						POOJA/ENERGIZATION <span className="text-red-500">*</span>
					</label>
					<select
						id="pooja"
						className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					>
						<option value="">--choose--</option>
						{product.poojaOptions.map((option, index) => (
							<option key={index} value={option}>{option}</option>
						))}
					</select>
				</div>

				<div className="flex items-center space-x-4 mb-8">
					<div className="flex items-center border border-gray-300 rounded-md">
						<button
							onClick={() => handleQuantityChange('decrement')}
							className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md"
						>
							-
						</button>
						<span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
						<button
							onClick={() => handleQuantityChange('increment')}
							className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md"
						>
							+
						</button>
					</div>
					<button className="flex-grow bg-white border border-green-600 text-green-600 py-3 px-6 rounded-md hover:bg-green-50 focus:outline-none focus:shadow-outline flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						Add to Cart
					</button>
				</div>

				<button className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline text-lg font-semibold">
					Buy Now
				</button>

				<div className="mt-8 text-gray-700 leading-relaxed">
					<p>{product.description}</p>
				</div>
			</div>
		</div>
	);
};

export default GemDescription;
