import React from 'react'
import "./AboutBriefSec.css"
import BriefContentData from "./BriefContentCard"

export const AboutBriefSec = () => {
  return (
    <div className='AboutBSMain'>
        <div className='AboutBS container'>
            <div className='AboutBS-Head'>
                <h6 className='AboutBSHead-Title'>About Us</h6>
                <h1 className='AboutBSHead-Heading'>We are the solution for your Graphic Design</h1>
                <p className='AboutBSHead-Content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
            <div className='AboutBS-Body'>
            {BriefContentData.map((BriefContent , i)=>(     
              <div className='AboutBSBody-Content'>
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