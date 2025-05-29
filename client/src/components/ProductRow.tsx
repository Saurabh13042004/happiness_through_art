import React from 'react';

interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  originalPrice: number;
  image: string;
  colors: string[];
  onSale?: boolean;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Product Name',
    type: 'TYPE',
    price: 256,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1506102383123-c8ef1e872756?auto=format&fit=crop&q=80',
    colors: ['#F5F5F5'],
    onSale: true
  },
  {
    id: '2',
    name: 'Product Name',
    type: 'TYPE',
    price: 235,
    originalPrice: 284,
    image: 'https://images.unsplash.com/photo-1596463059283-da257325bab8?auto=format&fit=crop&q=80',
    colors: ['#E5E7EB', '#1F2937', '#047857', '#F5F5DC'],
    onSale: true
  },
  {
    id: '3',
    name: 'Product Name',
    type: 'TYPE',
    price: 464,
    originalPrice: 512,
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80',
    colors: ['#FFFFFF', '#1F2937', '#047857'],
    onSale: true
  },
  {
    id: '4',
    name: 'Product Name',
    type: 'TYPE',
    price: 357,
    originalPrice: 437,
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80',
    colors: ['#FFFFFF', '#F5F5DC', '#1F2937'],
    onSale: true
  },
  {
    id: '5',
    name: 'Product Name',
    type: 'TYPE',
    price: 321,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?auto=format&fit=crop&q=80',
    colors: ['#FFFFFF', '#1F2937', '#047857', '#E5E7EB'],
    onSale: true
  }
];

// Product card component for the horizontal layout
const ProductCard = ({ product }: { product: Product }) => (
  <div className="flex flex-col h-full">
    <div className="relative aspect-square mb-4 bg-gray-100">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col flex-grow">
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.type}</p>
      <div className="flex items-center gap-2 mb-3">
        <span className="font-medium">Rs. {product.price}</span>
        <span className="text-gray-500 line-through">Rs. {product.originalPrice}</span>
      </div>
      <div className="flex gap-2 mb-4">
        {product.colors.map((color, index) => (
          <button
            key={index}
            className="w-6 h-6 rounded-full border border-gray-300"
            style={{ backgroundColor: color }}
            aria-label={`Color variant ${index + 1}`}
          />
        ))}
      </div>
      <button className="bg-white border border-black px-4 py-2 hover:bg-gray-100 transition-colors text-sm font-medium">
        Add to Cart
      </button>
    </div>
  </div>
);

export function ProductRow() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold uppercase">
          Art that speaks to you
        </h2>
        <button className="hidden md:inline-flex items-center border border-black px-4 py-2 bg-white hover:bg-gray-100 transition-colors uppercase text-sm font-bold">
          Make them yours
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      <div className="md:hidden mt-8 flex justify-center">
        <button className="inline-flex items-center border border-black px-4 py-2 bg-white hover:bg-gray-100 transition-colors uppercase text-sm font-bold">
          Make them yours
        </button>
      </div>
    </section>
  );
}

export default ProductRow;