import React from 'react';
import { SaleBanner } from './SaleBanner';
import { Header } from './Header';
import { HeroCarousel } from './HeroCarousel';
import { ProductGallery } from './ProductGallery';
import CategoriesSection from './CategoriesSection';
import GiftsSection from './GiftsSection';
import CollaborationSection from './CollaborationSection';
import FoundersThought from './FoundersThought';
import TestimonialsSection from './TestimonialsSection';
import CommunitySection from './CommunitySection';
import Footer from './Footer';
import ProductRow from './ProductRow';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SaleBanner />
      <Header />
      <HeroCarousel />
      <ProductGallery />
      <ProductRow/>
      <CategoriesSection />
      <GiftsSection />
      <CollaborationSection />
      <FoundersThought />
      <TestimonialsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default HomePage;