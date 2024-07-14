import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import WishlistName from '../components/WishlistName'
import supabase from '../config/connect'
import Animation from '../components/Animation'
const WishList = () => {
  const [wishlist, setWishlist] = useState([])
  const [cookie] = useCookies()
  

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('wishlist').select();
      if (error) {
        console.log(error);
      } else {
        setWishlist(data);
      }
    }
    fetchData();
  }, [])

  const findwishlist = wishlist.find((p) => (p.user_token === cookie['cookie-fashion']))

  const deleteWishlist = (prodid, id) => {
    const updateWishlist = async (dataarr) => {
      const { error } = await supabase
        .from("wishlist")
        .update({ user_token: cookie['cookie-fashion'], products: dataarr })
        .eq("id", prodid)
    }
    const handleData = findwishlist.products.filter((item) => {
      return item.id !== id
    });
    updateWishlist(handleData)
  }
  return (
    <>
    <WishlistName/>
   <div className="wishlist-box">
   <div className='container '>
      <table className="table wishlist-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Photo</th>
            <th scope="col">Title | Category</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {findwishlist === undefined ? (<p>Loading...</p>) : (findwishlist.products.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td><img src={item.photo} width={100} alt="" /></td>
              <td>{item.title} | {item.category}</td>
              <td>${item.price}</td>
            
              <td>
                <button onClick={async () => {
                  deleteWishlist(findwishlist.id, item.id)
                  window.location.reload()
                }}>X</button>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
     
    </div>
   </div>
    <Animation/>
  </>
  )
}

export default WishList