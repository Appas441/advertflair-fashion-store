import React, { useState, useEffect, useRef } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  const thumbnailScrollRef = useRef(null);

  // Content for each image view
  const imageContent = {
    "Mustard Yellow": [
      { title: "Elegant Silhouette", description: "The mustard yellow dress features a flattering A-line silhouette.", detail: "Fit: A-Line | Length: Midi", material: "Premium Cotton Blend", technique: "Neural Rendering" },
      { title: "Premium Fabric Quality", description: "Crafted from high-quality cotton blend fabric.", detail: "Material: 100% Cotton | Feel: Soft", material: "Premium Cotton Blend", technique: "4K Texture Mapping" },
      { title: "Elegant Neckline", description: "The V-neck design creates an elongating effect.", detail: "Neckline: V-Neck | Style: Classic", material: "Fine Cotton", technique: "Detail Enhancement" },
      { title: "Statement Sleeves", description: "Short puff sleeves add volume and femininity.", detail: "Sleeve: Puff Style | Length: Short", material: "Structured Cotton", technique: "3D Modeling" },
      { title: "Flattering Waistline", description: "Subtle waist gathering creates definition.", detail: "Waist: Fitted | Silhouette: Feminine", material: "Premium Blend", technique: "AI Precision" },
      { title: "Seamless Back Design", description: "Concealed zipper closure provides a clean back view.", detail: "Closure: Hidden Zipper | Finish: Clean", material: "Quality Fabric", technique: "Seamless Rendering" }
    ],
    "Khaki Green": [
      { title: "Classic Oxford Shirt", description: "The khaki green Oxford shirt combines timeless style.", detail: "Fit: Regular | Style: Classic", material: "Oxford Cotton", technique: "Neural Rendering" },
      { title: "Premium Oxford Fabric", description: "High-quality Oxford cotton with subtle texture.", detail: "Material: Oxford Cotton | Durability: High", material: "Oxford Cotton", technique: "Texture Generation" },
      { title: "Button-Down Collar", description: "Classic button-down collar that maintains its shape.", detail: "Collar: Button-Down | Style: Classic", material: "Structured Cotton", technique: "Detail Mapping" },
      { title: "Quality Button Details", description: "Premium pearl-effect buttons.", detail: "Buttons: Pearl Finish | Quality: Premium", material: "Premium Materials", technique: "Detail Enhancement" },
      { title: "Tailored Fit", description: "Regular fit with tailored cut.", detail: "Fit: Tailored | Comfort: High", material: "Cotton Blend", technique: "3D Modeling" },
      { title: "Pleated Back Design", description: "Box pleat at the back allows easy movement.", detail: "Back: Pleated | Movement: Easy", material: "Quality Cotton", technique: "AI Precision" },
      { title: "Curved Hem Finish", description: "Curved hem allows versatile styling.", detail: "Hem: Curved | Versatility: High", material: "Oxford Cotton", technique: "Seamless Rendering" }
    ],
    "Dark Denim Blue": [
      { title: "Classic Denim Jacket", description: "Timeless dark denim blue jacket.", detail: "Fit: Regular | Style: Classic", material: "Premium Denim", technique: "Neural Rendering" },
      { title: "Premium Denim Quality", description: "High-quality denim fabric.", detail: "Material: Cotton Denim | Stretch: Moderate", material: "Premium Denim", technique: "4K Texture Mapping" },
      { title: "Button Details", description: "Classic button-front closure.", detail: "Closure: Button Front | Finish: Antique", material: "Metal Alloy", technique: "Detail Enhancement" },
      { title: "Back Design", description: "Clean back with subtle seam detailing.", detail: "Back: Clean Finish | Silhouette: Tailored", material: "Premium Denim", technique: "3D Modeling" },
      { title: "Pocket Styling", description: "Functional chest pockets.", detail: "Pockets: 2 Chest | Style: Functional", material: "Cotton Denim", technique: "AI Precision" },
      { title: "Collar & Lapel", description: "Classic pointed collar.", detail: "Collar: Pointed | Structure: Medium", material: "Denim", technique: "Seamless Rendering" }
    ],
    "Light Denim Blue": [
      { title: "Light Wash Denim", description: "Fashion-forward light denim blue jacket.", detail: "Fit: Modern | Style: Trendy", material: "Lightweight Denim", technique: "Neural Rendering" },
      { title: "Soft Denim Fabric", description: "Lightweight, breathable denim fabric.", detail: "Material: Light Denim | Feel: Soft", material: "Lightweight Cotton", technique: "Texture Generation" },
      { title: "Distinctive Wash", description: "Unique light blue wash with fading.", detail: "Wash: Light Blue | Finish: Faded", material: "Premium Denim", technique: "Detail Mapping" },
      { title: "Modern Fit", description: "Contemporary slim-fit design.", detail: "Fit: Slim | Silhouette: Modern", material: "Stretch Denim", technique: "3D Modeling" },
      { title: "Cuff Details", description: "Adjustable button cuffs.", detail: "Cuff: Button Adjustable | Style: Versatile", material: "Denim", technique: "Detail Enhancement" },
      { title: "Overall Construction", description: "Expertly constructed with double-stitched seams.", detail: "Construction: Double Stitch | Durability: High", material: "Premium Denim", technique: "AI Precision" }
    ],
    "Bright Red": [
      { title: "Vibrant Red Cotton Shirt", description: "Bold bright red waisted cotton shirt.", detail: "Fit: Tailored | Style: Statement", material: "Premium Cotton", technique: "Neural Rendering" },
      { title: "Premium Cotton Fabric", description: "High-quality breathable cotton fabric.", detail: "Material: 100% Cotton | Feel: Soft", material: "Premium Cotton", technique: "4K Texture Mapping" },
      { title: "Flattering Waist Design", description: "Smart waisted design.", detail: "Waist: Fitted | Silhouette: Feminine", material: "Structured Cotton", technique: "Detail Enhancement" },
      { title: "Classic Collar", description: "Timeless classic collar design.", detail: "Collar: Classic Pointed | Style: Elegant", material: "Cotton Blend", technique: "3D Modeling" },
      { title: "Button Closure", description: "Premium button-front closure.", detail: "Closure: Button Front | Finish: Premium", material: "Quality Materials", technique: "AI Precision" },
      { title: "Versatile Styling", description: "Can be dressed up or down.", detail: "Versatility: High | Occasion: All", material: "Premium Cotton", technique: "Seamless Rendering" }
    ],
    "Dark Brown": [
      { title: "Sophisticated Brown Shirt", description: "Elegant dark brown cotton shirt.", detail: "Fit: Tailored | Style: Professional", material: "Premium Cotton", technique: "Neural Rendering" },
      { title: "Rich Brown Color", description: "Deep, rich dark brown hue.", detail: "Color: Dark Brown | Finish: Rich", material: "Quality Cotton", technique: "Texture Generation" },
      { title: "Waisted Design Details", description: "Carefully tailored waist design.", detail: "Design: Waisted | Silhouette: Flattering", material: "Structured Fabric", technique: "Detail Mapping" },
      { title: "Premium Buttons", description: "High-quality buttons.", detail: "Buttons: Premium | Quality: High", material: "Quality Materials", technique: "3D Modeling" },
      { title: "Comfort Fit", description: "Designed for all-day comfort.", detail: "Comfort: High | Wear: All Day", material: "Cotton Blend", technique: "AI Precision" },
      { title: "Versatile Wardrobe Essential", description: "A must-have wardrobe staple.", detail: "Essential: Yes | Versatility: High", material: "Premium Cotton", technique: "Seamless Rendering" }
    ],
    "Light Blue": [
      { title: "Fresh Light Blue Shirt", description: "Crisp, light blue cotton shirt.", detail: "Fit: Regular | Style: Fresh", material: "Lightweight Cotton", technique: "Neural Rendering" },
      { title: "Breathable Fabric", description: "Lightweight, breathable cotton.", detail: "Material: Light Cotton | Breathability: High", material: "Lightweight Cotton", technique: "Texture Generation" },
      { title: "Tailored Waist", description: "Smart waist tailoring.", detail: "Waist: Tailored | Fit: Comfortable", material: "Cotton Blend", technique: "Detail Enhancement" }
    ],
    "Blue": [
      { title: "Elegant Blue Dress", description: "Stunning blue balloon sleeve dress.", detail: "Fit: Relaxed | Style: Elegant", material: "Premium Fabric", technique: "Neural Rendering" },
      { title: "Balloon Sleeve Design", description: "Dramatic balloon sleeves.", detail: "Sleeve: Balloon | Silhouette: Dramatic", material: "Quality Material", technique: "4K Texture Mapping" },
      { title: "Flattering Cut", description: "Thoughtfully designed cut.", detail: "Cut: Flattering | Wear: Comfortable", material: "Premium Blend", technique: "Detail Enhancement" },
      { title: "Premium Fabric Quality", description: "High-quality fabric.", detail: "Material: Premium | Feel: Soft", material: "Quality Fabric", technique: "3D Modeling" },
      { title: "Versatile Styling", description: "Can be dressed up or down.", detail: "Versatility: High | Occasion: All", material: "Premium Cotton", technique: "AI Precision" },
      { title: "Attention to Detail", description: "Carefully crafted details.", detail: "Details: Premium | Finish: Excellent", material: "Quality Materials", technique: "Seamless Rendering" }
    ],
    "Red Striped": [
      { title: "Bold Red Striped Dress", description: "Eye-catching red striped dress.", detail: "Fit: Relaxed | Style: Bold", material: "Premium Fabric", technique: "Neural Rendering" },
      { title: "Striped Pattern Design", description: "Classic striped pattern.", detail: "Pattern: Striped | Design: Classic", material: "Quality Material", technique: "Texture Generation" },
      { title: "Balloon Sleeves", description: "Voluminous balloon sleeves.", detail: "Sleeve: Balloon | Volume: High", material: "Structured Fabric", technique: "Detail Mapping" },
      { title: "Back View Design", description: "Beautiful back design.", detail: "Back: Tailored | Fit: Perfect", material: "Cotton Blend", technique: "3D Modeling" }
    ]
  };

  // Get current variant data
  const currentVariant = selectedVariant || product.currentVariant || product.variants?.[0] || null;
  const currentGallery = currentVariant?.gallery || [currentVariant?.mainImg];
  const currentContent = imageContent[currentVariant?.name] || imageContent["Mustard Yellow"];

  // Initialize
  useEffect(() => {
    if (product) {
      const initialVariant = product.currentVariant || product.variants?.[0] || null;
      setSelectedVariant(initialVariant);
      setCurrentImageIndex(0);
      setCurrentImage(initialVariant?.gallery?.[0] || initialVariant?.mainImg);
    }
  }, [product]);

  // Update when variant changes
  useEffect(() => {
    if (selectedVariant) {
      setCurrentImageIndex(0);
      setCurrentImage(selectedVariant.gallery?.[0] || selectedVariant.mainImg);
      if (thumbnailScrollRef.current) {
        thumbnailScrollRef.current.scrollTop = 0;
      }
    }
  }, [selectedVariant]);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  const handleThumbnailClick = (index, image) => {
    setCurrentImageIndex(index);
    setCurrentImage(image);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="product-view-container">
          {/* Left Column - Scrollable Thumbnails */}
          <div className="thumbnail-sidebar">
            <div className="thumbnail-sidebar-header">
              <h4>All Views</h4>
              <span className="thumbnail-count">{currentGallery.length} images</span>
            </div>
            <div className="thumbnail-scroll-container" ref={thumbnailScrollRef}>
              {currentGallery.map((img, index) => (
                <div 
                  key={index} 
                  className={`thumbnail-sidebar-item ${currentImageIndex === index ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(index, img)}
                >
                  <div className="thumbnail-sidebar-image">
                    <img src={img} alt={`View ${index + 1}`} />
                    <div className="thumbnail-sidebar-number">{String(index + 1).padStart(2, '0')}</div>
                  </div>
                  <div className="thumbnail-sidebar-info">
                    <p className="thumbnail-sidebar-title">{currentContent[index]?.title || "View Details"}</p>
                    <p className="thumbnail-sidebar-desc">{currentContent[index]?.detail || "Click to view"}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column - Main Image Display */}
          <div className="product-gallery">
            <div className="main-image-wrapper">
              <div className="image-counter">
                {currentImageIndex + 1} / {currentGallery.length}
              </div>
              {currentImage && (
                <img src={currentImage} alt={product.name} className="main-image" />
              )}
            </div>
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="product-details">
            <div className="product-header-info">
              <p className="product-brand">{product.brand}</p>
              <h2 className="product-title">{product.name}</h2>
              <div className="product-color-tag">
                <span className="color-dot-small" style={{ backgroundColor: currentVariant?.colorHex }}></span>
                <span className="color-name">{currentVariant?.name || product.variants?.[0]?.name}</span>
              </div>
            </div>
            
            <div className="dynamic-content-area">
              <div className="content-badge">AI GENERATED VIEW</div>
              <h3 className="content-title">{currentContent[currentImageIndex]?.title || "View Details"}</h3>
              <p className="content-description">{currentContent[currentImageIndex]?.description || "Explore this AI-generated fashion visual."}</p>
              
              <div className="content-specs">
                <div className="spec-row">
                  <span className="spec-label">Details:</span>
                  <span className="spec-value">{currentContent[currentImageIndex]?.detail || "Premium Quality"}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Material:</span>
                  <span className="spec-value">{currentContent[currentImageIndex]?.material || "Premium Fabric"}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Technology:</span>
                  <span className="spec-value">{currentContent[currentImageIndex]?.technique || "AI Neural Rendering"}</span>
                </div>
              </div>
            </div>

            {product.variants && product.variants.length > 0 && (
              <div className="variant-section">
                <div className="variant-header">
                  <span className="variant-label">Available Colors</span>
                </div>
                <div className="color-swatches">
                  {product.variants.map((variant, index) => (
                    <div
                      key={index}
                      className={`color-swatch ${selectedVariant?.name === variant.name ? 'active' : ''}`}
                      onClick={() => handleVariantChange(variant)}
                    >
                      <div className="swatch-color" style={{ backgroundColor: variant.colorHex }}></div>
                      <span className="swatch-name">{variant.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button className="demo-btn">Request Demo</button>
            <p className="demo-note">Explore more AI-generated fashion visuals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;