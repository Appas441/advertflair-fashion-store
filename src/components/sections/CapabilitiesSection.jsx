import React, { useEffect, useRef, useState } from "react";
import './CapabilitiesSection.css';

const CapabilitiesSection = () => {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState([0, 0, 0]);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsSectionRef = useRef(null);

  const capabilities = [
    { 
      title: 'On-model photography', 
      description: 'Generate realistic model shots with any body type, pose, and expression for perfect e-commerce presentation.'
    },
    { 
      title: 'Flat lay & ghost mannequin', 
      description: 'Clean, professional flat lays and ghost mannequin effects that showcase products with studio-quality precision.'
    },
    { 
      title: 'Lifestyle/editorial scenes', 
      description: 'Place your products in any environment or scene you can imagine — from urban streets to luxury resorts.'
    },
    { 
      title: 'Multi-channel resizing', 
      description: 'Auto-optimized visuals for web, mobile, social media, email campaigns, and print requirements with one click.'
    },
    { 
      title: 'Seasonal refresh', 
      description: 'Update your entire catalog for new seasons in days, not months. Summer to winter transformation in minutes.'
    },
    { 
      title: 'Colorway expansion', 
      description: 'Generate unlimited color variants from a single source image to expand your product line instantly.'
    }
  ];

  const traditionalProblems = [
    { label: 'Time', value: '6–8 weeks', negative: true },
    { label: 'Cost', value: '$150–500/image', negative: true },
    { label: 'Complexity', value: '8+ vendors', negative: true },
    { label: 'Consistency', value: 'Inconsistent', negative: true }
  ];

  const advertflairSolutions = [
    { label: 'Time', value: '3 days', negative: false },
    { label: 'Cost', value: '60% less', negative: false },
    { label: 'Complexity', value: '1 platform', negative: false },
    { label: 'Consistency', value: 'Pixel-perfect', negative: false }
  ];

  const statsData = [
    { value: 3, suffix: " Days", label: "Turnaround" },
    { value: 60, suffix: "%+", label: "Cost Reduction" },
    { value: 78, suffix: "%", label: "First-pass Approval" },
  ];

  // Ripple effect handler
  const handleRipple = (e, index) => {
    const card = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    card.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      { threshold: 0.1 }
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

  // Stats counter observer
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (statsSectionRef.current) {
      statsObserver.observe(statsSectionRef.current);
    }

    return () => {
      if (statsSectionRef.current) {
        statsObserver.unobserve(statsSectionRef.current);
      }
    };
  }, []);

  // Count animation
  useEffect(() => {
    if (!statsVisible) return;

    let start = 0;
    const duration = 1500;

    const interval = setInterval(() => {
      start += 50;

      setCounts(
        statsData.map((stat) =>
          Math.min(stat.value, Math.floor((stat.value * start) / duration))
        )
      );

      if (start >= duration) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [statsVisible]);

  return (
    <section id="capabilities" className="capabilities" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">CAPABILITIES</span>
          <h2 className="section-title">Full-spectrum fashion AI</h2>
          <p className="section-description">From product shots to editorial campaigns — everything you need</p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((cap, index) => (
            <div 
              key={index} 
              className="capability-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="capability-number">0{index + 1}</div>
              <h3 className="capability-title">{cap.title}</h3>
              <div className="capability-line"></div>
              <p className="capability-description">{cap.description}</p>
              <div className="capability-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-wrapper" ref={statsSectionRef}>
          <div className="stats-header">
            <h2 className="stats-title">Proven Performance</h2>
            <p className="stats-subtitle">Delivering measurable results for fashion brands worldwide</p>
          </div>

          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div
                className={`stat-card ${statsVisible ? "animate" : ""}`}
                key={index}
                style={{ transitionDelay: `${index * 0.15}s` }}
                onClick={(e) => handleRipple(e, index)}
              >
                <div className="stat-icon">✦</div>
                <h3 className="stat-value">
                  {counts[index]}
                  {stat.suffix}
                </h3>
                <p className="stat-label">{stat.label}</p>
                <div className="stat-separator"></div>
                <div className="decorative-dots">●●●</div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="comparison-wrapper">
          <div className="comparison-header">
            <span className="comparison-badge">TRADITIONAL VS AI</span>
            <h3 className="comparison-heading">Why settle for less?</h3>
            <p className="comparison-subheading">Compare the old way with the Advertflair advantage</p>
          </div>

          <div className="comparison-grid">
            {/* Traditional Card */}
            <div className="comparison-card traditional">
              <h4 className="comparison-card-title">Traditional Photoshoot</h4>
              <div className="comparison-list">
                {traditionalProblems.map((item, idx) => (
                  <div key={idx} className="comparison-item negative">
                    <span className="comparison-label">{item.label}</span>
                    <span className="comparison-value">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="comparison-footer">
                <span className="pain-point">Pain points:</span>
                <ul>
                  <li>Studio rental</li>
                  <li>Model booking</li>
                  <li>Post-production</li>
                  <li>Weather delays</li>
                </ul>
              </div>
            </div>

            {/* Advertflair Card */}
            <div className="comparison-card advertflair">
              <h4 className="comparison-card-title">Advertflair AI</h4>
              <div className="comparison-list">
                {advertflairSolutions.map((item, idx) => (
                  <div key={idx} className="comparison-item positive">
                    <span className="comparison-label">{item.label}</span>
                    <span className="comparison-value">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="comparison-footer">
                <span className="benefit">Benefits:</span>
                <ul>
                  <li>Always available</li>
                  <li>Unlimited revisions</li>
                  <li>Global consistency</li>
                  <li>Instant delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;