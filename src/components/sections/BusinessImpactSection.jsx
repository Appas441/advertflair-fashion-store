import React, { useEffect, useRef, useState } from "react";
import "./BusinessImpactSection.css";

const DROP_ITEMS = [
  {
    id: 1,
    tag: "AI-Generated · Women",
    name: "AI Generated Oversized Jacket",
    price: "$189",
    badge: "AI Generated",
    badgeClass: "badge-new",
    colorClass: "bis-card-img-a",
    span: true,
  },
  {
    id: 2,
    tag: "On-Model · Unisex",
    name: "AI Model Linen Tee",
    price: "$68",
    badge: "Trending",
    badgeClass: "badge-hot",
    colorClass: "bis-card-img-b",
    span: false,
  },
  {
    id: 3,
    tag: "Editorial · Limited",
    name: "AI Studio Canvas Tote",
    price: "$112",
    badge: "AI Studio",
    badgeClass: "badge-limited",
    colorClass: "bis-card-img-c",
    span: false,
  },
];

const MARQUEE_ITEMS = [
  "AI Fashion",
  "On-Model Generated",
  "Studio Quality",
  "3 Day Turnaround",
  "Brand DNA",
  "Cost Effective",
];

export default function BusinessImpactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section className="bis-section" ref={sectionRef}>
      {/* Marquee */}
      <div className="bis-marquee-wrap">
        <div className="bis-marquee-inner">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="bis-marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main layout */}
      <div className={`bis-layout ${isVisible ? 'visible' : ''}`}>
        {/* Left column */}
        <div className="bis-left">
          <div className="bis-eyebrow">
            <span className="bis-live-dot"></span>
            <span>AI POWERED FASHION</span>
          </div>

          <h2 className="bis-headline">
            The<br />
            Future of <span className="bis-accent">Fashion</span><br />
            Is Here
          </h2>

          <p className="bis-subtext">
            AI-generated fashion visuals that transform your creative workflow. 
            From studio-quality product shots to editorial campaigns — all without traditional photoshoots.
          </p>

          <div className="bis-stats">
            <div className="bis-stat">
              <span className="bis-stat-number">60%</span>
              <span className="bis-stat-label">Cost Savings</span>
            </div>
            <div className="bis-stat">
              <span className="bis-stat-number">3 Days</span>
              <span className="bis-stat-label">Turnaround</span>
            </div>
            <div className="bis-stat">
              <span className="bis-stat-number">100%</span>
              <span className="bis-stat-label">Digital</span>
            </div>
          </div>

          <div className="bis-cta-row">
            <button className="bis-cta-primary">Explore Collection</button>
          </div>
        </div>

        {/* Right column */}
        <div className="bis-right">
          <div className="bis-cards-grid">
            {DROP_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className={`bis-card ${item.span ? "bis-card-wide" : ""} ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`bis-card-img ${item.colorClass}`}>
                  <span className={`bis-badge ${item.badgeClass}`}>
                    {item.badge}
                  </span>
                </div>
                <div className="bis-card-body">
                  <p className="bis-card-tag">{item.tag}</p>
                  <p className="bis-card-name">{item.name}</p>
                  <div className="bis-card-footer">
                    <span className="bis-card-price">{item.price}</span>
                    <div className="bis-card-view">
                      <span>View</span>
                    </div>
                  </div>
                </div>
                <div className="bis-card-hover-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}