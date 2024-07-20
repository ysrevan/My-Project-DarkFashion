import React, { useContext, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AOS from 'aos';
import { LangContext } from '../context/LangContext';
import { Link } from 'react-router-dom';

const Tailor = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  const [lang,setLang] = useContext(LangContext)
  return (
    <div className='tailor'>
        <div className="container">
        <div data-aos="fade-up">
        <div className="tailor-text">
                <h5>{lang==="EN"?"TAILORS & DESIGNERS":"DƏRZİLƏR VƏ DİZAYNERLƏR"}</h5>
                <h1><span>{lang==="EN"?"Our varied":"Bizim müxtəlif"}</span><br></br>
                 <span>{lang==="EN"?"fashion business":"moda biznesimiz"}</span><br></br>
                {lang==="EN"?" is value-driven":"dəyər yönümlüdür"}</h1>
                 <p><span>{lang==="EN"?"Sollicitudin ac orci phasellus egestas tellus. Amet nisl":"Öz zövqünüuzə və modanıza"}</span><br></br>
                     <span>{lang==="EN"?"purus in mollis nunc":"uyğun olan"}</span><br></br>
                     {lang==="EN"?"sed id. Cursus eget nunc scelerisque viverra mauris in aliquam.":"təlimçilərinizi seçin."}</p>
                     <Link to="/shop"><button>{lang==="EN"?"BOOK YOUR TRAINERS":"TƏLİMÇİLƏRİNİZİ SİFARİŞ EDİN"}</button></Link>
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