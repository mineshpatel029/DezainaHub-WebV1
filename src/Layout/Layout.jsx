import React, { useContext, useEffect } from "react";
import CondHeader from "./CondHeader";
import CondFooter from "./CondFooter";
import CondFootFooter from "./CondFootFooter";
import PopOver from "../Components/PopOver/PopOver";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/offerSlice";

const Layout = ({ children }) => {

  return (
    <>
      <CondHeader />
      <PopOver />
      <main>{children}</main>
      <CondFooter />
      <CondFootFooter />
    </>
  );
};

export default Layout;
