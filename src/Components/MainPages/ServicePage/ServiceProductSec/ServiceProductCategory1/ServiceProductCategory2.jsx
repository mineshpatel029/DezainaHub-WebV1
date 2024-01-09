import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCat } from "../../../../../Redux/galleryReducer";
import "./ServiceProductCat.css";
import {ProductDataC2} from "./ProductData";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../../../../Helpers/FormatPrice";

export const ServiceProductCategory2 = () => {
 const dispatch = useDispatch();
 const activeCat = useSelector((state) => state.gallery.activeCat);

 const handleSetActiveCat = (catId) => {
   dispatch(setActiveCat(catId));
 };


  return (
    <div className="ServicePC1-Main" data-aos="fade-up">
      <div className="ServicePS-CategoryHeadStrip">
        <h1 className="ServicePS-CategoryHead">DIGITAL INTERACTION</h1>
      </div>
      <div className="ServicePS container">
        <div className="ServicePS-ProductList">
          <div className="ServicePS-Products">

            {ProductDataC2.map((Product, i) => (
              <div className="SPSBodyContent-Box" data-aos="zoom-in-up">
                <div className="SPSBodyContentBox-ImgContainer">
                  <img className="SPSBodyContentBox-Img" src={Product.gallery[0]} />
                </div>
                <div className="SPSBodyContentBox-Content">
                  <div className="SPSBodyContentBox-HeadContent">
                    <h5 className="SPSBodyContentBox-ProductName">
                      {Product.Name}
                    </h5>
                    <h6 className="SPSBodyContentBox-ProductPrice">
                    <FormatPrice price={Product.minPrice}/> - <FormatPrice price={Product.maxPrice}/>/-
                    </h6>
                  </div>

                  <div className="SPSBodyContentBox-BodyContainer">
                    <p className="SPSBodyContentBox-BodyContent">
                    {Product.Description.DescriptHead}
                      <br />
                      <b>Factors Affecting Price:</b>
                      <br />
                      {Product.Description.DescriptFactors.map((Points) => (
                        <li>{Points.factorsPoints}</li>
                      ))}
                      <br />
                      {Product.Description.DescriptFooter.map((Points) => (
                        <div>{Points.FooterPoints}</div>
                      ))}
                    </p>
                  </div>
                </div>
                {/* <div className="SPSBodyContentBox-Body">
                  <div className="SPSBodyContentBox-Details">
                    <button className="SPSBodyContentBox-EditButton">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8139 0.5H4.945C2.39573 0.5 0.875977 2.019 0.875977 4.567V10.426C0.875977 12.981 2.39573 14.5 4.945 14.5H10.8069C13.3562 14.5 14.876 12.981 14.876 10.433V4.567C14.883 2.019 13.3632 0.5 10.8139 0.5ZM7.1441 11.357C6.941 11.56 6.55581 11.756 6.27567 11.798L4.55281 12.043C4.48978 12.05 4.42675 12.057 4.36371 12.057C4.07657 12.057 3.81044 11.959 3.62134 11.77C3.39023 11.539 3.29218 11.203 3.34821 10.832L3.59333 9.11C3.63535 8.823 3.82445 8.445 4.03455 8.242L7.15811 5.12C7.21414 5.267 7.27016 5.414 7.3472 5.582C7.41724 5.729 7.49427 5.883 7.57832 6.023C7.64835 6.142 7.72539 6.254 7.78842 6.338C7.86546 6.457 7.9565 6.569 8.01253 6.632C8.04755 6.681 8.07556 6.716 8.08957 6.73C8.26466 6.94 8.46776 7.136 8.64285 7.283C8.69187 7.332 8.71989 7.36 8.73389 7.367C8.83894 7.451 8.944 7.535 9.03504 7.598C9.1471 7.682 9.25915 7.759 9.37821 7.822C9.51828 7.906 9.67236 7.983 9.82644 8.06C9.98752 8.13 10.1346 8.193 10.2817 8.242L7.1441 11.357ZM11.6403 6.863L10.996 7.514C10.954 7.556 10.898 7.577 10.8419 7.577C10.8209 7.577 10.7929 7.577 10.7789 7.57C9.3572 7.164 8.22264 6.03 7.81643 4.609C7.79542 4.532 7.81643 4.448 7.87246 4.399L8.52379 3.748C9.58832 2.684 10.6038 2.705 11.6473 3.748C12.1796 4.28 12.4387 4.791 12.4387 5.323C12.4317 5.827 12.1726 6.331 11.6403 6.863Z"
                          fill="#1E1E1E"
                        />
                      </svg>
                      Read More
                    </button>
                    <NavLink to="/Cart">
                      <button className="FeaturedService1-CartButton">
                        <svg
                          className="FeaturedService1-CartIcon"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.2092 0H8.89634C3.54801 0 0.359589 3.255 0.359589 8.715V21.27C0.359589 26.745 3.54801 30 8.89634 30H21.1946C26.5429 30 29.7313 26.745 29.7313 21.285V8.715C29.746 3.255 26.5576 0 21.2092 0ZM20.9301 16.125H16.1548V21C16.1548 21.615 15.6552 22.125 15.0528 22.125C14.4504 22.125 13.9508 21.615 13.9508 21V16.125H9.17551C8.57309 16.125 8.07352 15.615 8.07352 15C8.07352 14.385 8.57309 13.875 9.17551 13.875H13.9508V9C13.9508 8.385 14.4504 7.875 15.0528 7.875C15.6552 7.875 16.1548 8.385 16.1548 9V13.875H20.9301C21.5325 13.875 22.0321 14.385 22.0321 15C22.0321 15.615 21.5325 16.125 20.9301 16.125Z"
                            fill="black"
                          />
                        </svg>{" "}
                        Add to Cart
                      </button>
                    </NavLink>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
          <NavLink to="/Gallery">
            <button className="ServicePS-Button" onClick={(e) => {handleSetActiveCat(2)}}>View Gallery</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceProductCategory2;
