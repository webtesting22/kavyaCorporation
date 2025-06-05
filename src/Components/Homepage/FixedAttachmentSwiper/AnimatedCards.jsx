import React,{useRef,useEffect} from "react";
import "./AnimatedCards.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode ,Autoplay} from 'swiper/modules';
const AnimatedCards = () => {
    const cardData = [
        { 
          number: '01', 
          title: 'Fire Protection\nConsultancy',
          subtitle: 'Planning Stage for Architects & Builders'
        },
        { 
          number: '02', 
          title: 'Fire Dept.\nLiaising',
          subtitle: 'Obtain Provisional & Final Fire NOCs'
        },
        { 
          number: '03', 
          title: 'Fire Fighting\nSystem Design',
          subtitle: 'As per NBC Norms & Commissioning'
        },
        { 
          number: '04', 
          title: 'Fire Audit',
          subtitle: 'Complete Safety Assessment',
          isHighlighted: true
        },
        { 
          number: '05', 
          title: 'Fire Equipment\nSupply & AMC',
          subtitle: 'Extinguishers & Maintenance'
        },
        { 
          number: '06', 
          title: 'Fire Fighting\nTraining',
          subtitle: 'Employee & Security Personnel'
        },
        { 
          number: '07', 
          title: 'Systems Survey\n& Form B',
          subtitle: 'Maintenance & Compliance'
        },
        { 
          number: '08', 
          title: 'High Rise\nProtection',
          subtitle: 'Specialized Building Solutions'
        }
      ];
    
      const floatingIcons = ['🔥', '🚒', '🧯', '🚨', '⚠️', '🛡️', '🔧', '🏢'];
    
      const handleDownload = () => {
        // Add your download logic here
        console.log('Download fire safety guide clicked');
      };

    return (
        <>
       <div className="protect-section">
      {/* Floating Background Icons */}
      <div className="floating-icons">
        {floatingIcons.map((icon, index) => (
          <div key={index} className="floating-icon">
            {icon}
          </div>
        ))}
      </div>
      
      <div className="protect-content">
        <div className="protect-text">
          <h2 className="protect-title">Kavya Fire Protection Process</h2>
          <p className="protect-description">
            As a leading fire safety consultant and solution provider, we specialize in comprehensive fire protection 
            services across all building types. From initial planning consultancy to complete system installation, 
            we ensure NBC compliance, facilitate fire department approvals, and deliver end-to-end safety solutions. 
            {/* Our expert team handles everything from fire audits and system design to training programs and annual 
            maintenance contracts, protecting lives and property with proven, reliable fire safety systems. */}
          </p>
        </div>
        
        <div className="protect-carousel">
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            freeMode={true}
            navigation={{
              nextEl: '.protect-next',
              prevEl: '.protect-prev',
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            modules={[Navigation, FreeMode,Autoplay]}
            className="protectSwiper"
            breakpoints={{
              640: {
                spaceBetween: 25,
              },
              768: {
                spaceBetween: 30,
              },
            }}
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index}>
                <div className={`protect-card ${card.isHighlighted ? 'highlighted' : ''}`}>
                  <div className="card-number">{card.number}</div>
                  <div className="card-title">{card.title}</div>
                  {card.subtitle && (
                    <div className="card-subtitle">{card.subtitle}</div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="carousel-controls">
            <div className="swiper-button-prev protect-prev"></div>
            <div className="swiper-button-next protect-next"></div>
          </div>
        </div>
        
        <div className="download-section">
          <span className="download-text">Complete fire safety solutions</span>
          <button className="download-btn" onClick={handleDownload}>
            <span className="btn-icon">📋</span>
            Fire Safety Guide
          </button>
        </div>
      </div>
    </div>
        </>
    )
}
export default AnimatedCards