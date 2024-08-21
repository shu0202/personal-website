import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import './About.css';
import myself from './images/myself.png';
import pdf from './images/pdf.png';
import CV from './document/Yan_Chun_Yeung_CV.pdf';

import { MotionAnimate } from 'react-motion-animate'
const About= () => {
    const handleDownload = () => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = CV;
        link.setAttribute('download', 'Yan_Chun_Yeung_Ivan.pdf');
    
        // Append the anchor element to the DOM
        document.body.appendChild(link);
    
        // Click the anchor element to initiate the download
        link.click();
    
        // Remove the temporary anchor element
        document.body.removeChild(link);
      };

    return (
        <div className="about">
            <Header />
            <div className='title-container'>
                <h1 className="about-title">ABOUT</h1>
            </div>
            <div className="divider-contact"></div>
            <div className='about-container'>
                <MotionAnimate
                reset={true}
                variant={{
                    hidden: { opacity: 0, x:-20 },
                    show: { opacity: 1, x:0 }}}
                speed={0.7}>
                    <div>
                        <p className='about-paragraph'>I am a MSc computer science student at the University of Bath.</p>
                        <p className='about-paragraph'>Coding is my passion and I am capabale of writing softwares in C, C++, Java, Python, JavaScript and more.</p>
                        <p className='about-paragraph'>Language is my strength and I am fluent in English, Chinese, Japanese and Cantonese.</p>
                        <p className='about-paragraph'>Outside of career and work, I enjoy playing basketball and the guitar.</p>
                    </div>
                </MotionAnimate>
                <div className="divider"></div>
                <img src={myself} alt="myself" className="myself"/>
                <div className='CV-button'>
                    <img src={pdf} alt="pdf" onClick={handleDownload} className="pdf-icon"/>
                        <a
                            href={CV}
                            download="Yan_Chun_Yeung_Ivan.pdf"
                            className="download-CV"
                        >
                            CV
                        </a>
                </div>
                <MotionAnimate
                reset={true}
                variant={{
                    hidden: { opacity: 0, x:-20 },
                    show: { opacity: 1, x:0 }}}
                speed={0.7}>
                <div className='locaction-container'>
                    <a className='location-title'>Location</a>
                    <div className='location-list'>
                        <a className='location'>Bath, United Kingdom</a>
                        <a className='seperate'>|</a>
                        <a className='location'>Hong Kong Island, Hong Kong</a>
                    </div>
                </div>
                </MotionAnimate>
            </div>

            <Footer />
        </div>
    );
};

export default About;