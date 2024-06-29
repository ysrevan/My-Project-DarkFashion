import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { NavDropdown } from 'react-bootstrap';
const Header = () => {
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
            {/* <NavDropdown.Item href="/gallery">GALLERY </NavDropdown.Item> */}
            {/* <NavDropdown.Item href="*">404 PAGE</NavDropdown.Item> */}
            </NavDropdown>
            <NavLink className="nav-link" to="/shop">SHOP</NavLink>
            <NavLink className="nav-link" to="/news">NEWS</NavLink>
            <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
          </ul> 
        </nav>
        <div className="icons">
        <IoSearch className="icon"/>
        <NavLink to="/register"> <FiLogIn className='icon'/></NavLink>
        <NavLink to="/cart">  <FiShoppingCart className='icon' /></NavLink>
        <NavLink to="wishlist"> <FaRegHeart className='icon'/></NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header