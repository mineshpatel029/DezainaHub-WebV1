import React from 'react'
import "./HomeLandingSec.css"
import LandingImg from "../Images/4.jpg"
// import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { TypeAnimation } from 'react-type-animation';

export const HomeLandingSec = () => {
    // const {text} = useTypewriter({
    //     word: [' PRECISION', 'UNMATCHED Something', 'UNMATCHED Anything'],
    //     loop:{},
    // })
  return (
    <div className='HomeLSMain'>
        <div className='HomeLS container'>
            <div className='HomeLS-Content'>
                <h1 className='HomeLSContent-Head'>DESIGNING VISUAL <span className='HomeLSContent-HeadColor'>STORIES</span> WITH UNMATCHED <br/><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'PRECISION',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'HAMSTER',
        1500,
        'GUINEA PIGS',
        1500,
        'CHINCHIUI',
        1500
      ]}
      wrapper="P"
      speed={10}
      style={{display: 'inline-block', margin:'0rem' }}
      repeat={Infinity}
    /></h1>
                <div className='HomeLSContent-Base'>
                <div className='HomeLSContentBase-L1'>
                    <h4 className='HomeLSContentBase-Head'>Proven Excellence: Our Client Service Journey</h4>
                    <div className='HomeLSContentBase-Values'>
                        <div className='HomeLSContentBaseValues-Items'>
                            <h3 className='HomeLSContentBaseValuesItems-Value'>340</h3>
                            <h6 className='HomeLSContentBaseValuesItems-Description'>Total Customers ratings</h6>
                        </div>
                        <div className='HomeLSContentBaseValues-Items'>
                            <h3 className='HomeLSContentBaseValuesItems-Value'>28*</h3>
                            <h6 className='HomeLSContentBaseValuesItems-Description'>Active Clients certificates</h6>
                        </div>
                        <div className='HomeLSContentBaseValues-Items'>
                            <h3 className='HomeLSContentBaseValuesItems-Value'>95%</h3>
                            <h6 className='HomeLSContentBaseValuesItems-Description'>Satisfaction Percentage</h6>
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