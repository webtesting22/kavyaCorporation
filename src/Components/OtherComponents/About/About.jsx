import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className="about-section sectionWrapper paddingTop paddingBottom marginTop100">
            <div className="MainContainer container">
                {/* Header Section */}
                <div className="section-header textCenter marginBottom-60 fadeInUp">
                    <div className="section-badge">About Us</div>
                    <h2 className="section-title">Kavya Fire Safety Corporation</h2>
                    <p className="section-subtitle">
                        Leading provider of comprehensive fire safety solutions with certified expertise and reliable service
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="about-content">
                    {/* Left Side - Image */}
                    <div className="about-image-section fadeInUp">
                        <div className="image-container">
                            <img 
                                src="/Images/HeroSection/Fire Extinguishers.png" 
                                alt="Fire Safety Equipment" 
                                className="main-image"
                            />
                            <div className="image-overlay">
                                <div className="overlay-content">
                                    <span className="overlay-text">Certified Safety</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Additional Images Grid */}
                        <div className="additional-images">
                            <div className="small-image">
                                <img src="/Images/HeroSection/Commercial Systems.jpg" alt="Commercial Systems" />
                            </div>
                            <div className="small-image">
                                <img src="/Images/HeroSection/Fire Alarm Systems.jpg" alt="Fire Alarm Systems" />
                            </div>
                            <div className="small-image">
                                <img src="/Images/HeroSection/Exit Lighting.jpg" alt="Exit Lighting" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="about-text-section fadeInUp">
                        <div className="content-wrapper">
                            <h3 className="about-heading">Your Trusted Fire Safety Partner</h3>
                            
                            <div className="service-highlight">
                                <div className="highlight-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                </div>
                                <div className="highlight-content">
                                    <h4>New Fire Extinguishers</h4>
                                    <p>We provide new fire extinguishers (fire bottles) with complete certification and compliance standards.</p>
                                </div>
                            </div>

                            <div className="service-highlight">
                                <div className="highlight-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                    </svg>
                                </div>
                                <div className="highlight-content">
                                    <h4>Refilling Services</h4>
                                    <p>Professional refilling of existing fire extinguishers including CO2, ABC Powder types and others.</p>
                                </div>
                            </div>

                            <div className="service-highlight">
                                <div className="highlight-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                    </svg>
                                </div>
                                <div className="highlight-content">
                                    <h4>Certified Services</h4>
                                    <p>All our services come with proper certification ensuring compliance with safety standards.</p>
                                </div>
                            </div>

                            <div className="company-motto">
                                <h4>Our Commitment</h4>
                                <p>
                                    "WE ARE PROVIDING NEW FIRE EXTINGUISHER (FIRE BOTTLE) AS WELL AS REFILLING 
                                    OF OLD FIRE EXTINGUISHER Co2, ABC POWDER TYPE AND OTHERS (FIRE BOTTLE) 
                                    With Certificate SO CONTACT US FOR FIRE SAFETY WORK"
                                </p>
                            </div>

                            {/* <div className="cta-buttons">
                                <button className="primary-btn">
                                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    Contact Us
                                </button>
                                <button className="secondary-btn">
                                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                                    </svg>
                                    Get Quote
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="stats-section marginTop-60 fadeInUp">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">1000+</div>
                            <div className="stat-label">Fire Extinguishers</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Commercial Projects</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Emergency Support</div>
                        </div>
                    </div>
                </div>

                {/* Comprehensive Fire Safety Services Section */}
                <div className="services-overview-section marginTop-100 fadeInUp">
                    <div className="section-header textCenter marginBottom-60">
                        <div className="section-badge">Our Services</div>
                        <h2 className="section-title">Comprehensive Fire Safety Solutions</h2>
                        <p className="section-subtitle">
                            Complete fire protection services from planning to maintenance with NBC compliance
                        </p>
                    </div>

                    {/* Central Fire Audit Card */}
                    <div className="central-audit-card">
                        <div className="audit-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                            </svg>
                        </div>
                        <h3>Fire Audit</h3>
                        <p>Complete Safety Assessment & Compliance Verification</p>
                    </div>

                    {/* Surrounding Services Grid */}
                    <div className="services-grid">
                        <div className="service-card">
                            <h4>Fire Protection Consultancy</h4>
                            <p>Planning Stage for Architects & Builders</p>
                        </div>
                        <div className="service-card">
                            <h4>Fire Dept. Liaising</h4>
                            <p>Obtain Provisional & Final Fire NOCs</p>
                        </div>
                        <div className="service-card">
                            <h4>System Design & Commissioning</h4>
                            <p>As per NBC Norms, Erection, Testing & Training</p>
                        </div>
                        <div className="service-card">
                            <h4>Equipment Supply</h4>
                            <p>Fire Fighting Equipment & Systems</p>
                        </div>
                        <div className="service-card">
                            <h4>High Rise Protection</h4>
                            <p>Specialized Building Fire Protection</p>
                        </div>
                        <div className="service-card">
                            <h4>Systems Survey & Form B</h4>
                            <p>Maintenance & Compliance Documentation</p>
                        </div>
                        <div className="service-card">
                            <h4>Training Programs</h4>
                            <p>Employee & Security Personnel Training</p>
                        </div>
                        <div className="service-card">
                            <h4>Extinguisher Supply & AMC</h4>
                            <p>Maintenance & Annual Contracts</p>
                        </div>
                    </div>

                    {/* Detailed Services Lists */}
                    <div className="detailed-services">
                        <div className="services-column">
                            <h3>Fire Safety Systems</h3>
                            <ul className="services-list">
                                <li>Fire Alarm & Smoke Detection Systems</li>
                                <li>Fire Safety Signages</li>
                                <li>Fire Extinguishers</li>
                                <li>Fire Suppression Systems:
                                    <ul>
                                        <li>NOVEC 1230/ FK 5-1-12 Flooding System</li>
                                        <li>FM200/ HFC 227ea Fire Suppression System</li>
                                        <li>CO2 Total Flooding System</li>
                                        <li>Vehicle Fire Suppression System</li>
                                        <li>Kitchen Fire Suppression System</li>
                                        <li>Fire Search Tube Suppression System</li>
                                    </ul>
                                </li>
                                <li>Fire Hydrant System:
                                    <ul>
                                        <li>Wet Riser / Down Commer</li>
                                        <li>Court Yard Fire Hydrants</li>
                                        <li>Sprinkler System</li>
                                        <li>Hydrant Accessories</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="services-column">
                            <h3>Service Process</h3>
                            <ul className="services-list">
                                <li>System Designing</li>
                                <li>Material Supply</li>
                                <li>Erection</li>
                                <li>Testing</li>
                                <li>Commissioning</li>
                                <li>Training & Periodic Maintenance</li>
                                <li>Fire Protection / Prevention Survey</li>
                                <li>Issue of Six monthly Certificates to comply the provisions of the Fire Act</li>
                            </ul>
                        </div>
                    </div>

                    {/* Maintenance Message */}
                    <div className="maintenance-message">
                        <div className="message-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </div>
                        <h3>Maintenance Commitment</h3>
                        <p>
                            KEEP YOUR FIRE FIGHTING SYSTEMS / EQUIPMENT / EXTINGUISHERS 
                            ALWAYS WELL MAINTAINED IN GOOD WORKING CONDITION.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;