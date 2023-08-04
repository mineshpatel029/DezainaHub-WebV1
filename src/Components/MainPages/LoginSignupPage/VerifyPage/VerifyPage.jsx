import React from 'react'
import "./VerifyPage.css"
import LogoImg from "../Image/Dezaina.hub.png"
import VerifyPageImg from "../Image/4.jpg"

export const VerifyPage = () => {
  return (
    <div className='LoginSignupPageMain'>
        <div className='LoginSignupPage'>
            <div className='LoginSignupPage-Content'>
                <div className='LoginSignupPageContent-Logo'>
                    <img className='LoginSignupPageContentLogo-Img' src={LogoImg} />
                </div>
                <div className='LoginSignupPageContent-FormContainer'>
                        <form className='LoginSignupPageContent-Form'>
                        <div className='LoginSignupPageContentForm-HeadBox'>
                            <h1 className='LoginSignupPageContentForm-Head'>Verify your Email</h1>
                            <p className='LoginSignupPageContentForm-Content'>Creating Account...</p>

                        </div>
                        <div className='LoginSignupPageContentForm-InputBox'>
                            <input className='LoginSignupPageContentForm-input' placeholder='Email' readOnly></input>
                            <input className='LoginSignupPageContentForm-input' placeholder='OTP'></input>
                        </div>
                        <div className='LoginSignupPageContentForm-ButtonBox'> 
                            <button className='LoginSignupPageContentForm-Verifybutton'>Verify</button>
                            <button className='LoginSignupPageContentForm-Googlebutton'>
                            <svg style={{margin: "0rem 0rem 0.3rem 0rem",}} width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.37375 5.18896L3.0625 10.5002L8.37375 15.8115M17.9375 10.5002H3.21125" stroke="#2F455C" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                <span>Edit Details</span>
                            </button>

                        </div>
                        </form>
                </div>
            </div>
            <div className='LoginSignupPage-ImageContainer'>
                {/* <button className='LoginSignupPage-ImgButton'>Signup</button> */}
                <div className='LoginSignupPage-Imgbox'>
                    <img className='LoginSignupPage-Img' src={VerifyPageImg}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default VerifyPage;