import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { LangContext } from '../../../context/LangContext';
import { ThemeContext } from '../../../context/ThemeContext';
import { editcategory } from '../../../tools/slices/categorySlice';
import { useAppDispatch, useAppSelector } from '../../../tools/store'

const Update = () => {
  const {id} = useParams();
  const categorydata = useAppSelector(p=>p.category);
  const categoryuni = categorydata.find(p=>p.id.toString() === id)
  const [title,setTitle] = useState(!categoryuni?"":categoryuni.title);
  const dispatch = useAppDispatch();
  const sendData =(e)=>{
    e.preventDefault();
   if (!title) {
    swal("Please fill input","","warning")
   }else{
    dispatch(editcategory({id:categoryuni.id,data:[{title}]}))
   }
  }
  const [lang,setLang] = useContext(LangContext)
  const [theme,setTheme] = useContext(ThemeContext)
  return (
     <div className={`dark-div ${theme === "light"?"light":"dark"}`}>
      <div className="categoryedit-box">
     <div className='container'>
       <h1 className='categoryedit-title' style={{textAlign:"center"}}>{lang==="EN"?"Edit Category":"Kateqoriyanı Yenilə"}</h1>
        <div className="d-flex align-items-center justify-content-center">
         
<form className='col-6 mb-5' onSubmit={sendData}>
  <div className="mb-3">
    <label  className="form-label">{lang==="EN"?"Title":"Başlıq"}</label>
    <input type="text" className="form-control" 
   onChange={e=>setTitle(e.target.value)}
    value={title}/>
  </div>

  <button type="submit" className="edit-btn">{lang==="EN"?"Edit":"Yenilə"}</button>
</form>

        </div>
    </div>
 </div>

     </div>
  )
}

export default Update