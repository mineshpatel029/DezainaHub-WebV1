import React from 'react'
import "./ServiceLandingSec.css"
import ServiceLandingImg from "../Images/9.jpg"
import { NavLink } from 'react-router-dom'

export const ServiceLandingSec = () => {
  return (
    <div className='ServiceLSMain'>
        <div className='ServiceLS container'>
            <div className='ServiceLS-Head'>
                <h1 className='ServiceLSHead-Heading'>Ready to make a Great Brand <span>Impression</span>?</h1>
                <div className='ServiceLSHead-Body'>
                    <p className='ServiceLSHeadBody-Content'>Elevate your brand with our expert design solutions. Discover a range of creative services tailored to your needs. Let's create something remarkable together.</p>
                    
                    <NavLink to="/ContactUs">
                    <button className='ServiceLSHeadBody-Button'>
                    Explore Our services
                    </button>
                    </NavLink>
                </div>
            </div>
            <div className='ServiceLS-ImgBody' >
                <h2 className='ServiceLSImgBody-Content' >Get your <span>Work</span> Done</h2>
                <div className='ServiceLSImgBody-ImgContainer'>
                    <img className='ServiceLSImgBody-Img' src={ServiceLandingImg} />
                </div>
                <div className='ServiceLSImgBody-UpperShadow'></div>
            </div>
        </div>
    </div>
  )
}

export default ServiceLandingSec;