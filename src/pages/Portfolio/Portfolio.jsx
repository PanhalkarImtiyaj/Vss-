import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(portfolioData.map(item => item.category))];

  const filteredProjects = filter === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === filter);

  return (
    <div className="portfolio-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title fade-in-down">Our Portfolio</h1>
          <p className="page-subtitle fade-in-up">
            Showcasing our best work and successful projects
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="portfolio-card fade-in-up">
                <div className="portfolio-image">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="portfolio-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
