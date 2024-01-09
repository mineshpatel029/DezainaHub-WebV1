import HeaderSec from '../Components/MainPages/Header/HeaderSec';
import { useLocation } from 'react-router';
import OfferStrip from '../Components/OfferStrip/OfferStrip';

const CondHeader = ({children}) => {
    
     
     const location = useLocation();
     const currentPath = location.pathname;

     if (currentPath === "/Error") {
       return null;
     }



  return (
    <>
        <HeaderSec />
    </>
  )
}

export default CondHeader