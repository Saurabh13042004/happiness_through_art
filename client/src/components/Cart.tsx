import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Cart sidebar */}
      <div 
        className={`fixed top-0 right-0 w-full sm:w-96 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cart header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-medium">Your Bag (Your cart)</h2>
          <button 
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-sm"
          >
            Close
          </button>
        </div>
        
        {/* Cart tabs */}
        <div className="flex border-b border-gray-200">
          <button className="py-3 px-6 font-medium border-b-2 border-black">
            Photobooks
          </button>
          <button className="py-3 px-6 text-gray-500 hover:text-black">
            Orders
          </button>
        </div>
        
        {/* Cart content - Empty state */}
        <div className="flex flex-col items-center justify-center h-[calc(100vh-180px)]">
          <p className="text-gray-500 mb-8">Your cart is empty</p>
          <Link 
            to="/"
            onClick={onClose}
            className="bg-black text-white px-6 py-4 hover:bg-gray-800 transition-colors"
          >
            Start shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;