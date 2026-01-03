import React, { useState } from 'react';
import './CareerForm.css';

const CareerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        resumeLink: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "7517005494";
        const text = `*New Job Application*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Position:* ${formData.position}%0A*Experience:* ${formData.experience}%0A*Resume:* ${formData.resumeLink}%0A*Message:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="career-section section">
            <div className="container">
                <div className="career-container">
                    <div className="career-info">
                        <h2 className="section-title">Join Our <span className="text-gradient">Core Team</span></h2>
                        <p className="career-subtitle">
                            Ready to build the future? We are always looking for passionate developers,
                            designers, and creative minds to join VSS Software Solutions.
                        </p>
                        <div className="career-benefits">
                            <div className="benefit-item">
                                <i className='bx bx-rocket'></i>
                                <span>High Growth Environment</span>
                            </div>
                            <div className="benefit-item">
                                <i className='bx bx-laptop'></i>
                                <span>Remote & Flexible Work</span>
                            </div>
                            <div className="benefit-item">
                                <i className='bx bx-group'></i>
                                <span>Collaborative Culture</span>
                            </div>
                        </div>
                    </div>

                    <div className="career-form-card">
                        <form onSubmit={handleWhatsAppSubmit} className="career-form">
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="9876543210"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group-row">
                                <div className="form-group">
                                    <label>Position *</label>
                                    <select
                                        name="position"
                                        required
                                        value={formData.position}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Position</option>
                                        <option value="Frontend Developer">Frontend Developer</option>
                                        <option value="Backend Developer">Backend Developer</option>
                                        <option value="Full Stack Developer">Full Stack Developer</option>
                                        <option value="MERN Stack Developer">MERN Stack Developer</option>
                                        <option value="Python Developer">Python Developer</option>
                                        <option value="Mobile App Developer">Mobile App Developer (Android/iOS)</option>
                                        <option value="UI/UX Designer">UI/UX Designer</option>
                                        <option value="Graphic Designer">Graphic Designer</option>
                                        <option value="QA / Software Tester">QA / Software Tester</option>
                                        <option value="DevOps Engineer">DevOps Engineer</option>
                                        <option value="Digital Marketing Expert">Digital Marketing Expert</option>
                                        <option value="Business Development Executive">Business Development Executive</option>
                                        <option value="Project Manager">Project Manager</option>
                                        <option value="HR Manager">HR Manager</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Experience *</label>
                                    <select
                                        name="experience"
                                        required
                                        value={formData.experience}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Experience</option>
                                        <option value="Fresher">Fresher</option>
                                        <option value="1-2 Years">1-2 Years</option>
                                        <option value="3-5 Years">3-5 Years</option>
                                        <option value="5+ Years">5+ Years</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Resume Link (GDrive/Dropbox) *</label>
                                <input
                                    type="url"
                                    name="resumeLink"
                                    placeholder="https://drive.google.com/..."
                                    required
                                    value={formData.resumeLink}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label>Why join us? *</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about yourself..."
                                    rows="3"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className="whatsapp-submit-btn">
                                <i className='bx bxl-whatsapp'></i>
                                Apply via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerForm;
