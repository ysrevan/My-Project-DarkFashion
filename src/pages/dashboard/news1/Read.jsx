import React from 'react'
import Animation from '../../../components/Animation'
import NewsReadName from '../../../components/NewsReadName'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../tools/store';
import { Link } from 'react-router-dom';
import { deletenews1 } from '../../../tools/slices/news1Slice';
import { useContext } from 'react';
import { LangContext } from '../../../context/LangContext';
import { ThemeContext } from '../../../context/ThemeContext';
const Read = () => {

  const dispatch = useDispatch(); 
  const news1 = useAppSelector((state) => state.news1); 

  const handleDelete = (id) => {
    dispatch(deletenews1({ id }));
  };

  const [lang,setLang] = useContext(LangContext)
  const [theme,setTheme] = useContext(ThemeContext)
  return (
    <>
    <NewsReadName/>
      

     <div className={`dark-div ${theme === "light"?"light":"dark"}`}>
     <div className="newsread-box">
      <div className='container'>
    <Link to="/dashboard/news1/Create"><button className='productscategory mt-3 mb-3'>{lang==="EN"?"Create News":"Xəbər Yarat"}</button></Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{lang==="EN"?"Title":"Başlıq"}</th>
            <th scope="col">{lang==="EN"?"Day":"Gün"}</th>
            <th scope="col">{lang==="EN"?"Photo":"Şəkil"}</th>
            <th scope="col">{lang==="EN"?"Edit":"Yenilə"}</th>
            <th scope="col">{lang==="EN"?"Delete":"Sil"}</th>
          </tr>
        </thead>
        <tbody>
          {news1.map((item, c) => (
            <tr key={item.id}>
              <th scope="row">{c + 1}</th>
              <td>{item.title}</td>
              <td>{item.day}</td>
              <td>
                <img src={item.image} alt="" style={{width:"90px"}}/>
              </td>

              <td>
              <Link to={`/dashboard/news1/update/${item.id}`}><button className="edit-btn">{lang==="EN"?"Edit":"Yenilə"}</button></Link>

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
     </div>

    <Animation/>
    </>
  )
}

export default Read