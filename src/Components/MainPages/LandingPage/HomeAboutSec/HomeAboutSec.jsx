import React from 'react'
import "./HomeAboutSec.css"
import AboutImg from "../Images/AboutImg2.jpg"
import { NavLink } from 'react-router-dom'
import FloatWindowCard from './FloatWindowCard'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import "swiper/css/autoplay";

// import required modules
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';


export const HomeAboutSec = () => {
  return (
    <div className='HomeASMain' >
    <div className='HomeAS container' >
      <div className='HomeAS-ImageContainer'>
      <div className='HomeAS-ImgBox'>
          <img className='HomeAS-Img' src={AboutImg} />
          </div>
          <div className='HomeAS-ImgShadow'></div>
          {/* <div className='HomeASImg-FloatWindow'>
            <svg className='HomeASImgFloatWindow-Icon' width="50" height="50" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.0238 24.5027C28.243 23.6371 28.2336 22.7293 27.9965 21.8684C27.7595 21.0076 27.3029 20.223 26.6715 19.5916C26.0401 18.9602 25.2555 18.5036 24.3946 18.2665C23.5337 18.0295 22.626 18.0201 21.7604 18.2393C19.9609 18.6833 18.4885 20.1557 18.0444 21.9552C17.8253 22.8209 17.8347 23.7286 18.0717 24.5895C18.3088 25.4504 18.7654 26.2349 19.3968 26.8663C20.0282 27.4977 20.8127 27.9543 21.6736 28.1914C22.5345 28.4284 23.4422 28.4378 24.3078 28.2186C26.1308 27.7746 27.6031 26.3022 28.0238 24.5027Z" stroke="#4BACE0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M37.0928 38.1747C39.146 36.2622 40.7826 33.9468 41.9005 31.3733C43.0184 28.7997 43.5935 26.0232 43.5899 23.2173C43.5899 20.5196 43.0585 17.8482 42.0262 15.3558C40.9938 12.8635 39.4806 10.5988 37.573 8.69122C35.6654 6.78363 33.4008 5.27044 30.9084 4.23806C28.416 3.20568 25.7447 2.67432 23.0469 2.67432C20.3492 2.67432 17.6778 3.20568 15.1854 4.23806C12.693 5.27044 10.4284 6.78363 8.52081 8.69122C6.61322 10.5988 5.10003 12.8635 4.06765 15.3558C3.03527 17.8482 2.50391 20.5196 2.50391 23.2173C2.50391 29.1535 5.02796 34.5054 9.07112 38.2448" stroke="#4BACE0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.6971 32.0048C11.547 29.7144 10.2148 26.6295 10.2148 23.2173C10.2148 16.136 15.9641 10.3867 23.0455 10.3867C30.1268 10.3867 35.8761 16.136 35.8761 23.2173C35.8761 26.6295 34.5439 29.6911 32.3938 32.0048M19.0724 36.936L15.707 41.1194C13.0427 44.4615 15.4032 49.3927 19.68 49.3927H26.3875C30.6644 49.3927 33.0482 44.4381 30.3605 41.1194L26.9951 36.936C24.9852 34.3886 21.1057 34.3886 19.0724 36.936Z" stroke="#4BACE0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className='HomeASImgFloatWindow-Content'>
              The Secret of a great brands is great designs with masterful marketing 
            </p>
            <svg className='HomeASImgFloatWindow-Line' width="70" height="3" viewBox="0 0 70 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.773438 1.90283H18.867" stroke="#4BACE0" stroke-width="2"/>
            <path d="M27.9141 1.90283H69.5293" stroke="#4BACE0" stroke-width="2"/>
            </svg>

          </div> */}
          <div className='HomeASImg-Float'>
          <Swiper
        effect={'cube'}
        // autoplay={true}
        grabCursor={true}
        loop={true}
        cubeEffect={{
          shadow: false,
          // slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.4,
        }}
        autoplay={
          {
            waitForTransition:3000,
          }
        }
        pagination={true}
        modules={[EffectCube, Autoplay]}
        className="mySwiper"
      >
          {FloatWindowCard.map((float, i)=>{
           return <SwiperSlide><div className='HomeASImg-FloatWindow'>

            {/* <svg className='HomeASImgFloatWindow-Icon' width="50" height="50" viewBox="0 0 46 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.0238 24.5027C28.243 23.6371 28.2336 22.7293 27.9965 21.8684C27.7595 21.0076 27.3029 20.223 26.6715 19.5916C26.0401 18.9602 25.2555 18.5036 24.3946 18.2665C23.5337 18.0295 22.626 18.0201 21.7604 18.2393C19.9609 18.6833 18.4885 20.1557 18.0444 21.9552C17.8253 22.8209 17.8347 23.7286 18.0717 24.5895C18.3088 25.4504 18.7654 26.2349 19.3968 26.8663C20.0282 27.4977 20.8127 27.9543 21.6736 28.1914C22.5345 28.4284 23.4422 28.4378 24.3078 28.2186C26.1308 27.7746 27.6031 26.3022 28.0238 24.5027Z" stroke="#4BACE0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M37.0928 38.1747C39.146 36.2622 40.7826 33.9468 41.9005 31.3733C43.0184 28.7997 43.5935 26.0232 43.5899 23.2173C43.5899 20.5196 43.0585 17.8482 42.0262 15.3558C40.9938 12.8635 39.4806 10.5988 37.573 8.69122C35.6654 6.78363 33.4008 5.27044 30.9084 4.23806C28.416 3.20568 25.7447 2.67432 23.0469 2.67432C20.3492 2.67432 17.6778 3.20568 15.1854 4.23806C12.693 5.27044 10.4284 6.78363 8.52081 8.69122C6.61322 10.5988 5.10003 12.8635 4.06765 15.3558C3.03527 17.8482 2.50391 20.5196 2.50391 23.2173C2.50391 29.1535 5.02796 34.5054 9.07112 38.2448" stroke="#4BACE0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.6971 32.0048C11.547 29.7144 10.2148 26.6295 10.2148 23.2173C10.2148 16.136 15.9641 10.3867 23.0455 10.3867C30.1268 10.3867 35.8761 16.136 35.8761 23.2173C35.8761 26.6295 34.5439 29.6911 32.3938 32.0048M19.0724 36.936L15.707 41.1194C13.0427 44.4615 15.4032 49.3927 19.68 49.3927H26.3875C30.6644 49.3927 33.0482 44.4381 30.3605 41.1194L26.9951 36.936C24.9852 34.3886 21.1057 34.3886 19.0724 36.936Z" stroke="#4BACE0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> */}
            <div className='HomeASImgFloatWindow-Icon'>

            {float.svg1}
            </div>
            <p className='HomeASImgFloatWindow-Content'>
              {float.quote} 
              {/* The Secret of a great brands is great designs with masterful marketing  */}
            </p>
            <svg className='HomeASImgFloatWindow-Line' width="70" height="3" viewBox="0 0 70 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.773438 1.90283H18.867" stroke="#4BACE0" stroke-width="2"/>
            <path d="M27.9141 1.90283H69.5293" stroke="#4BACE0" stroke-width="2"/>
            </svg>
          </div></SwiperSlide>

          })}
          </Swiper>
          </div>

      </div>
      <div className='HomeAboutSec-Content'>
        <h6 className='HomeAboutSecContent-Title'>About Us</h6>
        <h1 className='HomeAboutSecContent-Head'>DezainaHub is Your <span>Key</span> to Exceptional Branding <span>Success</span></h1>
        <p className='HomeAboutSecContent-Body'>DezainaHub is your trusted partner, whether you're a small business seeking a strong brand presence or a large corporation in need of powerful marketing campaigns. Our specialty lies in crafting captivating brand identities through visually stunning designs. From logos to corporate solutions, we cover it all, helping you shine in a competitive market while you focus on business growth.</p>
        <NavLink to="/AboutUs" className="buttons">
        <button className='HomeAboutSecContent-Button'>
        Want to Know More?
        </button>
        </NavLink>
      </div>
    </div>
    
    </div>
  )
}

export default HomeAboutSec;