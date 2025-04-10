import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    title: "Art Supplies",
    description: "Discover premium art supplies for every creative journey",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
    link: "/categories/art-supplies"
  },
  {
    title: "Fiction Books",
    description: "Explore worlds of imagination through our curated fiction collection",
    imageUrl: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80",
    link: "/categories/fiction"
  },
  {
    title: "Non-Fiction",
    description: "Expand your knowledge with our non-fiction selection",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80",
    link: "/categories/non-fiction"
  },
  {
    title: "Art Books",
    description: "Beautiful art books to inspire and educate",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
    link: "/categories/art-books"
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Categories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated collection of books and art supplies
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;