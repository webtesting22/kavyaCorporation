import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurProduct.css";

const OurProducts = () => {
    const navigate = useNavigate();
    
    const products = [
        {
            id: 1,
            image: "/Images/HeroSection/Fire Extinguishers.png",
            title: "Fire Extinguishers",
            description: "Multi-purpose fire extinguishers for Class A, B, and C fires. Essential safety equipment for every environment.",
            category: "Portable Safety",
            features: ["ABC Rated", "Easy to Use", "Reliable"]
        },
        {
            id: 2,
            image: "/Images/HeroSection/Commercial Systems.jpg",
            title: "Fire Hose Reel Systems",
            description: "Robust fire hose reel systems for commercial and industrial applications. Quick response to fire emergencies.",
            category: "Water-Based Suppression",
            features: ["High Pressure", "Durable", "Easy Access"]
        },
        {
            id: 3,
            image: "/Images/HeroSection/Fire Alarm Systems.jpg",
            title: "Fire Alarm Systems",
            description: "Advanced fire detection and alarm systems with early warning capabilities. Protect lives and property.",
            category: "Detection & Alert",
            features: ["Early Detection", "Wireless", "24/7 Monitoring"]
        },
        {
            id: 4,
            image: "/Images/HeroSection/Exit Lighting.jpg",
            title: "Emergency Lighting",
            description: "High-visibility emergency and exit lighting systems for safe evacuation during emergencies.",
            category: "Emergency Lighting",
            features: ["LED Technology", "Battery Backup", "High Visibility"]
        },
        {
            id: 5,
            image: "/Images/HeroSection/Hood Cleaning Service.jpg",
            title: "Kitchen Hood Systems",
            description: "Professional kitchen hood cleaning and fire suppression systems for commercial kitchens.",
            category: "Kitchen Safety",
            features: ["NFPA Compliant", "Automatic", "Regular Maintenance"]
        },
        {
            id: 6,
            image: "/Images/HeroSection/Firestystem2.jpg",
            title: "Sprinkler Systems",
            description: "Automatic fire sprinkler systems for comprehensive fire protection in buildings.",
            category: "Automatic Suppression",
            features: ["Automatic", "Reliable", "Code Compliant"]
        }
    ];

    return (
        <section className="our-products-section paddingTop paddingBottom">
            <div className="container">
                {/* Header Section */}
                <div className="section-header">
                    <div className="section-badge">Our Products</div>
                    <h2 className="section-title">Professional Fire Safety Solutions</h2>
                    <p className="section-subtitle">
                        Comprehensive fire protection systems designed to safeguard your property and protect lives
                    </p>
                </div>

                {/* Products Grid */}
                <div className="products-grid">
                    {products.map((product) => (
                        <div 
                            key={product.id} 
                            className="product-card"
                            onClick={() => navigate(`/products/${product.id}`)}
                        >
                            <div className="card-image-container">
                                <img 
                                    src={product.image} 
                                    alt={product.title}
                                    className="card-image"
                                />
                                <div className="image-overlay">
                                    <div className="overlay-content">
                                        <span className="view-details">View Details</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card-content">
                                <div className="category-badge">{product.category}</div>
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-description">{product.description}</p>
                                
                                <div className="product-features">
                                    {product.features.map((feature, index) => (
                                        <span key={index} className="feature-tag">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="cta-section">
                    <button 
                        className="cta-button"
                        onClick={() => navigate('/products')}
                    >
                        View All Products
                        <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurProducts;