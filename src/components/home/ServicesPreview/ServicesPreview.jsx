import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { servicesData } from '../../../data/servicesData';
import { gsap, useGSAP, ScrollTrigger } from '../../../utils/gsap';
import './ServicesPreview.css';

const ServicesPreview = () => {
  const container = useRef();

  useGSAP(() => {
    // Force a refresh once layout is settled
    ScrollTrigger.refresh();

    // Set initial states
    gsap.set(['.section-header', '.service-card', '.services-cta'], {
      opacity: 0,
      y: 50
    });

    // Heading Animation
    gsap.to('.section-header', {
      scrollTrigger: {
        trigger: '.section-header',
        start: 'top 85%',
        once: true
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Service Cards Staggered
    gsap.to('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
        once: true
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });

    // CTA Animation
    gsap.to('.services-cta', {
      scrollTrigger: {
        trigger: '.services-cta',
        start: 'top 90%',
        once: true
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section className="services-preview section" ref={container}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="services-grid">
          {servicesData.slice(0, 9).map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-icon-overlay">
                  <i className={service.icon}></i>
                </div>
              </div>
              <div className="service-card-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta text-center">
          <Link to="/services">
            <Button variant="primary" size="large">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
