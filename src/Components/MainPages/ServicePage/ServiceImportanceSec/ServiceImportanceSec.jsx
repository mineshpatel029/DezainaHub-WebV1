import React from 'react'
import "./ServiceImportanceSec.css"
import ImportanceSecImg from "../Images/BrandImg.jpg"

export const ServiceImportanceSec = () => {
  return (
    <div className='ServiceISMain' data-aos="fade-up">
        <div className='ServiceIS container'>
            <div className='ServiceIS-Head'>
                <h1 className='ServiceISHead-Heading'>In Business, one has a <span>Brand</span>, the other doesn't. </h1>
                <p className='ServiceISHead-Body'>Faceless or Memorable - which one are you?</p>
            </div>
            <div className='ServiceIS-Body'>
                <div className='ServiceISBody-ImgContainer' data-aos="fade-up">
                    
                    <div className='ServiceISBodyImg-FloatBox' data-aos="fade-up">
                        <svg className='ServiceISBodyImgFloat-Icon' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4101 21.35C15.8801 21.35 15.2001 21.18 14.3501 20.68L11.3601 18.91C11.0501 18.73 10.4501 18.73 10.1501 18.91L7.15012 20.68C5.38012 21.73 4.34012 21.31 3.87012 20.97C3.41012 20.63 2.69012 19.76 3.16012 17.76L3.87012 14.69C3.95012 14.37 3.79012 13.82 3.55012 13.58L1.07012 11.1C-0.169882 9.86 -0.0698822 8.8 0.100118 8.28C0.270118 7.76 0.810118 6.84 2.53012 6.55L5.72012 6.02C6.02012 5.97 6.45012 5.65 6.58012 5.38L8.35012 1.85C9.15012 0.24 10.2001 0 10.7501 0C11.3001 0 12.3501 0.24 13.1501 1.85L14.9101 5.37C15.0501 5.64 15.4801 5.96 15.7801 6.01L18.9701 6.54C20.7001 6.83 21.2401 7.75 21.4001 8.27C21.5601 8.79 21.6601 9.85 20.4301 11.09L17.9501 13.58C17.7101 13.82 17.5601 14.36 17.6301 14.69L18.3401 17.76C18.8001 19.76 18.0901 20.63 17.6301 20.97C17.3801 21.15 16.9801 21.35 16.4101 21.35Z" fill="#4BACE0"/>
                        </svg>

                        <p className='ServiceISBodyImgFloat-Content'>Branding defines who you are. We create faces for businesses, making them stand out and be remembered.</p>
                    </div>
                    <div className='ServiceISBody-ImgBox'>
                        <img className='ServiceISBody-Img' src={ImportanceSecImg} />
                    </div>
                    {/* <p className='ServiceISHead-Body'>Faceless or Memorable - which one are you?</p> */}

                </div>
                {/* <div className='ServiceISBody-Content'>

                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ServiceImportanceSec;