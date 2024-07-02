import React, { useState } from 'react';
import ShopCard from '../components/ShopCard';
import ShopName from '../components/ShopName';
import Animation from '../components/Animation'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../tools/store';
import { useCookies } from 'react-cookie';

const Shop = () => {
  const [filterdata,setFilterData] = useState([])
  const fashion = useAppSelector((state) => state.fashion) ;
  const category = useAppSelector((state) => state.category);
  
const filterProduct = (category)=>{
  const result = fashion.filter((p)=>p.category === category)
  setFilterData(result)
  
}

const [cookie] = useCookies()
console.log(cookie);

  return (
   <>
 <ShopName/>
  <div className="shopcard">

  <div className='container'>

{cookie["admintoken"] === "bruh84587v" ?
  <li className="nav-item dropdown btn btn-warning dashboard-dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dashboard
  </a>
  <ul className="dropdown-menu">
    <li><Link className='export-read' to="/dashboard/category/read">Category</Link></li>
    <li><Link className='export-read' to="/dashboard/products/read">Products</Link></li>
  </ul>
</li> : ""}


      <div className="row">
        <div className="filter-button mt-5">

        {category.map((item) => (
          <button className='filter' key={item.id} onClick={()=>{filterProduct(item.title)}}>{item.title}</button>
        ))}


        </div>
       
        
        {
  filterdata.length === 0 ? (
    fashion.map((item) => (
      <ShopCard img={item.photo} title={item.title} price={item.price} category={item.category} key={item.id} />
    ))
  ) : (
    filterdata.map((item) => (
      <ShopCard img={item.photo} title={item.title} price={item.price} category={item.category} key={item.id} />
    ))
  )
}

      
      </div>
     
    </div>

 
  </div>

    <Animation/>
   </>
  );
};

export default Shop;