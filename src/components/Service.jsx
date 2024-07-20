import React, { useContext } from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { LangContext } from '../context/LangContext';
const Service = () => {
  const [lang,setLang] = useContext(LangContext)
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
        <h5 className="card-title">{lang==="EN"?"SHIPPING":"GÖNDƏRMƏ"}</h5>
        <p className="card-text"><span>{lang==="EN"?"Free Shipping":"Dünya boyu"}</span><br></br><span>{lang==="EN"?" World wide":"pulsuz çatdırılma"}</span></p>
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
        <h5 className="card-title">{lang==="EN"?"HASSLE FREE":"PULSUZ ZƏNGLƏR"}</h5>
        <p className="card-text"><span>{lang==="EN"?"24*7 Customer":"24*7 Müştəri"}</span><br></br>{lang==="EN"?"Support":"Dəstəyi"}</p>
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
        <h5 className="card-title">{lang==="EN"?"30 DAYS":"30 GÜN"}</h5>
        <p className="card-text">{lang==="EN"?"Free & Easy Returns":"Pulsuz və Asan Qaytarmalar"}</p>
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
        <h5 className="card-title">{lang==="EN"?"SECURED":"TƏHLÜKƏSİZ"}</h5>
        <p className="card-text">{lang==="EN"?"Quick Check Out Process":"Tez Çıxış Prosesi"}</p>
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