import React from 'react'

const Login = () => {
  return (

  <>
    <div className="container d-flex align-items-center justify-content-center">

<form className='col-6'>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"  />
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>



    </div>


    
    
  </>
  )
}

export default Login