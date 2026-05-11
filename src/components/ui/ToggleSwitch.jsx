import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label className="toggle-switch-container">
      <input
        type="checkbox"
        className="toggle-input"
        checked={checked}
        onChange={onChange}
      />
      <span className="toggle-slider-round">
        <span className="toggle-icon sun">☀️</span>
        <span className="toggle-icon moon">🌙</span>
        <span className="toggle-knob"></span>
      </span>
    </label>
  );
};

export default ToggleSwitch;