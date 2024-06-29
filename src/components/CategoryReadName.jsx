import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryReadName = () => {
  return (
    <div className='aboutname'>
    <div className='name-text'>
          <h1>Category List</h1>
          <NavLink className="nav-link" to='/'>Home/Category List</NavLink>
      </div>
      <div className="overlay"></div>
      <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/breadcrumb-image.jpg" alt="" />
  </div>
  )
}

export default CategoryReadName