import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/icons/logo.png";
import useToggle from "../../hooks/useToggle";
import ToggleSwitch from "../ui/ToggleSwitch";

const Navbar = () => {
  const { value, toggle } = useToggle(false);

  // Apply theme change when toggle changes
  useEffect(() => {
    if (value) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [value]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // If section not found, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {/* LEFT: LOGO - Text removed */}
      <div className="logo-container" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src={logo} alt="advertflair logo" className="logo-img" />
      </div>

      {/* RIGHT: LINKS + TOGGLE */}
      <div className="nav-right">
        <div className="nav-links">
          <button className="nav-link-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</button>
          <button className="nav-link-btn" onClick={() => scrollToSection("capabilities")}>Capabilities</button>
          <button className="nav-link-btn" onClick={() => scrollToSection("gallery")}>Gallery</button>
          <button className="nav-link-btn" onClick={() => scrollToSection("platform")}>Platform</button>
        </div>

        <ToggleSwitch
          checked={value}
          onChange={toggle}
        />
      </div>
    </nav>
  );
};

export default Navbar;