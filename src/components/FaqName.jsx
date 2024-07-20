import React, { useContext } from 'react'
import { NavLink } from 'react-bootstrap';
import { LangContext } from '../context/LangContext';

const FaqName = () => {
  const [lang,setLang] = useContext(LangContext)
  return (
    <div className='aboutname'>
      <div className='name-text'>
            <h1>FAQ</h1>
            <NavLink className="nav-link" to='/'>{lang==="EN"?"Home/FAQ":"Ana Səhifə/FAQ"}</NavLink>
        </div>
        <div className="overlay"></div>
        <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/breadcrumb-image.jpg" alt="" />
    </div>
  )
}

export default FaqName