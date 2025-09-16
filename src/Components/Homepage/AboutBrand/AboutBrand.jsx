import React, { useState, useEffect } from "react";
import { Row, Col, Tag, Skeleton } from "antd";
import { useInView } from "react-intersection-observer";
import "./About.css";

const AboutBrand = () => {
  const tag = "What We Do";
  const AboutBrandHeading = (
    <h1 className="SectionHeading">
      Fire <span>Systems</span> & Kitchen <span>Exhausts</span>
    </h1>
  );
  const AboutBrandInfo = (
    <>
      At Kavya Corporation, we specialize in delivering end-to-end fire safety
      solutions and kitchen exhaust systems tailored to modern safety standards.
      Our expertise covers the design, supply, installation, and maintenance of
      advanced fire detection, suppression, and protection systems that keep
      your spaces secure. In addition, we provide efficient and durable kitchen
      exhaust solutions that ensure a safe, smoke-free, and compliant
      environment for commercial kitchens. With our blend of technology,
      reliability, and professional service, we help safeguard both people and
      property with confidence.
    </>
  );

  const [loading, setLoading] = useState(true);
  const [scrollPercent, setScrollPercent] = useState(0);

  const { ref, entry } = useInView({
    threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0 to 1
  });

  useEffect(() => {
    if (entry) {
      const ratio = entry.intersectionRatio;
      setScrollPercent(ratio); // 0 to 1
    }
  }, [entry]);

  const maxTranslate = 100;
  const translateX = scrollPercent * maxTranslate;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="AboutBrandContainer"
      className="flexCenter marginBottom50"
      ref={ref}
    >
      <div className="max-width-container paddingTop">
        <Row className="full-width">
          <Col lg={12} md={24}>
            <div className="paddingRight">
              <Skeleton loading={loading} active paragraph={{ rows: 3 }}>
                <Tag className="tagEdit">{tag}</Tag>
                <div>{AboutBrandHeading}</div>
                <p>{AboutBrandInfo}</p>
                <div className="btnContainerItem">
                  {/* <button>Commercial System</button> */}
                  <button>Contact Us</button>
                </div>
              </Skeleton>
            </div>
          </Col>
          <Col lg={12} md={24}>
            <div className="ImageCollapseStyle">
              <div>
                <img
                  src="/Images/HeroSection/About/FireStystem.jpg"
                  alt=""
                  style={{ transition: "transform 0.3s ease-out" }}
                />
                <img
                  src="/Images/HeroSection/About/Firestystem2.jpg"
                  alt=""
                  style={{
                    transform: `translateX(${translateX}px)`,
                    transition: "transform 0.3s ease-out",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutBrand;
