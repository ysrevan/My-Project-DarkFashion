import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='notfoundpage-box'>
      <img className='notfoundpage-img' src="https://darkfashion.wpengine.com/wp-content/themes/darkfashion/modules/404/assets/Images/404-image.jpg" alt="" />
      <div className="notfoundblack-box">
       <div className='notfoundpage-text'> <h1 className='notfoundpage-number'>404</h1>
      <h1 className='oops'>Oops! That Page Not Found</h1>
      <Link to="/"><button className='notfound-home'>BACK TO HOME</button></Link>
      </div>
      </div>
    </div>
  )
}

export default NotFoundPage