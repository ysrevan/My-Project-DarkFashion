import supabase from "../../config/connect"
import { categoryread } from "../slices/categorySlice"
import { fashionread } from "../slices/fashionSlice"
import { homedataread } from "../slices/homeSlice"
import store from "../store"

export const fashiondata = async()=>{
    const {data,error} = await supabase.from('products').select()
    if(error){
        console.log(error)
    }else{
       store.dispatch(fashionread(data));
    }
}

export const categorydata = async()=>{
    const {data,error} = await supabase.from('category').select()
    if(error){
        console.log(error)
    }else{
        store.dispatch(categoryread(data));
    }
}

export const homedata = async()=>{
    const {data,error} = await supabase.from('productshome').select()
    if(error){
        console.log(error)
    }else{
        store.dispatch(homedataread(data))
    }
}

export const userdata = async()=>{
    const {data,error} = await supabase.from('users').select()
    if(error){
        console.log(error)
    }else{
        store.dispatch(userread(data))
    }
}