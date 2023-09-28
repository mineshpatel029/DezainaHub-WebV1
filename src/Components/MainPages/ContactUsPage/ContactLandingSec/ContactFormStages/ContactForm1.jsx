import React from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

const ServiceOptions = [
    { value: 'Poseter', label: 'Poster' },
    { value: 'Banner', label: 'Baneer' },
    { value: 'Business Card', label: 'Business Card' },
    { value: 'Web UI', label: 'Web UI' },
    { value: 'App UI', label: 'App UI' },
    { value: 'Logo Designing', label: 'Logo Designing' },
    { value: 'Flyer', label: 'Flyer' },
    { value: 'Brochure', label: 'Brochure' },
    { value: 'Sinnage Board', label: 'Sinnage Board' },
    { value: 'LetterHead', label: 'LetterHead' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'Other', label: 'Other' },
]



export const ContactForm1 = () => {
  return (
    <div className='ContactFormMain'>
        <form className='ContactLS-Form'>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label'>Name</label>
                                <input className='ContactLSForm-Input' placeholder='Name' required />
                            </div>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label'>Phone</label>
                                <input className='ContactLSForm-Input' placeholder='Phone Number' required />
                            </div>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label'>Email</label>
                                <input className='ContactLSForm-Input' placeholder='Email' required />
                            </div>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label'>Message</label>
                                <textarea className='ContactLSForm-Input' type='MessageBox' rows='3' cols='40' placeholder='Message' required />
                            </div>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label'>Service</label>
                                    <Select
                                        className='OPBodyContentAddBox-ProductDetail' 
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        isMulti
                                    options={ServiceOptions} />
                            </div>
                            <button className='ContactLSForm-Button' type='submit'>Next</button>
                        </form> 
    </div>
  )
}

export default ContactForm1;