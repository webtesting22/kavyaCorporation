import React from "react";
import { Row, Col, Tag } from "antd";
import {
    FireOutlined,
    SafetyOutlined,
    ToolOutlined,
    //   ShieldCheckOutlined,
    AlertOutlined,
    CheckCircleOutlined
} from "@ant-design/icons";

// Import your CSS file
import "./ServicesSection.css";

const ServicesSection = () => {
    const servicesData = [
        {
            title: "Supply & Install Safety Equipment",
            icon: <SafetyOutlined />,
            // description: "توريد وتركيب شبكات الطفو والإنذار"
        },

        {
            title: "Fire Detection Systems",
            icon: <AlertOutlined />,
            // description: "متابعة استخراج رخص البلدية"
        },
        {
            title: "Electronic Safety Systems",
            icon: <ToolOutlined />,
            // description: "مندر الكترونى لوسائل السلامة"
        },
        {
            title: "Civil Defense Integration",
            icon: <CheckCircleOutlined />,
            // description: "استخراج تصاريح الدفاع المدني"
        },
    ];

    const tag = "OUR SERVICES";
    const MainHeading = "We Serve All Organizations and Institutions";
    const subHeading = "With The Highest Quality.";

    return (
        <div className="services-section-wrapper">
            <div id="ServicesSectionContainer" className="flexCenter paddingTop">
                {/* Background SVG Elements */}


                <div className="max-width-container" style={{ width: "100%" }}>
                    <Row className="full-width">
                        {/* Left Side - Content */}
                        <Col lg={12} md={24} xs={24}>
                            <div className="services-content-container">
                                <Tag className="tagEdit">{tag}</Tag>
                                <h1 className="SectionHeading">{MainHeading}</h1>
                                <h2 className="sub-heading">{subHeading}</h2>

                                {/* Services Grid */}
                                <div className="services-grid">
                                    <Row gutter={[20, 20]}>
                                        {servicesData.map((service, index) => (
                                            <Col lg={12} md={12} sm={12} xs={24} key={index}>
                                                <div className="service-card">
                                                    <div className="service-icon">
                                                        {service.icon}
                                                    </div>
                                                    <div className="service-content">
                                                        <h3>{service.title}</h3>
                                                        {/* <p>{service.description}</p> */}
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </Col>

                        {/* Right Side - Graphics (will be handled by CSS background) */}
                        <Col lg={12} md={24} xs={24}>
                            <div className="graphics-container">
                                <div className="background-graphics">
                                    {/* Main Fire/Flame Shape */}
                                    <div className="fire-shape">
                                        <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="fireGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                                                    <stop offset="0%" stopColor="#FF6B35" />
                                                    <stop offset="50%" stopColor="#F7931E" />
                                                    <stop offset="100%" stopColor="#FFD23F" />
                                                </linearGradient>
                                            </defs>
                                            <path d="M200 550 C120 520, 80 450, 90 380 C100 320, 140 280, 160 220 C180 160, 190 100, 220 60 C250 20, 290 40, 300 80 C310 120, 280 160, 290 200 C300 240, 330 280, 320 320 C310 360, 290 400, 280 440 C270 480, 280 520, 200 550 Z" fill="url(#fireGradient)" />
                                        </svg>
                                    </div>

                                    {/* Phone/Dashboard Mockup */}
                                    <div className="phone-mockup">
                                        <div className="phone-screen">
                                            <div className="dashboard-content">
                                                <div className="dashboard-header">
                                                    <div className="status-bar"></div>
                                                    <h4>Lorem ipsum dolor sit amet consectetur </h4>
                                                </div>
                                                <div className="dashboard-items">
                                                    <div className="dashboard-item">
                                                        <span className="item-icon safety">🛡️</span>
                                                        <span>Lorem ipsum dolor sit amet consectetur</span>
                                                    </div>
                                                    <div className="dashboard-item">
                                                        <span className="item-icon fire">🔥</span>
                                                        <span>Lorem ipsum dolor sit amet consectetur </span>
                                                    </div>
                                                    <div className="dashboard-item">
                                                        <span className="item-icon alert">⚠️</span>
                                                        <span>Lorem ipsum dolor sit amet consectetur </span>
                                                    </div>
                                                    <div className="dashboard-item active">
                                                        <span className="item-icon emergency">🚨</span>
                                                        <span>Lorem ipsum dolor sit amet consectetur </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fire Team Illustration */}
                                    <div className="team-illustration">
                                        <div className="firefighter-group">
                                            <div className="firefighter">👨‍🚒</div>
                                            <div className="firefighter">👩‍🚒</div>
                                            <div className="firefighter">👨‍🚒</div>
                                        </div>
                                        <div className="fire-truck">🚒</div>
                                        <div className="fire-extinguisher">🧯</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;