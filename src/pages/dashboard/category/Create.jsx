import React, { useRef } from 'react'
import swal from 'sweetalert';
import { addcategory } from '../../../tools/slices/categorySlice';
import { useAppDispatch } from '../../../tools/store'

const Create = () => {
  const titleRef = useRef(null)
  const dispatch = useAppDispatch();
  const sendData =(e)=>{
    e.preventDefault();
    const title = titleRef.current.value 
   if (!title) {
    swal("Please fill input","","warning")
   }else{
    dispatch(addcategory([{title}]))
   }
  }
  return (
<div className="categorycreat-box">
<div className='container'>
       <h1 className='categorycreat-title' style={{textAlign:"center"}}>Create Category</h1>
        <div className="d-flex align-items-center justify-content-center">
         
<form className='col-6 mb-5' onSubmit={sendData}>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className="form-control" ref={titleRef} />
  </div>

  <button type="submit" className="create-btn">Create</button>
</form>

        </div>
    </div>
</div>
  )
}

export default Create