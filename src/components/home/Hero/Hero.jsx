import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import StardustCursor from './SmokeyCursor';
import desktopVideo from '../../../assets/desktop-bacground-video.mp4';
import mobileVideo from '../../../assets/mobile-bacground-video.mp4';
import { gsap, useGSAP } from '../../../utils/gsap';
import './Hero.css';

const Hero = () => {
    const [isHovered, setIsHovered] = React.useState(false);
    const typewriterRef = useRef(null);

    useGSAP(() => {
        const words = [
            "Software Solutions",
            "Innovative Apps",
            "AI Automation",
            "ERP & Billing Systems",
            "Digital Excellence"
        ];

        const mainTl = gsap.timeline({ repeat: -1 });

        words.forEach((word) => {
            const wordTl = gsap.timeline();

            wordTl.to(typewriterRef.current, {
                duration: word.length * 0.12, // Slower typing speed (0.12s per char)
                text: word,
                ease: "none",
            })
                .to({}, { duration: 3.0 }) // Longer pause to read the full text (3s)
                .to(typewriterRef.current, {
                    duration: word.length * 0.05, // Smooth erasing speed
                    text: "",
                    ease: "none"
                })
                .to({}, { duration: 0.8 }); // Clean pause before the next word starts

            mainTl.add(wordTl);
        });
    }, { scope: typewriterRef });

    return (
        <section
            className="hero"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <StardustCursor active={isHovered} />

            {/* Background Videos */}
            <div className="hero-bg-video-container">
                <video autoPlay muted loop playsInline className="hero-bg-video desktop-v">
                    <source src={desktopVideo} type="video/mp4" />
                </video>
                <video autoPlay muted loop playsInline className="hero-bg-video mobile-v">
                    <source src={mobileVideo} type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Transform Your Business with <br />
                            <span className="no-wrap-title">
                                <span className="highlight-vss">VSS</span> <span ref={typewriterRef} className="typewriter"></span>
                                <span className="cursor">|</span>
                            </span>
                        </h1>
                        <p className="hero-description">
                            We craft cutting-edge web and mobile applications, ERP systems, and scalable digital solutions that help businesses grow faster.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/contact">
                                <Button variant="primary" size="large">Get Started</Button>
                            </Link>
                            <Link to="/portfolio">
                                <Button variant="secondary" size="large">View Our Work</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
