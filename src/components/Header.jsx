import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Button, NavDropdown } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { MdLogin } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useAppSelector } from '../tools/store';
import slugify from 'slugify';
import { MdDarkMode } from "react-icons/md";
import { LangContext } from '../context/LangContext';
const Header = () => {


  const [cookie, setCookie, removeCookie] = useCookies()
  console.log(cookie);

  const fashion = useAppSelector((state) => state.fashion) ;
  const [keyword,setKeyword] = useState()
  const [basket, setBasket] = useState(0);

  const addToCart = () => {
    setBasket(basket + 1);
  };

  const [lang,setLang] = useContext(LangContext)
  return (
    <header>
      <div className="container">
        <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/Light-logo.svg" alt="" />
        <nav>
          <ul>
            <NavLink className="nav-link" to="/">{lang==="EN"?"HOME":"ANA SƏHİFƏ"}</NavLink>
            <NavDropdown title={lang==="EN"?"PAGES":"SƏHİFƏLƏR"} id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">{lang==="EN"?"ABOUT":"HAQQIMIZDA"}</NavDropdown.Item>
              <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-link" to="/shop">{lang==="EN"?"SHOP":"MAĞAZA"}</NavLink>
            <NavLink className="nav-link" to="/news">{lang==="EN"?"NEWS":"XƏBƏRLƏR"}</NavLink>
            <NavLink className="nav-link" to="/contact">{lang==="EN"?"CONTACT":"ƏLAQƏ"}</NavLink>
          </ul>
        </nav>



        <div className="icons">

{/* 
      <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
     
  </a>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">AZ</a></li>
    <li><a className="dropdown-item" href="#">EN</a></li>
  </ul>
</li> */}

     <button className='language-btn' onClick={()=>{
    lang==="EN"?setLang("AZ"):setLang("EN");
    lang==="EN"?localStorage.setItem("lang","AZ"):localStorage.setItem("lang","EN");
    }}>{lang}</button>
     <button className='darklight-btn'><MdDarkMode/></button>





          {cookie["admintoken"] === "bruh84587v" ?
            <li className="nav-item dropdown btn btn-warning dashboard-dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <MdOutlineSpaceDashboard />
              </a>
              <ul className="dropdown-menu">
                <li><Link className='export-read' to="/dashboard/category/read">Category</Link></li>
                <li><Link className='export-read' to="/dashboard/products/read">Products</Link></li>
                <li><Link className='export-read' to="/dashboard/news1/read">News</Link></li>
              </ul>
            </li> : ""}






          <div>
            {/* Button trigger modal */}
            <button type="button" className="button-icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <IoSearch className="icon" />
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <input onChange={e=>setKeyword(e.target.value)} type="text" className="form-control" placeholder="Enter product" />
                      <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>

                    <ul className="list-group">
                      {!keyword?"":fashion.filter(p=>p.title.toLocaleLowerCase().includes(keyword)).map((item)=>(
                               
                          <span  data-bs-dismiss="modal"  >
                         <Link onClick={()=>{}} to={`/shop/${slugify(item.title)}`} className="list-group-item"><img height={70} width={70} style={{objectFit:"contain"}} src={item.photo} alt=""/><span className='ms-4'>{item.title}</span></Link>
                         </span>
                                
                      ))}
                        {keyword && fashion.filter(p => p.title.toLocaleLowerCase().includes(keyword)).length === 0 && (
                        <li className="list-group-item">Not found product</li>
                      )}
                    </ul>


                  </div>
                </div>
              </div>
            </div>
          </div>




          {cookie['admintoken'] ? <MdLogin className='icon' onClick={() => {
            removeCookie('admintoken');
            swal('Logout is successfull!', '', 'success')
            setTimeout(() => {
              window.location.assign('/login')
            }, 2000)
          }}
          />
            : cookie['cookie-fashion'] ?
              <>
                <MdLogin className='icon' onClick={() => {
                  removeCookie('cookie-fashion');
                  swal('Logout is successfull!', '', 'success')
                  setTimeout(() => {
                    window.location.assign('/login')
                  }, 2000)
                }} />
                <Link className='name' to={`/account/${cookie['cookie-fashion']}`}>{localStorage.getItem('username')}</Link>
              </> : <NavLink to="/register"> <FaRegUser className='icon' /></NavLink>}




          {/* <NavLink to={`${!cookie['cookie-fashion'] ? "/login" : "/cart"}`} className="position-relative">
            <FiShoppingCart className='icon' />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0
            </span>
          </NavLink> */}

<NavLink to={`${!cookie['cookie-fashion'] ? "/login" : "/cart"}`} className="position-relative">
        <FiShoppingCart className='icon' />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {basket}
        </span>
      </NavLink>



          <NavLink to={`${!cookie['cookie-fashion'] ? "/login" : "/wishlist"}`}> <FaRegHeart className='icon' /></NavLink>
        </div>




      </div>
    </header>
  )
}


export default Header