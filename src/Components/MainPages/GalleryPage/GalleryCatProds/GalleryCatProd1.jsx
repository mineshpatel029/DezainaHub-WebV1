import React, { useState } from "react";
import "./GalleryCatProds.css";
// import PosterImgData1, {
//   PosterImgData2,
//   PosterImgData3,
//   PosterImgData4,
//   PosterImgData5,
// } from "../GalleryImgSec/GalleryCardData/ImgDataCat1";
import GalleryImgProd from "../GalleryImgSec/GalleryImgProd";
// import GalleryCatProd3 from "./GalleryCatProd2";
// import GalleryCatProd2 from "./GalleryCatProd3";
import ProductDataC1 from "../../ServicePage/ServiceProductSec/ServiceProductCategory1/ProductData";
import { Modal } from "@mui/material";
 

export const GalleryCatProd1 = () => {
  const [activeProd, setActiveProd] = useState(1);
  const [clickedImg, setClickedImg] = useState(null);
  const [currIndex, setCurrIndex] = useState(null);
  const [open, setOpen] = useState(false);
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

  const isSingleImage = ShowProd(activeProd).length === 1;

  const handelClick = (ImgData, i) => {
    setOpen(true);
    setCurrIndex(i);
    setClickedImg(ImgData);
  };
  const handleRotationRight = () => {
    const totalLength = ShowProd(activeProd).length;
    if (currIndex + 1 >= totalLength) {
      setCurrIndex(0);
      const newUrl = ShowProd(activeProd)[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currIndex + 1;
    const newUrl = ShowProd(activeProd).filter((item) => {
      return ShowProd(activeProd).indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = ShowProd(activeProd).length;
    if (currIndex === 0) {
      setCurrIndex(totalLength - 1);
      const newUrl = ShowProd(activeProd)[totalLength - 1];
      setClickedImg(newUrl);
    }
    const newIndex = currIndex - 1;
    const newUrl = ShowProd(activeProd).filter((item) => {
      return ShowProd(activeProd).indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrIndex(newIndex);
  };

  const handelClickClose = (e) => {
    // if (e.target?.className.includes("dismiss")) {
    // }
    setClickedImg(null);
  };

  const MobileStyle = {
    // backgroundColor: "rgba(30, 30, 30,0.9)",
    transition: "300ms ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    position: "absolute",
    zIndex: "10000000000000000000",
    top: "0%",
    left: "0%",

    // Adding media query..
    "@media (max-width: 500px)": {
      // display: 'none',
      border: "2px solid red",
      backgroundColor: "red",
    },
  };

  const multipleImgStyle = {
    zIndex: "99999999",
    maxWidth: "70vw",
    maxHeight: "70%",
    border: "20px solid whitesmoke",
  };

  const singleImgStyle = {
    maxWidth: "100vw",
    marginLeft: "3%",
    maxHeight: "100%",
    border: "20px solid whitesmoke",
  };

  return (
    <div className="GalleryISMain" data-aos="fade-up">
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
              <div className="GalleryIS-ImgContainer" data-aos="fade-up">
                <button
                  className="GalleryIS-ImgBox"
                  onClick={() => handelClick(ImgData, i)}
                >
                  <img className="GalleryIS-Img" src={ImgData.img} />
                </button>
              </div>
            ))}
            {clickedImg && (
              <Modal
                open={open}
                onClose={handelClickClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.486)" }}
              >
                <div
                  className="overlay-dismiss"
                  // onClick={() => handelClickClose()}
                  style={MobileStyle}
                >
                  {/* <div className="GalleryISImgBox-Open"> */}

                  <img
                    src={clickedImg}
                    className={isSingleImage && "big-image"}
                    alt="multipleImage"
                    style={isSingleImage ? singleImgStyle : multipleImgStyle}
                    // className="GalleryISImgBox-OpenImg"
                  />

                  <span
                    className="dismiss"
                    onClick={() => handelClickClose()}
                    style={{
                      position: "absolute",
                      top: "1.5vh",
                      right: "1vw",
                      color: "whitesmoke",
                      cursor: "pointer",
                      padding: "2rem",
                      zIndex: "9999999",
                    }}
                  >
                    {/* Cross Button - X */}

                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="#0000"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8236 9.29858L18.1106 4.0116C18.7593 3.36281 18.7593 2.31091 18.1106 1.66159L16.9356 0.48659C16.2868 -0.162197 15.2349 -0.162197 14.5856 0.48659L9.29858 5.77357L4.0116 0.48659C3.36281 -0.162197 2.31091 -0.162197 1.66159 0.48659L0.48659 1.66159C-0.162197 2.31038 -0.162197 3.36228 0.48659 4.0116L5.77357 9.29858L0.48659 14.5856C-0.162197 15.2343 -0.162197 16.2862 0.48659 16.9356L1.66159 18.1106C2.31038 18.7593 3.36281 18.7593 4.0116 18.1106L9.29858 12.8236L14.5856 18.1106C15.2343 18.7593 16.2868 18.7593 16.9356 18.1106L18.1106 16.9356C18.7593 16.2868 18.7593 15.2349 18.1106 14.5856L12.8236 9.29858Z"
                        fill="#EDEDED"
                      />
                    </svg>

                    {/* <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="#0000"
                    xmlns="http://www.w3.org/2000/svg"
                    style={
                      isSingleImage
                        ? {
                            fill: "black",
                            backgroundColor: "black",
                            border: "1px solid black",
                          }
                        : {}
                    }
                  >
                    <path
                      d="M12.8236 9.29858L18.1106 4.0116C18.7593 3.36281 18.7593 2.31091 18.1106 1.66159L16.9356 0.48659C16.2868 -0.162197 15.2349 -0.162197 14.5856 0.48659L9.29858 5.77357L4.0116 0.48659C3.36281 -0.162197 2.31091 -0.162197 1.66159 0.48659L0.48659 1.66159C-0.162197 2.31038 -0.162197 3.36228 0.48659 4.0116L5.77357 9.29858L0.48659 14.5856C-0.162197 15.2343 -0.162197 16.2862 0.48659 16.9356L1.66159 18.1106C2.31038 18.7593 3.36281 18.7593 4.0116 18.1106L9.29858 12.8236L14.5856 18.1106C15.2343 18.7593 16.2868 18.7593 16.9356 18.1106L18.1106 16.9356C18.7593 16.2868 18.7593 15.2349 18.1106 14.5856L12.8236 9.29858Z"
                      fill="#EDEDED"
                    />
                  </svg> */}
                  </span>

                  {!isSingleImage && (
                    <>
                      <div
                        onClick={() => handleRotationLeft()}
                        className="overlay-arrows__left"
                        style={{
                          position: "absolute",
                          top: "45%",
                          left: "1vw",
                          color: "whitesmoke",
                          cursor: "pointer",
                          padding: "2rem",
                          zIndex: "900000000000000",
                        }}
                      >
                        {/* Previous Button */}
                        <svg
                          width="38"
                          height="38"
                          viewBox="0 0 38 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 0C8.50403 0 -7.15256e-07 8.50403 -7.15256e-07 19C-7.15256e-07 29.496 8.50403 38 19 38C29.496 38 38 29.496 38 19C38 8.50403 29.496 0 19 0ZM10.2738 17.6976L20.6548 7.31653C21.375 6.59637 22.5395 6.59637 23.252 7.31653L24.5544 8.61895C25.2746 9.33911 25.2746 10.5036 24.5544 11.2161L16.7706 19L24.5544 26.7839C25.2746 27.504 25.2746 28.6685 24.5544 29.381L23.252 30.6835C22.5319 31.4036 21.3673 31.4036 20.6548 30.6835L10.2738 20.3024C9.55363 19.5823 9.55363 18.4177 10.2738 17.6976Z"
                            fill="#EDEDED"
                          />
                        </svg>
                      </div>
                      <div
                        onClick={() => handleRotationRight()}
                        className="overlay-arrows__left"
                        style={{
                          position: "absolute",
                          top: "45%",
                          right: "1vw",
                          color: "whitesmoke",
                          cursor: "pointer",
                          padding: "2rem",
                        }}
                      >
                        {/* Next Button */}
                        <svg
                          width="38"
                          height="38"
                          viewBox="0 0 38 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 0C29.496 0 38 8.50403 38 19C38 29.496 29.496 38 19 38C8.50403 38 0 29.496 0 19C0 8.50403 8.50403 0 19 0ZM27.7262 17.6976L17.3452 7.31653C16.625 6.59637 15.4605 6.59637 14.748 7.31653L13.4456 8.61895C12.7254 9.33911 12.7254 10.5036 13.4456 11.2161L21.2294 19L13.4456 26.7839C12.7254 27.504 12.7254 28.6685 13.4456 29.381L14.748 30.6835C15.4681 31.4036 16.6327 31.4036 17.3452 30.6835L27.7262 20.3024C28.4464 19.5823 28.4464 18.4177 27.7262 17.6976Z"
                            fill="#EDEDED"
                          />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              </Modal>
            )}
          </div>
          {/* <button className="GalleryIS-ImgButton">Load More</button> */}
        </div>
      </div>
    </div>
  );
};
export default GalleryCatProd1;
