import React from 'react'
import "./ServicePage.css"
import ServiceLandingSec from './ServiceLandingSec/ServiceLandingSec';
import ServiceStepSec from './ServiceStepSec/ServiceStepSec';
import ServiceProductSec from './ServiceProductSec/ServiceProductSec';
import ServiceImportanceSec from './ServiceImportanceSec/ServiceImportanceSec';

export const ServicePage = () => {
  
  return (
    <div className='ServicePageMain'>
        <ServiceLandingSec/>
        <ServiceStepSec/>
        <ServiceProductSec/>
        <ServiceImportanceSec/>
    </div>
  )
}

export default ServicePage;