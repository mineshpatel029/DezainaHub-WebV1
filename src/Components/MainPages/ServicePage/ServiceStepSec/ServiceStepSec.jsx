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
                            <h2 className='ServiceSSSteps-Step'>Team Specialist</h2>
                        </div>
                        <p className='ServiceSSSteps-Content'>Gorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                </div>
                <div className='ServiceSSSteps-1'>
                        <div className='ServiceSSSteps-Heading'>
                            <h1 className='ServiceSSSteps-Number'>02</h1>
                            <h2 className='ServiceSSSteps-Step'>Company Projects</h2>
                        </div>
                        <p className='ServiceSSSteps-Content'>Gorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                </div>
                <div className='ServiceSSSteps-1'>
                        <div className='ServiceSSSteps-Heading'>
                            <h1 className='ServiceSSSteps-Number'>03</h1>
                            <h2 className='ServiceSSSteps-Step'>Individual Projects</h2>
                        </div>
                        <p className='ServiceSSSteps-Content'>Gorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                </div>
                
                <svg className='ServiceSSSteps-Line1' width="213" height="4" viewBox="0 0 213 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M213 2L-5.36442e-06 2" stroke="#5A5A5A"  stroke-dasharray="8 8"/>
                </svg>

                <svg className='ServiceSSSteps-Line2' width="213" height="4" viewBox="0 0 213 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M213 2L-5.36442e-06 2" stroke="#5A5A5A"  stroke-dasharray="8 8"/>
                </svg>

            </div>
        
        </div>
    </div>
  )
}

export default ServiceStepSec;