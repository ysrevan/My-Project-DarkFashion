import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Button, NavDropdown } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { MdLogin } from "react-icons/md";
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
        <IoSearch className="icon"/>
       
        {cookie['admintoken']?<MdLogin className='icon'  onClick={()=>{removeCookie('admintoken')}}/>:<NavLink to="/register"> <FaRegUser className='icon'/></NavLink>}
        <NavLink to="/cart">  <FiShoppingCart className='icon' /></NavLink>
        <NavLink to="wishlist"> <FaRegHeart className='icon'/></NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header