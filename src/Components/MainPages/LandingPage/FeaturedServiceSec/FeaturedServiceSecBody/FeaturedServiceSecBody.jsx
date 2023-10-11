import React, { useEffect } from 'react'
import "./FeaturedServiceSecBody.css"
import FeaturedServiceData from './FeaturedServiceData'
import { useProductContext } from '../../../../../Context/ProductContext'
import { useSelector, useDispatch } from 'react-redux'
// import FeaturedServiceCardData from './FeaturedServiceCardData/FeaturedServiceCardData'
import FeaturedServiceCardData from './FeaturedServiceCardData/FeaturedServiceCardData'
import { setLoading, setProduct } from '../../../../../Redux/productDetailReducer'
import axios from "axios";


// export const FeaturedServiceSecBody = ({featureProducts}) => {
    export const FeaturedServiceSecBody = () => {
    return (
    <div className='FeaturedSS-BodyMain'>
        <div className='FeaturedSS-Body'>
                <div className='FeaturedSSBody-Nav'>
                    <button className='FeaturedSSBodyNav-ActiveButton'>All Category</button>
                    <button className='FeaturedSSBodyNav-Button'>Visual Branding</button>
                    <button className='FeaturedSSBodyNav-Button'>Brand Marketing</button>
                    <button className='FeaturedSSBodyNav-Button'>Digital Interaction</button>
                </div>
                <div className='FeaturedSSBody-Content'>
                {/* {featureProducts.length ? featureProducts.map((ServiceCardData)=> {
                    if(ServiceCardData?.featured) {
                        return <FeaturedServiceCardData key={ServiceCardData.id} { ...ServiceCardData}/>

                    }
                }
                ) : <>Loading...</>} */}

                {FeaturedServiceData.map((ServiceCardData)=> {
                    if(ServiceCardData?.featured) {
                        return <FeaturedServiceCardData {...ServiceCardData}/>
                        {/* return <FeaturedServiceCardData key={ServiceCardData.id} { ...ServiceCardData}/> */}

                    }
                })}
                </div>

            </div>
    </div>
  )
}
export default FeaturedServiceSecBody;