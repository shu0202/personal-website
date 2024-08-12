import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './images/logo.png';
import logoHover from './images/logo_hover.png';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home route
  };

  const handleProjectButtonClick = () => {
    navigate('/project'); 
  };

  return (
    <header className="header">
      <div className="header-gradient"></div>
      <div className="header-logo">
        <button className="logo-button" onClick={handleHomeClick}>
          <img src={logo} alt="Logo" className="normal-logo" />
          <img src={logoHover} alt="Logo Hover" className="hover-logo" />
        </button>
      </div>
      <div className='home-button-container'>
        <button className="home-button" onClick={handleHomeClick}>HOME</button>
      </div>
      <nav className="header-nav">
        <button className="nav-button_h">ABOUT</button>
        <button className="nav-button_h">EDUCATION AND EXPERIENCE</button>
        <button className="nav-button_h" onClick={handleProjectButtonClick}>PROJECTS</button>
        <button className="nav-button_h">SKILLS</button>
      </nav>
    </header>
  );
};

export default Header;