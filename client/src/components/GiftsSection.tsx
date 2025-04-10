import React from 'react';
import GiftCard from './GiftCard';
import ExploreGiftCard from './ExploreGiftCard';

const priceBasedGifts = [
  {
    imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80",
    priceRange: "under 999",
    buttonText: "Gifts Under 999"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80",
    priceRange: "under 1499",
    buttonText: "Gift Under 1499"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80",
    priceRange: "under 1999",
    buttonText: "Gift Under 1999"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80",
    priceRange: "under 2999",
    buttonText: "Gift under 2999"
  }
];

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

      {/* Price-based Gift Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {priceBasedGifts.map((gift, index) => (
          <GiftCard
            key={index}
            imageUrl={gift.imageUrl}
            priceRange={gift.priceRange}
            buttonText={gift.buttonText}
          />
        ))}
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