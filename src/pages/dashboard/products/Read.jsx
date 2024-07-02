import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletefashion } from '../../../tools/slices/fashionSlice';
import { useAppSelector } from '../../../tools/store';
import Animation from '../../../components/Animation'
import ProductsReadName from '../../../components/ProductsReadName';
const Read = () => {
  const dispatch = useDispatch(); 
  const fashion = useAppSelector((state) => state.fashion); 

  const handleDelete = (id) => {
    dispatch(deletefashion({ id }));
  };

  return (
<>
<ProductsReadName/>
<div className="productsread-box">
     <div className='container'>
      
      <Link to="/dashboard/products/Create"><button className='productscategory mt-3 mb-3'>Create Products</button></Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Photo</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
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
              <Link to={`/dashboard/products/update/${item.id}`} className="btn btn-warning">Edit</Link>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
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
