import React, { useState, useEffect } from 'react';

const LoadingDots = ({ content, duration }) => {
  const dotCount = Math.floor(duration / 1000); // Calculate the number of dots based on duration
  const [dots, setDots] = useState('');

  useEffect(() => {
    setDots(''); // Reset dots to empty string whenever duration changes

    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= dotCount ? '' : prevDots + '.'));
    }, 1000); // Always add a dot every second

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [dotCount, duration]);

  return (
    <div>
      {content}
      {dots}
    </div>
  );
};

export default LoadingDots;
