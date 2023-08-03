import React from 'react'
import "./GalleryPage.css"
import GalleryLandingSec from './GalleryLandingSec/GalleryLandingSec';
import GalleryImgSec from './GalleryImgSec/GalleryImgSec';

export const GalleryPage = () => {
  return (
    <div className='GalleryPageMain'>
        <GalleryLandingSec/>
        <GalleryImgSec/>
    </div>
  )
}

export default GalleryPage;