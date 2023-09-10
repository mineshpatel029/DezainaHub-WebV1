import { configureStore } from '@reduxjs/toolkit'
import productDetailReducer from './productDetailReducer'
import cartReducer from './cartReducer'


export const store = configureStore({
  reducer: {
    productDetailReducer: productDetailReducer,
    cartReducer: cartReducer
  },
})