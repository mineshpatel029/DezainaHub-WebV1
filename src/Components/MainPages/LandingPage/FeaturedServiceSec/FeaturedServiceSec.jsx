import React from 'react'
import "./FeaturedServiceSec.css"
import FeaturedServiceSecBody from './FeaturedServiceSecBody/FeaturedServiceSecBody';

export const FeaturedServiceSec = () => {
  return (
    <div className='FeaturedSSMain'>
        <div className='FeaturedSS container'>
            <div className='FeaturedSS-Head'>
                <h6 className='FeaturedSSHead-Title'>Services</h6>
                <h1 className='FeaturedSSHead-Heading'>Explore <span>Featured</span> Services</h1>
                <p className='FeaturedSSHead-Body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
            </div>
            <FeaturedServiceSecBody/>
            
            <button className='FeaturedSS-Button'>
                View All
            </button>

        </div>
    
    </div>
  )
}

export default FeaturedServiceSec;