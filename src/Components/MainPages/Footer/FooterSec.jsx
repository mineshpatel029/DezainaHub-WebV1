import React from 'react'
import "./FooterSec.css"
import FooterNewsLetter from './FooterNewsLetter/FooterNewsLetter';
import FooterFoot from './FooterFoot/FooterFoot';

export const FooterSec = () => {
  return (
    <div>
        <FooterNewsLetter/> 
        <FooterFoot/>
    </div>
  )
}
export default FooterSec;