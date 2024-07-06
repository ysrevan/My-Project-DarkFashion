import React from 'react';
import { useCookies } from 'react-cookie';
import { FaHeart } from "react-icons/fa";
import supabase from '../config/connect';

const ShopCard = ({img, title, category, price, alldata }) => {
const [cookie] = useCookies(); 

  return (
    <div className="col-12 col-sm-6 col-md-3 mt-5 mb-5">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body text-center d-flex flex-column justify-content-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{category}</p>
          <p className="card-text">${price}</p>
          <button className='wishlist-button mb-3'><FaHeart className='heart' /></button>
          <button href="#" className="cart-button mb-3" >READ MORE</button>
          <button href="#" className="cart-button" onClick={()=>{
            const dataSendToBasket = async()=>{
              const {data,error} = await supabase.from('basket').select();
              const finduser = data?.find((p)=>(p.user_token === cookie['cookie-fashion']));
              if (finduser === undefined) {
                 const {data,error} = await supabase.from('basket').insert({
                  user_token:cookie["cookie-fashion"],
                  products:[alldata],
                });
                if (error) {
                  console.log(error);
                }else{
                  console.log(data);
                }
              }else{
              const mydata = data?.find((p)=>(p.user_token === cookie['cookie-fashion']));
                const {error} = await supabase
                .from('basket')
                .update({user_token:cookie["cookie-fashion"],products:[...mydata.products,alldata]})
                .eq('user_token', cookie["cookie-fashion"])
                if (error) {
                  console.log(error);
                }
              }
               
            }
            dataSendToBasket()
          }}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
