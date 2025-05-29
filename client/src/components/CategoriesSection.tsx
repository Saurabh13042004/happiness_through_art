import React from 'react';

interface CategoryProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
}

const categories: CategoryProps[] = [
  {
    title: "Take notes",
    subtitle: "Shop Notebooks",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
    link: "/categories/notebooks"
  },
  {
    title: "Photobooks for every chapter",
    subtitle: "Shop Photobooks",
    imageUrl: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&q=80",
    link: "/categories/photobooks"
  },
  {
    title: "Treasure family recipes",
    subtitle: "Shop Recipe Journals",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80",
    link: "/categories/recipe-journals"
  }
];

// Individual category card component
const CategoryCard = ({ title, subtitle, imageUrl, link }: CategoryProps) => (
  <div className="flex flex-col">
    <a href={link} className="group">
      <div className="aspect-square bg-gray-100 mb-5">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <h3 className="text-2xl font-serif mb-1">{title}</h3>
      <p className="text-sm text-gray-700">{subtitle}</p>
    </a>
  </div>
);

const CategoriesSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-6">
          Pages to <span className="italic">treasure, take care & inspire</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;