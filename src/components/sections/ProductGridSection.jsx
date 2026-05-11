import React, { useState, useEffect, useRef } from 'react';
import ProductModal from './ProductModal';
import './ProductGridSection.css';

// --- MUSTARD YELLOW SET (Product 1) ---
import mustardDress from '../../assets/images/Product/model4/Mustard yellow/dress.avif';
import mustardCloths from '../../assets/images/Product/model4/Mustard yellow/cloths.avif';
import mustardDetail1 from '../../assets/images/Product/model4/Mustard yellow/67f2fadb0854b5fc9069ec1f8355196ea444f77c.avif';
import mustardDetail2 from '../../assets/images/Product/model4/Mustard yellow/d8b2afcd42103ca85eee1255097f319ea0664e5b.avif';
import mustardDetail3 from '../../assets/images/Product/model4/Mustard yellow/e4cca33d6284bdf37858fccdcf6f0e8711c02d0f.avif';
import mustardDetail4 from '../../assets/images/Product/model4/Mustard yellow/Mustard yellow.avif';

// --- KHAKI GREEN SET (Product 1) ---
import khakiDress from '../../assets/images/Product/model4/Regular Fit Oxford shirt_Khaki green/dress.avif';
import khakiCloths from '../../assets/images/Product/model4/Regular Fit Oxford shirt_Khaki green/cloths.avif';
import khakiDetail1 from '../../assets/images/Product/model4/Regular Fit Oxford shirt_Khaki green/7af3936c60871821332ca9ea4263c8e958bd6332.avif';
import khakiDetail2 from '../../assets/images/Product/model4/Regular Fit Oxford shirt_Khaki green/9672fb6b391f2648ec14bf832fcc55b5319eb17b.avif';
import khakiDetail3 from '../../assets/images/Product/model4/Regular Fit Oxford shirt_Khaki green/441333b01770958636751642ddc53da87aabc67e.avif';
import khakiDetail4 from '../../assets/images/Product/model4/Regular Fit Oxford shirt_Khaki green/cfe0e64e843f918d7ca3e66d62c1627fd40d5029.avif';
import khakiDetail5 from '../../assets/images/Product/model4/Regular Fit Oxford shirt_Khaki green/Khaki green.avif';

// --- DARK DENIM BLUE SET (Product 2) ---
import darkDenimDress from '../../assets/images/Product/model3/Dark denim blue/dress.avif';
import darkDenimHover from '../../assets/images/Product/model3/Dark denim blue/Regular Jeans.avif';
import darkDenimCloth from '../../assets/images/Product/model3/Dark denim blue/cloth.avif';
import darkDenimDetail1 from '../../assets/images/Product/model3/Dark denim blue/33eb5c1d8c1f9b2be985e166537fda2708115169.avif';
import darkDenimDetail2 from '../../assets/images/Product/model3/Dark denim blue/5ddef9dcb63c234924dbd8983cc6e0031852113d.avif';
import darkDenimDetail3 from '../../assets/images/Product/model3/Dark denim blue/4c1fac1e59c2ab2753ee89f8d1424e4cb845aea1.avif';

// --- LIGHT DENIM BLUE SET (Product 2) ---
import lightDenimDress from '../../assets/images/Product/model3/Light denim blue/dress.avif';
import lightDenimMain from '../../assets/images/Product/model3/Light denim blue/Light denim blue.avif';
import lightDenimDetail1 from '../../assets/images/Product/model3/Light denim blue/dd599f149d236a699056c16266d95b614f0a3d57.avif';
import lightDenimCloth from '../../assets/images/Product/model3/Light denim blue/cloths.avif';
import lightDenimDetail2 from '../../assets/images/Product/model3/Light denim blue/cb85fef472a016cf36e753317a47c06859600553.avif';
import lightDenimDetail3 from '../../assets/images/Product/model3/Light denim blue/310a7c9aef26394a6a08bfeb2301aa1af252d9d1.avif';

// --- BRIGHT RED SET (Product 3) ---
import brightRedMain from '../../assets/images/Product/model1/Bright red/8c2073f10e5d4c6e6c5342f7f460203841532961.avif';
import brightRedHover from '../../assets/images/Product/model1/Bright red/Waistedcottonshirt_Bright red.avif';
import brightRedDetail1 from '../../assets/images/Product/model1/Bright red/96e691a0b34b8365e41e2a1bf293b009bdc88a48.avif';
import brightRedDetail2 from '../../assets/images/Product/model1/Bright red/df05b0b00adc64e2367f202c38c1af6a4f71d722.avif';
import brightRedDetail3 from '../../assets/images/Product/model1/Bright red/e5bcb38106263a9c5c2ca04b78c447464dc49606.avif';

// --- DARK BROWN SET (Product 3) ---
import darkBrownMain from '../../assets/images/Product/model1/Dark brown/5aa57f55e4533905cedf422102f531e196560b05.avif';
import darkBrownDetail1 from '../../assets/images/Product/model1/Dark brown/6a9d286013cdbd7841b67b8677d887b03d5ca821.avif';
import darkBrownDetail2 from '../../assets/images/Product/model1/Dark brown/6efd9db9b548459b005c86190cf6867e2deab6f8.avif';
import darkBrownDetail3 from '../../assets/images/Product/model1/Dark brown/7bc1932fe9b15927688ab966d9e67ebc00aa3367.avif';
import darkBrownHover from '../../assets/images/Product/model1/Dark brown/Waistedcottonshirt_Dark brown.avif';

// --- LIGHT BLUE SET (Product 3) ---
import lightBlueMain from '../../assets/images/Product/model1/Light blue/Waistedcottonshirt_Light blue.avif';
import lightBlueDetail1 from '../../assets/images/Product/model1/Light blue/3cfb39bc29e7b62180c3cd1e40da70dce7dd30a8.avif';

// --- BLUE SET (Product 4) ---
import blueMain from '../../assets/images/Product/model2/Blue/dress.avif';
import blueDetail1 from '../../assets/images/Product/model2/Blue/fc94a82be2c8124b9032eb35e5f06fde0de4cf23.avif';
import blueDetail2 from '../../assets/images/Product/model2/Blue/e04df5a5da4c06ec506f0c5ef34cb055643b0c8b.avif';
import blueCloth from '../../assets/images/Product/model2/Blue/cloth.avif';
import blueHover from '../../assets/images/Product/model2/Blue/Balloon-sleeved blue.avif';
import blueDetail3 from '../../assets/images/Product/model2/Blue/01babdf6cc934457ab2e2b33c7d3bd7bbe0c3e59.avif';

// --- RED STRIPED SET (Product 4) ---
import redStripedMain from '../../assets/images/Product/model2/RedStriped/dress.avif';
import redStripedHover from '../../assets/images/Product/model2/RedStriped/Balloon-sleeved redstriped.avif';
import redStripedCloth from '../../assets/images/Product/model2/RedStriped/cloth.avif';
import redStripedBack from '../../assets/images/Product/model2/RedStriped/backpose.avif';

const ProductGridSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [hoverStates, setHoverStates] = useState({});
  const [currentImages, setCurrentImages] = useState({});
  const sectionRef = useRef(null);

  // Products with full color variant support
  const products = [
    { 
      id: 1, 
      brand: "AdvertFlair", 
      name: "Premium Dress Collection", 
      variants: [
        { 
          name: "Mustard Yellow", 
          colorHex: "#E1AD01", 
          mainImg: mustardDress,
          hoverImg: mustardDetail1,
          gallery: [mustardDress, mustardCloths, mustardDetail1, mustardDetail2, mustardDetail3, mustardDetail4],
        },
        { 
          name: "Khaki Green", 
          colorHex: "#4B5320", 
          mainImg: khakiDress,
          hoverImg: khakiDetail1,
          gallery: [khakiDress, khakiCloths, khakiDetail1, khakiDetail2, khakiDetail3, khakiDetail4, khakiDetail5],
        }
      ],
      description: "Elegant dress perfect for any occasion. Crafted with premium quality fabric for ultimate comfort and style.",
    },
    { 
      id: 2, 
      brand: "AdvertFlair", 
      name: "Premium Denim Collection", 
      variants: [
        { 
          name: "Dark Denim Blue", 
          colorHex: "#1a3a5c", 
          mainImg: darkDenimDress,
          hoverImg: darkDenimHover,
          gallery: [darkDenimDress, darkDenimHover, darkDenimCloth, darkDenimDetail1, darkDenimDetail2, darkDenimDetail3],
        },
        { 
          name: "Light Denim Blue", 
          colorHex: "#7CB9E8", 
          mainImg: lightDenimDress,
          hoverImg: lightDenimMain,
          gallery: [lightDenimDress, lightDenimMain, lightDenimDetail1, lightDenimCloth, lightDenimDetail2, lightDenimDetail3],
        }
      ],
      description: "Premium denim collection featuring classic blue washes. Perfect for everyday wear with a modern, tailored fit.",
    },
    { 
      id: 3, 
      brand: "AdvertFlair", 
      name: "Waisted Cotton Shirt Collection", 
      variants: [
        { 
          name: "Bright Red", 
          colorHex: "#E3472F", 
          mainImg: brightRedMain,
          hoverImg: brightRedHover,
          gallery: [brightRedMain, brightRedDetail1, brightRedDetail2, brightRedDetail3, brightRedHover],
        },
        { 
          name: "Dark Brown", 
          colorHex: "#5C4033", 
          mainImg: darkBrownMain,
          hoverImg: darkBrownHover,
          gallery: [darkBrownMain, darkBrownDetail1, darkBrownDetail2, darkBrownDetail3, darkBrownHover],
        },
        { 
          name: "Light Blue", 
          colorHex: "#87CEEB", 
          mainImg: lightBlueMain,
          hoverImg: lightBlueMain,
          gallery: [lightBlueMain, lightBlueDetail1],
        }
      ],
      description: "Classic waisted cotton shirt with a tailored fit. Perfect for both casual and formal occasions.",
    },
    { 
      id: 4, 
      brand: "AdvertFlair", 
      name: "Balloon Sleeve Dress Collection", 
      variants: [
        { 
          name: "Blue", 
          colorHex: "#4A90E2", 
          mainImg: blueMain,
          hoverImg: blueHover,
          gallery: [blueMain, blueDetail1, blueDetail2, blueCloth, blueHover, blueDetail3],
        },
        { 
          name: "Red Striped", 
          colorHex: "#DC143C", 
          mainImg: redStripedMain,
          hoverImg: redStripedHover,
          gallery: [redStripedMain, redStripedHover, redStripedCloth, redStripedBack],
        }
      ],
      description: "Stylish balloon sleeve dress with elegant design. Perfect for making a fashion statement.",
    }
  ];

  // Initialize states for all products
  useEffect(() => {
    const initialVariants = {};
    const initialHovers = {};
    const initialImages = {};
    
    products.forEach(product => {
      initialVariants[product.id] = product.variants[0];
      initialHovers[product.id] = false;
      initialImages[product.id] = product.variants[0].mainImg;
    });
    
    setSelectedVariants(initialVariants);
    setHoverStates(initialHovers);
    setCurrentImages(initialImages);
    
    console.log("Initialized products:", initialImages);
  }, []);

  const handleMouseEnter = (productId) => {
    const variant = selectedVariants[productId];
    if (variant && variant.hoverImg) {
      setCurrentImages(prev => ({ ...prev, [productId]: variant.hoverImg }));
    }
    setHoverStates(prev => ({ ...prev, [productId]: true }));
  };

  const handleMouseLeave = (productId) => {
    const variant = selectedVariants[productId];
    if (variant && variant.mainImg) {
      setCurrentImages(prev => ({ ...prev, [productId]: variant.mainImg }));
    }
    setHoverStates(prev => ({ ...prev, [productId]: false }));
  };

  const handleVariantChange = (productId, variant) => {
    console.log(`Changing product ${productId} to ${variant.name}`);
    
    const isHovering = hoverStates[productId];
    setSelectedVariants(prev => ({ ...prev, [productId]: variant }));
    
    // Update image immediately
    setCurrentImages(prev => ({ 
      ...prev, 
      [productId]: isHovering && variant.hoverImg ? variant.hoverImg : variant.mainImg 
    }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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

  const openModal = (product) => {
    const selectedVariant = selectedVariants[product.id];
    setSelectedProduct({
      ...product,
      currentVariant: selectedVariant
    });
  };

  return (
    <section className="product-grid-section" ref={sectionRef}>
      <div className="product-header">
        <span className="product-badge">AI GENERATED COLLECTION</span>
        <h2 className="product-title">Premium Fashion Visuals</h2>
        <p className="product-subtitle">AI-powered fashion visualization showcasing our creative capabilities</p>
      </div>

      <div className="product-container">
        {products.map((product, index) => {
          const selectedVariant = selectedVariants[product.id];
          const currentImage = currentImages[product.id];
          
          return (
            <div 
              key={product.id} 
              className={`product-card ${visible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={() => handleMouseLeave(product.id)}
            >
              <div 
                className="product-image-wrapper"
                onClick={() => openModal(product)}
              >
                {currentImage && (
                  <img src={currentImage} alt={product.name} />
                )}
                <div className="product-overlay">
                  <span className="quick-view">Quick View</span>
                </div>
              </div>
              <div className="product-info-grid">
                <p className="product-brand">{product.brand}</p>
                <p className="product-name" onClick={() => openModal(product)}>{product.name}</p>
                {product.variants && (
                  <div className="product-colors" onClick={(e) => e.stopPropagation()}>
                    {product.variants.map((variant, idx) => (
                      <span 
                        key={idx} 
                        className={`color-dot ${selectedVariant?.name === variant.name ? 'active' : ''}`}
                        style={{ backgroundColor: variant.colorHex }}
                        title={variant.name}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleVariantChange(product.id, variant);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default ProductGridSection;