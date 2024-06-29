import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../components/Carousel';
import Company from '../components/Company';
import Cool from '../components/Cool';
import Custom from '../components/Custom';
import HomeCard from '../components/HomeCard';
import Photo from '../components/Photo';
import Positive from '../components/Positive';
import Preloader from '../components/Preloader';
import Service from '../components/Service';
import Youtube from '../components/Youtube';
import AOS from 'aos';
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData(['hello']);
    }, 3000);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  const home = useSelector((state)=> state.home)
  return (
    <>
      {data.length === 0 ? (<Preloader/>) : (
        <>
        <Carousel/>
        <Company/>
        <Cool/>
      <div className="homecard">
      <div className="container">

     
      <div className="homecard-text">
       <h5>RECENT PRODUCTS</h5>
       <h1>Enduringly Stylish Materials</h1>
      </div>
      <div data-aos="fade-down">
        <div className="row">
        {home.map((item)=>(
         <HomeCard title={item.title} photo={item.photo} price={item.price} key={item.id}/>
       ))}
        </div>
      </div>
     
       </div>
      </div>
        <Youtube/>
        <Custom />
        <Positive/>
        <Service/>
        <Photo /> 
        </>
      )}
      
       </>  
        
      
    
  );
}

export default Home;

