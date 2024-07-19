import React, { useContext, useEffect } from 'react'
import AOS from 'aos';
import { LangContext } from '../context/LangContext';
const Cool = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  const [lang,setLang] = useContext(LangContext)
  return (
    <div className='cool'>
      <div className='box'>
        <div className="photo">
        
        <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/09/cunter-lft-img-1.jpg" alt="" />

        </div>
        <div className="container">
          <div className='cool-text mx-3'>
            <div className="text-1">
            <div data-aos="fade-right">
            <h5>{lang==="EN"?"COOL LOOK":"GÖRÜNÜŞ"}</h5>
              <h1>{lang==="EN"?"We comprehend your style needs and create wonderful clothing":"Səni anlayırıq üslub tələb edir və yaradır gözəl geyim"}</h1>
            </div>
            </div>
            <div data-aos="fade-left">
            <div className="text-2">
              <p>Nulla pellentesque dignissim enim sit amet venenatis<br></br>
                urna. Laoreet non curabitur gravida arcu ac tortor <br></br>
                dignissim convallis aenean. Et netus et malesuada fames<br></br>
                enim diam.</p>
              <button>SHOP THE SALES</button>
            </div>
            </div>
          </div>

          <div className="picture">
            <div className="row g-5 mx-1">
              <div className="col-12 col-sm-6 col-md-6">
                <div className="card ">
                  <div className="card-body  grey-1">
                    <h1 className="card-title">49 +</h1>
                    <h4 className="card-subtitle mb-2 text-body-secondary">TAILORS</h4>

                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-6">
                <div className="card">
                  <div className="card-body grey-3">
                    <h1 className="card-title">21 M</h1>
                    <h4 className="card-subtitle mb-2 text-body-secondary">REVIEWS</h4>

                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-6">
                <div className="card">
                  <div className="card-body grey-4">
                    <h1 className="card-title">56 K</h1>
                    <h4 className="card-subtitle mb-2 text-body-secondary">BOOKINGS</h4>

                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-6">
                <div className="card">
                  <div className="card-body  grey-2">
                    <h1 className="card-title">774 +</h1>
                    <h4 className="card-subtitle mb-2 text-body-secondary">CLIENTS</h4>

                  </div>
                </div>
              </div>
            </div>


            <div className="two-picture mx-5">
              <div className="picture-1">
              <div data-aos="fade-left">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/rating-image-1a.webp" alt="" />
              </div>
              </div>
              <div className="picture-2 mt-3">
              <div data-aos="fade-left">
              <img src="https://darkfashion.wpengine.com/wp-content/uploads/2023/10/home-section-three-right-image-1.webp" alt=""/>

                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Cool