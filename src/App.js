import React, { useState } from 'react';
import './App.css';

import image1 from './images/banner_meteror.png';
import image2 from './images/banner_chihang.png';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="App">
      <div className="banner">
        <div
          className="banner-image"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Banner ${index}`} />
          ))}
        </div>
        <div className="buttons">
          <button onClick={handlePrevClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </div>
      {/* Add the rest of your website content here */}
    </div>
  );
}

export default App;