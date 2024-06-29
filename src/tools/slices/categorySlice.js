
import supabase from "../../config/connect";
import {  createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: 'category',
  initialState: [],
  reducers: {
    categoryread: (state, action) => {
      return action.payload
    },
    addcategory: async (state, action) => {
      const createcategory = async () => {
        const { data, error } = await supabase
          .from('category')
          .insert(action.payload)
        if (error) {
          console.log(error);
        } else {
          swal("Category add successfully","","success")
          setTimeout(()=>{
              window.location.assign("http://localhost:5174/dashboard/category/read")
          },2000)
        }
      }
      createcategory();
      state.push(...action.payload);
    },


    editcategory:(state, action) => {
      const editcategory = async () => {
        const { error } = await supabase
          .from('category')
          .update(action.payload.data)
          .eq('id', action.payload.id);
        if (error) {
          console.log(error);
        } else {
          swal("Category edited successfully", "", "success");
          setTimeout(() => {
            window.location.assign("http://localhost:5174/dashboard/category/read");
          }, 2000);
        }
      };
      editcategory();
    
    },


    deletecategory: (state, action) => {
      const deletecategory = async () => {
        const { error } = await supabase
          .from('category')
          .delete()
          .eq('id', action.payload.id);
        if (error) {
          console.log(error);
        } else {
          swal("Category deleted successfully", "", "success");
          setTimeout(() => {
            window.location.assign("http://localhost:5174/dashboard/category/read");
          }, 2000);
        }
      };
      deletecategory();
      return state.filter(category => category.id !== action.payload.id);
    },
    
  },
})

export default categorySlice.reducer;

export const { categoryread, addcategory ,editcategory ,deletecategory} = categorySlice.actions