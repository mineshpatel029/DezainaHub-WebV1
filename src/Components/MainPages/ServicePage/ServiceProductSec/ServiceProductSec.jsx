import React from 'react'
import "./ServiceProductSec.css"

import ServiceProductCategory1 from './ServiceProductCategory1/ServiceProductCategory1'
import ServiceProductCategory2 from './ServiceProductCategory1/ServiceProductCategory2'
import ServiceProductCategory3 from './ServiceProductCategory1/ServiceProductCategory3'

export const ServiceProductSec = () => {
  return (
    <div className='ServicePSMain' data-aos="fade-up">
            <div className='ServicePS-CategoryStrip'>
                <div className='ServicePS-CategoryList container' >
                    <h4 className='ServicePS-Category' data-aos="fade-up">VISUAL BRANDING</h4>
                    <h4 className='ServicePS-Category' data-aos="fade-up">DIGITAL INTERACTION</h4>
                    <h4 className='ServicePS-Category' data-aos="fade-up">BRAND MARKETING</h4>
                </div>
            </div>
            <ServiceProductCategory1/>
            <ServiceProductCategory2/>
            <ServiceProductCategory3/>
            <div className='ServicePS-CategoryStrip'>
                <div className='ServicePS-CategoryList container'>
                    <h4 className='ServicePS-Category' data-aos="fade-up">Visual Branding</h4>
                    <h4 className='ServicePS-Category' data-aos="fade-up">DIGITAL INTERACTION</h4>
                    <h4 className='ServicePS-Category' data-aos="fade-up">BRAND MARKETING</h4>
                </div>
            </div>
    </div>
  )
}

export default ServiceProductSec;
