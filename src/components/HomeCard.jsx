import React from 'react'

const HomeCard = ({photo,title,price}) => {

  return (
  <>
 
      <div className="col-12 col-sm-6 col-md-4 mt-5 mb-5">
     <div className="card">
      <img src={photo} className="card-img-top" alt="..." />
      <div className="card-body text-center d-flex flex-column justify-content-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
      </div>
    </div>
        </div>
  </>
  )
}

export default HomeCard