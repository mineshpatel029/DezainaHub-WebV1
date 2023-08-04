import React from 'react'
import "./LoginSignupPage.css"
import LoginPage from './LoginPage/LoginPage';
import SignupPage from './SignupPage/SignupPage';
import VerifyPage from './VerifyPage/VerifyPage';

export const LoginSignupPage = () => {
  return (
    <div>
        {/* <LoginPage/> */}
        {/* <SignupPage/> */}
        <VerifyPage/>
    </div>
  )
}

export default LoginSignupPage;