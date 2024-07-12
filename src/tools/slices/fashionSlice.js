import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../config/connect";

const fashionSlice = createSlice({
  name: 'products', 
  initialState: [],
  reducers: {
    fashionread: (state, action) => {
       return action.payload
    },

    
    addfashion: async (state, action) => {
      const createfashion = async () => {
        const { data, error } = await supabase
          .from('products')
          .insert(action.payload)
        if (error) {
          console.log(error);
        } else {
          swal("Products add successfully","","success")
          setTimeout(()=>{
              window.location.assign("http://localhost:5174/dashboard/products/read")
          },2000)
        }
      }
      createfashion();
      state.push(...action.payload);
    },

    
    editfashion:(state, action) => {
      const editfashion = async () => {
        const { error } = await supabase
          .from('products')
          .update(action.payload.data)
          .eq('id', action.payload.id);
        if (error) {
          console.log(error);
        } else {
          swal("Products edited successfully", "", "success");
          setTimeout(() => {
            window.location.assign("http://localhost:5174/dashboard/products/read");
          }, 2000);
        }
      };
      editfashion();
    
    },

    deletefashion: (state, action) => {
      const deletefashion = async () => {
        const { error } = await supabase
          .from('products')
          .delete()
          .eq('id', action.payload.id);
        if (error) {
          console.log(error);
        } else {
          swal("Products deleted successfully", "", "success");
          setTimeout(() => {
            window.location.assign("http://localhost:5174/dashboard/products/read");
          }, 2000);
        }
      };
      deletefashion();
      return state.filter(fashion => fashion.id !== action.payload.id);
    },
  },
})

export default fashionSlice.reducer;

export const {fashionread , addfashion ,deletefashion ,editfashion} = fashionSlice.actions


