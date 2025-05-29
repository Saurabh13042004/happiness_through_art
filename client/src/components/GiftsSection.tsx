import React from 'react';
import ExploreGiftCard from './ExploreGiftCard';

const exploreCategories = [
  { title: "Corporate Gifts" },
  { title: "Gift Boxes" },
  { title: "Gift Cards" }
];

const GiftsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Meaningful Gifts At Every Price Point
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the perfect gift for every occasion and budget
        </p>
      </div>

      {/* Explore More Gifts Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8">Explore Gifts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {exploreCategories.map((category, index) => (
            <ExploreGiftCard
              key={index}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;