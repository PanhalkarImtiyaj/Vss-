import React, { useRef } from 'react';
import { gsap, useGSAP, ScrollTrigger } from '../utils/gsap';

const GSAPDemo = () => {
    const container = useRef();
    const boxRef = useRef();

    useGSAP(() => {
        // Basic animation
        gsap.to(".box", {
            rotation: 360,
            x: 100,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // ScrollTrigger animation
        gsap.to(".scroll-box", {
            scrollTrigger: {
                trigger: ".scroll-box",
                start: "top 80%",
                end: "top 30%",
                scrub: true,
                markers: false // set to true for debugging
            },
            x: 300,
            opacity: 1,
            scale: 1.5,
            duration: 1
        });
    }, { scope: container });

    return (
        <div ref={container} style={{ padding: '50px', minHeight: '200vh' }}>
            <h1 className="text-3xl font-bold mb-8">GSAP Setup Demo</h1>

            <div className="mb-20">
                <h2 className="text-xl mb-4">Basic Animation (Auto-running)</h2>
                <div
                    className="box"
                    style={{
                        width: '100px',
                        height: '100px',
                        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                    }}
                >
                    Box
                </div>
            </div>

            <div style={{ marginTop: '50vh' }}>
                <h2 className="text-xl mb-4">Scroll Animation (Scroll Down)</h2>
                <div
                    className="scroll-box"
                    style={{
                        width: '150px',
                        height: '150px',
                        background: 'linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)',
                        borderRadius: '16px',
                        opacity: 0.2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                    }}
                >
                    Scroll Me
                </div>
            </div>
        </div>
    );
};

export default GSAPDemo;
