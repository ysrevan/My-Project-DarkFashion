import React, { useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import AOS from 'aos';
import { FaStar } from 'react-icons/fa6';
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';

const Positive = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  
  const [lang,setLang] = useContext(LangContext)
  const [theme,setTheme] = useContext(ThemeContext)
  return (
    <div className={`dark-div ${theme === "light" ? "light" : ""}`}>
      <div className='positive'>
      <div className="container">
      <div data-aos="fade-up">
      <div className="positive-text">
          <h5>{lang==="EN"?"REVIEW & RATINGS":"ŞƏRHLƏR VƏ REYTİNQLƏR"}</h5>
          <h1><span>{lang==="EN"?"Positive":"Müsbət"}</span><br /><span>{lang==="EN"?"Customers":"Müştərilər"}</span><br /><span>{lang==="EN"?"Feedback":"Əlaqə"}</span></h1>
          <p><span>{lang==="EN"?"Pretium lectus quam id leo in. In massa tempor":"Müştərilərlə müsbət"}</span><br />
            <span>{lang==="EN"?"nec feugiat nisl pretium fusce. Libero enim sed":"əlaqə"}</span><br /> 
            <span>{lang==="EN"?"faucibus turpis in eu mi bibendum neque. Eget":"bizim işimizin keyfiyyətidir."}</span><br /></p>
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
            <div className="card postive-1">
              <div className="card-picture">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-3.webp" className="card-img-top" alt="..." />
              <div className="card-star">
              <h5 className="card-title">Karl Leonardo</h5>
              <FaStar className='star'/>
              <FaStar className='star'/>
              <FaStar className='star'/>
              <FaStar className='star'/>
              <FaStar className='star'/>
              </div>
              </div>
              <div className="card-body">
                <p className="card-text"><span>{lang==="EN"?"Dignissim sodales ut eu sem":"İşçilərimiz müştərilərin ehtiyaclarını "}</span><br></br>
                <span>{lang==="EN"?"integer vitae. Curabitur":"anlamaq və onlara ən yaxşı xidməti"}</span><br></br>
                <span>{lang==="EN"?"gravida arcu ac tortor. Est sit":" göstərmək üçün hər zaman diqqətli"}</span><br></br>
                {lang==="EN"?"amet facilisis magna etiam":"və anlayışlı davranırlar."}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card  postive-1">
            <div className="card-picture">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-4.webp" className="card-img-top" alt="..." />
              <div className="card-star">
              <h5 className="card-title">Georg Renzo</h5>
              <FaStar className='star'/>
              <FaStar className='star'/>
              <FaStar className='star'/>
              <FaStar className='star'/>
              <FaStar className='star'/>
              </div>
              </div>
              <div className="card-body">
                <p className="card-text"><span>{lang==="EN"?"Commodo ullamcorper a":"Müştərilərin məmnuniyyətini prioritet "}</span><br></br>
                <span>{lang==="EN"?"lacus vestibulum sed arcu":"tutan işçilərimiz, hər bir müştəriyə"}</span><br></br>
                <span>{lang==="EN"?"non. Vulputate dignissim":" fərdi yanaşma göstərərək uzunmüddətli "}</span><br></br>
               {lang==="EN"?"suspendisse in est ante in.":"əlaqələr qururlar."}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card  postive-1">
            <div className="card-picture">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-2.webp" className="card-img-top" alt="..." />
              <div className="card-star">
              <h5 className="card-title">Floriana Inga</h5>
              <FaStar className='star'/>
              <FaStar className='star'/>
              <FaStar className='star'/>
              <FaStar className='star'/>
              <FaStar className='star'/>
              </div>
              </div>
              <div className="card-body">
                <p className="card-text"><span>{lang==="EN"?"Viverra justo nec ultricse":"Peşəkar işçilərimiz, müştərilərdən gələn"}</span><br></br>
                <span>{lang==="EN"?"dui sapien eget. Hendrerit":"rəyləri diqqətlə dinləyərək, xidmətlərimizi"}</span><br></br>
                <span>{lang==="EN"?"gravida rutrum quisque non":"davamlı olaraq təkmilləşdirir "}</span><br></br>
                {lang==="EN"?"tellus orci ac. Vel fringilla":"və inkişaf etdirirlər."}</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card  postive-1">
            <div className="card-picture">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-1.webp" className="card-img-top" alt="..." />
              <div className="card-star">
              <h5 className="card-title">Britta Cornelia</h5>
              <FaStar className='star'/>
              <FaStar className='star'/>
              <FaStar className='star'/>
              <FaStar className='star'/>
              <FaStar className='star'/>
              </div>
              </div>
              <div className="card-body">
                <p className="card-text"><span>{lang==="EN"?"Ultrices eros in cursus":"Komandamızın hər bir üzvü,"}</span><br></br>
                <span>{lang==="EN"?"turpis.Aliquet enim tortor at":"müştərilərlə əlaqəni gücləndirmək"}</span><br></br>
                <span>{lang==="EN"?"auctor urna.Non blandit":"üçün öz sahəsində yüksək bilik "}</span><br></br>
                {lang==="EN"?"massa enim nec dui nunc":"və təcrübəyə sahibdir."}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> 
  
      </div>
    </div>
  </div>
  );
}

export default Positive;