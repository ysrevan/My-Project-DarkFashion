import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="fashion">
                    <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/Light-logo.svg" alt="" />
                    <p className='mt-3'>Quisque eleifend eu dolor a pulvinar.<br></br>
                        Vestibulum auctor dolor justo, a dignissim<br></br>
                        orci rutrum a. Integer finibus mauris risus.</p>
                    <div className="social">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>


                <div className="footer-text">
                    <div className="col mb-3">
                        <h5>ORDER ASSISTANCE</h5>
                        <ul className="nav flex-column">
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Book An Appoinment</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shipping & Delivery</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Returns & Refunds</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Gift Wrapping</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Follow Your Order</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Stores</a></Link>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>COMPANY</h5>
                        <ul className="nav flex-column">
                            <Link to="/about" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Us</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Awards</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Our Mission</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Press Release</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Hire Me</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Affiliates And Creators</a></Link>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>SUPPORT</h5>
                        <ul className="nav flex-column">
                            <Link to="/faq" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQ</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shipping And Returns</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Tracking</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Size Charts</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Gift Cards</a></Link>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>TALK TO US</h5>
                       <p>Got Questions? Call us (+11)-415-5552671</p>
                       <div className='email'>
                       <IoMdMail className='email-icon'/><p>contact@example.com</p>
                       </div>
                       <div className='address'>
                       <FaHome className='home-icon'/><p>No 58A Baltimore Street,USA</p>
                       </div>
                    </div>

                
                </div>

            </div>

            
            <div className="reserv mx-5">
                    <p>© 2023 dark fashion, All Rights Reserved</p>
                    <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/payment-icon.png" alt="" />
                </div>


        </footer>
    )
}

export default Footer