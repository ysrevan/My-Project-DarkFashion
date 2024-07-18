import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Animation from '../../../components/Animation'
import CategoryReadName from '../../../components/CategoryReadName'
import { deletecategory } from '../../../tools/slices/categorySlice'
import { useAppSelector } from '../../../tools/store'

const Read = () => {
  const category = useAppSelector((p)=>{return p.category})
  const fashion = useAppSelector((p)=>{return p.fashion})
  const distpach = useDispatch()
  const handleDelete = (id) => {
    distpach(deletecategory({ id })); 
  };
  return (
 <>
    <CategoryReadName/>
    <div className="categoryread-box">
    <div className='container'>
<Link  to="/dashboard/category/Create"><button className='createcategory mt-3 mb-3'>Create Category</button></Link>
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {category.map((item ,c)=>(
        <tr>
        <th scope="row">{c+1}</th>
        <td>{item.title}</td>
        <td>
                <Link to={`/dashboard/category/update/${item.id}`}><button className="edit-btn">Edit</button></Link>
              </td>
              <td>
              <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
      </tr>
    ))}
   
   
  </tbody>
</table>

    </div>
    </div>
    <Animation/>
 </>
  )
}

export default Read