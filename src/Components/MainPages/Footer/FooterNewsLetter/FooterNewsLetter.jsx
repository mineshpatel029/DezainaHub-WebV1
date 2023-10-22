import React from 'react'
import "./FooterNewsLetter.css";
import { NavLink } from 'react-router-dom';

export const FooterNewsLetter = () => {
  return (
    <div className='FooterNewsLetterMain'>
        <div className='FooterNewsLetter container'  data-aos="fade-up">
            <div className='FooterNewsLetter-Body'>
                <div className='FooterNewsLetterBody-Title'>Lets Boost Your Business</div>
                <h1 className='FooterNewsLetterBody-Head'>Book a Free <span>Consultancy</span> Today</h1>
            </div>
            <div className='FooterNewsLetter-Button'>
            <NavLink to="/ContactUs">
                <button>Get A Call</button>
            </NavLink>
            </div>
        </div>
    </div>
  )
}

export default FooterNewsLetter;