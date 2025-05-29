import React from 'react';

interface CategoryProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
}

const categories: CategoryProps[] = [
  {
    title: "Take Notes",
    subtitle: "Shop Books & Journals",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
    link: "/categories/books-journals"
  },
  {
    title: "Lifestyle creations",
    subtitle: "Shop Bags & T Shirts",
    imageUrl: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80",
    link: "/categories/lifestyle"
  },
  {
    title: "Artistic Spotlight",
    subtitle: "Shop Art & Decor",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80",
    link: "/categories/art-decor"
  }
];

// Individual category card component
const CategoryCard = ({ title, subtitle, imageUrl, link }: CategoryProps) => (
  <div className="flex flex-col">
    <a href={link} className="group">
      <div className="aspect-square bg-gray-100 mb-3">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </a>
  </div>
);

const CategoriesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">
          A Peek Into Our Happy World
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;