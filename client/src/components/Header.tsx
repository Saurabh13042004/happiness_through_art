import React from 'react';
import { Search, User, Truck, ShoppingBag } from 'lucide-react';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 mb-6 md:mb-8">
        {/* Search */}
        <div className="order-2 md:order-1 md:w-64 w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-3 border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors bg-transparent"
            />
            <Search 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400" 
              size={20} 
            />
          </div>
        </div>

        {/* Logo */}
        <div className="order-1 md:order-2 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Happiness through art</h1>
        </div>

        {/* Icons */}
        <div className="order-3 flex items-center justify-end gap-6 md:w-64">
          <button aria-label="Account" className="hover:opacity-75">
            <User size={24} />
          </button>
          <button aria-label="Shipping" className="hover:opacity-75">
            <Truck size={24} />
          </button>
          <button aria-label="Cart" className="hover:opacity-75">
            <ShoppingBag size={24} />
          </button>
        </div>
      </div>

      <Navigation />
    </header>
  );
}