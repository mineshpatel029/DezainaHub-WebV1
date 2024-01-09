import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    activeCat: 2,
    // ... other initial state if needed
  },
  reducers: {
    setActiveCat: (state, action) => {
      state.activeCat = action.payload;
    },
    // ... other reducers if needed
  },
});

export const { setActiveCat } = gallerySlice.actions;
export default gallerySlice.reducer;
