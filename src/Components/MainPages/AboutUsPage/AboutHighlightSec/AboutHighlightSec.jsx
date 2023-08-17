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
                <h1 className='AboutHSHead-Heading'>Your Move, In a <span>Impactful</span> way</h1>
                <p className='AboutHSHead-Content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
            <div className='AboutHSHead-Body'>
                <div className='AboutHSHeadBody-Container1'>
                    <div className='AboutHSHeadBodyContainer1-ImgBox'>
                        <img className='AboutHSHeadBodyContainer1-Img' src={HighlightContainer1} />
                    </div>
                    <div className='AboutHSHeadBodyContainer1-Body'>
                        <h2 className='AboutHSHeadBodyContainer1Body-Head'>Your Move, In a Good <span>Impactful</span> way</h2>
                        <p className='AboutHSHeadBodyContainer1Body-Content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum</p>
                    </div>
                </div>
                <div className='AboutHSHeadBody-Container2'>
                <div className='AboutHSHeadBodyContainer2-Body'>
                    <div className='AboutHSHeadBodyContainer2Body-Content'>
                            <h1 className='AboutHSHeadBodyContainer2Body-Head'>72%</h1>
                            <p className='AboutHSHeadBodyContainer2Body-Content'>Lorem Ipsum is simply and dummy text of the printing </p>
                    </div>
                    <div className='AboutHSHeadBodyContainer2Body-Content'>
                        <h1 className='AboutHSHeadBodyContainer2Body-Head'>64%</h1>
                        <p className='AboutHSHeadBodyContainer2Body-Content'>Lorem Ipsum is simply and dummy text of the printing </p>
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
                            <h2 className='AboutHSHeadBodyContainer3Body-Head'>Your Move, In a Good <span>Impactful</span> way</h2>
                            <p className='AboutHSHeadBodyContainer3Body-Content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum </p>
                    
                </div>
                    
                    
                </div>

            </div>
        </div>
    </div>
  )
}


export default AboutHighlightSec;