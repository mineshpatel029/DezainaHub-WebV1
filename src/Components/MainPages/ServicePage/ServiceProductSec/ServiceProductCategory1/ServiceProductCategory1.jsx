import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCat } from "../../../../../Redux/galleryReducer";
import "./ServiceProductCat.css";
import ProductDataC1 from "./ProductData";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../../../../Helpers/FormatPrice";
import Button from "../../../../GlobalComponents/Button/Button";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export const ServiceProductCategory1 = () => {
   const [demoProducts,setDemoProducts]=useState([]);
    const [demoProduct,setDemoProduct]= useState();
   useEffect(() => {
    axios({
      baseURL: process.env.REACT_APP_BASE_URL,
      url: "/item/get",
      method: "GET",
      params: {
        categoryId: '65fd6f103e8525f07818ea41',
      }
    }).then((res) =>{
      setDemoProducts(res.data.items);
      console.log("deoproducts",res.data.items.length);
    });
   
   }, [])
   
  const dispatch = useDispatch();
  const activeCat = useSelector((state) => state.gallery.activeCat);
  
  const handleSetActiveCat = (catId) => {
    dispatch(setActiveCat(catId));
  };   
  return (
    <div className="ServicePC1-Main" data-aos="fade-up">
      <div className="ServicePS-CategoryHeadStrip">
        <h1 className="ServicePS-CategoryHead">VISUAL BRANDING</h1>
      </div>
      <div className="ServicePS container">
        <div className="ServicePS-ProductList">
          <div className="ServicePS-Products">
            {demoProducts.length ? 
           <>{ demoProducts.map((Product) => (
              <div className="SPSBodyContent-Box" data-aos="zoom-in-up">
                <div className="SPSBodyContentBox-ImgContainer">
                  <img
                    className="SPSBodyContentBox-Img"
                    src={Product.image}
                  />
                </div>
                <div className="SPSBodyContentBox-Content">
                  <div className="SPSBodyContentBox-HeadContent">
                    <h5 className="SPSBodyContentBox-ProductName">
                      {Product.name}
                    </h5>
                    <h6 className="SPSBodyContentBox-ProductPrice">
                      <FormatPrice price={Product.minPrice} /> -{" "}
                      <FormatPrice price={Product.maxPrice} />
                      /-
                    </h6>
                  </div>

                  <div className="SPSBodyContentBox-BodyContainer">
                    <p style={{color:"grey"}}>{Product.description}</p>
                    <p className="SPSBodyContentBox-BodyContent">
                      {Product.DescriptionHead}
                      <br />
                      <b>Factors Affecting Price:</b>
                      <br />
            
                      {Product.descriptionFactors? Product.descriptionFactors.map((Points) => (
                         
                        <li>{Points}</li>
                      )):<>No Description Factors available</>}
                      <br />
                      {Product.descriptionFooter ?Product.descriptionFooter.map((Points) => (
                        <div>{Points}</div> 
                      )):<>No Description Footers available</>}
                    </p>
                  </div>
                </div>
               
              </div>

            ))}</>:<></>}
          </div>
          <NavLink to="/Gallery">
            <Button
              border="none"
              buttonText="View Gallery"
              width="11rem"
              height="3rem"
              className="ServicePS-Button"
              onClick={() => {
                handleSetActiveCat(1);
              }}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceProductCategory1;
