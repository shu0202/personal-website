import React, { useState, useEffect } from 'react';
import './Project.css';
import Header from './Header';

import { MotionAnimate } from 'react-motion-animate'

import image1 from './images/banner_meteror.png';
import image2 from './images/banner_chihang.png';
import image3 from './images/banner_epiphany.png';
import image4 from './images/banner_bloom.png';
import title1 from './images/title_meteror.png';
import title2 from './images/title_chihang.png';
import title3 from './images/title_epiphany.png';
import title4 from './images/title_bloom.png';

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gradientSide, setGradientSide] = useState(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [hasTitleBeenVisible, setHasTitleBeenVisible] = useState([false, false, false]);

  const images = [image1, image2, image3, image4];
  const titles = [title1, title2, title3, title4];


  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = currentScrollPos > prevScrollPos;
    setIsScrollingDown(isScrollingDown);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (isScrollingDown && !hasTitleBeenVisible[currentIndex]) {
      const newVisibilityState = [...hasTitleBeenVisible];
      newVisibilityState[currentIndex] = true;
      setHasTitleBeenVisible(newVisibilityState);
    }
    setIsTitleVisible(isScrollingDown || hasTitleBeenVisible[currentIndex]);
  }, [isScrollingDown, currentIndex, hasTitleBeenVisible]);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    resetTitleVisibility();
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    resetTitleVisibility();
  };

  const resetTitleVisibility = () => {
    setIsTitleVisible(false);
    setIsScrollingDown(false);
    setPrevScrollPos(window.pageYOffset);
    setHasTitleBeenVisible([false, false, false]);
  };

  const handleMouseMove = (e) => {
    const banner = e.currentTarget;
    const rect = banner.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    if (mouseX < rect.width / 4) {
      setGradientSide('left');
    } else if (rect.width - rect.width / 4 < mouseX && mouseX < rect.width) {
      setGradientSide('right');
    } else {
      setGradientSide(null);
    }
  };

  const handleMouseLeave = () => {
    setGradientSide(null);
  };

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
       <Header />
      <div
        className="banner"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
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
        <div
          className={`gradient-overlay ${gradientSide} ${gradientSide ? 'show' : ''}`}
        ></div>
        <div className="buttons">
          {gradientSide === 'left' && (
            <button
              className="prev-button"
              onClick={handlePrevClick}
              style={{ transition: 'background-color 0.3s ease-in-out' }}
            >
              <svg
                className="arrow-left"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                style={{ fill: 'rgb(255, 255, 255)'}}
              >
                <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
              </svg>
            </button>
          )}
          {gradientSide === 'right' && (
            <button
              className="next-button"
              onClick={handleNextClick}
              style={{ transition: 'background-color 0.3s ease-in-out' }}
            >
              <svg
                className="arrow-right"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                style={{ fill: 'rgb(255, 255, 255)'}}
              >
                <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="button-container">
        <button className="nav-button" onClick={handleTopClick}>TOP</button>
        <button className="nav-button">ABOUT</button>
        <button className="nav-button">SYSTEM</button>
        <button className="nav-button">CODE</button>
      </div>
      <MotionAnimate reset={true}>
      <div className="title-container">
        {titles.map((title, index) => (
          <img
            key={index}
            src={title}
            alt={`Title ${index}`}
            className={isTitleVisible && currentIndex === index ? 'active' : ''}
          />
        ))}
      </div>
      </MotionAnimate>
    </div>
  );
};

export default Project;
