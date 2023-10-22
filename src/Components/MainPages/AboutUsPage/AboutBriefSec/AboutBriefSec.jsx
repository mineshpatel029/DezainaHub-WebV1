import React from 'react'
import "./AboutBriefSec.css"
import BriefContentData from "./BriefContentCard"

export const AboutBriefSec = () => {
  return (
    <div className='AboutBSMain'>
        <div className='AboutBS container' data-aos="fade-up">
            <div className='AboutBS-Head'>
                <h6 className='AboutBSHead-Title'>Key values</h6>
                <h1 className='AboutBSHead-Heading'>Our Essence: A Glimpse into DezainaHub</h1>
                <p className='AboutBSHead-Content'>Discover the heart and soul of DezainaHub - our core values, authenticity, and creativity. See how these elements define us and infuse uniqueness into every project we craft.</p>
            </div>
            <div className='AboutBS-Body'>
            {BriefContentData.map((BriefContent , i)=>(     
              <div className='AboutBSBody-Content' data-aos="zoom-in-up">
                <div className='AboutBSBodyContent-Title'>
                  <span>{BriefContent.Title}</span>
                </div>
                <div className='AboutBSBodyContent-Content'>
                  <h2 className='AboutBSBodyContent-Heading'>{BriefContent.Head}</h2>
                  <p className='AboutBSBodyContent-Body'>{BriefContent.Body}</p>
                </div>
              </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default AboutBriefSec;