import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { editfashion } from '../../../tools/slices/fashionSlice';
import { useAppDispatch, useAppSelector } from '../../../tools/store'

const Update = () => {
  const {id} = useParams();
  const fashiondata = useAppSelector(p=>p.fashion);
  const fashionuni = fashiondata.find(p=>p.id.toString() === id)
  const [title,setTitle] = useState(!fashionuni?"":fashionuni.title);
  const [photo,setPhoto] = useState(!fashionuni?"":fashionuni.photo);
  const [category,setCategory] = useState(!fashionuni?"":fashionuni.category);
  const [price,setPrice] = useState(!fashionuni?"":fashionuni.price);
  const dispatch = useAppDispatch();
  const sendData =(e)=>{
    e.preventDefault();
   
   if (!title||!photo||!category||!price) {
    swal("Please fill input","","warning")
   }else{
    dispatch(editfashion({id:fashionuni.id,data:[{title,photo,category,price}]}))
   }
  }
  return (
    <div className='container'>
       <h1 style={{textAlign:"center"}}>Edit Products</h1>
        <div className="d-flex align-items-center justify-content-center">
         
<form className='col-6 mb-5' onSubmit={sendData}>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className="form-control" 
   onChange={e=>setTitle(e.target.value)}
    value={title}/>
  </div>

  <div className="mb-3">
    <label  className="form-label">Photo</label>
    <input type="text" className="form-control" 
   onChange={e=>setPhoto(e.target.value)}
    value={photo}/>
  </div>

  <div className="mb-3">
    <label  className="form-label">Category</label>
    <input type="text" className="form-control" 
   onChange={e=>setCategory(e.target.value)}
    value={category}/>
  </div>

  <div className="mb-3">
    <label  className="form-label">Price</label>
    <input type="text" className="form-control" 
   onChange={e=>setPrice(e.target.value)}
    value={price}/>
  </div>

  <button type="submit" className="btn btn-primary">Edit</button>
</form>

        </div>
    </div>
  )
}

export default Update