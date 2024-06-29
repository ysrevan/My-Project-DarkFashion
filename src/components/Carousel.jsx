import React from 'react'

const Carousel = () => {
  return (
    
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row g-0">
            <div className="col-6">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-1-a.webp" className="d-block w-100" alt="Slide 1A" />
            </div>
            <div className="col-6">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-1-b.webp" className="d-block w-100" alt="Slide 1B" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row g-0">
            <div className="col-6">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-2-a.webp" className="d-block w-100" alt="Slide 2A" />
            </div>
            <div className="col-6">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-2-b.webp" className="d-block w-100" alt="Slide 2B" />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row g-0">
            <div className="col-6">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-3-a.webp" className="d-block w-100" alt="Slide 3A" />
            </div>
            <div className="col-6">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/slider-3-b.webp" className="d-block w-100" alt="Slide 3B" />
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev custom-control" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon custom-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next custom-control" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon custom-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  
  )
}

export default Carousel



