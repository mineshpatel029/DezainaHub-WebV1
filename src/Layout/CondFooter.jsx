import { useLocation } from "react-router";
import FooterNewsLetter from "../Components/MainPages/Footer/FooterNewsLetter/FooterNewsLetter";

const CondFooter = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/ContactUs" || currentPath === "/Wrong") {
    return null;
  }

  return (
    <>
      <FooterNewsLetter />
    </>
  );
};

export default CondFooter;
