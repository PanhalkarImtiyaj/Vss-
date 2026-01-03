import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './AboutPreview.css';

const AboutPreview = () => {
  return (
    <section className="about-preview section">
      <div className="container">
        <div className="about-content">
          <div className="about-image fade-in-up">
            <div className="stats-card">
              <div className="stat">
                <h3 className="stat-number">500+</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">200+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Team Members</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">10+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="about-text fade-in-up">
            <h2 className="about-title">
              Building Digital Excellence Since 2014
            </h2>
            <p className="about-description">
              VSS Software Solutions is a leading software development company specializing in 
              creating innovative digital solutions that transform businesses. With over a decade 
              of experience, we've helped hundreds of companies achieve their digital goals.
            </p>
            <p className="about-description">
              Our team of expert developers, designers, and strategists work collaboratively to 
              deliver high-quality, scalable solutions that drive real business results. From 
              startups to enterprises, we're committed to excellence in every project.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Expert Development Team</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Agile Methodology</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>24/7 Support</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>On-Time Delivery</span>
              </div>
            </div>
            <Link to="/about">
              <Button variant="primary" size="large">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
