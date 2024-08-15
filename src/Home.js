import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import './Home.css';
import Header from './Header';

import { MotionAnimate } from 'react-motion-animate'


import image1 from './images/meteror.png';
import image2 from './images/chihang.png';
import image3 from './images/epiphany.png';

function Home() {
    const navigate = useNavigate();
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [fadeEffect, setFadeEffect] = useState(false);
    const [opacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeEffect(true);
            setTimeout(() => {
                setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % personalProjects.length);
                setFadeEffect(false);
            }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleProjectButtonClick = () => {
      navigate('/project');
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = 200; // Adjust this value as needed
  
      // Calculate opacity (0 - 1)
      const newOpacity = Math.max(1 - scrolled / maxScroll, 0);
      setScrollOpacity(newOpacity);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const personalProjects = [
      {
        id: 1,
        title: 'meteror',
        imageUrl: image1
      },
      {
        id: 2,
        title: 'chihang',
        imageUrl: image2
      },
      {
        id: 3,
        title: 'epiphany',
        imageUrl: image3
      }
    ];

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
              style={{ fill: 'rgb(1, 0, 82)', marginTop: '5px' }}
            >
              <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
            </svg>
        </div>
        {/* 
        <MotionAnimate animation='scrollFadeIn'>
        <div className='projects-container'>
          <p className='section-name'>PERSONAL PROJECTS: </p>
          <div className="image-carousel">
            <img
              src={personalProjects[currentProjectIndex].imageUrl}
              alt={personalProjects[currentProjectIndex].title}
              style={{
                opacity: fadeEffect ? 0 : 1,
                transition: 'opacity 0.5s ease-in-out'
              }}
            />
          </div>
        </div>
        <button className='project-button' onClick={handleProjectButtonClick}>Go to</button>
        </MotionAnimate>
        <p className='section-name'>PERSONAL PROJECTS: </p>
        <p className='section-name'>PERSONAL PROJECTS: </p>
        <p className='section-name'>PERSONAL PROJECTS: </p>
        <p className='section-name'>PERSONAL PROJECTS: </p>
        <p className='section-name'>PERSONAL PROJECTS: </p>
        <p className='section-name'>PERSONAL PROJECTS: </p>
      */}
      
      </div>
    );
  }

  export default Home;