import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section className="contact-cta section">
      <div className="container">
        <div className="cta-content fade-in-up">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-description">
            Let's discuss how we can help transform your ideas into reality. 
            Get in touch with our team today for a free consultation.
          </p>
          <div className="cta-buttons">
            <Link to="/contact">
              <Button variant="primary" size="large">Get Started Now</Button>
            </Link>
            <a href="tel:+15551234567">
              <Button variant="outline" size="large">Call Us: +1 (555) 123-4567</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
