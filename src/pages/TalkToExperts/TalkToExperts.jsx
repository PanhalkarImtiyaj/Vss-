import React, { useState } from 'react';
import './TalkToExperts.css';

const TalkToExperts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        budget: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "7517005494";
        const text = `*New Expert Consultation Request*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Timeline:* ${formData.timeline}%0A*Budget:* ${formData.budget}%0A*Message:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    const expertiseAreas = [
        {
            icon: <i className='bx bx-code-alt'></i>,
            title: "Web Architecture",
            description: "Scalable, high-performance web systems using MERN and modern frameworks."
        },
        {
            icon: <i className='bx bx-mobile-alt'></i>,
            title: "Mobile Ecosystems",
            description: "Native and cross-platform strategies for iOS and Android deployment."
        },
        {
            icon: <i className='bx bx-data'></i>,
            title: "ERP & Automation",
            description: "Streamlining complex business operations with tailormade software solutions."
        }
    ];

    return (
        <div className="talk-experts-page">
            <section className="experts-hero">
                <div className="container">
                    <h1>Talk to Our <span className="text-gradient">Tech Experts</span></h1>
                    <p>
                        Skip the guesswork. Get direct access to senior developers and architects
                        to discuss your project vision and technical roadmap.
                    </p>
                </div>
            </section>

            <section className="expertise-cards-section">
                <div className="container">
                    <div className="experts-grid">
                        {expertiseAreas.map((area, index) => (
                            <div className="expert-card" key={index}>
                                <div className="expert-icon">{area.icon}</div>
                                <h3>{area.title}</h3>
                                <p>{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="consultation-section section">
                <div className="container">
                    <div className="consultation-container">
                        <div className="consultation-info">
                            <h2 className="section-title">Schedule a <span className="text-gradient">Free Strategy Session</span></h2>
                            <p>
                                Whether you're a startup or an established enterprise, our experts
                                will help you choose the right stack, estimate costs, and define
                                an MVP timeline.
                            </p>

                            <div className="process-steps">
                                <div className="step">
                                    <div className="step-num">1</div>
                                    <div className="step-content">
                                        <h4>Submit Your Vision</h4>
                                        <p>Fill out the form with your project basics and goals.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step-num">2</div>
                                    <div className="step-content">
                                        <h4>Expert Review</h4>
                                        <p>Our senior architects analyze your requirements.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="step-num">3</div>
                                    <div className="step-content">
                                        <h4>1-on-1 Consultation</h4>
                                        <p>Get a direct call to discuss architecture and pricing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="consultation-form-card">
                            <form onSubmit={handleWhatsAppSubmit} className="consultation-form">
                                <div className="form-group">
                                    <label>Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+91 7517005494"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Project Interest *</label>
                                        <select
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Project Type</option>
                                            <option value="Custom Software">Custom Enterprise Software</option>
                                            <option value="SaaS Product">SaaS Product Development</option>
                                            <option value="E-commerce">Dynamic E-commerce Portal</option>
                                            <option value="Mobile App">Mobile Application (iOS/Android)</option>
                                            <option value="AI Solution">AI & Machine Learning Integration</option>
                                            <option value="UI/UX Audit">Professional UI/UX Audit</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Expected Timeline *</label>
                                        <select
                                            name="timeline"
                                            required
                                            value={formData.timeline}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Timeline</option>
                                            <option value="Urgent">Urgent (Less than 1 month)</option>
                                            <option value="Standard">Standard (1-3 months)</option>
                                            <option value="Flexible">Flexible (3+ months)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Estimated Budget *</label>
                                    <select
                                        name="budget"
                                        required
                                        value={formData.budget}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Budget Range</option>
                                        <option value="< 50k">Below ₹50,000</option>
                                        <option value="50k - 2L">₹50,000 - ₹2,00,000</option>
                                        <option value="2L - 5L">₹2,00,000 - ₹5,00,000</option>
                                        <option value="5L+">₹5,00,000+</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Brief Project Description *</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your requirements..."
                                        rows="4"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button type="submit" className="form-submit-btn">
                                    Get Expert Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TalkToExperts;
