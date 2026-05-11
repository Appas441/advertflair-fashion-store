import React, { useEffect, useRef } from 'react';
import './GiftGallerySection.css';
import mainImg from '../../assets/images/gallery1/main.png';
import bangleImg from '../../assets/images/gallery1/bangle.png';
import earringsImg from '../../assets/images/gallery1/Earings.png';
import shoeImg from '../../assets/images/gallery1/Shoe.png';
import watchImg from '../../assets/images/gallery1/watch.png';

const GiftGallerySection = () => {
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
    <section className="gift-gallery-section" ref={sectionRef}>
      <div className="section-header">
        <span className="section-badge">GIFT COLLECTION</span>
        <h2 className="section-title">The Perfect Gifts</h2>
        <p className="section-subtitle">AI-generated fashion visuals showcasing our premium collection</p>
      </div>

      <div className="gallery-grid">
        {/* Top Left */}
        <div className="gallery-item side-item">
          <img src={earringsImg} alt="Earrings" />
          <p className="item-label">LUXE EARRINGS</p>
        </div>

        {/* CENTER COLUMN (Large) */}
        <div className="gallery-item main-item">
          <img src={mainImg} alt="Signature Look" />
          <p className="item-label">SIGNATURE LOOKS</p>
        </div>

        {/* Top Right */}
        <div className="gallery-item side-item">
          <img src={bangleImg} alt="Bangle" />
          <p className="item-label">ELEGANT BANGLES</p>
        </div>

        {/* Bottom Left */}
        <div className="gallery-item side-item">
          <img src={shoeImg} alt="Shoes" />
          <p className="item-label">DESIGNER SHOES</p>
        </div>

        {/* Bottom Right */}
        <div className="gallery-item side-item">
          <img src={watchImg} alt="Watch" />
          <p className="item-label">TIMELESS WATCHES</p>
        </div>
      </div>
    </section>
  );
};

export default GiftGallerySection;