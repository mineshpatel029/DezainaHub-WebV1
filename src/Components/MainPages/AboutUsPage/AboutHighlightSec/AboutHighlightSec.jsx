import React from 'react'
import "./AboutHighlightSec.css"
import HighlightContainer1 from '../Images/8.jpg'
import HighlightContainer2 from '../Images/15.jpg'
import HighlightContainer3 from '../Images/13.png'

export const AboutHighlightSec = () => {
  return (
    <div className='AboutHSMain'>
        <div className='AboutHS container'>
            <div className='AboutHS-Head'>
                <h1 className='AboutHSHead-Heading'>Dezainahub: Your <span>Bridge</span> to Brand Brilliance</h1>
                <p className='AboutHSHead-Content'>DezainaHub connects businesses with exceptional brand designs that make a lasting impact in a competitive market.</p>
            </div>
            <div className='AboutHSHead-Body'>
                <div className='AboutHSHeadBody-Container1'>
                    <div className='AboutHSHeadBodyContainer1-ImgBox'>
                        <img className='AboutHSHeadBodyContainer1-Img' src={HighlightContainer1} />
                    </div>
                    <div className='AboutHSHeadBodyContainer1-Body'>
                        <h2 className='AboutHSHeadBodyContainer1Body-Head'>From Business to <span>Brand</span>, making <span>Presence</span></h2>
                        <p className='AboutHSHeadBodyContainer1Body-Content'>Our team of seasoned designers brings a wealth of experience to the table. We've successfully partnered with numerous businesses, creating designs that captivate audiences and drive results. With a deep understanding of design principles, customers psychology and market dynamics, we craft visuals that make a real impact. Our passion for design goes beyond aesthetics; it's about crafting solutions that elevate your brand and deliver tangible outcomes.</p>
                    </div>
                </div>
                <div className='AboutHSHeadBody-Container2'>
                <div className='AboutHSHeadBodyContainer2-Body'>
                    <div className='AboutHSHeadBodyContainer2Body-Content'>
                            <h1 className='AboutHSHeadBodyContainer2Body-Head'>80%</h1>
                            <p className='AboutHSHeadBodyContainer2Body-Content'>increase in brand visibility in today's crowded market by transforming your business into a prominent brand.</p>
                    </div>
                    <div className='AboutHSHeadBodyContainer2Body-Content'>
                        <h1 className='AboutHSHeadBodyContainer2Body-Head'>64%</h1>
                        <p className='AboutHSHeadBodyContainer2Body-Content'>surge in client acquisition as your brand identity becomes a magnet for potential customers.</p>
                    </div>
                </div>
                    <div className='AboutHSHeadBodyContainer2-ImgBox'>
                        <img className='AboutHSHeadBodyContainer2-Img' src={HighlightContainer2} />
                    </div>
                    
                </div>
                <div className='AboutHSHeadBody-Container3'>
                    <div className='AboutHSHeadBodyContainer3-ImgBox'>
                        <img className='AboutHSHeadBodyContainer3-Img' src={HighlightContainer3} />
                    </div>
                <div className='AboutHSHeadBodyContainer3-Body'>
                            <h2 className='AboutHSHeadBodyContainer3Body-Head'><span>Designing</span> Visual Stories with <span>Purpose</span></h2>
                            <p className='AboutHSHeadBodyContainer3Body-Content'>We understand that every brand has a unique story to tell. Our mission is to bring your brand's narrative to life through visuals. Our tailored solutions don't just create visuals; they convey your brand's essence, making it unforgettable in a competitive landscape. We blend creativity with strategy, ensuring that every design project resonates with your target audience and leaves a lasting impression.</p>
                    
                </div>
                    
                    
                </div>

            </div>
        </div>
    </div>
  )
}


export default AboutHighlightSec;