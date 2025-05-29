import React from 'react';
import { Link } from 'react-router-dom';

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

// Updated product data to match the image
const products: Product[] = [
  {
    id: '1',
    name: 'Best Dad | Timeless',
    type: 'Medium Photobook',
    price: 1499,
    originalPrice: 1699,
    image: 'https://www.oddgiraffe.com/cdn/shop/files/MPB-bestdad.webp?v=1716121797&width=500',
    colors: ['#F5F5F5'],
    onSale: true
  },
  {
    id: '2',
    name: 'Little Joys',
    type: 'Mini PhotoBook',
    price: 1199,
    originalPrice: 1399,
    image: 'https://www.oddgiraffe.com/cdn/shop/files/SPB1.webp?v=1722609710&width=300',
    colors: ['#E5E7EB', '#1F2937', '#047857', '#FFC0CB', '#F5F5DC'],
    onSale: true
  },
  {
    id: '3',
    name: 'You & Me | Timeless',
    type: 'Medium Photobook',
    price: 1499,
    originalPrice: 1699,
    image: 'https://www.oddgiraffe.com/cdn/shop/files/27_aacda389-f29c-46fd-871c-4cf8523d8b23.webp?v=1700732615&width=500',
    colors: ['#FFFFFF', '#1F2937', '#047857', '#E5E7EB', '#FFC0CB', '#F5F5DC'],
    onSale: true
  },
  {
    id: '4',
    name: 'Love you Dad | Little Joys',
    type: 'Medium Photobook',
    price: 1499,
    originalPrice: 1699,
    image: 'https://www.oddgiraffe.com/cdn/shop/files/SPB-loveyoudad.webp?v=1716121830&width=500',
    colors: ['#FFFFFF', '#1F2937', '#047857', '#E5E7EB', '#FFC0CB', '#F5F5DC'],
    onSale: true
  }
];

// Updated Product card component to match the image
const ProductCard = ({ product }: { product: Product }) => (
  <Link to={`/product/${product.id}`} className="block h-full">
    <div className="flex flex-col h-full">
      <div className="relative aspect-square mb-6 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow text-center">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-gray-600 mb-3">{product.type}</p>
        <div className="flex items-center gap-3 mb-3 align-center justify-center">
          <span className="font-medium">Rs. {product.price}</span>
          <span className="bg-yellow-300 px-2 py-1 text-sm line-through">Rs. {product.originalPrice}</span>
        </div>
        {product.colors.length > 0 && (
          <div className="flex gap-2 mb-3 align-center justify-center">
            {product.colors.map((color, index) => (
              <button
                key={index}
                className="w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                aria-label={`Color variant ${index + 1}`}
              />
            ))}
          </div>
        )}
        {product.onSale && (
          <div className="mt-auto">
            <span className="text-red-600 font-medium">SALE</span>
          </div>
        )}
      </div>
    </div>
  </Link>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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