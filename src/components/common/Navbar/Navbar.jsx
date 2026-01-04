
import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo/vss-logo-.png';

// Import images for dropdown menu
import erpNav from '../../../assets/nav-images/ERP-nav-menu.jpeg';
import mobileNav from '../../../assets/nav-images/Mobile-nav-menu.jpeg';
import uiuxNav from '../../../assets/nav-images/UI-XI-nav-menu.jpeg';
import webNav from '../../../assets/nav-images/Web-nav-manu.jpeg';
import webPortfolio from '../../../assets/nav-images/web-porfolio-menu-image.jpeg';
import appPortfolio from '../../../assets/nav-images/app-portfolio-menu-image.jpeg';
import uiuxPortfolio from '../../../assets/nav-images/ui-xi-porfolio-menu-image.jpeg';

import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileServices = (e) => {
    e.preventDefault();
    setShowMobileServices(!showMobileServices);
  };

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const serviceItems = [
    {
      id: 1,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies.',
      image: webNav,
      link: '/services/website-development'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      image: mobileNav,
      link: '/services/mobile-app-development'
    },
    {
      id: 3,
      title: 'ERP & Billing Software',
      description: 'Comprehensive enterprise solutions to streamline operations.',
      image: erpNav,
      link: '/services/erp-billing-software'
    },
    {
      id: 4,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create memorable experiences.',
      image: uiuxNav,
      link: '/services/ui-ux-design'
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Web Projects',
      description: 'Showcase of our latest web development work.',
      image: webPortfolio,
      link: '/portfolio'
    },
    {
      id: 2,
      title: 'Mobile Apps',
      description: 'Featured mobile applications and solutions.',
      image: appPortfolio,
      link: '/portfolio'
    },
    {
      id: 3,
      title: 'Branding & Design',
      description: 'Creative identity and UI/UX design projects.',
      image: uiuxPortfolio,
      link: '/portfolio'
    }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logo} alt="VSS Logo" className="logo-image" />
          </Link>

          <div className="navbar-mobile-actions">
            <Link to="/talk-to-experts" className="mobile-expert-btn" onClick={closeMenu}>
              <i className='bx bx-headphone'></i>
              Talk to Experts
            </Link>
          </div>

          <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <div className="navbar-links-center">
              <NavLink to="/" className="navbar-link" onClick={closeMenu}>
                <i className='bx bx-home-alt'></i>
                Home
              </NavLink>

              <NavLink to="/about" className="navbar-link" onClick={closeMenu}>
                <i className='bx bx-info-circle'></i>
                About
              </NavLink>

              <div
                className="navbar-dropdown"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`navbar-link dropdown-trigger ${location.pathname === '/services' ? 'active' : ''}`}>
                  <i className='bx bx-grid-alt'></i>
                  Services
                  <i className='bx bx-chevron-down dropdown-arrow'></i>
                </button>

                {activeDropdown === 'services' && (
                  <div className="dropdown-menu">
                    <div className="dropdown-grid">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.id}
                          to={item.link}
                          className="dropdown-card"
                          onClick={closeMenu}
                        >
                          <div className="card-image">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <div className="card-content">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-description">{item.description}</p>
                            <span className="card-link">
                              Learn more
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="navbar-dropdown"
                onMouseEnter={() => handleMouseEnter('portfolio')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`navbar-link dropdown-trigger ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                  <i className='bx bx-briefcase'></i>
                  Portfolio
                  <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {activeDropdown === 'portfolio' && (
                  <div className="dropdown-menu">
                    <div className="dropdown-grid plans-grid">
                      {portfolioItems.map((item) => (
                        <Link
                          key={item.id}
                          to={item.link}
                          className="dropdown-card"
                          onClick={closeMenu}
                        >
                          <div className="card-image">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <div className="card-content">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-description">{item.description}</p>
                            <span className="card-link">
                              View Projects
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/team" className="navbar-link" onClick={closeMenu}>
                <i className='bx bx-group'></i>
                Team
              </NavLink>
            </div>

            <div className="navbar-actions">
              <Link to="/talk-to-experts" className="btn-signup" onClick={closeMenu}>
                Talk to Experts
              </Link>
              <Link to="/contact" className="btn-try" onClick={closeMenu}>
                Contact Us
                <i className='bx bx-chevron-right'></i>
              </Link>
            </div>
          </div>

          <button className="navbar-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Services Popup */}
      <div className={`mobile-services-popup ${showMobileServices ? 'active' : ''}`}>
        <div className="popup-backdrop" onClick={() => setShowMobileServices(false)}></div>
        <div className="popup-content">
          <div className="popup-header">
            <h3>Our Services</h3>
            <button className="close-popup" onClick={() => setShowMobileServices(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="popup-grid">
            {serviceItems.map((item) => (
              <Link key={item.id} to={item.link} className="popup-card-item" onClick={() => setShowMobileServices(false)}>
                <div className="popup-icon">
                  <img src={item.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <div className="popup-text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <svg className="popup-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-bottom-nav">
        <div className="mobile-nav-items">
          <NavLink to="/" className="mobile-nav-item">
            <div className="nav-icon">
              <i className='bx bx-home-alt-2'></i>
            </div>
            <span className="nav-label">Home</span>
          </NavLink>

          <NavLink to="/portfolio" className="mobile-nav-item">
            <div className="nav-icon">
              <i className='bx bx-briefcase'></i>
            </div>
            <span className="nav-label">Portfolio</span>
          </NavLink>

          <div className="mobile-nav-center">
            <button className="center-fab" onClick={toggleMobileServices}>
              <i className='bx bx-plus'></i>
            </button>
          </div>

          <NavLink to="/team" className="mobile-nav-item">
            <div className="nav-icon">
              <i className='bx bx-group'></i>
            </div>
            <span className="nav-label">Team</span>
          </NavLink>

          <NavLink to="/contact" className="mobile-nav-item">
            <div className="nav-icon">
              <i className='bx bx-envelope'></i>
            </div>
            <span className="nav-label">Contact</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
