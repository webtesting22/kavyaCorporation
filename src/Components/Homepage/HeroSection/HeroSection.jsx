import React, { useState, useEffect } from "react";
import "./HeroSection.css"
import { Row, Col, Tag } from "antd";
import { RiArrowDownSFill } from "react-icons/ri";
import { RightOutlined } from "@ant-design/icons";
import { IoMdArrowDropright } from "react-icons/io";
import { Skeleton } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HeroSection = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500); // simulate 1.5s load
        return () => clearTimeout(timer);
    }, []);

    const tag = "SAFETY FIRST"
    const MainHeading = "Fire Equipment & Services"
    const Para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, mollitia."


    const CategoriesData = [
        {
            title: "Fire Extinguishers",
            image: "/Images/HeroSection/Fire Extinguishers.png"
        },
        {
            title: "Commercial Systems",
            image: "/Images/HeroSection/Commercial Systems.jpg"
        },
        {
            title: "Fire Alarm Systems",
            image: "/Images/HeroSection/Fire Alarm Systems.jpg"
        },
        {
            title: "Hood Cleaning Service",
            image: "/Images/HeroSection/Hood Cleaning Service.jpg"
        },
        {
            title: "Exit Lighting",
            image: "/Images/HeroSection/Fire Alarm Systems.jpg"
        },
        {
            title: "Fire Extinguisher Training",
            image: "/Images/HeroSection/Fire Extinguisher Training.jpg"
        }
    ]
    return (
        <>
            <div id="HeroSectionContainer" className="SectionBackSecondory flexCenter">
                <div className="BackoverlayImage">
                    {/* <img src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/1035mWPLp6zXWlooG2Lz/678647f276cc20015e38cae1_Background pattern.png" alt="" /> */}
                </div>
                <div className="max-width-container paddingTop">
                    <Row className="full-width">
                        <Col lg={12} md={24}>
                            <div className="LeftSideHeroContentContainer">
                                <Skeleton loading={loading} active paragraph={{ rows: 2 }}>
                                    <div >
                                        <Tag className="tagEdit">{tag}</Tag>
                                        <h1 className="SectionHeading">{MainHeading}</h1>
                                        <p>{Para}</p>
                                        <span className="ScrollBtn"><RiArrowDownSFill />Scroll</span>
                                    </div>
                                </Skeleton>
                            </div>
                        </Col>

                        <Col lg={12} md={24}>
                            <div className="fireImageHeroSection">
                                <Skeleton loading={loading} active paragraph={{ rows: 2 }}>
                                    <div>
                                        <img src="/Images/HeroSection/HeroSectionGraphic.png" alt="" />
                                    </div>
                                </Skeleton>
                            </div>
                        </Col>
                    </Row>

                    <div className="CategoriesCardsSection">
                        {/* For desktop view */}
                        <div className="desktop-cards">
                            <Row gutter={[24, 15]}>
                                {CategoriesData.map((category, index) => (
                                    <Col lg={8} md={12} sm={24} xs={24} key={index}>
                                        <div className="category-card">
                                            <div className="category-img">
                                                <img src={category.image} alt={category.title} />
                                            </div>
                                            <div className="category-content">
                                                <h3>{category.title}</h3>
                                                <a href="#" className="learn-more-btn">
                                                    LEARN MORE <IoMdArrowDropright />
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        <div className="mobile-cards">
                            <Row gutter={[24, 15]}>
                                <Col lg={24} md={24} sm={24} xs={24} >
                                    <Swiper
                                        modules={[Navigation,Autoplay]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        speed={800}
                                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                                        navigation={{
                                            nextEl: '.swiper-button-next-custom',
                                            prevEl: '.swiper-button-prev-custom',
                                        }}
                                    >
                                        {CategoriesData.map((category, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="category-card">
                                                    <div className="category-img">
                                                        <img src={category.image} alt={category.title} />
                                                    </div>
                                                    <div className="category-content">
                                                        <h3>{category.title}</h3>
                                                        <a href="#" className="learn-more-btn">
                                                            LEARN MORE <IoMdArrowDropright />
                                                        </a>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                        <div className="swiper-button-prev-custom">←</div>
                                        <div className="swiper-button-next-custom">→</div>
                                    </Swiper>
                                </Col>
                            </Row>
                        </div>

                        {/* For mobile swiper view */}

                    </div>


                </div>
            </div>
        </>
    )
}
export default HeroSection