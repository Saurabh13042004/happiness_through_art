import React, { useState } from 'react';
import { Search, User, Truck, ShoppingBag } from 'lucide-react';
import { Navigation } from './Navigation';
import { Link } from 'react-router-dom';
import Cart from './Cart';

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
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
            <Link to="/">
              <h1 className="text-2xl md:text-3xl font-bold">Happiness through art</h1>
            </Link>
          </div>

          {/* Icons */}
          <div className="order-3 flex items-center justify-end gap-6 md:w-64">
            <div className="relative group">
              <Link to="/login" aria-label="Account" className="hover:opacity-75">
                <User size={24} />
              </Link>
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-sm py-2 z-50 hidden group-hover:block">
                <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</Link>
                <Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Register</Link>
              </div>
            </div>
            <button aria-label="Shipping" className="hover:opacity-75">
              <Truck size={24} />
            </button>
            <button 
              aria-label="Cart" 
              className="hover:opacity-75"
              onClick={toggleCart}
            >
              <ShoppingBag size={24} />
            </button>
          </div>
        </div>

        <Navigation />
      </header>
      
      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}