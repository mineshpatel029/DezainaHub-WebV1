import React from 'react'
import "./ContactLandingSec.css"

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
                        <form className='ContactLS-Form'>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label'>Name</label>
                                <input className='ContactLSForm-Input' placeholder='Name'></input>
                            </div>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label'>Company</label>
                                <input className='ContactLSForm-Input' placeholder='Company (if any)'></input>
                            </div>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label'>Message</label>
                                <textarea className='ContactLSForm-Input' type='MessageBox' rows='7' cols='40' placeholder='Message'></textarea>
                            </div>
                            <button className='ContactLSForm-Button' type='submit'>Next</button>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ContactLandingSec;