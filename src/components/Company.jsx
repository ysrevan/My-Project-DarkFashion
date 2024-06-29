import React, { useEffect } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { RiScissorsFill } from "react-icons/ri";
import { GiSewingMachine } from "react-icons/gi";
import { PiYarnLight } from "react-icons/pi";
import { GiSewingNeedle } from "react-icons/gi";
import AOS from 'aos';

const Company = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <div className='company'>
      <div data-aos="fade-up">
      <div className='head'>
      <RiScissorsFill className='scissors mb-3'/> 
        <h5>GLOBAL BRAND</h5>
        <h1>Fashion & Design Company</h1>
    
      </div>
      </div>
     


  
          <div className="container  cards">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="card photo-1" >
              <RiScissorsFill className='scissors'/>                
              <div className="card-body">
                  <h3 className="card-title">Cutting-Edge Technology</h3>
                  <p className="card-text">Nec ullamcorper sit amet risus nullam eget felis eget nunc. Ultrices neque ornare aenean euismod elementum nisi eleifend.</p>
                  <button><MdArrowOutward /></button>
                </div>
              </div>
              </div>


              <div className="col-12 col-sm-6 col-md-3">
              <div className="card photo-2" >
              <PiYarnLight className='yarn'/>              
              <div className="card-body">
                  <h3 className="card-title">2500 Luxurious Fabrics</h3>
                  <p className="card-text">Duis tristique sollicitudin nibh sit amet. Cum sociis natoque penatibus et magnis dis parturient montes aliquet nascetur.</p>
                  <button><MdArrowOutward /></button>
                </div>
              </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
              <div className="card photo-3" >
              <GiSewingMachine className='machine'/>                 
              <div className="card-body">
                  <h3 className="card-title">Hand Stitched By Skilled Tailors</h3>
                  <p className="card-text">Scelerisque fermentum dui faucibus in ornare. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Consequat.</p>
                  <button><MdArrowOutward /></button>
                </div>
              </div>
              </div>

              <div className="col-12 col-sm-6 col-md-3">
              <div className="card photo-4" >
              <GiSewingNeedle className='rope'/>
                <div className="card-body">
                  <h3 className="card-title">Outstanding Structure & Shape</h3>
                  <p className="card-text">Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Cursus mattis molestie a iaculis orci at.Click Here</p>
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