import { createSlice } from "@reduxjs/toolkit";

const news2Slice = createSlice({
  name: 'news2', 
  initialState: [],
  reducers: {
    news2read: (state, action) => {
       return action.payload
    },
  },
})

export default news2Slice.reducer;

export const {news2read} = news2Slice.actions
