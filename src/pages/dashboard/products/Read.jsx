import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletefashion } from '../../../tools/slices/fashionSlice';
import { useAppSelector } from '../../../tools/store';
import Animation from '../../../components/Animation'
import ProductsReadName from '../../../components/ProductsReadName';
import { LangContext } from '../../../context/LangContext';
const Read = () => {
  const dispatch = useDispatch(); 
  const fashion = useAppSelector((state) => state.fashion); 

  const handleDelete = (id) => {
    dispatch(deletefashion({ id }));
  };
  const [lang,setLang] = useContext(LangContext)
  return (
<>
<ProductsReadName/>
<div className="productsread-box">
     <div className='container'>
      
      <Link to="/dashboard/products/Create"><button className='productscategory mt-3 mb-3'>{lang==="EN"?"Create Products":"Məhsul Yaradın"}</button></Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{lang==="EN"?"Title":"Başlıq"}</th>
            <th scope="col">{lang==="EN"?"Photo":"Şəkil"}</th>
            <th scope="col">{lang==="EN"?"Category":"Kateqoriya"}</th>
            <th scope="col">{lang==="EN"?"Price":"Qiymət"}</th>
            <th scope="col">{lang==="EN"?"Edit":"Yenilə"}</th>
            <th scope="col">{lang==="EN"?"Delete":"Sil"}</th>
          </tr>
        </thead>
        <tbody>
          {fashion.map((item, c) => (
            <tr key={item.id}>
              <th scope="row">{c + 1}</th>
              <td>{item.title}</td>
              <td>
                <img src={item.photo} alt="" style={{width:"90px"}}/>
              </td>
              <td>{item.category}</td>
              <td>${item.price}</td>
              <td>
              <Link to={`/dashboard/products/update/${item.id}`}><button className="edit-btn">{lang==="EN"?"Edit":"Yenilə"}</button></Link>
              </td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>{lang==="EN"?"Delete":"Sil"}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
   <Animation/>
</>
  );
};

export default Read;
