import React from "react";
import { useLocation } from "react-router";
import FooterFoot from "../Components/MainPages/Footer/FooterFoot/FooterFoot";

const CondFootFooter = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/Wrong") {
    return null;
  }
  return (
    <>
      <FooterFoot />
    </>
  );
};

export default CondFootFooter;
