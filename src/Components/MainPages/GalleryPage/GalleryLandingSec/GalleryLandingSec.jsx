import React from 'react'
import "./GalleryLandingSec.css"
import GalleryLandingImg1 from "../Image/17.jpg"

export const GalleryLandingSec = () => {
  return (
    <div className='GalleryLSMain'>
        <div className='GalleryLS container'>
            <h1 className='GalleryLS-Head'>Your Move, In a Good <span>Impactful</span> way You Like</h1>
            <div className='GalleryLS-ImgBox'>
                <img className='GalleryLS-Img' src={GalleryLandingImg1} />

            </div>
            <div className='GalleryLS-CategoryContainer'>
                <h6 className='GalleryLS-Category'>Brand Designing</h6>
                <h6 className='GalleryLS-CategoryActive'>Advertising Content</h6>
                <h6 className='GalleryLS-Category'>Design Rendering</h6>
            </div>
        </div>
    </div>
  )
}

export default GalleryLandingSec;