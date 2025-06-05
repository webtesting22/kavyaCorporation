import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutBrand from "./AboutBrand/AboutBrand";
import OurProducts from "./OurProducts/OurProducts";
import AnimatedCards from "./FixedAttachmentSwiper/AnimatedCards";

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutBrand/>
            <OurProducts/>
            <AnimatedCards/>
        </>
    )
}
export default Home