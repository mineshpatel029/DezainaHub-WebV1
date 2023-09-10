import React, { useEffect } from 'react'
import "./FeaturedServiceSec.css"
import FeaturedServiceSecBody from './FeaturedServiceSecBody/FeaturedServiceSecBody';
import { NavLink } from "react-router-dom";
import { setLoading, setProduct } from '../../../../Redux/productDetailReducer';
import { useSelector, useDispatch } from 'react-redux'
import axios from "axios";

export const FeaturedServiceSec = () => {
  const dispatch = useDispatch();

  let featureProducts = useSelector((state) => state.productDetailReducer?.products);
  useEffect(async() => {
    let token = localStorage.getItem("token");
    const config = {
      headers: { authorization: token }
    }
    const ProductDataAPI = "http://localhost:5050/api/item/get";
    const res = await axios.get(ProductDataAPI, config);
    const products = await res.data;
    if(products.length){
        dispatch(setProduct(products))
    }
},[])
  return (
    <div className='FeaturedSSMain'>
        <div className='FeaturedSS container'>
            <div className='FeaturedSS-Head'>
                <h6 className='FeaturedSSHead-Title'>Services</h6>
                <h1 className='FeaturedSSHead-Heading'>Explore <span>Featured</span> Services</h1>
                <p className='FeaturedSSHead-Body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
            </div>
            <FeaturedServiceSecBody featureProducts={featureProducts}/>
            <NavLink to="/Service" >
            <button className='FeaturedSS-Button'>
                View All
            </button>
            </NavLink>

        </div>
    
    </div>
  )
}

export default FeaturedServiceSec;