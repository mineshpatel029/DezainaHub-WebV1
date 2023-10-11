import React, { useState } from "react";
import "./GalleryCatProds.css";
import PosterImgData1, {
  PosterImgData2,
  PosterImgData3,
  PosterImgData4,
  PosterImgData5,
} from "../GalleryImgSec/GalleryCardData/ImgDataCat1";
import GalleryImgProd from "../GalleryImgSec/GalleryImgProd";
import GalleryCatProd3 from "./GalleryCatProd3";
import GalleryCatProd2 from "./GalleryCatProd2";

export const GalleryCatProd1 = () => {
  const [activeProd, setActiveProd] = useState(1);

  const ShowProd = (Prod) => {
    switch (Prod) {
      case 1:
        return PosterImgData1;
      case 2:
        return PosterImgData2;
      case 3:
        return PosterImgData3;
      case 4:
        return PosterImgData4;
      case 5:
        return PosterImgData5;
    }
  };

  return (
    <div className="GalleryISMain">
      <div className="GalleryIS">
        <div className="GalleryIS-ProductStrip">
          <div className="GalleryIS-ProductList container">
            {GalleryImgProd.map((ProdData, i) => (
              <h6
                key={i}
                onClick={() => setActiveProd(ProdData.id)}
                className={
                  activeProd === ProdData.id
                    ? "GalleryISStrip-ProductActive"
                    : "GalleryISStrip-Product"
                }
              >
                {ProdData.ProdName}
              </h6>
            ))}

            {/* <h6 className='GalleryISStrip-ProductActive'>Business Card</h6> */}
          </div>
        </div>
        <div className="GalleryIS-Gallery container">
          <div className="GalleryIS-GalleryContainer">
            {/* {PosterImgData.map((ImgData, i)=>(
                <div className='GalleryIS-ImgContainer'>
                    <div className='GalleryIS-ImgBox'>
                        <img className='GalleryIS-Img' src={ImgData.img}/>
                    </div>
                </div>
                ))}  */}

            {ShowProd(activeProd).map((ImgData, i) => (
              <div className="GalleryIS-ImgContainer">
                <div className="GalleryIS-ImgBox">
                  <img className="GalleryIS-Img" src={ImgData.img} />
                </div>
              </div>
            ))}
          </div>
          <button className="GalleryIS-ImgButton">Load More</button>
        </div>
      </div>
    </div>
  );
};
export default GalleryCatProd1;
