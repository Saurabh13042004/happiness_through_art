import React from 'react';
import { SaleBanner } from './components/SaleBanner';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { ProductGallery } from './components/ProductGallery';
import CategoriesSection from './components/CategoriesSection';
import GiftsSection from './components/GiftsSection';
import CollaborationSection from './components/CollaborationSection';
import FoundersThought from './components/FoundersThought';
import TestimonialsSection from './components/TestimonialsSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SaleBanner />
      <Header />
      <HeroCarousel />
      <ProductGallery />
      <CategoriesSection />
      <GiftsSection />
      <CollaborationSection />
      <FoundersThought />
      <TestimonialsSection />
      <CommunitySection />
      <Footer />
      {/* Optional: Add a scroll-to-top button */}
      
    
   
      


      {/* Footer Placeholder */}
      {/* Main Content Placeholder */}
      <main className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-600">Main content will go here</p>
      </main>
    </div>
  );
}

export default App;