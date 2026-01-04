import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../../data/portfolioData';
import Button from '../../common/Button/Button';
import './ProductsPortfolio.css';

const ProductsPortfolio = () => {
    // Show 9 products on home page to perfectly fill the grid
    const featuredProducts = portfolioData.slice(0, 9);

    return (
        <section className="products-portfolio section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our <span className="text-gradient">Products & Apps</span></h2>
                    <p className="section-description">
                        Explore our latest digital solutions, apps, and platforms built for innovation and efficiency.
                    </p>
                </div>

                <div className="products-grid">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-icon-wrapper">
                                {typeof product.image === 'string' && (product.image.includes('/') || product.image.includes('data:')) ? (
                                    <img src={product.image} alt={product.title} className="product-image" />
                                ) : (
                                    <span className="product-emoji">{product.image}</span>
                                )}
                            </div>
                            <div className="product-content">
                                <span className="product-category">{product.category}</span>
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-description">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <Link to="/portfolio">
                        <Button variant="primary" size="large">View All Products</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsPortfolio;
