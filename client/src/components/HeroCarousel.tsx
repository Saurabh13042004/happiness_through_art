import React from 'react';
import { ChevronRight } from 'lucide-react';

export function HeroCarousel() {
  return (
    <div className="relative overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left Content */}
        <div className="bg-[#FFC107] px-6 md:px-12 lg:px-24 py-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Our best-selling<br />Photobooks
          </h2>
          <p className="text-lg mb-8 max-w-lg">
            Turn your cherished moments into keepsakes for the ones 
            who matter most. From photo books that celebrate the little 
            things to cards that mark the big milestones – these 
            heartfelt gifts are meant to be treasured forever. There's a 
            rare 20% off our photobooks
          </p>
          <button className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors w-fit">
            Shop Photobooks
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-[300px] md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1594897030264-ab7d87efc473?auto=format&fit=crop&q=80"
            alt="Wedding photobook on wooden table with flowers"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}