import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in-down">About VSS Software Solutions</h1>
          <p className="page-subtitle fade-in-up">
            Your trusted partner in digital transformation
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content-section fade-in-up">
              <h2 className="section-heading">Who We Are</h2>
              <p className="content-text">
                VSS Software Solutions is a leading software development company founded in 2014 
                with a mission to empower businesses through innovative technology solutions. 
                We specialize in creating custom software that drives growth, efficiency, and 
                competitive advantage.
              </p>
              <p className="content-text">
                With over a decade of experience and a team of 50+ talented professionals, 
                we've successfully delivered 500+ projects across various industries including 
                healthcare, finance, e-commerce, education, and more.
              </p>
            </div>

            <div className="about-content-section fade-in-up">
              <h2 className="section-heading">Our Mission</h2>
              <p className="content-text">
                To deliver world-class software solutions that transform businesses and create 
                lasting value for our clients. We strive to be the most trusted technology 
                partner by consistently exceeding expectations and driving innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-heading text-center mb-4">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card fade-in-up">
              <div className="feature-icon-large">🎯</div>
              <h3 className="feature-title">Client-Focused Approach</h3>
              <p className="feature-text">
                We prioritize understanding your unique business needs and deliver 
                tailored solutions that align with your goals.
              </p>
            </div>
            <div className="feature-card fade-in-up">
              <div className="feature-icon-large">⚡</div>
              <h3 className="feature-title">Agile Development</h3>
              <p className="feature-text">
                Our agile methodology ensures flexibility, faster delivery, and 
                continuous improvement throughout the project lifecycle.
              </p>
            </div>
            <div className="feature-card fade-in-up">
              <div className="feature-icon-large">🏆</div>
              <h3 className="feature-title">Quality Assurance</h3>
              <p className="feature-text">
                Rigorous testing and quality control processes ensure bug-free, 
                high-performance applications.
              </p>
            </div>
            <div className="feature-card fade-in-up">
              <div className="feature-icon-large">💡</div>
              <h3 className="feature-title">Innovation First</h3>
              <p className="feature-text">
                We stay ahead of technology trends and leverage cutting-edge tools 
                to build future-ready solutions.
              </p>
            </div>
            <div className="feature-card fade-in-up">
              <div className="feature-icon-large">🤝</div>
              <h3 className="feature-title">Long-term Partnership</h3>
              <p className="feature-text">
                We build lasting relationships with our clients, providing ongoing 
                support and maintenance.
              </p>
            </div>
            <div className="feature-card fade-in-up">
              <div className="feature-icon-large">🔒</div>
              <h3 className="feature-title">Security & Privacy</h3>
              <p className="feature-text">
                We implement industry-standard security practices to protect your 
                data and ensure compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading text-center mb-4">Our Values</h2>
          <div className="values-grid">
            <div className="value-item fade-in-up">
              <h3 className="value-title">Excellence</h3>
              <p className="value-text">
                We are committed to delivering exceptional quality in everything we do.
              </p>
            </div>
            <div className="value-item fade-in-up">
              <h3 className="value-title">Integrity</h3>
              <p className="value-text">
                We operate with honesty, transparency, and ethical business practices.
              </p>
            </div>
            <div className="value-item fade-in-up">
              <h3 className="value-title">Innovation</h3>
              <p className="value-text">
                We embrace creativity and continuously seek better ways to solve problems.
              </p>
            </div>
            <div className="value-item fade-in-up">
              <h3 className="value-title">Collaboration</h3>
              <p className="value-text">
                We believe in teamwork and building strong partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
