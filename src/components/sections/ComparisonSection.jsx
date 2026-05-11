import React, { useEffect, useRef } from 'react';
import './ComparisonSection.css';
import bottomImage from '../../assets/images/image1.png';
import mensWearImage from '../../assets/images/mens-wear.png';
import mensCollectionImage from '../../assets/images/menscollection.png';

const ComparisonSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
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
    <section className="comparison" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">AI POWERED VISUALS</span>
          <h2 className="section-title">Transform Your Fashion Content</h2>
          <p className="section-description">Experience the future of fashion photography with Advertflair AI</p>
        </div>

        {/* First Image Banner */}
        <div className="comparison-image-banner">
          <img src={bottomImage} alt="Fashion Showcase" className="banner-img original-size" />
          <div className="banner-overlay visible">
            <h3>STANDOUT STYLE</h3>
            <p>The future of fashion content is here. Transform your brand with AI-powered visuals.</p>
          </div>
        </div>

        {/* Second Image Banner - Mens Wear */}
        <div className="comparison-image-banner second-banner">
          <img src={mensWearImage} alt="Mens Wear Collection" className="banner-img original-size" />
          <div className="banner-text-bottom">
            <p>Timeless elegance meets modern sophistication</p>
          </div>
        </div>

        {/* Third Image Banner - Mens Collection */}
        <div className="comparison-image-banner third-banner">
          <img src={mensCollectionImage} alt="Mens Collection" className="banner-img original-size" />
          <div className="banner-text-bottom">
            <p>Crafting the future of fashion with AI precision</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;