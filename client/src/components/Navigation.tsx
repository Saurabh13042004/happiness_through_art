import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "New In", path: "/" },
    { name: "Stationery", path: "/" },
    { name: "Art & Decor", path: "/" },
    { name: "Lifestyle", path: "/" },
    { name: "Gifts", path: "/" },
    { name: "Combo", path: "/" },
    { name: "Clearance Sale", path: "/" }
  ];

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
      <nav className="hidden md:block overflow-x-auto">
        <div className="flex items-center justify-center space-x-8 min-w-max px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-800 hover:text-gray-600 font-medium whitespace-nowrap py-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
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