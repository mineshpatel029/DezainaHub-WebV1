import React from "react";
import "./ServiceProductSec.css";

import ServiceProductCategory1 from "./ServiceProductCategory1/ServiceProductCategory1";
import ServiceProductCategory2 from "./ServiceProductCategory1/ServiceProductCategory2";
import ServiceProductCategory3 from "./ServiceProductCategory1/ServiceProductCategory3";
import { Link } from "react-router-dom";
import { setActiveCat } from "../../../../Redux/galleryReducer";
import { useDispatch } from "react-redux";

export const ServiceProductSec = () => {
  // const dispatch = useDispatch();
  // const handleSetActiveCat = (catId) => {
  //   dispatch(setActiveCat(catId));
  // };

  const scrollToSection = (e) => {
    // You can adjust the '800' value to control the speed of the scroll
    window.scroll({ top: e, left: 0, behavior: "smooth" });
  };
  return (
    <div className="ServicePSMain" data-aos="fade-up">
      <div className="ServicePS-CategoryStrip">
        <div className="ServicePS-CategoryList container">
          <h4
            className="ServicePS-Category"
            data-aos="fade-up"
            onClick={() => {
              scrollToSection(1000);
            }}
          >
            VISUAL BRANDING
          </h4>

          <h4
            className="ServicePS-Category"
            data-aos="fade-up"
            onClick={() => {
              scrollToSection(2700);
            }}
          >
            DIGITAL INTERACTION
          </h4>

          <h4
            className="ServicePS-Category"
            data-aos="fade-up"
            onClick={() => {
              scrollToSection(4080);
            }}
          >
            BRAND MARKETING
          </h4>
        </div>
      </div>
      <ServiceProductCategory1 />
      <ServiceProductCategory2 />
      <ServiceProductCategory3 />
      <div className="ServicePS-CategoryStrip">
        <div className="ServicePS-CategoryList container">
          <h4
            className="ServicePS-Category"
            data-aos="fade-up"
            onClick={() => {
              scrollToSection(1200);
            }}
          >
            Visual Branding
          </h4>
          <h4
            className="ServicePS-Category"
            data-aos="fade-up"
            onClick={() => {
              scrollToSection(2700);
            }}
          >
            DIGITAL INTERACTION
          </h4>
          <h4
            className="ServicePS-Category"
            data-aos="fade-up"
            onClick={() => {
              scrollToSection(4080);
            }}
          >
            BRAND MARKETING
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceProductSec;
