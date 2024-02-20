import HeaderSec from "../Components/MainPages/Header/HeaderSec";
import { useLocation } from "react-router";

const CondHeader = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/Wrong") {
    return null;
  }

  return (
    <>
      <HeaderSec />
    </>
  );
};

export default CondHeader;
