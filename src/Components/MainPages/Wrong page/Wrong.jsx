import Lottie from "lottie-react";
import React from "react";
import Erroranimation from "../../Errorpage.json";
import { NavLink } from "react-router-dom";
import Button from "../../GlobalComponents/Button/Button";
const Wrong = () => {
  return (
    <div className="err-con">
      <Lottie animationData={Erroranimation} />

      <h1 className="err-content" style={{ color: "#1e1e1e" }}>
        Wrong Route, Our Designers are sleeping here
      </h1>

      <NavLink to="/">
        <Button buttonText="Back to home" fontSize="20px" />
      </NavLink>
    </div>
  );
};

export default Wrong;
