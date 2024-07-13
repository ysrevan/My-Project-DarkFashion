import React, { useRef } from 'react'
import swal from 'sweetalert';
import { addnews1 } from '../../../tools/slices/news1Slice';
import { useAppDispatch } from '../../../tools/store'

const Create = () => {
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const dayRef = useRef(null)
  const dispatch = useAppDispatch();
  const sendData =(e)=>{
    e.preventDefault();
    const title = titleRef.current.value 
    const image = imageRef.current.value
    const day = dayRef.current.value
   if (!title||!image||!day) {
    swal("Please fill input","","warning")
   }else{
    dispatch(addnews1([{title,image,day}]))
   }
  }
  return (
    <div className='container'>
       <h1 style={{textAlign:"center"}}>Create News</h1>
        <div className="d-flex align-items-center justify-content-center">
         
<form className='col-6 mb-5' onSubmit={sendData}>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className="form-control" ref={titleRef} />
  </div>

  <div className="mb-3">
    <label  className="form-label">Photo</label>
    <input type="text" className="form-control" ref={imageRef} />
  </div>

  <div className="mb-3">
    <label  className="form-label">Day</label>
    <input type="text" className="form-control" ref={dayRef} />
  </div>

  

  <button type="submit" className="btn btn-primary">Create</button>
</form>

        </div>
    </div>
  )
}

export default Create