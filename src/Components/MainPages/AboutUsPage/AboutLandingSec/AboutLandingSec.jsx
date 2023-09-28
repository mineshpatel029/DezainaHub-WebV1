import React from 'react'
import "./AboutLandingSec.css";
import AmoutLandingImg from "../Images/17.jpg";

export const AboutLandingSec = () => {
  return (
    <div className='AboutLSMain'>
        <div className='AboutLS container'>
            <h1 className='AboutLS-Head'>No <span>More</span> Mediocre <span>Branding!</span></h1>
            <div className='AboutLS-ImgBox'>
            <div className='AboutLSImg-FloatBox'>
                    <div className='AboutLSImgFloatBox-Head'>
                        <span className='AboutLSImgFloatBoxHead-Heading'>Brand</span>
                        <svg className='AboutLSImgFloatBoxHead-Line' width="95" height="2" viewBox="0 0 95 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1H95" stroke="#888888"/>
                        </svg>
                    </div>
                    <div className='AboutLSImgFloatBox-Body'>
                        <h3 className='AboutLSImgFloatBoxBody-Head'>Identity.</h3>
                        <p className='AboutLSImgFloatBoxBody-Content'>From Companies into Memorable Brands: Your Journey to distinction!</p>
                    </div>
                </div>
                <div className='AboutLS-ImgContainer'>
                    <img className='AboutLS-Img' src={AmoutLandingImg} />
                </div>
                

            </div>
        </div>
    
    </div>
  )
}

export default AboutLandingSec;