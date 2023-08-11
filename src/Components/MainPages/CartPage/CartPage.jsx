import React from 'react'
import "./CartPage.css"
import YourCartPage from './YourCartPage/YourCartPage';
import ReviewCartPage from './ReviewCartPage/ReviewCartPage';
import CartOrderSuccesPage from './CartOrderSuccesPage/CartOrderSuccesPage';

export const CartPage = () => {
  return (
    <div className='CartPageMain'>
        <YourCartPage/>
        {/* <ReviewCartPage/> */}
        {/* <CartOrderSuccesPage/> */}
    </div>
  )
}

export default CartPage;