import React, { useEffect } from 'react'
import AOS from 'aos';

const Custom = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <div className='custom'>
      <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/hotspot-background.webp" alt="" />
      <div className="custom-text">


         <div className="container">
         <div data-aos="fade-up" style={{overflow:"hidden"}}>
         <h6>SUPREME QUALITY</h6>
        <h1>Custom Made Men’s Suits</h1>
        <p>Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Nulla<br></br>
          facilisi cras fermentum odio eu. Nunc sed augue.</p>

         </div>
         

          <div className="custom-card">
    <div className="row">
        <div className="col-12 col-sm-6 col-md-6">
          <div className="card">
           <div className="photo-opacity">
           <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-3-1.webp" alt="" />
           </div>
            <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-11-4.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Double Breasted Blazer</h5>
              <p className="card-text">$8.00-$580.00</p>
              <a href="#" className="btn btn-primary">SELECT OPTIONS</a>
            </div>
          </div>

        </div>

        <div className="col-12 col-sm-6 col-md-6">
          <div className="card">
            <div className="photo-opacity">
            <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-4-3.webp" alt="" />
            </div>
            <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/fashion-1-shop-10-4.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Retro Style Blazer</h5>
              <p className="card-text">$8.00-$335.00</p>
              <a href="#" className="btn btn-primary">SELECT OPTIONS</a>
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

export default Custom



