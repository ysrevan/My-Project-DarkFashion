import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LangContext } from '../context/LangContext'

const NewsReadName = () => {
  const [lang,setLang] = useContext(LangContext)

  return (
    <div className='aboutname'>
    <div className='name-text'>
          <h1>{lang==="EN"?"News List":"Xəbər Siyahısı"}</h1>
          <NavLink className="nav-link" to='/'>{lang==="EN"?"Home/News List":"Ana səhifə/Xəbər Siyahısı"}</NavLink>
      </div>
      <div className="overlay"></div>
      <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/breadcrumb-image.jpg" alt="" />
  </div>
  )
}

export default NewsReadName