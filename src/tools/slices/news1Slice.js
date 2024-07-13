import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../config/connect";


const news1Slice = createSlice({
  name: 'news1', 
  initialState: [],
  reducers: {
    news1read: (state, action) => {
       return action.payload
    },

    addnews1: async (state, action) => {
      const createnews1 = async () => {
        const { data, error } = await supabase
          .from('news1')
          .insert(action.payload)
        if (error) {
          console.log(error);
        } else {
          swal("News add successfully","","success")
          setTimeout(()=>{
              window.location.assign("http://localhost:5173/dashboard/news1/read")
          },2000)
        }
      }
      createnews1();
      state.push(...action.payload);
    },


    editnews1:(state, action) => {
      const editnews1 = async () => {
        const { error } = await supabase
          .from('news1')
          .update(action.payload.data)
          .eq('id', action.payload.id);
        if (error) {
          console.log(error);
        } else {
          swal("News edited successfully", "", "success");
          setTimeout(() => {
            window.location.assign("http://localhost:5174/dashboard/news1/read");
          }, 2000);
        }
      };
      editnews1();
    
    },


    deletenews1: (state, action) => {
      const deletenews1 = async () => {
        const { error } = await supabase
          .from('news1')
          .delete()
          .eq('id', action.payload.id);
        if (error) {
          console.log(error);
        } else {
          swal("News deleted successfully", "", "success");
          setTimeout(() => {
            window.location.assign("http://localhost:5174/dashboard/news1/read");
          }, 2000);
        }
      };
      deletenews1();
      return state.filter(news1 => news1.id !== action.payload.id);
    },


  },
})

export default news1Slice.reducer;

export const {news1read, addnews1, deletenews1, editnews1} = news1Slice.actions