import { createSlice } from "@reduxjs/toolkit";

const news1Slice = createSlice({
  name: 'news1', 
  initialState: [],
  reducers: {
    news1read: (state, action) => {
       return action.payload
    },
  },
})

export default news1Slice.reducer;

export const {news1read} = news1Slice.actions
