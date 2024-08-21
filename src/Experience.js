import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer'
import './Experience.css';

import HKU from './images/HKU.png';
import UOB from './images/UOB.png';
import HSW from './images/HackSouthWest.png';
import AIA from './images/AIA.png';

import { MotionAnimate } from 'react-motion-animate'

const Experience = () => {
    const [lineHeight, setLineHeight] = useState(0);
    const [line1Scale, setLine1Scale] = useState(0); // We'll use scale instead of width
    const [line2Scale, setLine2Scale] = useState(0);
    const [line3Scale, setLine3Scale] = useState(0);
    const [line4Scale, setLine4Scale] = useState(0);
    const [line5Scale, setLine5Scale] = useState(0);
    const [line6Scale, setLine6Scale] = useState(0);
    const [dotOpacity, setDotOpacity] = useState(1);
    const [lineOpacity, setLineOpacity] = useState(1);
    const [scrollTextOpacity, setScrollTextOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY <= 420) {
                setScrollTextOpacity(Math.max((1 - (window.scrollY)/200),0));
                setLineHeight(window.scrollY*2);
            }
            else if (window.scrollY >= 420 && window.scrollY <= 500) {
                setLine1Scale((window.scrollY - 420)/21); // Scaling factor
            } else if (window.scrollY >= 500 && window.scrollY <= 800) {
                const maxScale = (500 - 420) / 21; // Max scale achieved at 500px scroll
                const decreaseAmount = (window.scrollY - 500) / 21; // Decrease rate matches increase rate
                const newScale = maxScale - decreaseAmount;

                // Prevent negative scale values
                setLine1Scale(Math.max(newScale, 0));
            } else if (window.scrollY >= 800 && window.scrollY <= 945) {
                setLine2Scale((window.scrollY - 800)/30); // Scaling factor
            } else if (window.scrollY >= 945 && window.scrollY <= 1250) {
                const maxScale = (945 - 800) / 30; // Max scale achieved at 500px scroll
                const decreaseAmount = (window.scrollY - 945) / 30; // Decrease rate matches increase rate
                const newScale = maxScale - decreaseAmount;

                // Prevent negative scale values
                setLine2Scale(Math.max(newScale, 0));
            } else if (window.scrollY >= 1250 && window.scrollY <= 1390) {
                setLine3Scale((window.scrollY - 1250)/30); // Scaling factor
            } else if (window.scrollY >= 1390 && window.scrollY <= 1600) {
                const maxScale = (1390 - 1250) / 30; // Max scale achieved at 500px scroll
                const decreaseAmount = (window.scrollY - 1390) / 30; // Decrease rate matches increase rate
                const newScale = maxScale - decreaseAmount;
                
                setLine3Scale(Math.max(newScale, 0));
            } else if (window.scrollY >= 1600 && window.scrollY <= 1765) {
                setLine4Scale((window.scrollY - 1600)/35); // Scaling factor
            } else if (window.scrollY >= 1765 && window.scrollY <= 2055) {
                const maxScale = (1765 - 1600) / 35; // Max scale achieved at 500px scroll
                const decreaseAmount = (window.scrollY - 1765) / 35; // Decrease rate matches increase rate
                const newScale = maxScale - decreaseAmount;
                
                setLine4Scale(Math.max(newScale, 0));
            } else if (window.scrollY >= 2055 && window.scrollY <= 2236) {
                setLine5Scale((window.scrollY - 2055)/40); // Scaling factor
            } else if (window.scrollY >= 2236 && window.scrollY <= 2500) {
                const maxScale = (2236 - 2055) / 40; // Max scale achieved at 500px scroll
                const decreaseAmount = (window.scrollY - 2236) / 40; // Decrease rate matches increase rate
                const newScale = maxScale - decreaseAmount;
                
                setLine5Scale(Math.max(newScale, 0));
            } else if (window.scrollY >= 2500 && window.scrollY <= 2613) {
                setLine6Scale((window.scrollY - 2500)/25); // Scaling factor
            } else if (window.scrollY >= 2613 && window.scrollY <= 2750) {
                const maxScale = (2613 - 2500) / 25; // Max scale achieved at 500px scroll
                const decreaseAmount = (window.scrollY - 2613) / 25; // Decrease rate matches increase rate
                const newScale = maxScale - decreaseAmount;
                
                setLine6Scale(Math.max(newScale, 0));
            } else if (window.scrollY >= 2750 && window.scrollY <= 3017) {
                const maxHeight = 800;
                const decreaseAmount = (window.scrollY - 2750)*3;
                const newHeight = maxHeight - decreaseAmount;

                setLineHeight(Math.max(newHeight, 0));
            } else if (window.scrollY >= 3017 && window.scrollY <= 100000) {
                setLineOpacity(0);
                setDotOpacity(Math.max((1 - (window.scrollY - 3017)/200),0));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="experience">
            <Header />
            <div className='title-container'>
                <h1 className="experience-title">EXPERIENCE</h1>
            </div>
            <div className="divider-experience"></div>
            <div className="dot" style={{
                opacity: dotOpacity
            }}>
                <div className="line-1" style={{
                            transform: `scaleX(${line1Scale})`,
                            transformOrigin: 'right'
                        }}></div>
                
                <div className="line-2" style={{
                            transform: `scaleX(${line2Scale})`,
                            transformOrigin: 'left'
                        }}></div>

                <div className="line-3" style={{
                            transform: `scaleX(${line3Scale})`,
                            transformOrigin: 'right'
                        }}></div>
                
                <div className="line-4" style={{
                            transform: `scaleX(${line4Scale})`,
                            transformOrigin: 'left'
                        }}></div>
                <div className="line-5" style={{
                            transform: `scaleX(${line5Scale})`,
                            transformOrigin: 'right'
                        }}></div>
                <div className="line-6" style={{
                            transform: `scaleX(${line6Scale})`,
                            transformOrigin: 'left'
                        }}></div>
            </div>
            <div className='scroll-text-experience' style={{
                opacity: scrollTextOpacity
            }}>
                <a className='scroll-text-eperience-text'>Scroll</a>
                <svg
                className="arrow-down-experience"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                style={{
                    fill: 'rgb(1, 0, 82)',
                    transition: 'fill 0.3s ease',
                }}
                >
                <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                </svg>
            </div>
            <div className="line" style={{ 
                opacity: lineOpacity,
                height: `${lineHeight}px`,
                transformOrigin: window.scrollY >= 2750 ? 'bottom' : 'top' // Adjust transform origin
            }}></div>

            {/*Block 1*/}
            <div className='experience-block1'>
                <MotionAnimate
                    reset={true}
                    variant={{
                        hidden: { opacity: 0, x: -20 },
                        show: { opacity: 1, x: 0 }
                    }}
                    speed={0.7}>
                    <a className='experience-content'>
                        Started studying in the University of Hong Kong as a Bachelor of Economics and Finance student.
                    </a>
                </MotionAnimate>
                <MotionAnimate animation='scrollFadeIn' scrollPositions={[0.3, 0.4]}>
                    <a className='year-text1'>2019</a>
                </MotionAnimate>
                <MotionAnimate
                    reset={true}
                    variant={{
                        hidden: { opacity: 0, x: 20 },
                        show: { opacity: 1, x: 0 }
                    }}
                    speed={0.7}>
                    <img src={HKU} alt="HKU1" className="HKU" />
                </MotionAnimate>
            </div>

            {/*Block 2*/}
            <div className='experience-block2'>
                <MotionAnimate
                    reset={true}
                    variant={{
                        hidden: { opacity: 0, x: 20 },
                        show: { opacity: 1, x: 0 }
                    }}
                    speed={0.7}>
                    <a className='experience-content'>
                        Joined AIA Company Limited as a compliance intern and gained industry experience in software designing and user testing.
                    </a>
                </MotionAnimate>
                <MotionAnimate animation='scrollFadeIn' scrollPositions={[0.3, 0.4]}>
                    <a className='year-text2'>2022</a>
                </MotionAnimate>
                <MotionAnimate
                    reset={true}
                    variant={{
                        hidden: { opacity: 0, x: -20 },
                        show: { opacity: 1, x: 0 }
                    }}
                    speed={0.7}>
                    <img src={AIA} alt="AIA1" className="AIA" />
                </MotionAnimate>
            </div>

            {/*Block 3*/}
            <div className='experience-block3'>
                <MotionAnimate
                    reset={true}
                    variant={{
                        hidden: { opacity: 0, x: -20 },
                        show: { opacity: 1, x: 0 }
                    }}
                    speed={0.7}>
                    <a className='experience-content'>
                        Graduate from the University of Hong Kong and successfully attained a 2:1 classification in Bachelor of Economics and Finance.
                    </a>
                </MotionAnimate>
                <MotionAnimate animation='scrollFadeIn' scrollPositions={[0.3, 0.4]}>
                    <a className='year-text3'>2023</a>
                </MotionAnimate>
            </div>

            {/*Block 4*/}
            <div className='experience-block4'>
                <MotionAnimate
                    reset={true}
                    variant={{
                        hidden: { opacity: 0, x: 20 },
                        show: { opacity: 1, x: 0 }
                    }}
                    speed={0.7}>
                    <a className='experience-content'>
                        Started studying in the University of Bath as a MSc Computer Science student.
                    </a>
                </MotionAnimate>
                <MotionAnimate animation='scrollFadeIn' scrollPositions={[0.3, 0.4]}>
                    <a className='year-text4'>2023</a>
                </MotionAnimate>
                <MotionAnimate
                    reset={true}
                    variant={{
                        hidden: { opacity: 0, x: -20 },
                        show: { opacity: 1, x: 0 }
                    }}
                    speed={0.7}>
                    <img src={UOB} alt="UOB1" className="UOB" />
                </MotionAnimate>
            </div>

            {/*Block 5*/}
            <div className='experience-block5'>
                <MotionAnimate
                    reset={true}
                    variant={{
                        hidden: { opacity: 0, x: -20 },
                        show: { opacity: 1, x: 0 }
                    }}
                    speed={0.7}>
                    <a className='experience-content'>
                        Participated in The Hack South West, the largest hackathon in the South West region, and was awarded the 2nd runner-up position.
                    </a>
                </MotionAnimate>
                <MotionAnimate animation='scrollFadeIn' scrollPositions={[0.3, 0.4]}>
                    <a className='year-text5'>2024</a>
                </MotionAnimate>
                <MotionAnimate
                    reset={true}
                    variant={{
                        hidden: { opacity: 0, x: 20 },
                        show: { opacity: 1, x: 0 }
                    }}
                    speed={0.7}>
                    <img src={HSW} alt="HSW1" className="HSW" />
                </MotionAnimate>
            </div>

            {/*Block 6*/}
            <div className='experience-block6'>
                <MotionAnimate
                    reset={true}
                    variant={{
                        hidden: { opacity: 0, x: 20 },
                        show: { opacity: 1, x: 0 }
                    }}
                    speed={0.7}>
                    <a className='experience-content'>
                        Graduating from the University of Bath in the coming September. 
                    </a>
                </MotionAnimate>
                <MotionAnimate animation='scrollFadeIn' scrollPositions={[0.3, 0.4]}>
                    <a className='year-text4'>2024</a>
                </MotionAnimate>
            </div>

            <Footer />
        </div>
    );
};

export default Experience;
