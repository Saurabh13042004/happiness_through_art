import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <svg 
          className="w-16 h-16 mx-auto mb-6 text-green-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        
        <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
        <p className="text-gray-600 mb-8">
          Your order has been received and is now being processed. 
          You will receive an email confirmation shortly.
        </p>
        
        <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-sm">
          <p className="font-medium">Order number: #{Math.floor(100000 + Math.random() * 900000)}</p>
        </div>
        
        <Link 
          to="/" 
          className="inline-block bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;