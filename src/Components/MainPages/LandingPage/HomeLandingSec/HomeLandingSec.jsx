import React from 'react'
import "./HomeLandingSec.css"
import LandingImg from "../Images/4.jpg"

export const HomeLandingSec = () => {
  return (
    <div className='HomeLSMain'>
        <div className='HomeLS container'>
            <div className='HomeLS-Content'>
                <h1 className='HomeLSContent-Head'>DESIGNING WHAT <span>VISUAL</span> AND STORIES PROFICIENTLY</h1>
                <div className='HomeLSContent-Base'>
                <div className='HomeLSContentBase-L1'>
                    <h4 className='HomeLSContentBase-Head'>DESIGNING VISUAL STORIES WITH</h4>
                    <div className='HomeLSContentBase-Values'>
                        <div className='HomeLSContentBaseValues-Items'>
                            <h3 className='HomeLSContentBaseValuesItems-Value'>8.0*</h3>
                            <h6 className='HomeLSContentBaseValuesItems-Description'>Average platform specialist ratings</h6>
                        </div>
                        <div className='HomeLSContentBaseValues-Items'>
                            <h3 className='HomeLSContentBaseValuesItems-Value'>$12</h3>
                            <h6 className='HomeLSContentBaseValuesItems-Description'>License and govern certificates</h6>
                        </div>
                        <div className='HomeLSContentBaseValues-Items'>
                            <h3 className='HomeLSContentBaseValuesItems-Value'>1M+</h3>
                            <h6 className='HomeLSContentBaseValuesItems-Description'>Online order our product last Month</h6>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='HomeLS-ImageContainer'>
                <img className='HomeLS-Image' src={LandingImg}></img>
            </div>
            <svg className='HomeLSImageContainer-BGBlue' width="850" height="850" viewBox="0 0 764 764" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="382" cy="382" r="382" fill="#25C1EC"/>
</svg>
<svg className='HomeLSImageContainer-BGPink' width="250" height="250" viewBox="0 0 272 272" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="136" cy="136" r="136" fill="#FFABAB"/>
</svg>


        </div>
    </div>
  )
}
export default HomeLandingSec;