import { useState } from 'react';
import Button from '../../components/common/Button/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in-down">Get In Touch</h1>
          <p className="page-subtitle fade-in-up">
            Let's discuss how we can help bring your ideas to life
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info fade-in-up">
              <h2 className="section-heading">Contact Information</h2>
              <p className="contact-intro">
                Have a project in mind? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>info@vsssoftware.com</p>
                    <p>support@vsssoftware.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                    <p>+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <p>123 Tech Street</p>
                    <p>Silicon Valley, CA 94025</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-text">
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper fade-in-up">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="web">Website Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="erp">ERP & Billing Software</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" size="large" className="submit-btn">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
