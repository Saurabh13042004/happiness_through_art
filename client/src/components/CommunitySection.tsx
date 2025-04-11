import React from 'react';
import { Instagram } from 'lucide-react';

const communityPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80",
    alt: "Reading a book in sunlight",
    username: "@bookworm_sarah"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80",
    alt: "Coffee and journal",
    username: "@creative_mind"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
    alt: "Art supplies and notebook",
    username: "@artistry_daily"
  }
];

const CommunitySection = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6">
            See what our community is sharing.{' '}
            <span className="font-normal not-italic bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
              Follow us @hapiness through art
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our creative community and share your Happy Wagon moments with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityPosts.map((post) => (
            <div
              key={post.id}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <Instagram className="w-8 h-8 mb-3" />
                <p className="font-medium">{post.username}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-900 transition-colors duration-300 font-medium">
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;