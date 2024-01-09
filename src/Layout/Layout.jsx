import React, { useContext } from "react";
import CondHeader from "./CondHeader";
import CondFooter from "./CondFooter";
import CondFootFooter from "./CondFootFooter";
import PopOver from "../Components/PopOver/PopOver";
import Marquee from "react-fast-marquee";
import OfferStrip from "../Components/OfferStrip/OfferStrip";
 

const Layout = ({ children }) => {
   
  return (
    <>
    {/* <OfferStrip /> */}
      <CondHeader />
      <PopOver />
        <main>
          
            {children}
        </main>
      <CondFooter />
      <CondFootFooter />
    </>
    
  );
};

export default Layout;
