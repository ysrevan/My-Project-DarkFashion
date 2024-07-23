import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CheckoutName from '../components/CheckoutName';
import Animation from '../components/Animation';
import HomeCard from '../components/HomeCard';
import supabase from '../config/connect';
import AOS from 'aos';
import swal from 'sweetalert';
import { LangContext } from '../context/LangContext';

const Checkout = () => {
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0;
  const home = useSelector((state)=> state.home)
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const handleChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await supabase.from('products').select().limit(3);
    setRecommendedProducts(data);
    swal("Order completed!","","success")
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  const [lang,setLang] = useContext(LangContext)

  return (
   <>
    <CheckoutName/>
    <div className='checkout-page'>
      <div className="container">
     


<form onSubmit={handleSubmit}  className="col-6 checkout-form ">
 
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">{lang==="EN"?"Card Number":"Kart Nömrəsi"}</label>
    <input type="text" className="form-control" name="cardNumber" value={cardDetails.cardNumber} onChange={handleChange} required />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">{lang==="EN"?"Expiration Date":"Bitmə Tarixi"}</label>
    <input type="text" className="form-control"  name="expiryDate" value={cardDetails.expiryDate} onChange={handleChange} required  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">CVV</label>
    <input type="text" className="form-control" name="cvv" value={cardDetails.cvv} onChange={handleChange} required  />
  </div>
  <button type="submit" className="complete-btn">{lang==="EN"?"Complete Order":"Sifarişi Tamamla"}</button>
</form>



<h3 className='total-price ' style={{textAlign:"center"}}>{lang==="EN"?"Total Price: ":"Ümumi Qiymət: "}{totalPrice.toFixed(2)}</h3>


      
     
      <div data-aos="fade-down">
      {recommendedProducts.length > 0 && (
        <div className='row'>
          <h3 className='recommended-products' >{lang==="EN"?"Recommended Products":"Tövsiyə olunan Məhsullar"}</h3>
          {home.map((item)=>(
         <HomeCard title={item.title} photo={item.photo} price={item.price} key={item.id}/>
       ))}
        </div>
      )}
      </div>
      </div>
      
    </div>
    <Animation/>
   </>
  );
};

export default Checkout;
