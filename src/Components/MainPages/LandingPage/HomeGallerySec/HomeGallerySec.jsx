import React from "react";
import "./HomeGallerySec.css";
import GalleryImg1 from "../Images/18.gif";
import GalleryImg2 from "../Images/12.jfif";
import GalleryImg3 from "../Images/5.jpg";

export const HomeGallerySec = () => {
  return (
    <div className="HomeGSMain">
      <div className="HomeGS container">
        <div className="HomeGS-Content">
          <h6 className="HomeGSContent-Title">Gallery</h6>
          <h1 className="HomeGSContent-Head">
          Dive into Our <span>Captivating</span> Portfolio
          </h1>
          <p className="HomeGSContent-Body">
          Explore our elegant portfolio showcasing our works and design expertise.
          </p>
          <button className="HomeGSContent-Button">Explore Gallery</button>
        </div>
        <div className="HomeGS-Gallery">
          <div className="HomeGSGallery-ImgContainer1">
            <div className="HomeGSGallery-ImgBox1">
              <div className="HomeGSGalleryImg1-Shadow">
                <h6 className="HomeGSGalleryImg1Shadow-Text">
                  Website Designing
                </h6>
              </div>
              <img className="HomeGSGallery-Img1" src={GalleryImg1} />
            </div>
          </div>
          <div className="HomeGSGallery-ImgContainer2">
            <div className="HomeGSGallery-ImgBox2">
              <div className="HomeGSGalleryImg2-Shadow">
                <h6 className="HomeGSGalleryImg1Shadow-Text">Poster Designing</h6>
              </div>
              <img className="HomeGSGallery-Img2" src={GalleryImg2} />
            </div>
          </div>
          <div className="HomeGSGallery-ImgContainer3">
            <div className="HomeGSGallery-ImgBox3">
              <div className="HomeGSGalleryImg3-Shadow">
                <h6 className="HomeGSGalleryImg3Shadow-Text">
                  Logo Designing
                </h6>
              </div>
              <img className="HomeGSGallery-Img3" src={GalleryImg3} />
            </div>
          </div>
          <svg
            className="HomeGSGallery-BlueBG"
            // width="458"
            // height="277"
            viewBox="0 0 458 277"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="458" height="277" rx="20" fill="#4BACE0" />
          </svg>
          <svg
            className="HomeGSGallery-PinkBG"
            // width="116"
            // height="116"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="58" cy="58" r="58" fill="#FFABAB" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomeGallerySec;
