import React, { useEffect, useState } from "react";
import "./HeroSection.css";

import hero1 from "../../assets/images/Hero/Hero1.png";
import hero2 from "../../assets/images/Hero/Hero2.png";
import hero3 from "../../assets/images/Hero/Hero3.png";

const slides = [
  {
    image: hero1,
    title: "Create fashion campaigns without photoshoots",
    text: "On-model, flat lay, editorial visuals — generated in days, not weeks.",
    align: "center",
  },
  {
    image: hero2,
    title: "From garment to studio-ready visuals",
    text: "Upload your product and generate high-quality fashion images instantly.",
    align: "left",
  },
  {
    image: hero3,
    title: "Scale your brand visuals effortlessly",
    text: "Create campaigns, variations, and seasonal drops without reshooting.",
    align: "left",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleViewGallery = () => {
    const gallerySection = document.querySelector('.gift-gallery-section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const current = slides[index];

  return (
    <section
      className={`hero ${isAnimating ? 'fade-out' : 'fade-in'}`}
      style={{ backgroundImage: `url(${current.image})` }}
      key={index}
    >
      {/* REMOVED: hero-overlay div - No black overlay */}
      
      <div className={`hero-content ${current.align}`}>
        <div className="hero-text-wrapper">
          <span className="hero-badge">AI-POWERED FASHION</span>
          <h1 className="hero-title">{current.title}</h1>
          <div className="hero-line"></div>
          <p className="hero-description">{current.text}</p>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleViewGallery}>
            View Gallery
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`indicator ${index === i ? 'active' : ''}`}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setIndex(i);
                setIsAnimating(false);
              }, 300);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;