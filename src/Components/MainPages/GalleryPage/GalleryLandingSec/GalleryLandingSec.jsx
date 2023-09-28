import React, { useState } from 'react'
import "./GalleryLandingSec.css"
import GalleryLandingImg1 from "../Image/17.jpg"
import GalleryProdCat from './GalleryProdCat'
import GalleryImgSec from '../GalleryImgSec/GalleryImgSec'




export const GalleryLandingSec = () => {
  // const [activeCat, setActiveCat] = useState(0)
  const [activeCat, setActiveCat] = useState(1)
  
  return (
    <div>
      <div className='GalleryLSMain'>
          <div className='GalleryLS container'>
          <div>

              <h1 className='GalleryLS-Head'>Explore Our Diverse <span>Portfolio</span></h1>
              <p className='GalleryLSHead-Body'>And Elevate Your Brand with Exceptional Designs</p>
          </div>
              <div className='GalleryLS-ImgBox'>
                  <img className='GalleryLS-Img' src={GalleryLandingImg1} />

              </div>
              <div className='GalleryLS-CategoryContainer'>
              {GalleryProdCat.map((CatData , i)=>(
                  <h6 key={i} onClick={()=>setActiveCat(CatData.Catid)} className={activeCat === (CatData.Catid) ? 'GalleryLS-CategoryActive' : 'GalleryLS-Category'}>{CatData.CatName}</h6>
                  
              ))}

              </div>
              <p className='GalleryLSCategory-Body'>{ activeCat === 1 ? "Visual Branding is the core of corporate identity and includes creating a consistent and memorable visual representation for a business" : <></>}
              { activeCat === 2 ? "Brand Marketing designs focuses on crafting materials that promote products or services, engage customers & convey key messages" : <></>}
              { activeCat === 3 ? "Digital Interaction design involves crafting online experiences that are user friendly visually appealing and aligned with brand's message & objective" : <></>}

              
</p>
                 
          </div>
      </div>
      {/* <GalleryImgSec catState={GalleryProdCat[activeCat]} /> */}
    </div>
  )
}

export default GalleryLandingSec;