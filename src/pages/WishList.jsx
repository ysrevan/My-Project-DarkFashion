// import React, { useContext, useEffect, useState } from 'react'
// import { useCookies } from 'react-cookie'
// import WishlistName from '../components/WishlistName'
// import supabase from '../config/connect'
// import Animation from '../components/Animation'
// import { LangContext } from '../context/LangContext'
// import { ThemeContext } from '../context/ThemeContext'
// const WishList = () => {
//   const [wishlist, setWishlist] = useState([])
//   const [cookie] = useCookies()
  

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data, error } = await supabase.from('wishlist').select();
//       if (error) {
//         console.log(error);
//       } else {
//         setWishlist(data);
//       }
//     }
//     fetchData();
//   }, [])

//   const findwishlist = wishlist.find((p) => (p.user_token === cookie['cookie-fashion']))

//   const deleteWishlist = (prodid, id) => {
//     const updateWishlist = async (dataarr) => {
//       const { error } = await supabase
//         .from("wishlist")
//         .update({ user_token: cookie['cookie-fashion'], products: dataarr })
//         .eq("id", prodid)
//     }
//     const handleData = findwishlist.products.filter((item) => {
//       return item.id !== id
//     });
//     updateWishlist(handleData)
//   }

//   const [lang,setLang] = useContext(LangContext)
//   const [theme,setTheme] = useContext(ThemeContext)
//   return (
//     <>
//     <WishlistName/>
//    <div className={`dark-div ${theme === "light"?"light":"dark"}`}>
//       <div className="wishlist-box">
//       <div className='container '>
//       <table className="table wishlist-table">
//         <thead>
//           <tr>
//             <th scope="col">#</th>
//             <th scope="col">{lang==="EN"?"Photo":"Şəkil"}</th>
//             <th scope="col">{lang==="EN"?"Title | Category":"Başlıq | Kateqoriya"}</th>
//             <th scope="col">{lang==="EN"?"Price":"Qiymət"}</th>
//             <th scope="col">{lang==="EN"?"Delete":"Sil"}</th>
//           </tr>
//         </thead>
//         <tbody>
//           {findwishlist === undefined ? (<p>Loading...</p>) : (findwishlist.products.map((item, index) => (
//             <tr key={item.id}>
//               <th scope="row">{index + 1}</th>
//               <td><img src={item.photo} width={100} alt="" /></td>
//               <td>{item.title} | {item.category}</td>
//               <td>${item.price}</td>
            
//               <td>
//                 <button className='delete-btn' onClick={async () => {
//                   deleteWishlist(findwishlist.id, item.id)
//                   window.location.reload()
//                 }}>X</button>
//               </td>
//             </tr>
//           )))}
//         </tbody>
//       </table>
     
//     </div>
//       </div>
//    </div>
//     <Animation/>
//   </>
//   )
// }

// export default WishList




// import React, { useContext, useEffect, useState } from 'react'
// import { useCookies } from 'react-cookie'
// import WishlistName from '../components/WishlistName'
// import supabase from '../config/connect'
// import Animation from '../components/Animation'
// import { LangContext } from '../context/LangContext'
// import { ThemeContext } from '../context/ThemeContext'
// const WishList = () => {
//   const [wishlist, setWishlist] = useState([])
//   const [cookie] = useCookies()
  

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data, error } = await supabase.from('wishlist').select();
//       if (error) {
//         console.log(error);
//       } else {
//         setWishlist(data);
//       }
//     }
//     fetchData();
//   }, [])

//   const findwishlist = wishlist.find((p) => (p.user_token === cookie['cookie-fashion']))

//   const deleteWishlist = (prodid, id) => {
//     const updateWishlist = async (dataarr) => {
//       const { error } = await supabase
//         .from("wishlist")
//         .update({ user_token: cookie['cookie-fashion'], products: dataarr })
//         .eq("id", prodid)
//     }
//     const handleData = findwishlist.products.filter((item) => {
//       return item.id !== id
//     });
//     updateWishlist(handleData)
//   }

//   const [lang,setLang] = useContext(LangContext)
//   const [theme,setTheme] = useContext(ThemeContext)
//   return (
//     <>
//       <WishlistName />
//       <div className={`dark-div ${theme === 'light' ? 'light' : 'dark'}`}>
//         <div className="wishlist-box">
//           <div className="container">
//             {findwishlist === undefined ? (
//               <p>Loading...</p>
//             ) : (
//               <table className="table wishlist-table">
//                 <thead>
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">{lang === 'EN' ? 'Photo' : 'Şəkil'}</th>
//                     <th scope="col">{lang === 'EN' ? 'Title | Category' : 'Başlıq | Kateqoriya'}</th>
//                     <th scope="col">{lang === 'EN' ? 'Price' : 'Qiymət'}</th>
//                     <th scope="col">{lang === 'EN' ? 'Delete' : 'Sil'}</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {findwishlist.products.map((item, index) => (
//                     <tr key={item.id}>
//                       <th scope="row">{index + 1}</th>
//                       <td>
//                         <img src={item.photo} width={100} alt="" />
//                       </td>
//                       <td>
//                         {item.title} | {item.category}
//                       </td>
//                       <td>${item.price}</td>
//                       <td>
//                         <button
//                           className="delete-btn"
//                           onClick={async () => {
//                             deleteWishlist(findwishlist.id, item.id);
//                             window.location.reload();
//                           }}
//                         >
//                           X
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       </div>
//       <Animation />
//     </>
//   )
// }

// export default WishList


import React, { useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import WishlistName from '../components/WishlistName';
import supabase from '../config/connect';
import Animation from '../components/Animation';
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';
import swal from 'sweetalert';

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cookie] = useCookies();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('wishlist').select();
      if (error) {
        console.log(error);
      } else {
        setWishlist(data);
      }
    };
    fetchData();
  }, []);

  const findwishlist = wishlist.find((p) => p.user_token === cookie['cookie-fashion']);

  const deleteWishlist = async (prodid, id) => {
    const updateWishlist = async (dataarr) => {
      const { error } = await supabase
        .from("wishlist")
        .update({ user_token: cookie['cookie-fashion'], products: dataarr })
        .eq("id", prodid);
    };
    const handleData = findwishlist.products.filter((item) => item.id !== id);
    updateWishlist(handleData);
  };

  const handleCart = async (alldata) => {
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

  const [lang, setLang] = useContext(LangContext);
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <>
      <WishlistName />
      <div className={`dark-div ${theme === 'light' ? 'light' : 'dark'}`}>
        <div className="wishlist-box">
          <div className="container">
            {findwishlist === undefined ? (
              <p>Loading...</p>
            ) : (
              <table className="table wishlist-table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">{lang === 'EN' ? 'Photo' : 'Şəkil'}</th>
                    <th scope="col">{lang === 'EN' ? 'Title | Category' : 'Başlıq | Kateqoriya'}</th>
                    <th scope="col">{lang === 'EN' ? 'Price' : 'Qiymət'}</th>
                    <th scope="col">{lang === 'EN' ? 'Actions' : 'Əməliyyatlar'}</th>
                  </tr>
                </thead>
                <tbody>
                  {findwishlist.products.map((item, index) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <img src={item.photo} width={100} alt="" />
                      </td>
                      <td>
                        {item.title} | {item.category}
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={async () => {
                            deleteWishlist(findwishlist.id, item.id);
                            window.location.reload();
                          }}
                        >
                          X
                        </button>
                        <button
                          className="cart-button mx-5"
                          onClick={() => handleCart(item)}
                        >
                          {lang === 'EN' ? 'ADD TO CART' : 'SƏBƏTƏ ƏLAVƏ ET'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Animation />
    </>
  );
};

export default WishList;
