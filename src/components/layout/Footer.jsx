import React from "react";
import "./Footer.css";
import logo from "../../assets/icons/logo.png";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT: BRAND */}
        <div className="footer-brand">
          <div className="footer-logo" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="advertflair logo" className="footer-logo-img" />
            {/* REMOVED: footer-logo-text */}
          </div>

          <p className="footer-description">
            AI-powered fashion visualization platform helping brands create
            on-model, flat lay, and editorial visuals — without traditional shoots.
          </p>

          <div className="footer-social">
            <span className="social-label">Follow us</span>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>

        {/* RIGHT: LINKS */}
        <div className="footer-links">
          <div className="links-column">
            <h3>Explore</h3>
            <ul>
              <li><button className="footer-link-btn" onClick={() => scrollToSection("hero")}>Home</button></li>
              <li><button className="footer-link-btn" onClick={() => scrollToSection("capabilities")}>Capabilities</button></li>
              <li><button className="footer-link-btn" onClick={() => scrollToSection("gallery")}>Gallery</button></li>              
              <li><button className="footer-link-btn" onClick={() => scrollToSection("platform")}>Platform</button></li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} advertflair. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <span className="separator">|</span>
          <a href="#">Terms</a>
          <span className="separator">|</span>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;