import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AnimatedCards.css";

const AnimatedCards = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      number: "01",
      title: "Fire Protection Consultancy",
      subtitle: "Planning Stage for Architects & Builders",
      icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
      color: "#e63b3b",
      serviceId: "fire-protection-consultancy",
    },
    {
      number: "02",
      title: "Fire Dept. Liaising",
      subtitle: "Obtain Provisional & Final Fire NOCs",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "#ff6b6b",
      serviceId: "fire-dept-liaising",
    },
    {
      number: "03",
      title: "Fire Fighting System Design",
      subtitle: "As per NBC Norms & Commissioning",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      color: "#e63b3b",
      serviceId: "fire-fighting-system-design",
    },
    {
      number: "04",
      title: "Fire Audit",
      subtitle: "Complete Safety Assessment",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      color: "#ff6b6b",
      isHighlighted: true,
      serviceId: "fire-audit",
    },
    {
      number: "05",
      title: "Fire Equipment Supply & AMC",
      subtitle: "Extinguishers & Maintenance",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      color: "#e63b3b",
      serviceId: "fire-equipment-supply-amc",
    },
    {
      number: "06",
      title: "Fire Fighting Training",
      subtitle: "Employee & Security Personnel",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      color: "#ff6b6b",
      serviceId: "fire-fighting-training",
    },
    {
      number: "07",
      title: "Systems Survey & Form B",
      subtitle: "Maintenance & Compliance",
      icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      color: "#e63b3b",
      serviceId: "systems-survey-form-b",
    },
    {
      number: "08",
      title: "High Rise Protection",
      subtitle: "Specialized Building Solutions",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      color: "#ff6b6b",
      serviceId: "high-rise-protection",
    },
  ];

  const handleDownload = () => {
    console.log("Download fire safety guide clicked");
  };

  const handleCardClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section className="fire-process-section">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <svg className="bg-svg-1" viewBox="0 0 100 100" fill="none">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="rgba(230, 59, 59, 0.1)"
            strokeWidth="2"
            fill="none"
          >
            <animate
              attributeName="r"
              values="40;45;40"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              values="0.1;0.3;0.1"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        <svg className="bg-svg-2" viewBox="0 0 100 100" fill="none">
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            stroke="rgba(255, 107, 107, 0.1)"
            strokeWidth="2"
            fill="none"
          >
            <animate
              attributeName="width"
              values="60;70;60"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="height"
              values="60;70;60"
              dur="4s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>

      <div className="MainContainer paddingTop paddingBottom">
        {/* Header Section */}
        <div className="section-header textCenter ">
          <div className="section-badge">Our Process</div>
          <h2 className="section-title">Kavya Fire Protection Process</h2>
          <p className="section-subtitle">
            Comprehensive fire safety solutions from initial planning to
            complete system implementation. We ensure NBC compliance, facilitate
            approvals, and deliver end-to-end protection.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="process-grid container">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`process-card ${
                card.isHighlighted ? "highlighted" : ""
              } fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCardClick(card.serviceId)}
            >
              {/* Card Icon */}
              <div className="card-icon-wrapper">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d={card.icon} />
                </svg>
              </div>

              {/* Card Number */}
              <div className="card-number">{card.number}</div>

              {/* Card Content */}
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="card-overlay">
                <div className="overlay-content">
                  <span className="learn-more">Learn More</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="cta-section textCenter marginTop-60 fadeInUp">
          <div className="cta-content">
            <span className="cta-text">Complete fire safety solutions</span>
            <button className="cta-button" onClick={handleDownload}>
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Fire Safety Guide
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AnimatedCards;
