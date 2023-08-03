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


const LandingPage = lazy(() => import("./Components/MainPages/LandingPage/LandingPage"));
const AboutUsPage = lazy(() => import("./Components/MainPages/AboutUsPage/AboutUsPage"));
const ServicePage = lazy(() => import("./Components/MainPages/ServicePage/ServicePage"));
const GalleryPage = lazy(() => import("./Components/MainPages/GalleryPage/GalleryPage"));
const ContactUsPage = lazy(() => import("./Components/MainPages/ContactUsPage/ContactUsPage"));




function App() {
  return (
    <div className="App">
    <Suspense fallback={<div ><LazyLoader/></div>}>
    <BrowserRouter>
      <HeaderSec/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/AboutUs' element={<AboutUsPage/>} />
          <Route path='/Service' element={<ServicePage/>} />
          <Route path='/Gallery' element={<GalleryPage/>} />
          <Route path='/ContactUs' element={<ContactUsPage/>} />
          <Route path='*' element={<h1 style={{ color: 'blue', padding: '20rem' }}>Error Page</h1>} />
        
          {/* <HeaderSec/> */}
            {/* <LandingPage/> */}
            {/* <AboutUsPage/> */}
            {/* <ServicePage/> */}
            {/* <GalleryPage/> */}
            {/* <ContactUsPage/> */}
          {/* <FooterSec/> */}
          </Routes>
        <FooterSec/>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
