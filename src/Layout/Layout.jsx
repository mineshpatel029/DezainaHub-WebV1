import React, { useContext, useEffect } from "react";
import CondHeader from "./CondHeader";
import CondFooter from "./CondFooter";
import CondFootFooter from "./CondFootFooter";
import PopOver from "../Components/PopOver/PopOver";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/offerSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <CondHeader />
      <PopOver />
      <main style={data.length > 0 ? { marginTop: "4%" } : {}}>{children}</main>
      <CondFooter />
      <CondFootFooter />
    </>
  );
};

export default Layout;
