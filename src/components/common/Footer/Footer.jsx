import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">VSS Software Solutions</h3>
            <p className="footer-description">
              Transforming ideas into powerful digital solutions. Your trusted partner for innovative software development.
            </p>
            <div className="footer-social">
              <a HRef="#" className="social-link">LinkedIn</a>
              <a HRef="#" className="social-link">Twitter</a>
              <a HRef="#" className="social-link">Facebook</a>
              <a HRef="#" className="social-link">Instagram</a>
            </div>
          </div >

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Website Development</Link></li>
              <li><Link to="/services">Mobile App Development</Link></li>
              <li><Link to="/services">ERP & Billing Software</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
              <li><Link to="/services">Digital Marketing</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-contact">
              <li>📧 info@vsssoftware.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Tech Street, Silicon Valley, CA 94025</li>
            </ul>
          </div>
        </div >

        <div className="footer-bottom">
          <p>&copy; {currentYear} VSS Software Solutions. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a HRef="#">Privacy Policy</a>
            <a HRef="#">Terms of Service</a>
          </div >
        </div >
      </div >
    </footer >
  );
};

export default Footer;
