import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import './Home.css';
import Header from './Header';
import Footer from './Footer';

import { MotionAnimate } from 'react-motion-animate'


import image1 from './images/cg_pool.png';
import image2 from './images/cg_bloom.png';
import image3 from './images/cg_meteror.png';

function Home() {
    const navigate = useNavigate();
    const [scale1, setScale1] = useState(0.1); 
    const [scale2, setScale2] = useState(0.1); 
    const [scale3, setScale3] = useState(0.1);
    const [opacity, setScrollOpacity] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    // Event handlers for mouse enter and leave
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const handleProjectButtonClick = () => {
      navigate('/project');
    };

    const handleAboutButtonClick = () => {
      navigate('/about');
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const startScroll = 1000;
      const maxScroll = 200; // Adjust this value as needed
      const maxScroll_s1 = 1500;
      const maxScroll_s2 = 2000;
      const maxScroll_s3 = 2500;

      // Calculate opacity (0 - 1)
      const newOpacity = Math.max(1 - scrolled / maxScroll, 0);
      setScrollOpacity(newOpacity);
  
      const newScale1 = scrolled > startScroll
          ? Math.min(1, 0.2 + (scrolled  / maxScroll_s1) * 0.8) // Adjust the scale rate by modifying 0.2
          : 0.1; // Initial scale if scroll position is before startScroll
      setScale1(newScale1);

      const newScale2 = scrolled > startScroll
          ? Math.min(1, 0.2 + (scrolled / maxScroll_s2) * 0.8)
          : 0.1;
      setScale2(newScale2);

      const newScale3 = scrolled > startScroll
          ? Math.min(1, 0.2 + (scrolled/ maxScroll_s3) * 0.8)
          : 0.1;
      setScale3(newScale3);
      };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div className="home-screen">
        <Header />
        <div className="welcome-message">
        <MotionAnimate animation='scrollPosition' xPos={[10170, -1770]}>
          <h1 className='big_title1'>HI I AM YAN CHUN</h1>
        </MotionAnimate>
        <MotionAnimate animation='scrollPosition' xPos={[-2965, 1500]}>
          <h1 className='big_title2'>IVAN, YEUNG</h1>
        </MotionAnimate>
        <MotionAnimate animation='scrollPosition' xPos={[1600, -1770]}>
          <h1 className='big_title1'>WELCOME TO MY</h1>
        </MotionAnimate>
        <MotionAnimate animation='scrollPosition' xPos={[-598, 1500]}>
          <h1 className='big_title2'>WEBSITE</h1>
        </MotionAnimate>
        </div>
        <div className='scroll-container' style={{ opacity }}>
            <p className='scroll-down-text'>scroll</p>
            <svg
              className="arrow-down"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              style={{
                fill: isHovered ? 'rgb(107, 107, 107)' : 'rgb(1, 0, 82)',
                transition: 'fill 0.3s ease',
              }}
            >
              <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
            </svg>
        </div>
        {/*About Block*/}
          <div className='section-container'>
            <MotionAnimate animation='scrollPosition' xPos={[-1000, 0]} scrollPositions={[0.1, 0.5]}>
              <p className='section-name'>About me</p> 
            </MotionAnimate>
            <MotionAnimate
              animation='fadeInUp'
              reset={true}
              distance={50}
              delay={0.5}
              speed={0.7}>
              <p className='about-content'>
                I am a <strong>MSc Computer Science</strong> graduate from the University of Bath 
                and an <strong>Economics and Finance</strong> graduate from the University of Hong Kong,
                that have a passion in <strong>software development and IT</strong>.
              </p>
            </MotionAnimate> 
            <MotionAnimate animation='scrollPosition' xPos={[0, 500]} scrollPositions={[0.3, 0]}>
              <button className='more-button'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleAboutButtonClick}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <p className='more-button-text'>more</p>
                  <svg
                    className="arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30%"
                    height="30%"
                    viewBox="0 0 24 24"
                    style={{
                      fill: isHovered ? 'rgb(107, 107, 107)' : 'rgb(1, 0, 82)',
                      transition: 'fill 0.3s ease',
                    }}
                  >
                    <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                  </svg>
                </span>
              </button>
            </MotionAnimate>
          </div>

        {/*Project Block*/}
          <div className='section-container'> 
            <MotionAnimate animation='scrollPosition' xPos={[-1000, 0]} scrollPositions={[0.1, 0.5]}>
              <p className='section-name'>Projects</p> 
            </MotionAnimate>
            <MotionAnimate
              animation='fadeInUp'
              reset={true}
              distance={50}
              delay={0.5}
              speed={0.7}>
              <p className='about-content'>
                Things that I am passionate about: <strong>software engineering</strong>, <strong>game development</strong> and more.
              </p> 
            </MotionAnimate>
            <MotionAnimate animation='scrollPosition' xPos={[0, 500]} scrollPositions={[0.3, 0]}>
              <button className='more-button'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <p className='more-button-text' onClick={handleProjectButtonClick}>more</p>
                  <svg
                    className="arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30%"
                    height="30%"
                    viewBox="0 0 24 24"
                    style={{
                      fill: isHovered ? 'rgb(107, 107, 107)' : 'rgb(1, 0, 82)',
                      transition: 'fill 0.3s ease',
                    }}
                  >
                    <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                  </svg>
                </span>
              </button>
            </MotionAnimate>
            <p className='sub-section-name'>
              Skills:
            </p>
            <div className="skills-images-container">
            <MotionAnimate
              reset={true}
              variant={{
                hidden: { opacity: 0, x:-20 },
                show: { opacity: 1, x:0 }}}
              speed={0.7}>
                <p className='sub-content'>
                  <ul className='skill-list'>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>Java</li>
                    <li>JavaScript <br></br>(React/React-native)</li>
                    <li>Bash/Shell Scripting</li>
                    <li>SQL</li>
                    <li>R</li>
                    <li>Qt</li>
                    <li>Ren'Py</li>
                    <li>Adobe Photoshop</li>
                    <li>ASP</li>
                    <li>Haskell</li>
                    <li>Firebase</li>
                    <li>HTML/CSS</li>
                  </ul>
                </p>
              </MotionAnimate>
              <div className="skills-images">
                <div className='vertical-images'>
                  <img src={image1} alt="Skill related image 1" className="skill-image1" style={{ transform: `scale(${scale1})` }} />
                  <img src={image2} alt="Skill related image 2" className="skill-image2" style={{ transform: `scale(${scale2})` }} />
                </div>
                <img src={image3} alt="Skill related image 3" className="skill-image3" style={{ transform: `scale(${scale3})` }} />
              </div>
            </div>
          </div>

        {/*Experiece Block*/}
          <div className='section-container'> 
            <MotionAnimate animation='scrollPosition' xPos={[-1000, 0]} scrollPositions={[0.1, 0.5]}>
              <p className='section-name'>Experience</p> 
            </MotionAnimate>
            <MotionAnimate
              animation='fadeInUp'
              reset={true}
              distance={50}
              delay={0.5}
              speed={0.7}>
              <p className='about-content'>
                Studied economics from <strong>the University of Hong Kong</strong>.
                Master of computer science at the <strong>University of Bath</strong>.
              </p> 
            </MotionAnimate>
            <MotionAnimate animation='scrollPosition' xPos={[0, 500]} scrollPositions={[0.3, 0]}>
              <button className='more-button'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <p className='more-button-text'>more</p>
                  <svg
                    className="arrow-right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30%"
                    height="30%"
                    viewBox="0 0 24 24"
                    style={{
                      fill: isHovered ? 'rgb(107, 107, 107)' : 'rgb(1, 0, 82)',
                      transition: 'fill 0.3s ease',
                    }}
                  >
                    <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                  </svg>
                </span>
              </button>
            </MotionAnimate>
          </div>
          <Footer />
      </div>
    );
  }

  export default Home;