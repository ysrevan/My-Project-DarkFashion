import React from 'react'
import { NavLink } from 'react-router-dom'

const RegisterName = () => {
  return (
    <div className='aboutname'>
    <div className='name-text'>
          <h1>Login Page</h1>
          <NavLink className="nav-link" to='/'>Home/Login Page</NavLink>
      </div>
      <div className="overlay"></div>
      <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/breadcrumb-image.jpg" alt="" />
  </div>
  )
}

export default RegisterName