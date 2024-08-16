import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from './images/logo.png';
import logoHover from './images/logo_hover.png';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [opacity, setOpacity] = useState(1);

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home route
  };

  const handleProjectButtonClick = () => {
    navigate('/project');
  };

  const handleScroll = () => {
    if (location.pathname === '/') {
      setOpacity(1);
      return;
    }

    const scrolled = window.scrollY;
    const maxScroll = 200; // Adjust this value as needed

    // Calculate opacity (0 - 1)
    const newOpacity = Math.max(1 - scrolled / maxScroll, 0);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if the current route is the home page
  const isHome = location.pathname === '/';

  return (
    <header className="header" style={{ opacity }}>
      {!isHome && (
        <div className="header-gradient"></div>
      )}
      <div className="header-logo">
        <button className="logo-button" onClick={handleHomeClick}>
          <img src={logo} alt="Logo" className="normal-logo" />
          <img src={logoHover} alt="Logo Hover" className="hover-logo" />
        </button>
      </div>
      {isHome && (
        <nav className="header-nav-v">
          <button className="nav-button_v">ABOUT</button>
          <button className="nav-button_v">EXPERIENCE</button>
          <button className="nav-button_v" onClick={handleProjectButtonClick}>PROJECTS</button>
          <button className="nav-button_v">CONTACT</button>
        </nav>
      )}
      
      {!isHome && (
        <nav className="header-nav-h">
          <button className="nav-button_h">ABOUT</button>
          <button className="nav-button_h">EXPERIENCE</button>
          <button className="nav-button_h" onClick={handleProjectButtonClick}>PROJECTS</button>
          <button className="nav-button_h">CONTACT</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
