import React, { useContext, useRef } from 'react'
import swal from 'sweetalert';
import { addfashion } from '../../../tools/slices/fashionSlice';
import { useAppDispatch } from '../../../tools/store'
import { LangContext } from '../../../context/LangContext'
import { ThemeContext } from '../../../context/ThemeContext';
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
  const [lang,setLang] = useContext(LangContext)
  const [theme,setTheme] = useContext(ThemeContext)
  return (
     <div className={`dark-div ${theme === "light"?"light":"dark"}`}>
      <div className="productscreat-box">
     <div className='container'>
       <h1 className='productscreat-title' style={{textAlign:"center"}}>{lang==="EN"?"Create Products":"Məhsul Yaradın"}</h1>
        <div className="d-flex align-items-center justify-content-center">
         
<form className='col-6 mb-5' onSubmit={sendData}>
  <div className="mb-3">
    <label  className="form-label">{lang==="EN"?"Title":"Başlıq"}</label>
    <input type="text" className="form-control" ref={titleRef} />
  </div>

  <div className="mb-3">
    <label  className="form-label">{lang==="EN"?"Photo":"Şəkil"}</label>
    <input type="text" className="form-control" ref={photoRef} />
  </div>

  <div className="mb-3">
    <label  className="form-label">{lang==="EN"?"Category":"Kateqoriya"}</label>
    <input type="text" className="form-control" ref={categoryRef} />
  </div>

  <div className="mb-3">
    <label  className="form-label">{lang==="EN"?"Price":"Qiymət"}</label>
    <input type="text" className="form-control" ref={priceRef} />
  </div>

  <button type="submit" className="create-btn">{lang==="EN"?"Create":"Yarat"}</button>
</form>

        </div>
    </div>
   </div>
     </div>
  )
}

export default Create