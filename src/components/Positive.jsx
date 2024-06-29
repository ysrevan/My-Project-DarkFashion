import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import AOS from 'aos';
import { FaStar } from 'react-icons/fa6';

const Positive = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  

  return (
    <div className='positive'>
      <div className="container">
      <div data-aos="fade-up">
      <div className="positive-text">
          <h5>REVIEW & RATINGS</h5>
          <h1>Positive<br /> Customers<br /> Feedback</h1>
          <p>Pretium lectus quam id leo in. In massa tempor<br />
            nec feugiat nisl pretium fusce. Libero enim sed<br /> 
            faucibus turpis in eu mi bibendum neque. Eget<br />
            duis at tellus at urna.</p>
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
                <p className="card-text">Dignissim sodales ut eu sem<br></br>
                integer vitae. Curabitur<br></br>
                gravida arcu ac tortor. Est sit<br></br>
                amet facilisis magna etiam<br></br>
                tempor orci eu.</p>
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
                <p className="card-text">Commodo ullamcorper a<br></br>
                lacus vestibulum sed arcu<br></br>
                non. Vulputate dignissim<br></br>
                suspendisse in est ante in.</p>
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
                <p className="card-text">Viverra justo nec ultricse<br></br>
                dui sapien eget. Hendrerit<br></br>
                gravida rutrum quisque non<br></br>
                tellus orci ac. Vel fringilla<br></br>
                est ullamcorper</p>
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
                <p className="card-text">Ultrices eros in cursus<br></br>
                turpis.Aliquet enim tortor at<br></br>
                auctor urna.Non blandit<br></br>
                massa enim nec dui nunc<br></br>
                mattis Est pellentesque.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> 
  
      </div>
    </div>
  );
}

export default Positive;







// import React, { useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import AOS from 'aos';
// import { FaStar } from 'react-icons/fa6';



// const Positive = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className='positive'>
//       <div className="container">
//         <div data-aos="fade-up">
//           <div className="positive-text">
//             <h5>REVIEW & RATINGS</h5>
//             <h1>Positive<br /> Customers<br /> Feedback</h1>
//             <p>Pretium lectus quam id leo in. In massa tempor<br />
//               nec feugiat nisl pretium fusce. Libero enim sed<br /> 
//               faucibus turpis in eu mi bibendum neque. Eget<br />
//               duis at tellus at urna.</p>
//           </div>
//         </div>
//         <Slider {...settings}>
//           <div>
//             <div className="card positive-1">
//               <div className="card-picture">
//                 <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-3.webp" className="card-img-top" alt="..." />
//                 <div className="card-star">
//                   <h5 className="card-title">Karl Leonardo</h5>
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                 </div>
//               </div>
//               <div className="card-body">
//                 <p className="card-text">Dignissim sodales ut eu sem<br /> integer vitae. Curabitur<br /> gravida arcu ac tortor. Est sit<br /> amet facilisis magna etiam<br /> tempor orci eu.</p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="card positive-1">
//               <div className="card-picture">
//                 <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-4.webp" className="card-img-top" alt="..." />
//                 <div className="card-star">
//                   <h5 className="card-title">Georg Renzo</h5>
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                 </div>
//               </div>
//               <div className="card-body">
//                 <p className="card-text">Commodo ullamcorper a<br /> lacus vestibulum sed arcu<br /> non. Vulputate dignissim<br /> suspendisse in est ante in.</p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="card positive-1">
//               <div className="card-picture">
//                 <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-2.webp" className="card-img-top" alt="..." />
//                 <div className="card-star">
//                   <h5 className="card-title">Floriana Inga</h5>
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                 </div>
//               </div>
//               <div className="card-body">
//                 <p className="card-text">Viverra justo nec ultricse<br /> dui sapien eget. Hendrerit<br /> gravida rutrum quisque non<br /> tellus orci ac. Vel fringilla<br /> est ullamcorper</p>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="card positive-1">
//               <div className="card-picture">
//                 <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-testimonial-1.webp" className="card-img-top" alt="..." />
//                 <div className="card-star">
//                   <h5 className="card-title">Britta Cornelia</h5>
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                   <FaStar className='star' />
//                 </div>
//               </div>
//               <div className="card-body">
//                 <p className="card-text">Ultrices eros in cursus<br /> turpis. Aliquet enim tortor at<br /> auctor urna. Non blandit<br /> massa enim nec dui nunc<br /> mattis Est pellentesque.</p>
//               </div>
//             </div>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Positive;
