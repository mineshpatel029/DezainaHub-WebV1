import React from "react";
import "./ServiceLandingSec.css";
import ServiceLandingImg from "../Images/7845.jpg";
import { NavLink } from "react-router-dom";
import Button from "../../../GlobalComponents/Button/Button";

export const ServiceLandingSec = () => {
  const scrollToSection = () => {
    // You can adjust the '800' value to control the speed of the scroll
    window.scroll({ top: 1000, left: 0, behavior: "smooth" });
  };

  return (
    <div className="ServiceLSMain">
      <div className="ServiceLS container" data-aos="zoom-in-up">
        <div className="ServiceLS-Head">
          <h1 className="ServiceLSHead-Heading">
            Ready to make a Great Brand <span>Impression</span>?
          </h1>
          <div className="ServiceLSHead-Body">
            <p className="ServiceLSHeadBody-Content">
              Elevate your brand with our expert design solutions. Discover a
              range of creative services tailored to your needs. Let's create
              something remarkable together.
            </p>

            <Button
              onClick={scrollToSection}
              buttonText={"Explore Our services"}
              backgroundColor={"#364154"}
              border={"none"}
              width={"12rem"}
              height={"3rem"}
              fontFamily={"Martel Sans"}
              fontWeight={"700"}
              borderRadius={"0.8rem"}
            />
          </div>
        </div>
        <div className="ServiceLS-ImgBody">
          <h2 className="ServiceLSImgBody-Content">
            Get your <span>Work</span> Done
          </h2>
          <div className="ServiceLSImgBody-ImgContainer">
            <img className="ServiceLSImgBody-Img" src={ServiceLandingImg} />
          </div>
          <div className="ServiceLSImgBody-UpperShadow"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLandingSec;
