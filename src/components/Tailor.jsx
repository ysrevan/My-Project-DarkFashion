import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AOS from 'aos';

const Tailor = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <div className='tailor'>
        <div className="container">
        <div data-aos="fade-up">
        <div className="tailor-text">
                <h5>TAILORS & DESIGNERS</h5>
                <h1>Our varied<br></br>
                 fashion business<br></br>
                 is value-driven</h1>
                 <p>Sollicitudin ac orci phasellus egestas tellus. Amet nisl<br></br>
                     purus in mollis nunc<br></br>
                     sed id. Cursus eget nunc scelerisque viverra mauris in aliquam.</p>
                     <button>BOOK YOUR TRAINERS</button>
            </div>
        </div>
            

            <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="card">
              <div className="card-picture">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/team-image-3a.webp" className="card-img-top" alt="..." />
              </div>
          
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-picture">
              <img src="https://eadn-wc04-11125113.nxedge.io/wp-content/uploads/2024/01/guy-blkshirt.webp" className="card-img-top" alt="..." />
              </div>
          
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
              <div className="card-picture">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/team-image-1.webp" className="card-img-top" alt="..." />
              </div>
          
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="card">
              <div className="card-picture">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/team-image-2.webp" className="card-img-top" alt="..." />
              </div>
          
            </div>
          </SwiperSlide>
       
        </Swiper>
        </div>
    </div>
  )
}

export default Tailor