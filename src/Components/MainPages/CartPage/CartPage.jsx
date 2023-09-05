import React, { useContext } from 'react'
import { useProductContext } from '../../../Context/ProductContext';
import "./CartPage.css"
import YourCartPage from './YourCartPage/YourCartPage';
import ReviewCartPage from './ReviewCartPage/ReviewCartPage';
import CartOrderSuccesPage from './CartOrderSuccesPage/CartOrderSuccesPage';

export const CartPage = () => {
  const myName = useProductContext();
  return (
    <div className='CartPageMain'>
        <YourCartPage/>
    {myName}
        {/* <ReviewCartPage/> */}
        {/* <CartOrderSuccesPage/> */}
    </div>
  )
}

export default CartPage;