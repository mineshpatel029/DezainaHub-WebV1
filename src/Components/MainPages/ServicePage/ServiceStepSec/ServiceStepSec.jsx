import React from 'react'
import "./ServiceStepSec.css"

export const ServiceStepSec = () => {
  return (
    <div className='ServiceSSMain'>
        <div className='ServiceSS container'>
            <h1 className='ServiceSSHead-Heading'>3 <span>Steps</span> to get our <span>Services</span> done</h1>
            <div className='ServiceSS-Steps'>
                <div className='ServiceSSSteps-1'>
                        <div className='ServiceSSSteps-Heading'>
                            <h1 className='ServiceSSSteps-Number'>01</h1>
                            <h2 className='ServiceSSSteps-Step'>Browse Our Services</h2>
                        </div>
                        <p className='ServiceSSSteps-Content'>Begin by exploring our Service page, and visiting our Gallery to get inspired and visualize your project's potential.</p>

                </div>
                <div className='ServiceSSSteps-1'>
                        <div className='ServiceSSSteps-Heading'>
                            <h1 className='ServiceSSSteps-Number'>02</h1>
                            <h2 className='ServiceSSSteps-Step'>Share Your Vision</h2>
                        </div>
                        <p className='ServiceSSSteps-Content'>Tell us about your project through 'Contact Us' and  let us transform your vision into stunning reality</p>

                </div>
                <div className='ServiceSSSteps-1'>
                        <div className='ServiceSSSteps-Heading'>
                            <h1 className='ServiceSSSteps-Number'>03</h1>
                            <h2 className='ServiceSSSteps-Step'>Collaborate and Create</h2>
                        </div>
                        <p className='ServiceSSSteps-Content'>Collaborate with our designers to craft your brand's unique identity. Let's bring your vision to life!</p>

                </div>
                
                <svg className='ServiceSSSteps-Line1' width="164" height="4" viewBox="0 0 164 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M164 2H0" stroke="#5A5A5A" stroke-width="4" stroke-dasharray="8 8"/>
</svg>


                <svg className='ServiceSSSteps-Line2' width="164" height="4" viewBox="0 0 164 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M164 2H0" stroke="#5A5A5A" stroke-width="4" stroke-dasharray="8 8"/>
</svg>


            </div>
        
        </div>
    </div>
  )
}

export default ServiceStepSec;