import React from 'react';

const ProductCard = ({ product }) => {
  // Destructure product properties (adjust these based on your actual data)
  const { name, image, description, price } = product;

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover rounded-md" 
      />
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-lg font-bold mt-2">${price}</p>
    </div>
  );
};

export default ProductCard;
