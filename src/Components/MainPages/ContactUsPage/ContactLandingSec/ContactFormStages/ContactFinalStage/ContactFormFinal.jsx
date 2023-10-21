import React from 'react'
import "./ContactFormFinal.css"
import ThankYouGif from "../ThankYou.gif"

export const ContactFormFinal = () => {
  return (
    <div className='CFFMain'>
        <img className='CFF-Img' src={ThankYouGif} />
        <h2 className='CFF-Head'>Thank You</h2>
        <h3 className='CFF-Body'>Message sent! That was easy, right? You've just activated our design response team. We'll be in touch within 24 hours.</h3>
    </div>
  )
}

export default ContactFormFinal;