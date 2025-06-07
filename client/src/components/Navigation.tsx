import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'New In', path: '/new' },
  { name: 'Stationery', path: '/stationery' },
  { name: 'Art & Decor', path: '/art-decor' },
  { name: 'Lifestyle', path: '/lifestyle' },
  { name: 'Gifts', path: '/gifts' },
  { name: 'Combo', path: '/combo' },
  { name: 'Clearance Sale', path: '/sale' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-20 left-4 z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      <nav className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
        md:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="pt-24 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-gray-800 hover:text-gray-600 font-medium py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="block text-gray-800 hover:text-gray-600 font-medium py-3 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="border-t border-b border-gray-200 py-3 hidden md:block">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="relative text-gray-800 font-medium hover:text-black transition-colors group"
              >
                {item.name}
                {/* Animated underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}