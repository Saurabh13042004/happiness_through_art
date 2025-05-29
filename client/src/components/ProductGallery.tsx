import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  originalPrice: number;
  image: string;
  colors: string[];
  onSale?: boolean;
  featured?: boolean;
}

const products: Product[] = [
  {
    id: '1',
    name: 'You & Me | Timeless',
    type: 'Medium Photobook',
    price: 1499,
    originalPrice: 1699,
    image: 'https://images.unsplash.com/photo-1506102383123-c8ef1e872756?auto=format&fit=crop&q=80',
    colors: ['#F5F5F5'],
    onSale: true,
    featured: true
  },
  {
    id: '2',
    name: 'Little Joys',
    type: 'Mini PhotoBook',
    price: 1199,
    originalPrice: 1399,
    image: 'https://images.unsplash.com/photo-1596463059283-da257325bab8?auto=format&fit=crop&q=80',
    colors: ['#E5E7EB', '#1F2937', '#047857', '#FFC0CB', '#F5F5DC'],
    onSale: true
  },
  {
    id: '3',
    name: 'Timeless',
    type: 'Medium Photobook',
    price: 1499,
    originalPrice: 1699,
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80',
    colors: ['#FFFFFF', '#1F2937', '#047857', '#E5E7EB', '#FFC0CB', '#F5F5DC'],
    onSale: true
  },
  {
    id: '4',
    name: 'Timeless',
    type: 'Large Photobook',
    price: 1699,
    originalPrice: 1899,
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80',
    colors: ['#FFFFFF', '#F5F5DC', '#1F2937'],
    onSale: true
  },
  {
    id: '5',
    name: 'Little Joys',
    type: 'Mini PhotoBook',
    price: 1199,
    originalPrice: 1399,
    image: 'https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?auto=format&fit=crop&q=80',
    colors: ['#FFFFFF', '#1F2937', '#047857', '#E5E7EB', '#F5F5DC'],
    onSale: true
  }
];

// Product card component to keep layout consistent
const ProductCard = ({ product }: { product: Product }) => (
  <div className="flex flex-col h-full">
    <div className={`relative ${product.featured ? 'aspect-[3/4]' : 'aspect-square'} mb-4 bg-gray-100`}>
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
      <div className="flex gap-2 mb-2">
        {product.colors.map((color, index) => (
          <button
            key={index}
            className="w-6 h-6 rounded-full border border-gray-300"
            style={{ backgroundColor: color }}
            aria-label={`Color variant ${index + 1}`}
          />
        ))}
      </div>
      {product.onSale && (
        <div className="mt-auto">
          <span className="text-gray-700">SALE</span>
        </div>
      )}
    </div>
  </div>
);

export function ProductGallery() {
  const featuredProduct = products.find(p => p.featured);
  const regularProducts = products.filter(p => !p.featured).slice(0, 4);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif">
          Keep-forever <em>photobooks</em>
        </h2>
        <a 
          href="#" 
          className="hidden md:inline-flex items-center text-gray-900 hover:text-gray-600"
        >
          Make it your own
          <ChevronRight size={20} />
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Featured product on left (full width on mobile, half width on desktop) */}
        {featuredProduct && (
          <div className="md:w-1/2">
            <ProductCard product={featuredProduct} />
          </div>
        )}

        {/* 2x2 grid on right */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-4 h-full">
            {regularProducts.map((product) => (
              <div key={product.id} className="flex flex-col">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <a 
        href="#" 
        className="md:hidden mt-8 inline-flex items-center text-gray-900 hover:text-gray-600"
      >
        Make it your own
        <ChevronRight size={20} />
      </a>
    </section>
  );
}