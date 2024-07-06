import React from 'react'

const NewsCard2 = ({img, title, day}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 g-5 mb-4">
  <div className="card news1card" >
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{day}</h5>
    <p className="card-text">{title}</p>
  </div>
</div>

    </div>
  )
}

export default NewsCard2