import React from 'react';
import CollaborationCard from './CollaborationCard';

const collaborations = [
  {
    title: "Artisan Collection × Local Artists",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80",
    description: "A unique collection featuring handcrafted pieces by local artisans, combining traditional techniques with contemporary design."
  },
  {
    title: "Limited Edition × Designer Series",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
    description: "Exclusive limited edition pieces created in collaboration with renowned designers, bringing unique artistic visions to life."
  }
];

const CollaborationSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Collaborations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our special collections created in partnership with artists and designers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {collaborations.map((collab, index) => (
          <CollaborationCard
            key={index}
            title={collab.title}
            imageUrl={collab.imageUrl}
            description={collab.description}
          />
        ))}
      </div>
    </section>
  );
}

export default CollaborationSection