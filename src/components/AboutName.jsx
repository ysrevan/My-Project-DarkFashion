import React from 'react'
import { NavLink } from 'react-bootstrap';

const AboutName = () => {
  return (
    <div className='aboutname'>
      <div className='name-text'>
            <h1>About Us</h1>
            <NavLink className="nav-link" to='/'>Home/About Us</NavLink>
        </div>
        <div className="overlay"></div>
        <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/breadcrumb-image.jpg" alt="" />
    </div>
  )
}

export default AboutName