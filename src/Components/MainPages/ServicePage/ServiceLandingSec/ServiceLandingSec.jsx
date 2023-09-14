import React from 'react'
import "./ServiceLandingSec.css"
import ServiceLandingImg from "../Images/9.jpg"

export const ServiceLandingSec = () => {
  return (
    <div className='ServiceLSMain'>
        <div className='ServiceLS container'>
            <div className='ServiceLS-Head'>
                <h1 className='ServiceLSHead-Heading'>Designing <span>Visual</span>  And Stories We are the </h1>
                <div className='ServiceLSHead-Body'>
                    <p className='ServiceLSHeadBody-Content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text.</p>
                    <button className='ServiceLSHeadBody-Button'>Get In Touch</button>
                </div>
            </div>
            <div className='ServiceLS-ImgBody'>
                <h2 className='ServiceLSImgBody-Content'>Get your <span>Work</span> Done</h2>
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