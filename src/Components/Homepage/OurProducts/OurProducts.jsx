import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { Tag } from "antd";

// Import your enhanced CSS file
import "./OurProduct.css";
import ServicesSection from "../ServicesSection/ServicesSection";

const OurProducts = () => {
    const SwiperData = [
        {
            image: "https://images.unsplash.com/photo-1722227089176-a981d2544b5f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Fire Extinguisher",
            tag: "Portable Safety Equipment"
        },
        {
            image: "https://suresafety.com/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/f/i/fire-hose-reel_1.jpg",
            title: "Fire Hose Reel System",
            tag: "Water-Based Suppression"
        },
        {
            image: "https://images.unsplash.com/photo-1735321626737-f80d9d2076c9?q=80&w=2869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Fire Hydrant System",
            tag: "Emergency Water Supply"
        },
        {
            image: "https://images.unsplash.com/photo-1614519473079-44574d3f4389?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Fire Alarm System",
            tag: "Early Detection System"
        },
        // {
        //     image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     title: "Sprinkler System",
        //     tag: "Automatic Suppression"
        // },
        // {
        //     image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     title: "Emergency Exit Signs",
        //     tag: "Safety Navigation"
        // }
    ];

    const MainHeading = "Our Services";
    const tag = "Our Products";

    return (
        <>
        <div className="our-products-wrapper paddingTop flexCenter">
            <div id="OurProductsContainer">
                <div className="max-width-container" style={{ width: "100%" }}>
                   <div style={{display:"flex",justifyContent:"center"}}>
                   <Tag className="tagEdit">
                        {tag}
                    </Tag>
                   </div>
                    <h1 className="SectionHeading" style={{ textAlign: "center" }}>
                        {MainHeading}
                    </h1>
                    
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        freeMode={true}
                        loop={true}
                        speed={1000}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[FreeMode, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {SwiperData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="CardSwiper">
                                    <div className="ImageContainerEdit">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="SwiperTitle">
                                        <h3>{item.title}</h3>
                                        <p>({item.tag})</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            
        </div>

       
        <ServicesSection/>
        </>
    );
};

export default OurProducts;