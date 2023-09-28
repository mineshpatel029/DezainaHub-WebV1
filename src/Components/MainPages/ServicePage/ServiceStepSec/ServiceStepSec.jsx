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
                            <h2 className='ServiceSSSteps-Step'>Explore Our Services</h2>
                        </div>
                        <p className='ServiceSSSteps-Content'>Explore our range of services to find the perfect solution for your project needs.</p>

                </div>
                <div className='ServiceSSSteps-1'>
                        <div className='ServiceSSSteps-Heading'>
                            <h1 className='ServiceSSSteps-Number'>02</h1>
                            <h2 className='ServiceSSSteps-Step'>Customize Your Project</h2>
                        </div>
                        <p className='ServiceSSSteps-Content'>Tailor your project by adding details about your project in your cart for a personalized experience.</p>

                </div>
                <div className='ServiceSSSteps-1'>
                        <div className='ServiceSSSteps-Heading'>
                            <h1 className='ServiceSSSteps-Number'>03</h1>
                            <h2 className='ServiceSSSteps-Step'>Review and Connect</h2>
                        </div>
                        <p className='ServiceSSSteps-Content'>Review your order and connect with our designers to discuss your project in detail.</p>

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