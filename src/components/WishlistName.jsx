import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LangContext } from '../context/LangContext';
const WishlistName = () => {
  const [lang,setLang] = useContext(LangContext)
  return (
    <div className='aboutname'>
    <div className='name-text'>
          <h1>{lang==="EN"?"Wishlist":"İstək Listi"}</h1>
          <NavLink className="nav-link" to='/'>{lang==="EN"?"Home/Wishlist":"Ana səhifə/İstək Listi"}</NavLink>
      </div>
      <div className="overlay"></div>
      <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/breadcrumb-image.jpg" alt="" />
  </div>
  )
}

export default WishlistName