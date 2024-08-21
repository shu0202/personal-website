import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './images/logo_new.png';
import logoHover from './images/logo_new_hover.png';
import linkedinWhite from './images/linkedin_white.png'; // Add LinkedIn image import
import githubWhite from './images/github_white.png'; // Add GitHub image import
import linkedinBlack from './images/linkedin_black.png'; // Add LinkedIn image import
import githubBlack from './images/github_black.png'; // Add GitHub image import
import linkedinGrey from './images/linkedin_grey.png'; // Add LinkedIn image import
import githubGrey from './images/github_grey.png'; // Add GitHub image import
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [headerOpacity, setHeaderOpacity] = useState(1);
  const [socialIconsOpacity, setSocialIconsOpacity] = useState(1);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home route
  };

  const handleProjectButtonClick = () => {
    navigate('/project');
  };

  const handleAboutButtonClick = () => {
    navigate('/about');
  };

  const handleContactButtonClick = () => {
    navigate('/contact');
  };

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const maxScroll = 200; // Adjust this value as needed

    // Calculate current scroll position
    const currentScrollPos = window.pageYOffset;

    // Determine scroll direction
    const isScrollingDown = currentScrollPos > prevScrollPos;

    // Update header opacity based on scroll direction
    let newHeaderOpacity;
    if (isScrollingDown) {
      // Decrease opacity when scrolling down
      newHeaderOpacity = Math.max(1 - scrolled / maxScroll, 0);
    } else {
      // Increase opacity when scrolling up
      newHeaderOpacity = Math.min(headerOpacity + (prevScrollPos - scrolled) / (maxScroll - 100), 1);
    }
    if (location.pathname === '/') {
      if (scrolled > 3650){
        newHeaderOpacity = Math.max(1 - ((scrolled-3650) / (maxScroll)), 0);
        setHeaderOpacity(newHeaderOpacity);
      } else {
        setHeaderOpacity(1);
      }
    } else {
      setHeaderOpacity(newHeaderOpacity);
    }

    // Update social icons opacity separately if on home page
    if (location.pathname === '/') {
      let newSocialIconsOpacity;
      if (isScrollingDown) {
        newSocialIconsOpacity = Math.max(1 - scrolled / maxScroll, 0);
      } else {
        newSocialIconsOpacity = Math.min(1 - scrolled / maxScroll, 1);
      }
      setSocialIconsOpacity(newSocialIconsOpacity);
    }

    // Update previous scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  // Check if the current route is the home page
  const isHome = location.pathname === '/';

  return (
    <header className="header" style={{
      opacity: headerOpacity,
      display: headerOpacity === 0 ? 'none' : 'block'
    }}>
      {!isHome && (
        <div className="header-gradient"></div>
      )}
      <div className="header-logo">
        <button className="logo-button" onClick={handleHomeClick}>
          <a className='logo-container'>
            <img src={logo} alt="Logo" className="normal-logo" />
            <img src={logoHover} alt="Logo Hover" className="hover-logo" />
          </a>
        </button>
      </div>
      {isHome && (
        <nav className="header-nav-v">
          <button className="nav-button_v" onClick={handleAboutButtonClick}>ABOUT</button>
          <button className="nav-button_v">EXPERIENCE</button>
          <button className="nav-button_v" onClick={handleProjectButtonClick}>PROJECTS</button>
          <button className="nav-button_v" onClick={handleContactButtonClick}>CONTACT</button>
        </nav>
      )}

      {isHome && (
        <div className="social-icons-main" style={{
          opacity: socialIconsOpacity,
          display: socialIconsOpacity === 0 ? 'none' : 'block'
        }}>
          <a className='main-icon-1' href="https://www.linkedin.com/in/yan-chun-yeung-a0803320b/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinBlack} alt="LinkedIn" className="social-icon1-main social-icon1-main-black" />
            <img src={linkedinGrey} alt="LinkedIn" className="social-icon1-main social-icon1-main-grey" />
          </a>
          <a className='main-icon-2' href="https://github.com/shu0202" target="_blank" rel="noopener noreferrer">
            <img src={githubBlack} alt="GitHub" className="social-icon2-main social-icon2-main-black" />
            <img src={githubGrey} alt="GitHub" className="social-icon2-main social-icon2-main-grey" />
          </a>
        </div>
      )}
      
      {!isHome && (
        <nav className="header-nav-h">
          <button className="nav-button_h" onClick={handleAboutButtonClick}>ABOUT</button>
          <button className="nav-button_h">EXPERIENCE</button>
          <button className="nav-button_h" onClick={handleProjectButtonClick}>PROJECTS</button>
          <button className="nav-button_h" onClick={handleContactButtonClick}>CONTACT</button>
          <div className="social-icons-project">
            <a className ='project-icon-1' href="https://www.linkedin.com/in/yan-chun-yeung-a0803320b/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinWhite} alt="LinkedIn" className="social-icon1-project social-icon1-project-white" />
              <img src={linkedinGrey} alt="LinkedIn" className="social-icon1-project social-icon1-project-grey" />
            </a>
            <a className ='project-icon-2' href="https://github.com/shu0202" target="_blank" rel="noopener noreferrer">
              <img src={githubWhite} alt="GitHub" className="social-icon2-project social-icon2-project-white" />
              <img src={githubGrey} alt="GitHub" className="social-icon2-project social-icon2-project-grey" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
