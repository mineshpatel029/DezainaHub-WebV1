import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    step: 1,
    prodInfo: {}
  }

export const cartReducer = createSlice({
  name: 'productDetailReducer',
  initialState,
  reducers: {
    setStep: (state,action) => {
        state.step = action.payload
    },
    setProdInfo: (state,action) => {
        state.prodInfo = {
            ...state.prodInfo,
            [action.payload.key]: action.payload.value
        }
    }
  },
})

export const { setStep, setCartProdQuantity, setMaxPrice, setMinPrice, setProdInfo } = cartReducer.actions

export default cartReducer.reducer