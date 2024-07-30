import React, { useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import CartName from '../components/CartName'
import supabase from '../config/connect'
import Animation from '../components/Animation'
import { Link } from 'react-router-dom'
import { LangContext } from '../context/LangContext'
import { ThemeContext } from '../context/ThemeContext'
const Cart = () => {
  const [basket, setBasket] = useState([])
  const [cookie] = useCookies()
  const [quantities, setQuantities] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('basket').select();
      if (error) {
        console.log(error);
      } else {
        setBasket(data);
        const initialQuantities = {};
        data.forEach(basketItem => {
          basketItem.products.forEach(product => {
            initialQuantities[product.id] = 1;
          });
        });
        setQuantities(initialQuantities);
      }
    }
    fetchData();
  }, [])

  const findbasket = basket.find((p) => (p.user_token === cookie['cookie-fashion']))

  const deleteCart = (prodid, id) => {
    const updateBasket = async (dataarr) => {
      const { error } = await supabase
        .from("basket")
        .update({ user_token: cookie['cookie-fashion'], products: dataarr })
        .eq("id", prodid)
    }
    const handleData = findbasket.products.filter((item) => {
      return item.id !== id
    });
    updateBasket(handleData)
  }

  const decrement = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }));
  }

  const increment = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  }

  const calculateTotalPrice = () => {
    if (!findbasket) return 0;
    return findbasket.products.reduce((total, item) => {
      const quantity = quantities[item.id] || 1;
      return total + (item.price * quantity);
    }, 0);
  }

  const [lang,setLang] = useContext(LangContext)
  const [theme,setTheme] = useContext(ThemeContext)
  return (
  <>
    <CartName/>
    <div className={`dark-div ${theme === "light"?"light":"dark"}`}>
    <div className="cart-box">
   <div className='container '>
      <table className="table cart-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{lang==="EN"?"Photo":"Şəkil"}</th>
            <th scope="col">{lang==="EN"?"Title | Category":"Başlıq | Kateqoriya"}</th>
            <th scope="col">{lang==="EN"?"Price":"Qiymət"}</th>
            <th scope="col">{lang==="EN"?"Quantity":"Kəmiyyət"}</th>
            <th scope="col">{lang==="EN"?"Delete":"Sil"}</th>
          </tr>
        </thead>
        <tbody>
          {findbasket === undefined ? (<p>Loading...</p>) : (findbasket.products.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td><img src={item.photo} width={100} alt="" /></td>
              <td>{item.title} | {item.category}</td>
              <td>${item.price * (quantities[item.id] || 1)}</td>
              <td>
                <button className='decrement-btn' onClick={() => decrement(item.id)}>-</button>
                <span className='mx-3'>{quantities[item.id] || 1}</span>
                <button className='increment-btn' onClick={() => increment(item.id)}>+</button>
              </td>
              <td>
                <button className='delete-btn' onClick={async () => {
                  deleteCart(findbasket.id, item.id)
                  window.location.reload()
                }}>X</button>
              </td>
              
            </tr>
          )))}
        </tbody>
      </table>
      {findbasket && (
        <div className='mt-3'>
          <h3 className='total-price mt-4' style={{textAlign:"center"}}>{lang==="EN"?"Total Price: ":"Ümumi Qiymət: "}${calculateTotalPrice().toFixed(2)}</h3>
        </div>
      )}
      
        
    </div>
   
   <div className="checkout">
   <Link to="/checkout" state={{ totalPrice: calculateTotalPrice() }}><button className='checkout-btn' style={{textAlign:"center"}} >{lang==="EN"?"Checkout":"Yoxla"}</button></Link>
   </div>
   </div>
    </div>
    <Animation/>
  </>
  )
}

export default Cart