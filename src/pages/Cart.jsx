import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import supabase from '../config/connect'

const Cart = () => {
  const [basket,setBasket] = useState([])
  const [cookie] = useCookies()
  useEffect(()=>{
    const fetchData = async()=>{
       const {data,error} = await supabase.from('basket').select();
       if (error) {
        console.log(error);
       }else{
        setBasket(data)
       }
    }
    fetchData();
},[])
const findbasket = basket.find((p)=>(p.user_token === cookie['cookie-fashion']))
    // console.log(findbasket.products);
  return (
   <div>
    {findbasket === undefined?<p>Loading...</p>:findbasket.products.map((item)=>(
      <li key={item.id}>{item.title}</li>
    ))}
   </div>
  )
}

export default Cart