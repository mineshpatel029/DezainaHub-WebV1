import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    activeCat: 2,
 
  },
  reducers: {
    setActiveCat: (state, action) => {
      state.activeCat = action.payload;
    },
    
  },
});

export const { setActiveCat } = gallerySlice.actions;
export default gallerySlice.reducer;
