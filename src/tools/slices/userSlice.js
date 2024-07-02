import { createSlice } from "@reduxjs/toolkit";




const userSlice = createSlice({
    name: 'fashionuser',
    initialState: [],
    reducers: {
      userread: (state, action) => {
        return action.payload;
      },


    },
      
  })


  export default userSlice.reducer;

  export const {userread} = userSlice.actions;