import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: 'home', 
  initialState: [],
  reducers: {
    homedataread: (state, action) => {
       return action.payload
    },
  },
})

export default homeSlice.reducer;

export const {homedataread} = homeSlice.actions

