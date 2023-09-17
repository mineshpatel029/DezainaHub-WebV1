import React from 'react'
import "./ContactLandingSec.css"
import ContactForm1 from './ContactFormStages/ContactForm1';
import ContactFormFinal from './ContactFormStages/ContactFormFinal';



export const ContactLandingSec = () => {
  return (
    <div className='ContactLSMain'>
        <div className='ContactLS container'>
            <div className='ContactLS-Head'>
                <h1 className='ContactLSHead-Heading'>Looking To Find And <span>Heir</span> Great <span>Designers</span>?</h1>
                <p className='ContactLSHead-Body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className='ContactLS-FormContainer'>
                    <div className='ContactLS-FormBox'>
                        <ContactForm1/>
                        {/* <ContactFormFinal/> */}
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ContactLandingSec;