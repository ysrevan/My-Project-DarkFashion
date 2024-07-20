import React, { useContext } from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangContext';
const Footer = () => {
    const [lang,setLang] = useContext(LangContext)

    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="container">
                <div className="fashion">
                    <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/Light-logo.svg" alt="" />
                    <p className='mt-3'><span>{lang==="EN"?"Quisque eleifend eu dolor a pulvinar.":"Gördüyünüz bu linklərdəndə"}</span><br></br>
                        <span>{lang==="EN"?"Vestibulum auctor dolor justo, a dignissim":"Müxtəlif səhifələrə keçid edib"}</span><br></br>
                        {lang==="EN"?"orci rutrum a. Integer finibus mauris risus.":"Xidmətlərimizdən yararlana bilərsiniz."}</p>
                    <div className="social">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>


                <div className="footer-text">
                    <div className="col mb-3">
                        <h5>{lang==="EN"?"ORDER ASSISTANCE":"SİFARİŞ YARDIMI"}</h5>
                        <ul className="nav flex-column">
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Book An Appoinment":"Görüş Sifariş Edin"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Shipping & Delivery":"Çatdırılma və Quraşdırılma"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Returns & Refunds":"Qaytarmalar və Geri Ödənişlər"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Gift Wrapping":"Hədiyyənin Qablaşdırılması"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Follow Your Order":"Sifarişinizə Əməl Edin"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Stores":"Mağazalar"}</a></Link>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>{lang==="EN"?"COMPANY":"ŞİRKƏT"}</h5>
                        <ul className="nav flex-column">
                            <Link to="/about" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"About Us":"Haqqımızda"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Awards":"Mükafatlar"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Our Mission":"Bizim Missiyamız"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Privacy Policy":"Gizlilik Siyasəti"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Press Release":"Press-Reliz"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Hire Me":"Məni Işə Götür"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Affiliates And Creators":"Filiallar Və Yaradıcılar"}</a></Link>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>{lang==="EN"?"SUPPORT":"DƏSTƏK"}</h5>
                        <ul className="nav flex-column">
                            <Link to="/faq" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQ</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Shipping And Returns":"Çatdırılma Və Qaytarma"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Tracking":"İzləmə"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Size Charts":"Ölçü Cədvəlləri"}</a></Link>
                            <Link to="/" className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">{lang==="EN"?"Gift Cards":"Hədiyyə Kartları"}</a></Link>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>{lang==="EN"?"TALK TO US":"BİZİMLƏ DANIŞIN"}</h5>
                       <p>{lang==="EN"?"Got Questions? Call us (+11)-415-5552671":"Suallarınız var? Bizə zəng edin (+11)-415-5552671"}</p>
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
                    <p>© {currentYear} {lang==="EN"?"dark fashion by Ravan Yusifli, All Rights Reserved":"dark fashion Rəvan Yusifli, Bütün Hüquqlar Qorunur"}</p>
                    <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/payment-icon.png" alt="" />
                </div>


        </footer>
    )
}

export default Footer