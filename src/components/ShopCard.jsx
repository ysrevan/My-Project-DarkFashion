// import React, { useContext } from 'react';
// import { useCookies } from 'react-cookie';
// import { FaHeart } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import slugify from 'slugify';
// import supabase from '../config/connect';
// import { LangContext } from '../context/LangContext';
// import { ThemeContext } from '../context/ThemeContext';
// const ShopCard = ({img, title, category, price, alldata }) => {
// const [cookie] = useCookies(); 
// const [lang,setLang] = useContext(LangContext)
// const [theme,setTheme] = useContext(ThemeContext)
//   return (
//     <div className="col-12 col-sm-6 col-md-3 mt-5 mb-5">
//    <div className={`dark-div${theme === "light"?"light":"dark"}`}>
//       <div className="card">
//         <img src={img} className="card-img-top" alt="..." />
//         <div className="card-body text-center d-flex flex-column justify-content-center">
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text">{category}</p>
//           <p className="card-text">${price}</p>
//           <button className='wishlist-button mb-3'
//           onClick={()=>{
//             const dataSendToWishlist = async()=>{
//               const {data,error} = await supabase.from('wishlist').select();
//               const finduser = data?.find((p)=>(p.user_token === cookie['cookie-fashion']));
//               if (finduser === undefined) {
//                  const {data,error} = await supabase.from('wishlist').insert({
//                   user_token:cookie["cookie-fashion"],
//                   products:[alldata],
//                 });
//                 if (error) {
//                   console.log(error);
//                 }  else{
//                   console.log(data);
//                   swal("Please login the page", "", "success");
//                   setTimeout(() => {
//                     window.location.assign("http://localhost:5173/login");
//                   }, 2000);
//                 }
//               }else{
//               const mydata = data?.find((p)=>(p.user_token === cookie['cookie-fashion']));
//                 const {error} = await supabase
//                 .from('wishlist')
//                 .update({user_token:cookie["cookie-fashion"],products:[...mydata.products,alldata]})
//                 .eq('user_token', cookie["cookie-fashion"])
//                 if (error) {
//                   console.log(error);
//                 }else{
//                   swal("Product added to wishlist!","","success")
//                 }
//               }
               
//             }
//             dataSendToWishlist()
//           }}><FaHeart className='heart' /></button>
//           <Link to={`/shop/${slugify(alldata.title)}`} className="cart-button mb-3" >{lang==="EN"?"READ MORE":"ƏTRAFLI OXU"}</Link>
//           <button href="#" className="cart-button" onClick={()=>{
//             const dataSendToBasket = async()=>{
//               const {data,error} = await supabase.from('basket').select();
//               const finduser = data?.find((p)=>(p.user_token === cookie['cookie-fashion']));
//               if (finduser === undefined) {
//                  const {data,error} = await supabase.from('basket').insert({
//                   user_token:cookie["cookie-fashion"],
//                   products:[alldata],
//                 });
//                 if (error) {
//                   console.log(error);
//                 }else{
//                   console.log(data);
//                   swal("Please login the page", "", "success");
//                   setTimeout(() => {
//                     window.location.assign("http://localhost:5173/login");
//                   }, 2000);
//                 }
//               }else{
//               const mydata = data?.find((p)=>(p.user_token === cookie['cookie-fashion']));
//                 const {error} = await supabase
//                 .from('basket')
//                 .update({user_token:cookie["cookie-fashion"],products:[...mydata.products,alldata]})
//                 .eq('user_token', cookie["cookie-fashion"])
//                 if (error) {
//                   console.log(error);
//                 }else{
//                   swal("Product added to cart!","","success")
//                 }
//               }
               
//             }
//             dataSendToBasket()
//           }}>{lang==="EN"?"ADD TO CART":"SƏBƏTƏ ƏLAVƏ ET"}</button>
//         </div>
//       </div>
//     </div>
//    </div>
//   );
// }

// export default ShopCard;


import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import supabase from '../config/connect';
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';
import swal from 'sweetalert';

const ShopCard = ({ img, title, category, price, alldata }) => {
  const [cookie] = useCookies(); 
  const [lang, setLang] = useContext(LangContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const handleWishlist = async () => {
    try {
      const { data, error } = await supabase.from('wishlist').select();
      if (error) throw error;
      
      const finduser = data?.find(p => p.user_token === cookie['cookie-fashion']);
      if (!finduser) {
        const { data: insertData, error: insertError } = await supabase.from('wishlist').insert({
          user_token: cookie["cookie-fashion"],
          products: [alldata],
        });
        if (insertError) throw insertError;
        swal("Product added to wishlist!", "", "success");
      } else {
        const { error: updateError } = await supabase
          .from('wishlist')
          .update({ products: [...finduser.products, alldata] })
          .eq('user_token', cookie["cookie-fashion"]);
        if (updateError) throw updateError;
        swal("Product added to wishlist!", "", "success");
      }
    } catch (error) {
      console.error(error);
      swal("Error adding to wishlist", error.message, "error");
    }
  };

  const handleCart = async () => {
    try {
      const { data, error } = await supabase.from('basket').select();
      if (error) throw error;
      
      const finduser = data?.find(p => p.user_token === cookie['cookie-fashion']);
      if (!finduser) {
        const { data: insertData, error: insertError } = await supabase.from('basket').insert({
          user_token: cookie["cookie-fashion"],
          products: [alldata],
        });
        if (insertError) throw insertError;
        swal("Product added to cart!", "", "success");
      } else {
        const { error: updateError } = await supabase
          .from('basket')
          .update({ products: [...finduser.products, alldata] })
          .eq('user_token', cookie["cookie-fashion"]);
        if (updateError) throw updateError;
        swal("Product added to cart!", "", "success");
      }
    } catch (error) {
      console.error(error);
      swal("Error adding to cart", error.message, "error");
    }
  };

  return (
    <div className="col-12 col-sm-6 col-md-3 mt-5 mb-5">
      <div className={`dark-div${theme === "light" ? "light" : "dark"}`}>
        <div className="card">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body text-center d-flex flex-column justify-content-center">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{category}</p>
            <p className="card-text">${price}</p>
            <button className='wishlist-button mb-3' onClick={handleWishlist}>
              <FaHeart className='heart' />
            </button>
            <Link to={`/shop/${slugify(alldata.title)}`} className="cart-button mb-3">
              {lang === "EN" ? "READ MORE" : "ƏTRAFLI OXU"}
            </Link>
            <button className="cart-button" onClick={handleCart}>
              {lang === "EN" ? "ADD TO CART" : "SƏBƏTƏ ƏLAVƏ ET"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
