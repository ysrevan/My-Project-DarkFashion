import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import HomeCard from '../components/HomeCard';
import supabase from '../config/connect';


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
    // Burada sifarişi təsdiq edən kodu yazın

    // Tövsiyə olunan məhsulları əldə edin (demo məqsədilə təsadüfi məhsullar əlavə edilir)
    const { data } = await supabase.from('products').select().limit(3);
    setRecommendedProducts(data);
  };

  return (
    <div className='checkout-page'>
      <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Kart Nömrəsi:</label>
          <input type="text" name="cardNumber" value={cardDetails.cardNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Bitmə Tarixi:</label>
          <input type="text" name="expiryDate" value={cardDetails.expiryDate} onChange={handleChange} required />
        </div>
        <div>
          <label>CVV:</label>
          <input type="text" name="cvv" value={cardDetails.cvv} onChange={handleChange} required />
        </div>
        <button type="submit">Complete Order</button>
      </form>
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      {recommendedProducts.length > 0 && (
        <div className='row'>
          <h3>Tövsiyə Olunan Məhsullar</h3>
          {home.map((item)=>(
         <HomeCard title={item.title} photo={item.photo} price={item.price} key={item.id}/>
       ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default Checkout;
