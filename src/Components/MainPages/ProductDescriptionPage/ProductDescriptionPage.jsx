import React, { useEffect } from 'react'
import "./ProductDescriptionPage.css"
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../../Context/ProductContext'

const ProductDataApi = "https://api.pujakaitem.com/api/products" 

export const ProductDescriptionPage = () => {
  const {getProdDescription , isSinglePDPLoading, singlePDP} = useProductContext();
  // console.log("Single PDP DATA" , singlePDP);
    const {id} = useParams();


    const  {
      id:Prod1,
      name,

    } = singlePDP


    useEffect(()=>{
        getProdDescription(`${ProductDataApi}?id=${id}`);
    })


    if(isSinglePDPLoading){
      console.log("Loading Successfull")
      return (<div>Loading...</div>)
    }


  return (
    <div className='PDPMain'>
        <div className='PDP container'>
            PDP page {name}
        </div>
    </div>
  )
}


export default ProductDescriptionPage;