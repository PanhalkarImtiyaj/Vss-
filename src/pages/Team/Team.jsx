
import React from 'react';
import { useGSAP } from '../../utils/gsap';
import { gsap } from 'gsap';
import './Team.css';

import imtiyajImg from '../../assets/team-images/imtiyaj.png';
import shanvajImg from '../../assets/team-images/shanvaj director.png';
import rameshwarImg from '../../assets/team-images/Rameshwar.jpeg';
import adityaImg from '../../assets/team-images/aditya patil.jpg';
import amanImg from '../../assets/team-images/aman.jpeg';
import mubinaImg from '../../assets/team-images/mubina.png';
import pravinImg from '../../assets/team-images/pravin-singh.png';
import ramImg from '../../assets/team-images/ram.jpeg';
import tejasImg from '../../assets/team-images/tejas.png';
import karunaImg from '../../assets/team-images/Karuna.png';
import priyaImg from '../../assets/team-images/priya patil.png';
import rashidPImg from '../../assets/team-images/Rashid.png';
import radhikaImg from '../../assets/team-images/Radhika kulkarni HR.png';
import sanikaImg from '../../assets/team-images/sanika madane.png';
import abhishekImg from '../../assets/team-images/Abhishek Parekar.png';

const Team = () => {
    const vssTeam = [
        {
            id: 1,
            name: "Imtiyaj Panhalkar",
            role: "Founder & CEO",
            image: imtiyajImg,
            bio: "Visionary leader driving VSS towards global excellence in software solutions and innovation."
        },
        {
            id: 2,
            name: "Shahanvaj Panhalkar",
            role: "Director",
            image: shanvajImg,
            bio: "Strategist focusing on business growth, operational excellence, and long-term startup vision."
        },
        {
            id: 3,
            name: "Tejas Karekar",
            role: "Chief Technology Officer",
            image: tejasImg,
            bio: "Technical powerhouse leading our technology stack and mobile development initiatives."
        },
        {
            id: 4,
            name: "Rashid Sir",
            role: "Business Development Head",
            image: rashidPImg,
            bio: "Driving growth and building strategic partnerships to expand VSS's global reach."
        },
        {
            id: 5,
            name: "Karuna Patil",
            role: "Web Developer",
            image: karunaImg,
            bio: "Bridging the gap between code and management to deliver high-quality web projects."
        },
        {
            id: 6,
            name: "Sanika Madne",
            role: "Android Developer",
            image: sanikaImg,
            bio: "Specializing in crafting smooth and efficient mobile experiences for Android platforms."
        },
        {
            id: 7,
            name: "Rameshwar Chate",
            role: "Web Developer",
            image: rameshwarImg,
            bio: "Specialist in building modern and feature-rich web applications with a focus on user experience."
        },
        {
            id: 8,
            name: "Ram Patil",
            role: "Technical Director & Android Developer",
            image: ramImg,
            bio: "Combining leadership with deep technical expertise in high-performance Android applications."
        },
        {
            id: 9,
            name: "Radhika Kulkarni",
            role: "Human resources (HR)",
            image: radhikaImg,
            bio: "Managing talent acquisition and human resources to build a strong and dedicated team."
        },
        {
            id: 10,
            name: "Mubina Mulla",
            role: "Web Developer",
            image: mubinaImg,
            bio: "Multifaceted leader managing operations and development for maximum project efficiency."
        },
        {
            id: 11,
            name: "Abhishek Parekar",
            role: "Web Developer",
            image: abhishekImg,
            bio: "Committed to delivering high-quality front-end and back-end web development services."
        },
        {
            id: 12,
            name: "Priya Patil",
            role: "Chief Operating Officer & Data Engineer",
            image: priyaImg,
            bio: "Ensuring smooth operations while architecting robust data-driven solutions for clients."
        },
        {
            id: 13,
            name: "Aditya Patil",
            role: "Android Developer",
            image: adityaImg,
            bio: "Focusing on building modern and feature-rich web applications with a focus on user experience."
        },
        {
            id: 14,
            name: "Aman Korbu",
            role: "Full Stack Developer",
            image: amanImg,
            bio: "Expertly managing technical workflows while developing cutting-edge web technologies."
        },
        {
            id: 15,
            name: "Pravin Singh",
            role: "Web Developer",
            image: pravinImg,
            bio: "Dedicated to solving complex problems through efficient and elegant web-based solutions."
        }
    ];

    useGSAP(() => {
        // Hero entrance
        gsap.from(".team-hero-content > *", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });
    }, { scope: ".team-page" });

    return (
        <div className="team-page">
            <section className="team-hero">
                <div className="container team-hero-content">
                    <h1 className="team-title">Meet Our <span className="highlight">Creative Team</span></h1>
                    <p className="team-subtitle">
                        The brilliant minds behind VSS Software Solutions, dedicated to turning your complex ideas into elegant digital realities.
                    </p>
                </div>
            </section>

            <section className="team-section section">
                <div className="container">
                    <div className="team-grid">
                        {vssTeam.map((member) => (
                            <div key={member.id} className="member-card">
                                <div className="member-image-wrapper">
                                    <img src={member.image} alt={member.name} className="member-image" />
                                </div>
                                <div className="member-info">
                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                    <p className="member-bio">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
