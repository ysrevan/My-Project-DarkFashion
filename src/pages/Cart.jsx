import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import CartName from '../components/CartName'
import supabase from '../config/connect'
import Animation from '../components/Animation'
import { Link } from 'react-router-dom'
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

  return (
  <>
    <CartName/>
   <div className="cart-box">
   <div className='container '>
      <table className="table cart-table">
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
          {findbasket === undefined ? (<p>Loading...</p>) : (findbasket.products.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td><img src={item.photo} width={100} alt="" /></td>
              <td>{item.title} | {item.category}</td>
              <td>${item.price * (quantities[item.id] || 1)}</td>
              <td>
                <button onClick={() => decrement(item.id)}>-</button>
                <span className='mx-3'>{quantities[item.id] || 1}</span>
                <button onClick={() => increment(item.id)}>+</button>
              </td>
              <td>
                <button onClick={async () => {
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
          <h3 className='total-price mt-4' style={{textAlign:"center"}}>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
        </div>
      )}
    </div>
    <Link to="/checkout" state={{ totalPrice: calculateTotalPrice() }}>Checkout</Link>

   </div>
    <Animation/>
  </>
  )
}

export default Cart