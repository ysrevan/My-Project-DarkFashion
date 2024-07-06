import React from 'react'
import { NavLink } from 'react-bootstrap';

const BlogName = () => {
  return (
    <div className='aboutname'>
      <div className='name-text'>
            <h1>Blog</h1>
            <NavLink className="nav-link" to='/'>Home/Blog</NavLink>
        </div>
        <div className="overlay"></div>
        <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/breadcrumb-image.jpg" alt="" />
    </div>
  )
}

export default BlogName