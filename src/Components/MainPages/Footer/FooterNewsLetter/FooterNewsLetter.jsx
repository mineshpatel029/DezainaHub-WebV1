import React from 'react'
import "./FooterNewsLetter.css";

export const FooterNewsLetter = () => {
  return (
    <div className='FooterNewsLetterMain'>
        <div className='FooterNewsLetter container'>
            <div className='FooterNewsLetter-Body'>
                <div className='FooterNewsLetterBody-Title'>Lets Boost Your Business</div>
                <h1 className='FooterNewsLetterBody-Head'>Book a Free <span>Consultancy</span> Today</h1>
            </div>
            <div className='FooterNewsLetter-Button'>
                <button>Get A Call</button>
            </div>
        </div>
    </div>
  )
}

export default FooterNewsLetter;