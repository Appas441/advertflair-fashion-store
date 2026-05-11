import React, { useEffect, useState } from 'react';
import './WorkflowSection.css';

// Import images
import model2 from '../../assets/images/model2.jpg';
import model3 from '../../assets/images/model3.jpg';
import model4 from '../../assets/images/model4.jpg';
import model5 from '../../assets/images/model5.jpg';
import model6 from '../../assets/images/model6.jpg';

const WorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { number: 1, title: 'Upload garment', description: 'Simple drag-and-drop upload of your product images' },
    { number: 2, title: 'Set Brand DNA', description: 'Define your brand colors, mood, and aesthetic' },
    { number: 3, title: 'Generate visuals', description: 'AI creates professional shots in minutes' },
    { number: 4, title: 'Review & annotate', description: 'Provide feedback directly on images' },
    { number: 5, title: 'Approve & export', description: 'Download high-res assets for any channel' }
  ];

  const stepImages = [model2, model3, model4, model5, model6];
  const stepTitles = ['Upload', 'Brand DNA', 'Generate', 'Review', 'Export'];

  // Auto rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="workflow">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">WORKFLOW</span>
          <h2 className="section-title">From product to campaign in 5 steps</h2>
          <p className="section-description">No learning curve. No complexity. Just results.</p>
        </div>

        <div className="workflow-wrapper">
          {/* Left Side - Steps */}
          <div className="workflow-steps-container">
            <div className="workflow-steps">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`step-item ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="step-number-wrapper">
                    <div className="step-number">{step.number}</div>
                    {index < steps.length - 1 && <div className="step-connector"></div>}
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Dynamic Image */}
          <div className="workflow-image-container">
            <div className="image-wrapper">
              <img 
                src={stepImages[activeStep]} 
                alt={stepTitles[activeStep]} 
                className="workflow-image"
                key={activeStep}
              />
              <div className="image-overlay">
                <div className="image-step-badge">
                  {String(activeStep + 1).padStart(2, '0')}
                </div>
                <div className="image-step-title">{stepTitles[activeStep]}</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default WorkflowSection;