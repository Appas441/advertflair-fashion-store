import React, { useState, useEffect, useRef } from 'react';
import './BrandGallerySection.css';
import model1 from '../../assets/images/model1.png';
import model3 from '../../assets/images/model3.jpg';
import model6 from '../../assets/images/model6.jpg';
import womenImage from '../../assets/images/women.png';

const BrandGallerySection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const items = [
    { 
      id: 1,
      pose: 'Standing', 
      lighting: 'Studio Soft', 
      consistency: 'Same model, same lighting, different pose',
      image: model1,
    },
    { 
      id: 2,
      pose: 'Seated', 
      lighting: 'Studio Soft', 
      consistency: 'Same model, same lighting, different pose',
      image: model3,
    },
    { 
      id: 3,
      pose: 'Walking', 
      lighting: 'Studio Soft', 
      consistency: 'Same model, same lighting, different pose',
      image: model6,
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Brand Gallery Section */}
      <section className="brand-gallery" ref={sectionRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">CONSISTENCY AT SCALE</span>
            <h2 className="section-title">Same DNA. Infinite variations.</h2>
            <p className="section-description">Proving consistency across every generated image</p>
          </div>

          <div className="brand-gallery-grid">
            {items.map((item, idx) => (
              <div 
                key={item.id} 
                className={`brand-gallery-card ${visible ? 'animate' : ''}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="brand-image-wrapper">
                  <img src={item.image} alt={item.pose} className="brand-image" />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <span className="overlay-text">{item.pose}</span>
                    </div>
                  </div>
                </div>
                <div className="brand-details">
                  <div className="badges-wrapper">
                    <span className="pose-badge">{item.pose}</span>
                    <span className="lighting-badge">{item.lighting}</span>
                  </div>
                  <p className="consistency-text">{item.consistency}</p>
                  <div className="brand-hover-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="difference">
        <div className="difference-background">
          <img src={womenImage} alt="Advertflair Fashion" className="difference-image" />
          <div className="difference-overlay"></div>
        </div>
        
        <div className="difference-container">
          <div className="difference-content">
            <h2 className="difference-title">The Future of Fashion is Here</h2>
            <div className="difference-text">
              <p>AI-powered fashion visualization that transforms your creative workflow</p>
              <p className="difference-subtext">From concept to campaign in days, not weeks</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandGallerySection;