import React, { useState } from 'react';
import './Button.css';

const Button = ({ onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
    onClick();
  };

  return (
    <div className={`button pushable ${clicked ? 'clicked' : ''}`} onClick={handleButtonClick}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">
        {clicked ? 'Launching...' : 'Soft Launch'}
      </span>
    </div>
  );
};

export default Button;
