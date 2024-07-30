import React, { useContext, useRef } from 'react'
import swal from 'sweetalert';
import { addnews1 } from '../../../tools/slices/news1Slice';
import { useAppDispatch } from '../../../tools/store'
import { LangContext } from '../../../context/LangContext'
import { ThemeContext } from '../../../context/ThemeContext';
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
  const [lang,setLang] = useContext(LangContext)
  const [theme,setTheme] = useContext(ThemeContext)
  return (
       <div className={`dark-div ${theme === "light"?"light":"dark"}`}>
        <div className="newscreate-box">
            <div className='container'>
       <h1 className='newscreate-title' style={{textAlign:"center"}}>{lang==="EN"?"Create News":"Xəbər Yaradın"}</h1>
        <div className="d-flex align-items-center justify-content-center">
         
<form className='col-6 mb-5' onSubmit={sendData}>
  <div className="mb-3">
    <label  className="form-label">{lang==="EN"?"Title":"Başlıq"}</label>
    <input type="text" className="form-control" ref={titleRef} />
  </div>

  <div className="mb-3">
    <label  className="form-label">{lang==="EN"?"Photo":"Şəkil"}</label>
    <input type="text" className="form-control" ref={imageRef} />
  </div>

  <div className="mb-3">
    <label  className="form-label">{lang==="EN"?"Day":"Gün"}</label>
    <input type="text" className="form-control" ref={dayRef} />
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