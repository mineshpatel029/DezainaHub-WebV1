import React, { useState } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Axios from 'axios';


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
    const url = 'https://dezainabackend.onrender.com/api/save-contact'
    const [data, setData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        message: "",
        service : ""
        

    });

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            email: data.email,
            contactNumber: data.contactNumber,
            message: data.message,
            service: data.service
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    
  return (
    <div className='ContactFormMain'>
        <form className='ContactLS-Form' onSubmit={(e)=>submit(e)}>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label' >Name</label>
                                <input className='ContactLSForm-Input' id='name' onChange={(e)=>handle(e)} value={data.name} type="text" placeholder='Name' required />
                            </div>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label' >Phone</label>
                                <input className='ContactLSForm-Input' id='contactNumber' onChange={(e)=>handle(e)} value={data.contactNumber} type="number" placeholder='Phone Number' required />
                            </div>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label' >Email</label>
                                <input className='ContactLSForm-Input' id='email' onChange={(e)=>handle(e)} value={data.email} type="email" placeholder='Email' required />
                            </div>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label' >Message</label>
                                <textarea className='ContactLSForm-Input' id='message' onChange={(e)=>handle(e)} value={data.message} type='message' rows='3' cols='40' placeholder='Message' required />
                            </div>
                            <div className='ContactLSForm-Content'>
                                <label className='ContactLSForm-Label' >Service</label>
                                    {/* <Select id='service' 
                                        className='OPBodyContentAddBox-ProductDetail' 
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        isMulti
                                    options={ServiceOptions} 
                                    onChange={(e)=>handle(e)} value={data.service}
                                    type="service"
                                    /> */}
                                    <select id="service" className='ContactLSForm-Input '
                                    onChange={(e)=>handle(e)} value={data.service}
                                    type="service">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
                            </div>
                            <button className='ContactLSForm-Button'>Submit</button>
                        </form> 
                        {/* {
                            const form = document.querySelector('form')
                        } */}
    </div>
  )
}

export default ContactForm1;