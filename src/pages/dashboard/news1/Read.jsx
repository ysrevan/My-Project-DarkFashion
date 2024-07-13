import React from 'react'
import Animation from '../../../components/Animation'
import NewsReadName from '../../../components/NewsReadName'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../tools/store';
import { Link } from 'react-router-dom';
import { deletenews1 } from '../../../tools/slices/news1Slice';
const Read = () => {

  const dispatch = useDispatch(); 
  const news1 = useAppSelector((state) => state.news1); 

  const handleDelete = (id) => {
    dispatch(deletenews1({ id }));
  };


  return (
    <>
    <NewsReadName/>
      

    <div className='container'>
    <Link to="/dashboard/news1/Create"><button className='productscategory mt-3 mb-3'>Create News</button></Link>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Day</th>
            <th scope="col">Photo</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
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
              <Link to={`/dashboard/news1/update/${item.id}`} className="btn btn-warning">Edit</Link>

              </td>
              <td>
              <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    <Animation/>
    </>
  )
}

export default Read