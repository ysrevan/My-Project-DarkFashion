import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
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
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Book An Appoinment</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shipping & Delivery</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Returns & Refunds</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Gift Wrapping</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Follow Your Order</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Stores</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>COMPANY</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About Us</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Awards</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Our Mission</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Press Release</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Hire Me</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Affiliates And Creators</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>SUPPORT</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQ</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shipping And Returns</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Tracking</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Size Charts</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Gift Cards</a></li>
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