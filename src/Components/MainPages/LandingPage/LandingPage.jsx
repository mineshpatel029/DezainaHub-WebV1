import React from 'react'
import "./LandingPage.css"
import HeaderSec from "../Header/HeaderSec"
import FooterSec from '../Footer/FooterSec'
import HomeLandingSec from './HomeLandingSec/HomeLandingSec'
import HomeAboutSec from './HomeAboutSec/HomeAboutSec'
import QualityStrip from './QualityStrip/QualityStrip'
import FeaturedServiceSec from './FeaturedServiceSec/FeaturedServiceSec'
import HomeServiceStepsSec from './HomeServiceStepsSec/HomeServiceStepsSec'
import HomeGallerySec from './HomeGallerySec/HomeGallerySec'


export const LandingPage = () => {
  return (
    <div>
    {/* <HeaderSec/> */}
        <HomeLandingSec/>
        <HomeAboutSec/>
        <QualityStrip/>
        <FeaturedServiceSec/>
        <HomeServiceStepsSec/>
        <HomeGallerySec/>
    {/* <FooterSec/> */}
    
    </div>
  )
}

export default LandingPage;