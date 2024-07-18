import React, { useRef } from 'react'
import swal from 'sweetalert';
import { addfashion } from '../../../tools/slices/fashionSlice';
import { useAppDispatch } from '../../../tools/store'

const Create = () => {
  const titleRef = useRef(null)
  const photoRef = useRef(null)
  const priceRef = useRef(null)
  const categoryRef = useRef(null)
  const dispatch = useAppDispatch();
  const sendData =(e)=>{
    e.preventDefault();
    const title = titleRef.current.value 
    const photo = photoRef.current.value
    const price = priceRef.current.value
    const category = categoryRef.current.value
   if (!title||!photo||!category||!price) {
    swal("Please fill input","","warning")
   }else{
    dispatch(addfashion([{title,photo,category,price}]))
   }
  }
  return (
   <div className="productscreat-box">
     <div className='container'>
       <h1 className='productscreat-title' style={{textAlign:"center"}}>Create Products</h1>
        <div className="d-flex align-items-center justify-content-center">
         
<form className='col-6 mb-5' onSubmit={sendData}>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className="form-control" ref={titleRef} />
  </div>

  <div className="mb-3">
    <label  className="form-label">Photo</label>
    <input type="text" className="form-control" ref={photoRef} />
  </div>

  <div className="mb-3">
    <label  className="form-label">Category</label>
    <input type="text" className="form-control" ref={categoryRef} />
  </div>

  <div className="mb-3">
    <label  className="form-label">Price</label>
    <input type="text" className="form-control" ref={priceRef} />
  </div>

  <button type="submit" className="create-btn">Create</button>
</form>

        </div>
    </div>
   </div>
  )
}

export default Create