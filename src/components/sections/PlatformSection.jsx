import React, { useEffect, useRef, useState } from 'react';
import './PlatformSection.css';
import platformVideo from '../../assets/video/continervideo.mp4';

const PlatformSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { 
      number: '01',
      title: 'End-to-end platform', 
      description: 'From upload to delivery, all in one seamless workflow'
    },
    { 
      number: '02',
      title: 'No external vendors', 
      description: 'You control everything directly without third-party coordination'
    },
    { 
      number: '03',
      title: 'Full creative control', 
      description: 'Every parameter is adjustable to match your vision'
    },
    { 
      number: '04',
      title: 'Real-time generation', 
      description: 'See results as you work with instant feedback'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          if (videoRef.current) {
            videoRef.current.play();
          }
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

  // Auto-rotate features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="platform" className="platform" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">PLATFORM</span>
          <h2 className="section-title">Your photo agency, on your screen</h2>
          <p className="section-description">Everything happens digitally — no studios, no photographers, no limits</p>
        </div>

        <div className="platform-content">
          {/* Left Side - Video */}
          <div className="platform-visual">
            <div className="video-container">
              <video 
                ref={videoRef}
                src={platformVideo}
                className="platform-video"
                loop
                muted
                playsInline
              />
              <div className="video-gradient"></div>
            </div>
            <div className="visual-decoration">
              <div className="decoration-circle"></div>
              <div className="decoration-line"></div>
            </div>
          </div>

          {/* Right Side - Rotating Features */}
          <div className="platform-features-container">
            <div className="features-header">
              <span className="features-badge">KEY FEATURES</span>
              <h3 className="features-title">Why choose Advertflair</h3>
            </div>

            <div className="rotating-feature-card">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`feature-card ${activeFeature === index ? 'active' : 'inactive'}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="feature-number-wrapper">
                    <span className="feature-number">{feature.number}</span>
                    <div className="feature-number-line"></div>
                  </div>
                  <div className="feature-content-wrapper">
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-description">{feature.description}</p>
                    <div className="feature-arrow">→</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="feature-indicators">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-dot ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>

            <div className="platform-stats">
              <div className="stat-item">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Availability</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Digital</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span className="stat-label">Vendors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;