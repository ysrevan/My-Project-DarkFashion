import React from 'react';
import { FaHeart } from "react-icons/fa";

const ShopCard = ({img, title, category, price }) => {
 
  return (
    <div className="col-12 col-sm-6 col-md-3 mt-5 mb-5">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body text-center d-flex flex-column justify-content-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{category}</p>
          <p className="card-text">${price}</p>
          <button className='wishlist-button mb-3'><FaHeart className='heart' /></button>
          <button href="#" className="cart-button" >ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
