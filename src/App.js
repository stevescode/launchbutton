import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import ReactConfetti from 'react-confetti';
import config from './config.json';
import Footer from './components/Footer';
import LoadingDots from './components/LoadingDots';

function App() {
  const [showButton, setShowButton] = useState(true);
  const [currentDiv, setCurrentDiv] = useState(0);

  const handleButtonClick = () => {
    setShowButton(false);
  };

  useEffect(() => {
    let interval;
    if (!showButton && currentDiv < config.divs.length - 1) {
      interval = setInterval(() => {
        setCurrentDiv((prevDiv) => {
          if (prevDiv >= config.divs.length - 1) {
            clearInterval(interval); // Stop the interval after displaying the last div
          }
          return prevDiv + 1;
        });
      }, config.divs[currentDiv].duration);
    }

    return () => {
      clearInterval(interval);
    };
  }, [showButton, currentDiv]);

  return (
    <>
      <Header />
      <div className="App">
        {currentDiv === config.divs.length - 1 && <ReactConfetti width={window.innerWidth} height={window.innerHeight} />}
        {showButton && <Button onClick={handleButtonClick} />}
        {showButton && <div className="warning-container"><p><strong>WARNING:</strong> Do not press this button until ready to launch 3 person boxes!</p></div>}

        {!showButton && (
          <div className="countdown-text">
            {config.divs.map((div, index) => (
              <div
                key={index}
                className={`${div.className} ${index === currentDiv ? 'fade-in' : 'fade-out'} ${index === config.divs.length - 1 ? 'last-div' : ''}`}
                style={div.style}
              >
                {div.showLoadingDots && <LoadingDots content={div.content} duration={div.duration} />}
                {!div.showLoadingDots && <div>{div.content}</div>}
              </div>

            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
