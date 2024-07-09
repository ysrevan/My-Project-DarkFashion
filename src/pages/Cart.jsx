import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import supabase from '../config/connect'

const Cart = () => {
  const [basket,setBasket] = useState([])
  const [cookie] = useCookies()
  const [count,setCount] = useState(1)
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
const deleteCart=(prodid,id)=>{
const updateBasket = async (dataarr) =>{
  const{error} = await supabase
  .from("basket")
  .update({user_token:cookie['cookie-fashion'],products:dataarr})
  .eq("id", prodid)

}
  const handleData = findbasket.products.filter((item)=>{
      return item.id !== id
   });
   updateBasket(handleData)
} 

const decrement=()=>{
  count>1?setCount(count-1):setCount(count);
}

const increment=()=>{
  setCount(count+1)
}
  return (
   <div className='container my-5'>


<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Photo</th>
      <th scope="col">Title | Category</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {findbasket === undefined?(<p>Loading...</p>):(findbasket.products.map((item,index)=>(


    <tr key={item.id}>
      <th scope="row">{index+1}</th>
      <td><img src={item.photo} width={100} alt="" /></td>
      <td>{item.title} | {item.category}</td>
      <td>${item.price*count}</td>
      <td><button onClick={decrement}>-</button>
      <span className='mx-3'>{count}</span>
      <button  onClick={increment}>+</button></td>
      <td><button onClick={async()=>{
        deleteCart(findbasket.id,item.id)
        window.location.reload()
      }}>X</button></td>
    </tr>
 


    
     
    )))}


  </tbody>
</table>

   </div>
  )
}

export default Cart