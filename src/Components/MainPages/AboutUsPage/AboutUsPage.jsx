import React from 'react'
import "./AboutUsPage.css"
import AboutLandingSec from './AboutLandingSec/AboutLandingSec';
import AboutBriefSec from './AboutBriefSec/AboutBriefSec';
import AboutHighlightSec from './AboutHighlightSec/AboutHighlightSec';
import AboutTestimonial from './AboutTestimonial/AboutTestimonial';

export const AboutUsPage = () => {
  return (
    <div className='AboutUsPageMain'>
        <AboutLandingSec/>
        <AboutBriefSec/>
        <AboutHighlightSec/>
        <AboutTestimonial/>
    </div>
  )
}

export default AboutUsPage;
