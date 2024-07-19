import React, { useContext, useEffect } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { RiScissorsFill } from "react-icons/ri";
import { GiSewingMachine } from "react-icons/gi";
import { PiYarnLight } from "react-icons/pi";
import { GiSewingNeedle } from "react-icons/gi";
import AOS from 'aos';
import { LangContext } from '../context/LangContext';

const Company = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  const [lang,setLang] = useContext(LangContext)
  return (
    <div className='company'>
      <div data-aos="fade-up">
      <div className='head'>
      <RiScissorsFill className='scissors mb-3'/> 
        <h5>{lang==="EN"?"GLOBAL BRAND":"QLOBAL BREND"}</h5>
        <h1>{lang==="EN"?"Fashion & Design Company":"Moda və Dizayn Şirkəti"}</h1>
    
      </div>
      </div>
     


  
          <div className="container  cards">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="card photo-1" >
              <RiScissorsFill className='scissors'/>                
              <div className="card-body">
                  <h3 className="card-title">{lang==="EN"?"Cutting-Edge Technology":"Ən qabaqcıl texnologiya"}</h3>
                  <p className="card-text">{lang==="EN"?"Nec ullamcorper sit amet risus nullam eget felis eget nunc. Ultrices neque ornare aenean euismod elementum nisi eleifend.":"Ən qabaqcıl və yeni texnologiyalar ilə sizin xidmətinizdəyik."}</p>
                  <button><MdArrowOutward /></button>
                </div>
              </div>
              </div>


              <div className="col-12 col-sm-6 col-md-3">
              <div className="card photo-2" >
              <PiYarnLight className='yarn'/>              
              <div className="card-body">
                  <h3 className="card-title">{lang==="EN"?"2500 Luxurious Fabrics":"2500 dəbdəbəli parçalar"}</h3>
                  <p className="card-text">{lang==="EN"?"Duis tristique sollicitudin nibh sit amet. Cum sociis natoque penatibus et magnis dis parturient montes aliquet nascetur.":"Müxtəlif rəng və çeşiddə olan dəbdəbəli parçalar ilə sizin xidmətinizdəyik."}</p>
                  <button><MdArrowOutward /></button>
                </div>
              </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
              <div className="card photo-3" >
              <GiSewingMachine className='machine'/>                 
              <div className="card-body">
                  <h3 className="card-title">{lang==="EN"?"Hand Stitched By Skilled Tailors":"Bacarıqlı Dərzilər Tərəfindən Əl Tikişi"}</h3>
                  <p className="card-text">{lang==="EN"?"Scelerisque fermentum dui faucibus in ornare. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Consequat.":"Bacarıqlı dərzilərimiz öz gözəl əl işləri ilə sizin xidmətinizdədir."}</p>
                  <button><MdArrowOutward /></button>
                </div>
              </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
              <div className="card photo-4" >
              <GiSewingNeedle className='rope'/>
                <div className="card-body">
                  <h3 className="card-title">{lang==="EN"?"Outstanding Structure & Shape":"Görkəmli Struktur və Forma"}</h3>
                  <p className="card-text">{lang==="EN"?"Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Cursus mattis molestie a iaculis orci at.Click Here":"Hazırladığımız hər bir məhsul görkəmli struktur və forması ilə seçilir."}</p>
                  <button><MdArrowOutward /></button>
                </div>
              </div>
              </div>

           

           
          </div>
        </div>
    </div>
  )
}

export default Company 