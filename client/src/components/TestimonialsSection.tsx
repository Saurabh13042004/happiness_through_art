import React from 'react';
import { Star, BadgeCheck } from 'lucide-react';

const testimonials = [
  {
    name: "Megha Parashar",
    verified: true,
    rating: 5,
    title: "Just Love It!",
    review:
      "I've Been Using Dot & Key Vitamin C Sunscreen For A Year Now. It's Lightweight & Quick-Absorbing. Reduces Dullness Too With A Dewy Finish. A Must-Buy!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    productImage:
      "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?auto=format&fit=crop&q=80",
    recommendation: "Megha Recommends This Product",
  },
  {
    name: "Reshma Satheesh",
    verified: true,
    rating: 5,
    title: "Blends In No Time",
    review:
      "This Is My Third Bottle Of Using This Sunscreen. Zero White Cast & Non-Pilling Formula...Just Love It!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    productImage:
      "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?auto=format&fit=crop&q=80",
    recommendation: "Reshma Recommends This Product",
  },
  {
    name: "Muskan Chowdhur",
    verified: true,
    rating: 5,
    title: "No More Dry Skin",
    review:
      "Ceramide In This Moisturizer Protects The Natural Barrier Of My Skin While Deeply Moisturizing. It Also Soothes Redness & Dry Skin.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    productImage:
      "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?auto=format&fit=crop&q=80",
    recommendation: "Muskan Recommends This Product",
  },
];

const TestimonialCard = ({
  name,
  verified,
  rating,
  title,
  review,
  image,
  productImage,
  recommendation,
}: {
  name: string;
  verified: boolean;
  rating: number;
  title: string;
  review: string;
  image: string;
  productImage: string;
  recommendation: string;
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Header with user info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {verified && (
            <div className="absolute -right-1 -bottom-1">
              <BadgeCheck className="w-6 h-6 text-blue-500 bg-white rounded-full" />
            </div>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review content */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-3 text-gray-900">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{review}</p>
      </div>

      {/* Product recommendation */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <img
          src={productImage}
          alt="Product"
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div>
          <p className="text-sm text-gray-600">{recommendation}</p>
          <button className="mt-2 text-pink-500 font-semibold hover:text-pink-600 transition-colors">
            SHOP NOW →
          </button>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real experiences from our valued customers who have found their perfect products with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
