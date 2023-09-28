import React from 'react'
import "./ServiceProductSec.css"

import ServiceProductCategory1 from './ServiceProductCategory1/ServiceProductCategory1'

export const ServiceProductSec = () => {
  return (
    <div className='ServicePSMain'>
            <div className='ServicePS-CategoryStrip'>
                <div className='ServicePS-CategoryList container'>
                    <h4 className='ServicePS-Category'>BRAND DESIGNING</h4>
                    <h4 className='ServicePS-Category'>ADVERTISING CONTENT</h4>
                    <h4 className='ServicePS-Category'>DESIGN RENDERING</h4>
                </div>
            </div>
            <ServiceProductCategory1/>
            <ServiceProductCategory1/>
            <div className='ServicePS-CategoryStrip'>
                <div className='ServicePS-CategoryList container'>
                    <h4 className='ServicePS-Category'>BRAND DESIGNING</h4>
                    <h4 className='ServicePS-Category'>ADVERTISING CONTENT</h4>
                    <h4 className='ServicePS-Category'>DESIGN RENDERING</h4>
                </div>
            </div>
    </div>
  )
}

export default ServiceProductSec;
