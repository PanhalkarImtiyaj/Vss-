import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { useGSAP, gsap, ScrollTrigger } from '../../utils/gsap';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Find the service based on the slug
    const service = servicesData.find(s => s.slug === slug);

    // Redirect if service not found
    useEffect(() => {
        if (!service) {
            navigate('/services');
        }
    }, [service, navigate, slug]);

    useGSAP(() => {
        if (!service) return;
        // Animations removed to fix visibility issues
    }, [service]); // Re-run if service changes

    if (!service) return null; // Or a loading spinner

    return (
        <div className="service-detail-page">
            {/* Hero Section */}
            <section className="service-hero" style={{ paddingTop: '130px' }}>
                <div className="container service-hero-content">
                    <div className="service-icon-large">
                        <i className={service.icon}></i>
                    </div>
                    <h1 className="service-title">{service.title}</h1>
                    <p className="service-short-desc">{service.description}</p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="service-content-section">
                <div className="container">
                    <div className="content-grid">
                        <div className="service-info">
                            <h2 className="section-title">Overview</h2>
                            <div className="text-content">
                                <p>{service.detailedDescription}</p>
                            </div>

                            <h2 className="section-title">Key Features</h2>
                            <div className="features-list">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <i className='bx bx-check-circle feature-icon'></i>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="service-image-container">
                            <img src={service.image} alt={service.title} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            {service.benefits && (
                <section className="benefits-section">
                    <div className="container">
                        <h2 className="section-title text-center">Why Choose Our {service.title}?</h2>
                        <div className="benefits-grid">
                            {service.benefits.map((benefit, index) => (
                                <div key={index} className="benefit-card">
                                    <div className="benefit-title">
                                        <i className='bx bxs-badge-check check-circle'></i>
                                        Benefit {index + 1}
                                    </div>
                                    <p>{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2 className="cta-title">Ready to Transform Your Business?</h2>
                        <p className="cta-text">
                            Let's discuss how our {service.title.toLowerCase()} services can help you achieve your goals.
                        </p>
                        <Link to="/contact" className="cta-button">
                            Get Started Now <i className='bx bx-right-arrow-alt'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
