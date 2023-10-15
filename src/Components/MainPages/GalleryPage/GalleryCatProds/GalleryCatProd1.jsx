import React, { useState } from "react";
import "./GalleryCatProds.css";
import PosterImgData1, {
  PosterImgData2,
  PosterImgData3,
  PosterImgData4,
  PosterImgData5,
} from "../GalleryImgSec/GalleryCardData/ImgDataCat1";
import GalleryImgProd from "../GalleryImgSec/GalleryImgProd";
import GalleryCatProd3 from "./GalleryCatProd2";
import GalleryCatProd2 from "./GalleryCatProd3";
import ProductDataC1 from "../../ServicePage/ServiceProductSec/ServiceProductCategory1/ProductData"

export const GalleryCatProd1 = () => {
  const [activeProd, setActiveProd] = useState(1);

  // const ShowProd = (Prod) => {
  //   switch (Prod) {
  //     case 1:
  //       return PosterImgData1;
  //     case 2:
  //       return PosterImgData2;
  //     case 3:
  //       return PosterImgData3;
  //     case 4:
  //       return PosterImgData4;
  //     case 5:
  //       return PosterImgData5;
  //   }
  // };

  
  const ShowProd = (Prod) => {
    switch (Prod) {
      case 1:
        return ProductDataC1[0].gallery;
      case 2:
        return ProductDataC1[1].gallery;
      case 3:
        return ProductDataC1[2].gallery;
      case 4:
        return ProductDataC1[3].gallery;
      case 5:
        return ProductDataC1[4].gallery;
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

            {/* {ShowProd(activeProd).map((ImgData, i) => (
              <div className="GalleryIS-ImgContainer">
                <div className="GalleryIS-ImgBox">
                  <img className="GalleryIS-Img" src={ImgData.img} />
                </div>
              </div>
            ))} */}
            {ShowProd(activeProd).map((ImgData, i) => (
              <div className="GalleryIS-ImgContainer">
                <div className="GalleryIS-ImgBox">
                  <img className="GalleryIS-Img" src={ImgData} />
                </div>
              </div>
            ))}
          </div>
          {/* <button className="GalleryIS-ImgButton">Load More</button> */}
        </div>
      </div>
    </div>
  );
};
export default GalleryCatProd1;
