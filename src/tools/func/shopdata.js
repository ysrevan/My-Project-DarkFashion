import supabase from "../../config/connect"
import { categoryread } from "../slices/categorySlice"
import { fashionread } from "../slices/fashionSlice"
import { homedataread } from "../slices/homeSlice"
import { news1read } from "../slices/news1Slice"
import { news2read } from "../slices/news2Slice"
import { userread } from "../slices/userSlice"
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

export const news1data = async()=>{
    const {data,error} = await supabase.from('news1').select()
    if(error){
        console.log(error)
    }else{
        store.dispatch(news1read(data))
    }
}

export const news2data = async()=>{
    const {data,error} = await supabase.from('news2').select()
    if(error){
        console.log(error)
    }else{
        store.dispatch(news2read(data))
    }
}