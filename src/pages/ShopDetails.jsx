import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../tools/store';
import slugify from 'slugify';


const ShopDetails = () => {
const {slug} = useParams()
const fashion = useAppSelector((state) => state.fashion) ;
const shopDetails = fashion.find(p=>slugify(p.title)===slug)

  return (
      <div className="details">
            <div className='container'>
        {fashion.length === 0?<h1>Loading...</h1>:

<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
<div className="col-10 col-sm-8 col-lg-6">
  <img src={shopDetails.photo} className="d-block mx-lg-auto img-fluid details-img" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
</div>
<div className="col-lg-6">
  <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 details-title">{shopDetails.title}</h1>
  <p className="lead ">{shopDetails.category}</p>
  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
    <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">${shopDetails.price}</button>
   
  </div>
</div>
</div>
        }

  

    </div>
      </div>
  )
}

export default ShopDetails