
import React from 'react';
import { useGSAP } from '../../utils/gsap';
import { gsap } from 'gsap';
import './Team.css';

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Imtiyaj Panhalkar",
            role: "Founder & CEO",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Imtiyaj",
            bio: "Visionary leader driving VSS towards global excellence in software solutions and innovation."
        },
        {
            id: 2,
            name: "Shahanvaj Panhalkar",
            role: "Director",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shahanvaj",
            bio: "Strategist focusing on business growth, operational excellence, and long-term startup vision."
        },
        {
            id: 3,
            name: "Tejas Karekar",
            role: "CTO & Android Developer",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=TejasK",
            bio: "Technical powerhouse leading our technology stack and mobile development initiatives."
        },
        {
            id: 4,
            name: "Priya Patil",
            role: "Chief Operating Officer & Data Engineer",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
            bio: "Ensuring smooth operations while architecting robust data-driven solutions for clients."
        },
        {
            id: 5,
            name: "Ram Patil",
            role: "Technical Director & Android Developer",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ram",
            bio: "Combining leadership with deep technical expertise in high-performance Android applications."
        },
        {
            id: 6,
            name: "Tejas Jadhav",
            role: "Web Developer",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=TejasJ",
            bio: "Passionate about building responsive, user-friendly, and scalable web applications."
        },
        {
            id: 7,
            name: "Rameshwar Chate",
            role: "Android Developer",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rameshwar",
            bio: "Specialist in creating feature-rich and intuitive mobile experiences on the Android platform."
        },
        {
            id: 8,
            name: "Karuna Patil",
            role: "Web Developer & Manager",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Karuna",
            bio: "Bridging the gap between code and management to deliver high-quality web projects."
        },
        {
            id: 9,
            name: "Aman Korbu",
            role: "Web Developer & Tech Manager",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aman",
            bio: "Expertly managing technical workflows while developing cutting-edge web technologies."
        },
        {
            id: 10,
            name: "Pravin Singh",
            role: "Web Developer",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pravin",
            bio: "Dedicated to solving complex problems through efficient and elegant web-based solutions."
        },
        {
            id: 11,
            name: "Mansi",
            role: "Web Developer & UI/UX / Marketing Head",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mansi",
            bio: "Crafting beautiful interfaces while leading our digital marketing and brand strategy."
        },
        {
            id: 12,
            name: "Mubina Mulla",
            role: "Web Developer & Operational Head & Manager",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mubina",
            bio: "Multifaceted leader managing operations and development for maximum project efficiency."
        },
        {
            id: 13,
            name: "Abhishek Parekar",
            role: "Web Developer",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Abhishek",
            bio: "Committed to delivering high-quality front-end and back-end web development services."
        },
        {
            id: 14,
            name: "Aditya Patil",
            role: "Web Developer",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
            bio: "Focusing on building modern and feature-rich web applications with a focus on user experience."
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
                        {teamMembers.map((member) => (
                            <div key={member.id} className="member-card">
                                <div className="member-image-wrapper">
                                    <img src={member.image} alt={member.name} className="member-image" />
                                    <div className="member-overlay">
                                        <div className="social-links">
                                            <i className='bx bxl-linkedin'></i>
                                            <i className='bx bxl-twitter'></i>
                                            <i className='bx bxl-github'></i>
                                        </div>
                                    </div>
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
