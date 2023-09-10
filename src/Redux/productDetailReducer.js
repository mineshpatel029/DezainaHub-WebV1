import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isError: false,
    products: {},
    featureProducts:[],
    isSinglePDPLoading: false,
    singlePDP: {},
  }

export const productDetailReducer = createSlice({
  name: 'productDetailReducer',
  initialState,
  reducers: {
    setProduct: (state,action) => {
      state.products = action.payload
    },
    setLoading: (state,action) => {
      state.isLoading = action.payload
    }
  },
})

export const { setProduct, setLoading } = productDetailReducer.actions

export default productDetailReducer.reducer