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
              <h1 className='GalleryLS-Head'>Your Move, In a Good <span>Impactful</span> way You Like</h1>
              <div className='GalleryLS-ImgBox'>
                  <img className='GalleryLS-Img' src={GalleryLandingImg1} />

              </div>
              <div className='GalleryLS-CategoryContainer'>
              {GalleryProdCat.map((CatData , i)=>(
                  <h6 key={i} onClick={()=>setActiveCat(CatData.Catid)} className={activeCat === (CatData.Catid) ? 'GalleryLS-CategoryActive' : 'GalleryLS-Category'}>{CatData.CatName}</h6>
                  
              ))}
              </div>
          </div>
      </div>
      {/* <GalleryImgSec catState={GalleryProdCat[activeCat]} /> */}
    </div>
  )
}

export default GalleryLandingSec;