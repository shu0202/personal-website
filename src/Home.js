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
        {/*<Header />*/}
        <h1 className='big_title'>Hi I am Ivan!</h1>
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
      </div>
    );
  }

  export default Home;