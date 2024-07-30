import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Animation from '../../../components/Animation'
import CategoryReadName from '../../../components/CategoryReadName'
import { LangContext } from '../../../context/LangContext'
import { ThemeContext } from '../../../context/ThemeContext'
import { deletecategory } from '../../../tools/slices/categorySlice'
import { useAppSelector } from '../../../tools/store'

const Read = () => {
  const category = useAppSelector((p)=>{return p.category})
  const fashion = useAppSelector((p)=>{return p.fashion})
  const distpach = useDispatch()
  const handleDelete = (id) => {
    distpach(deletecategory({ id })); 
  };
  const [lang,setLang] = useContext(LangContext)
  const [theme,setTheme] = useContext(ThemeContext)
  return (
 <>
    <CategoryReadName/>
    <div className={`dark-div ${theme === "light"?"light":"dark"}`}>
    <div className="categoryread-box">
    <div className='container'>
<Link  to="/dashboard/category/Create"><button className='createcategory mt-3 mb-3'>{lang==="EN"?"Create Category":"Kateqoriya Yaradın"}</button></Link>
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">{lang==="EN"?"Title":"Başlıq"}</th>
      <th scope="col">{lang==="EN"?"Edit":"Yenilə"}</th>
      <th scope="col">{lang==="EN"?"Delete":"Sil"}</th>
    </tr>
  </thead>
  <tbody>
    {category.map((item ,c)=>(
        <tr>
        <th scope="row">{c+1}</th>
        <td>{item.title}</td>
        <td>
                <Link to={`/dashboard/category/update/${item.id}`}><button className="edit-btn">{lang==="EN"?"Edit":"Yenilə"}</button></Link>
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