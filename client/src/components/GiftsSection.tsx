import React from 'react';
import ExploreGiftCard from './ExploreGiftCard';

const exploreCategories = [
  { 
    title: "Corporate Gifts",
    imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80",
    link: "/gifts/corporate" 
  },
  { 
    title: "Gift Boxes",
    imageUrl: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80",
    link: "/gifts/boxes" 
  },
  { 
    title: "Gift Cards",
    imageUrl: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?auto=format&fit=crop&q=80",
    link: "/gifts/cards" 
  }
];

const GiftsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-4">
          Explore <span className="italic">meaningful gifts</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the perfect gift for every occasion and budget
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {exploreCategories.map((category, index) => (
          <ExploreGiftCard
            key={index}
            {...category}
          />
        ))}
      </div>
    </section>
  );
};

export default GiftsSection;