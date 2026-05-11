import React, { useEffect, useState } from 'react';
import './StyleGallerySection.css';

// Import local assets from gallery2
import sleepwearImg from '../../assets/images/gallery2/Sleepwear.png';
import robesImg from '../../assets/images/gallery2/Soft Robes.png';
import sunglassesImg from '../../assets/images/gallery2/Designer Sunglasses.png';
import shoeImg from '../../assets/images/gallery2/shoe.png';

const StyleGallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.style-gallery-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`style-gallery-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-header">
        <span className="section-badge">COLLECTION HIGHLIGHTS</span>
        <h2>Style Gallery</h2>
        <p className="section-subtitle">AI-generated fashion visuals showcasing our creative capabilities</p>
      </div>

      <div className="style-grid">
        {/* LEFT COLUMN - Tall Image */}
        <div className="style-item tall-item">
          <div className="image-container">
            <img src={sleepwearImg} alt="Luxury Sleepwear Collection" />
            <div className="image-overlay">
              <div className="overlay-content">
                <span className="overlay-category">COMFORT WEAR</span>
                <span className="overlay-title">SLEEPWEAR</span>
                <div className="overlay-line"></div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE TOP */}
        <div className="style-item center-item">
          <div className="image-container">
            <img src={sunglassesImg} alt="Designer Sunglasses" />
            <div className="image-overlay">
              <div className="overlay-content">
                <span className="overlay-category">ACCESSORIES</span>
                <span className="overlay-title">SUNGLASSES</span>
                <div className="overlay-line"></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Tall Image */}
        <div className="style-item tall-item">
          <div className="image-container">
            <img src={robesImg} alt="Soft Robes Collection" />
            <div className="image-overlay">
              <div className="overlay-content">
                <span className="overlay-category">LOUNGEWEAR</span>
                <span className="overlay-title">SOFT ROBES</span>
                <div className="overlay-line"></div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE BOTTOM */}
        <div className="style-item center-item">
          <div className="image-container">
            <img src={shoeImg} alt="Designer Shoes" />
            <div className="image-overlay">
              <div className="overlay-content">
                <span className="overlay-category">FOOTWEAR</span>
                <span className="overlay-title">DESIGNER SHOES</span>
                <div className="overlay-line"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StyleGallerySection;