import React from 'react';

const FoundersThought = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-orange-50 to-yellow-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" 
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }} 
        />
        
        {/* Soft color accents */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        </div>

        {/* Decorative shapes */}
        <div className="absolute inset-0">
          <svg className="absolute left-full transform -translate-y-1/2 -translate-x-1/4 lg:-translate-x-1/2 opacity-20" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-purple-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#pattern-squares)" />
          </svg>
          <svg className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2 opacity-20" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="pattern-squares-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-orange-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#pattern-squares-2)" />
          </svg>
        </div>
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 border border-white/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-gray-600 uppercase tracking-wider font-medium mb-4">
              Kavya Atray, Founder
            </h2>
            
            <blockquote className="mt-6">
              <p className="text-lg md:text-2xl lg:text-3xl text-gray-900 font-serif italic leading-relaxed">
                "I started Happiness through art with a vision to create products I'd be proud to use and share myself. Our mission is to bring a burst of joy to everyday moments, and what inspires me most is seeing how our creations brighten people's lives."
              </p>
            </blockquote>

            <div className="mt-10">
              <button className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersThought;