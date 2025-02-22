import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductsCart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Simulate an API call using useEffect
  useEffect(() => {
    setLoading(true);

    // In a real-world application, replace this with your API call (e.g., using axios or fetch)
    setTimeout(() => {
      try {
        // Sample product data
        setProducts([
          {
            id: 1,
            name: 'Product 1',
            image: 'https://via.placeholder.com/400x300',
            description: 'This is the description for product 1.',
            price: 29.99,
          },
          {
            id: 2,
            name: 'Product 2',
            image: 'https://via.placeholder.com/400x300',
            description: 'This is the description for product 2.',
            price: 39.99,
          },
          {
            id: 3,
            name: 'Product 3',
            image: 'https://via.placeholder.com/400x300',
            description: 'This is the description for product 3.',
            price: 49.99,
          },
          // Add more products as needed
        ]);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    }, 2000); // Simulate network delay
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Something went wrong.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCart;
