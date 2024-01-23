import { configureStore } from '@reduxjs/toolkit'
import productDetailReducer from './productDetailReducer'
import cartReducer from './cartReducer'
import galleryReducer from './galleryReducer';
import dataReducer from "./offerSlice"

export const store = configureStore({
  reducer: {
    productDetailReducer: productDetailReducer,
    cartReducer: cartReducer,
    gallery: galleryReducer,
    data: dataReducer,
  },
});