import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { editnews1 } from '../../../tools/slices/news1Slice';
import { useAppDispatch, useAppSelector } from '../../../tools/store'

const Update = () => {
  const {id} = useParams();
  const news1data = useAppSelector(p=>p.news1);
  const news1uni = news1data.find(p=>p.id.toString() === id)
  const [title,setTitle] = useState(!news1uni?"":news1uni.title);
  const [image,setimage] = useState(!news1uni?"":news1uni.image);
  const [day,setday] = useState(!news1uni?"":news1uni.day);
  const dispatch = useAppDispatch();
  const sendData =(e)=>{
    e.preventDefault();
   
   if (!title||!image||!day) {
    swal("Please fill input","","warning")
   }else{
    dispatch(editnews1({id:news1uni.id,data:[{title,image,day}]}))
   }
  }
  return (
      <div className="newsedit-box">
         <div className='container'>
       <h1 className='newsedit-title' style={{textAlign:"center"}}>Edit News</h1>
        <div className="d-flex align-items-center justify-content-center">
         
<form className='col-6 mb-5' onSubmit={sendData}>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className="form-control" 
   onChange={e=>setTitle(e.target.value)}
    value={title}/>
  </div>

  <div className="mb-3">
    <label  className="form-label">Image</label>
    <input type="text" className="form-control" 
   onChange={e=>setimage(e.target.value)}
    value={image}/>
  </div>


  <div className="mb-3">
    <label  className="form-label">Day</label>
    <input type="text" className="form-control" 
   onChange={e=>setday(e.target.value)}
    value={day}/>
  </div>


  <button type="submit"  className="edit-btn">Edit</button>
</form>

        </div>
    </div>
      </div>
  )
}

export default Update