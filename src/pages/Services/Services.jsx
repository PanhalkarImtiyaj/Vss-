import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import { gsap, useGSAP, ScrollTrigger } from '../../utils/gsap';
import './Services.css';

const Services = () => {
  const container = useRef();

  useGSAP(() => {
    // Force refresh for layout
    ScrollTrigger.refresh();

    // Set initial states
    gsap.set(['.page-title', '.page-subtitle', '.service-detail-card', '.process-step'], {
      opacity: 0,
      y: 30
    });

    // Page Hero (Immediate)
    gsap.to('.page-hero .container > *', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Service Detail Cards (On Scroll)
    gsap.utils.toArray('.service-detail-card').forEach((card) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          once: true
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });

    // Process Steps (On Scroll)
    gsap.to('.process-step', {
      scrollTrigger: {
        trigger: '.process-grid',
        start: 'top 85%',
        once: true
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <div className="services-page" ref={container}>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive software solutions to power your business
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-list">
            {servicesData.map((service, index) => (
              <div key={service.id} className={`service-detail-card ${index % 2 === 1 ? 'reverse' : ''}`}>
                <div className="service-detail-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-detail-icon">
                    <span><i className={service.icon}></i></span>
                  </div>
                </div>
                <div className="service-detail-content">
                  <h2 className="service-detail-title">{service.title}</h2>
                  <p className="service-detail-description">{service.description}</p>
                  <div className="service-detail-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="check-icon">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/services/${service.slug}`} className="learn-more-link" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--primary-color)',
                    fontWeight: '600',
                    marginTop: '1rem',
                    fontSize: '1.1rem'
                  }}>
                    Learn More <i className='bx bx-right-arrow-alt'></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="process-section text-center">
            <h2 className="section-heading mb-4">Our Development Process</h2>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3 className="step-title">Discovery</h3>
                <p className="step-description">
                  We understand your requirements, goals, and target audience.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3 className="step-title">Planning</h3>
                <p className="step-description">
                  We create a detailed roadmap and technical architecture.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3 className="step-title">Design</h3>
                <p className="step-description">
                  We craft intuitive UI/UX designs for optimal user experience.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3 className="step-title">Development</h3>
                <p className="step-description">
                  We build your solution using best practices and modern tech.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <h3 className="step-title">Testing</h3>
                <p className="step-description">
                  We ensure quality through rigorous testing and QA processes.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">6</div>
                <h3 className="step-title">Deployment</h3>
                <p className="step-description">
                  We launch your product and provide ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
