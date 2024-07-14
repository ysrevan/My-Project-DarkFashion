import React from 'react'
import { NavLink } from 'react-router-dom'

const CartName = () => {
  return (
    <div className='aboutname'>
    <div className='name-text'>
          <h1>Basket</h1>
          <NavLink className="nav-link" to='/'>Home/Basket</NavLink>
      </div>
      <div className="overlay"></div>
      <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/breadcrumb-image.jpg" alt="" />
  </div>
  )
}

export default CartName