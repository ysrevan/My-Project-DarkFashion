import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Button, NavDropdown } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { MdLogin } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
const Header = () => {


  const [cookie,setCookie,removeCookie] = useCookies()
console.log(cookie);


  return (
    <header>
      <div className="container">
        <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/Light-logo.svg" alt="" />
        <nav>
          <ul>
            <NavLink className="nav-link" to="/">HOME</NavLink>
            <NavDropdown title="PAGES" id="basic-nav-dropdown">
              <NavDropdown.Item  href="/about">ABOUT</NavDropdown.Item>
            <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link" to="/shop">SHOP</NavLink>
            <NavLink className="nav-link" to="/news">NEWS</NavLink>
            <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
          </ul> 
        </nav>

 

        <div className="icons">



          
        {cookie["admintoken"] === "bruh84587v" ?
  <li className="nav-item dropdown btn btn-warning dashboard-dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <MdOutlineSpaceDashboard />
  </a>
  <ul className="dropdown-menu">
    <li><Link className='export-read' to="/dashboard/category/read">Category</Link></li>
    <li><Link className='export-read' to="/dashboard/products/read">Products</Link></li>
  </ul>
</li> : ""}


        <IoSearch className="icon"/>
       
        {cookie['admintoken']?<MdLogin className='icon'  onClick={()=>{removeCookie('admintoken');
        swal('Logout is successfull!','','success')
        setTimeout(()=>{
          window.location.assign('/login')
         },2000)
        }}
        />
        : cookie['cookie-fashion']?
       <>
         <MdLogin className='icon'  onClick={()=>{removeCookie('cookie-fashion');
          swal('Logout is successfull!','','success')
          setTimeout(()=>{
            window.location.assign('/login')
           },2000)}}/> 
        <Link className='name' to={`/account/${cookie['cookie-fashion']}`}>{localStorage.getItem('username')}</Link>
       </> :<NavLink to="/register"> <FaRegUser className='icon'/></NavLink>}


        <NavLink to={`${!cookie['cookie-fashion']?"/login":"/cart"}`} className="position-relative">  
        <FiShoppingCart className='icon' />
   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  0
</span>
</NavLink>
        <NavLink to="wishlist"> <FaRegHeart className='icon'/></NavLink>
        </div>




      </div>
    </header>
  )
}


export default Header