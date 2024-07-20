import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LangContext } from '../context/LangContext'

const ProductsReadName = () => {
  const [lang,setLang] = useContext(LangContext)
  return (
    <div className='aboutname'>
    <div className='name-text'>
          <h1>{lang==="EN"?"Products List":"Məhsul Siyahısı"}</h1>
          <NavLink className="nav-link" to='/'>{lang==="EN"?"Home/Products List":"Ana səhifə/Məhsul Siyahısı"}</NavLink>
      </div>
      <div className="overlay"></div>
      <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/breadcrumb-image.jpg" alt="" />
  </div>
  )
}

export default ProductsReadName