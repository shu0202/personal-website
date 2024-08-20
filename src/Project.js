import React, { useState, useEffect, useRef } from 'react';
import './Project.css';
import Header from './Header';
import Footer from './Footer';
import projectsData from './projects.json'; // Import the JSON file

import { MotionAnimate } from 'react-motion-animate';

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gradientSide, setGradientSide] = useState(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [currentScreen, setCurrentScreen] = useState('About')
  const [hasTitleBeenVisible, setHasTitleBeenVisible] = useState([false, false, false]);

  const currentProject = projectsData[currentIndex];
  const hoveredButtonRefs = useRef({});

  const handleMouseEnterButton = (key) => {
    hoveredButtonRefs.current[key] = true;
  };

  const handleMouseLeaveButton = (key) => {
    hoveredButtonRefs.current[key] = false;
  };


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
    setCurrentIndex((currentIndex - 1 + projectsData.length) % projectsData.length);
    resetTitleVisibility();
    setCurrentScreen('About');
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % projectsData.length);
    resetTitleVisibility();
    setCurrentScreen('About');
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

  const showExtraButtons = currentProject.title === 'title_meteror.png' || currentProject.title === 'title_chihang.png';

  return (
    <div className="project">
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
          {projectsData.map((project, index) => (
            <img key={index} src={require(`./images/${project.image}`)} alt={`Banner ${index}`} />
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
                className="arrow-left-project"
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
                className="arrow-right-project"
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
        <button className="nav-button" onClick={() => setCurrentScreen('About')}>ABOUT</button>
        <button className="nav-button" onClick={() => setCurrentScreen('System')}>SYSTEM</button>
        {/* Conditionally render the STORY and CHARACTERS buttons */}
        {showExtraButtons && (
          <>
            <button className="nav-button" onClick={() => setCurrentScreen('Story')}>STORY</button>
            <button className="nav-button" onClick={() => setCurrentScreen('Characters')}>CHARACTERS</button>
          </>
        )}
        <button className="nav-button" onClick={() => window.open(currentProject.codeLink, '_blank')}>CODE</button>
      </div>
      <div className="title-container">
        {projectsData.map((project, index) => (
          <img
            key={index}
            src={require(`./images/${project.title}`)}
            alt={`Title ${index}`}
            className={isTitleVisible && currentIndex === index ? 'active' : ''}
          />
        ))}
      </div>
      <div className='screen-name-description'>
        <div className='screen-name-container'>
          <div className="screen-name">
            {currentScreen.toUpperCase()}
          </div>
        </div>
        {currentScreen === 'About' && (
          <div className='project-description-container'>
            <MotionAnimate reset={true}>
              <p className="project-description">{currentProject.description}</p>
            </MotionAnimate>
            <MotionAnimate animation='scrollPosition' xPos={[1000, 0]} scrollPositions={[0.4, 0.6]}>
              <div className="language-tech-container">
                <ul className="language-list">
                  <p className='language-list-title'>Languages & Technology</p>
                  {currentProject.language.map((lang, index) => (
                    <li key={index} className="language-item">
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionAnimate>
          </div>
        )}
        {currentScreen === 'System' && (
          <div className='project-system-container'>
            <MotionAnimate reset={true}>
              <p className="project-system">{currentProject.system}</p>
            </MotionAnimate>
            <div className='project-system-link-container'>
              {Object.entries(currentProject['system-link']).map(([key, value]) => (
                <div
                  className='project-system-link-button-full'
                  onMouseEnter={() => handleMouseEnterButton(key)}
                  onMouseLeave={() => handleMouseLeaveButton(key)}
                  key={key}
                >
                  <a href={value} className='project-system-link-button' style={{ textDecoration: 'none' }}>
                    {key}
                  </a>
                  <svg
                    className="arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="5%"
                    height="5%"
                    viewBox="0 0 25 25"
                    style={{
                      fill: hoveredButtonRefs.current[key]
                        ? 'rgb(107, 107, 107)'
                        : 'rgb(1, 0, 82)',
                      transition: 'fill 0.3s ease',
                    }}
                  >
                    <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Project;
