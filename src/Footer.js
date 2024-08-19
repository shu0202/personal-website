import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import linkedinBlack from './images/linkedin_black.png'; // Add LinkedIn image import
import githubBlack from './images/github_black.png'; // Add GitHub image import
import linkedinGrey from './images/linkedin_grey.png'; // Add LinkedIn image import
import githubGrey from './images/github_grey.png'; // Add GitHub image import
import logoBlack from './images/logo_new_black.png'; // Add GitHub image import
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
  const location = useLocation();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className='logo'>
            <a className='logo' href="https://www.linkedin.com/in/yan-chun-yeung-a0803320b/" target="_blank" rel="noopener noreferrer">
                <img src={logoBlack} alt="LinkedIn" className="logo logo-black" />
            </a>
        </div>
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
            <div className='link-chunk'>
                <div className='small-titles'>
                    <a className='small-title'>Links</a>
                </div>
                <div className="small-words">
                    <button className="footer-button">Contact</button>
                    <a className='footer-seperate'>|</a>
                    <button onClick={() => window.open("https://github.com/shu0202/personal-website", '_blank')} className="footer-button">Code</button>
                </div>
            </div>
            <div className='location-chunk'>
                <div className='small-titles'>
                    <a className='small-title'>Location</a>
                </div>
                <div className='small-words'>
                    <a className='footer-words'>Bath, United Kingdom</a> 
                    <a className='footer-seperate'>|</a>
                    <a className='footer-words'>Hong Kong Island, Hong Kong</a> 
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;