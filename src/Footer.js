import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import linkedinBlack from './images/linkedin_black.png'; // Add LinkedIn image import
import githubBlack from './images/github_black.png'; // Add GitHub image import
import linkedinGrey from './images/linkedin_grey.png'; // Add LinkedIn image import
import githubGrey from './images/github_grey.png'; // Add GitHub image import
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  const location = useLocation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="icons">
            <a className='icon-1' href="https://www.linkedin.com/in/yan-chun-yeung-a0803320b/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinBlack} alt="LinkedIn" className="icon1 icon1-black" />
                <img src={linkedinGrey} alt="LinkedIn" className="icon1 icon1-grey" />
            </a>
            <a className='icon-2' href="https://github.com/shu0202" target="_blank" rel="noopener noreferrer">
                <img src={githubBlack} alt="GitHub" className="icon2 icon2-black" />
                <img src={githubGrey} alt="GitHub" className="icon2 icon2-grey" />
            </a>
        </div>
        <div className="words">
            <button className="contact-button">Contact</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;