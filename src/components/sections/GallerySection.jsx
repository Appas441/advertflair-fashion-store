import React, { useState } from 'react';
import './GallerySection.css';

// Import images
import model1 from '../../assets/images/model1.png';
import model2 from '../../assets/images/model2.jpg';
import model3 from '../../assets/images/model3.jpg';
import model4 from '../../assets/images/model4.jpg';
import model5 from '../../assets/images/model5.jpg';
import model6 from '../../assets/images/model6.jpg';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = ['all', 'editorial', 'lifestyle', 'campaign'];
  
  const galleryItems = [
    { id: 1, category: 'editorial', title: 'Winter Collection 2024', image: model1 },
    { id: 2, category: 'lifestyle', title: 'Urban Streetwear', image: model2 },
    { id: 3, category: 'campaign', title: 'Summer Vibes Campaign', image: model3 },
    { id: 4, category: 'editorial', title: 'Evening Gowns', image: model4 },
    { id: 5, category: 'lifestyle', title: 'Beach Resort', image: model5 },
    { id: 6, category: 'campaign', title: 'Holiday Special', image: model6 }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">VISUAL PROOF</span>
          <h2 className="section-title">See it to believe it</h2>
          <p className="section-description">Real results from real brands - AI-generated fashion visuals</p>
        </div>

        <div className="gallery-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className={`gallery-item ${item.category}`}>
              <div className="gallery-image">
                <img src={item.image} alt={item.title} className="gallery-img" />
              </div>
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
                <span className="category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <p>Don't just take our word for it — see what's possible with Advertflair AI</p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;