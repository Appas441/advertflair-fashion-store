import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ComparisonSection from '../components/sections/ComparisonSection';
import CapabilitiesSection from '../components/sections/CapabilitiesSection';
import GallerySection from '../components/sections/GallerySection';
import PlatformSection from '../components/sections/PlatformSection';
import WorkflowSection from '../components/sections/WorkflowSection';
import BrandGallerySection from '../components/sections/BrandGallerySection';

// New Sections with specialized layouts
import ProductGridSection from '../components/sections/ProductGridSection';
import GiftGallerySection from '../components/sections/GiftGallerySection';
import StyleGallerySection from '../components/sections/StyleGallerySection';

// Style Drop Countdown — NEW unique section
import BusinessImpactSection from '../components/sections/BusinessImpactSection';

/**
 * Home Component
 * Features a dynamic product grid and specialized fashion galleries
 * as seen in your project references.
 */
const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />

      <main>
        {/* Main Entry Point */}
        <HeroSection />

        {/* 5-Image Grid: Perfect Gifts Layout */}
        <GiftGallerySection />

        {/* 3 or 6-Column Product Grid with Modal Quick-View functionality */}
        <ProductGridSection />

        {/* 4-Image Grid: Mixed Tall/Wide Style Gallery */}
        <StyleGallerySection />



        {/* Comparison Section featuring the centered "Standout Style" banner */}
        <ComparisonSection />

        {/* Supporting Branding and Technical Sections */}
        <CapabilitiesSection />
        <GallerySection />
        <PlatformSection />
        <BrandGallerySection />
        <WorkflowSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
