import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function SaleBanner() {
  const [saleIndex, setSaleIndex] = useState(0);
  const saleMessages = [
    "Clearance Sale is Live!",
    "Free Shipping on Orders Over $50!",
    "New Arrivals - Shop Now!"
  ];

  const nextSale = () => {
    setSaleIndex((prev) => (prev + 1) % saleMessages.length);
  };

  const prevSale = () => {
    setSaleIndex((prev) => (prev - 1 + saleMessages.length) % saleMessages.length);
  };

  return (
    <div className="bg-[#FFC107] py-2 px-4 flex items-center justify-center relative">
      <button 
        onClick={prevSale}
        className="absolute left-4 hover:opacity-75"
        aria-label="Previous sale message"
      >
        <ChevronLeft size={20} />
      </button>
      <p className="text-center font-medium">{saleMessages[saleIndex]}</p>
      <button 
        onClick={nextSale}
        className="absolute right-4 hover:opacity-75"
        aria-label="Next sale message"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}