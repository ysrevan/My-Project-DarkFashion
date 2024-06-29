import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
const Service = () => {
  return (
    <div className='service'>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
    <CiDeliveryTruck className='truck'/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">SHIPPING</h5>
        <p className="card-text">Free Shipping<br></br> World wide</p>
      </div>
    </div>
  </div>
</div>

                </div>


                <div className="col-12 col-sm-6 col-md-3">
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
    <BsTelephone className='telephone'/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">HASSLE FREE</h5>
        <p className="card-text">24*7 Customer<br></br> Support</p>
      </div>
    </div>
  </div>
</div>

                </div>



                <div className="col-12 col-sm-6 col-md-3">
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
    <BsBox  className='box'/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">30 DAYS</h5>
        <p className="card-text">Free & Easy Returns</p>
      </div>
    </div>
  </div>
</div>

                </div>


                <div className="col-12 col-sm-6 col-md-3">
  <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
    <IoCartOutline className="cart"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">SECURED</h5>
        <p className="card-text">Quick Check Out Process</p>
      </div>
    </div>
  </div>
</div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Service