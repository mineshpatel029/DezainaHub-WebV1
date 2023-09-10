import "./App.css"
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HeaderSec from './Components/MainPages/Header/HeaderSec';
import FooterSec from './Components/MainPages/Footer/FooterSec';
// import LandingPage from './Components/MainPages/LandingPage/LandingPage';
// import AboutUsPage from './Components/MainPages/AboutUsPage/AboutUsPage';
// import ServicePage from './Components/MainPages/ServicePage/ServicePage';
// import GalleryPage from './Components/MainPages/GalleryPage/GalleryPage';
// import ContactUsPage from './Components/MainPages/ContactUsPage/ContactUsPage';
import  LazyLoader from "./Components/LazyLoader/LazyLoader";
import LoginSignupPage from "./Components/MainPages/LoginSignupPage/LoginSignupPage";



const LandingPage = lazy(() => import("./Components/MainPages/LandingPage/LandingPage"));
const AboutUsPage = lazy(() => import("./Components/MainPages/AboutUsPage/AboutUsPage"));
const ServicePage = lazy(() => import("./Components/MainPages/ServicePage/ServicePage"));
const GalleryPage = lazy(() => import("./Components/MainPages/GalleryPage/GalleryPage"));
const ContactUsPage = lazy(() => import("./Components/MainPages/ContactUsPage/ContactUsPage"));
const CartPage = lazy(() => import("./Components/MainPages/CartPage/CartPage"));
const LoginPage = lazy(() => import("./Components/MainPages/LoginSignupPage/LoginPage/LoginPage"));
const SignupPage = lazy(() => import("./Components/MainPages/LoginSignupPage/SignupPage/SignupPage"));
const VerifyPage = lazy(() => import("./Components/MainPages/LoginSignupPage/VerifyPage/VerifyPage"));
const PDPage = lazy(()=> import("./Components/MainPages/ProductDescriptionPage/ProductDescriptionPage"))



function App() {
  const renderHeaderFooter = () => {
    const path = window.location.pathname;
    return path === "/Login" || path === "/Signup" || path === "/Verify";
  }
  return (
    <div className="App">
    <Suspense fallback={<div ><LazyLoader/></div>}>
    <BrowserRouter>
        {!renderHeaderFooter() ? <HeaderSec/> : <></> } 
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/AboutUs' element={<AboutUsPage/>} />
          <Route path='/Service' element={<ServicePage/>} />
          <Route path='/Service/:id' element={<PDPage/>} />
          <Route path='/Gallery' element={<GalleryPage/>} />
          <Route path='/ContactUs' element={<ContactUsPage/>} />
          <Route path='/Cart' element={<CartPage/>} />
          <Route path='/Login' element={<LoginPage/>} />
          <Route path='/Signup' element={<SignupPage/>} />
          <Route path='/Verify' element={<VerifyPage/>} />
          <Route path='*' element={<h1 style={{ color: 'blue', padding: '20rem' }}>Error Page</h1>} />
          </Routes>
        {!renderHeaderFooter() ? <FooterSec/> : <></>}
      </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;
