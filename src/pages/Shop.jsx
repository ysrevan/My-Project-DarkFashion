// import React, { useContext, useEffect, useState } from 'react';
// import ShopCard from '../components/ShopCard';
// import ShopName from '../components/ShopName';
// import Animation from '../components/Animation'
// import { useAppSelector } from '../tools/store';
// import { useCookies } from 'react-cookie';
// import AOS from 'aos';
// import { ThemeContext } from '../context/ThemeContext';

// const Shop = () => {
//   const [filterdata,setFilterData] = useState([])
//   const fashion = useAppSelector((state) => state.fashion) ;
//   const category = useAppSelector((state) => state.category);
  
// const filterProduct = (category)=>{
//   const result = fashion.filter((p)=>p.category === category)
//   setFilterData(result)
  
// }

// const [cookie] = useCookies()
// console.log(cookie);



// useEffect(() => {
//   AOS.init({
//     duration: 1000, 
//   });
// }, []);

// const [theme,setTheme] =useContext(ThemeContext)
//   return (
//    <>
//  <ShopName/>
//   <div className={`dark-div ${theme === "light" ? "light" : "dark"}`}>
//   <div className = "shopcard">

// <div className='container'>



// <div data-aos="fade-down">
//     <div className="row">
//       <div className="filter-button mt-5">

//       {category.map((item) => (
//         <button className='filter' key={item.id} onClick={()=>{filterProduct(item.title)}}>{item.title}</button>
//       ))}


//       </div>
     
      
//       {
// filterdata.length === 0 ? (
//   fashion.map((item) => (
//     <ShopCard alldata={item} img={item.photo} title={item.title} price={item.price} category={item.category} key={item.id} />
//   ))
// ) : (
//   filterdata.map((item) => (
//     <ShopCard alldata={item}  img={item.photo} title={item.title} price={item.price} category={item.category} key={item.id} />
//   ))
// )
// }

    
//     </div>
//   </div>
   
//   </div>


// </div>
//   </div>

//     <Animation/>
//    </>
//   );
// };

// export default Shop;





import React, { useContext, useEffect, useState } from 'react';
import ShopCard from '../components/ShopCard';
import ShopName from '../components/ShopName';
import Animation from '../components/Animation';
import { useAppSelector } from '../tools/store';
import { useCookies } from 'react-cookie';
import AOS from 'aos';
import { ThemeContext } from '../context/ThemeContext';

const Shop = () => {
  const [filterData, setFilterData] = useState([]);
  const [sortedByPrice, setSortedByPrice] = useState(false);
  const fashion = useAppSelector((state) => state.fashion);
  const category = useAppSelector((state) => state.category);

  const filterProduct = (category) => {
    const result = fashion.filter((p) => p.category === category);
    setFilterData(result);
  };

  const [cookie] = useCookies();
  console.log(cookie);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [theme, setTheme] = useContext(ThemeContext);

  const sortProducts = () => {
    setSortedByPrice(!sortedByPrice);
  };

  const sortedFashion = [...fashion].sort((a, b) => sortedByPrice ? a.price - b.price : b.price - a.price);
  const sortedFilterData = [...filterData].sort((a, b) => sortedByPrice ? a.price - b.price : b.price - a.price);

  return (
    <>
      <ShopName />
      <div className={`dark-div ${theme === "light" ? "light" : "dark"}`}>
        <div className="shopcard">
          <div className='container'>
            <div data-aos="fade-down">
              <div className="row">
                <div className="filter-button mt-5">
                  {category.map((item) => (
                    <button className='filter' key={item.id} onClick={() => { filterProduct(item.title) }}>{item.title}</button>
                  ))}
                </div>
                <div className="sort-button mt-3">
                  <button className='price-sort' onClick={sortProducts}>
                  Sort by price {sortedByPrice ? "increasing" : "decreasing"}
                  </button>
                </div>
                {
                  filterData.length === 0 ? (
                    sortedFashion.map((item) => (
                      <ShopCard alldata={item} img={item.photo} title={item.title} price={item.price} category={item.category} key={item.id} />
                    ))
                  ) : (
                    sortedFilterData.map((item) => (
                      <ShopCard alldata={item} img={item.photo} title={item.title} price={item.price} category={item.category} key={item.id} />
                    ))
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Animation />
    </>
  );
};

export default Shop;

