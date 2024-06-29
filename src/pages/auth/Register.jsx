import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import supabase from "../../config/connect";

const Register = () => {

  const fullname = useRef(null)
    const birthday = useRef(null)
    const telephone = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const confirepassword = useRef(null)

  const registerSubmited = (e)=>{
    e.preventDefault();


 

    const sendDataToDb = async()=>{
    if (password.current.value !== confirepassword.current.value) {
      swal("Password is not equal!","","error")
    }else{

      const createUser = async()=>{
        const {error} = await supabase.from('users').insert({
          fullname:fullname.current?.value,
          birthday:birthday.current?.value,
          telephone:telephone.current?.value,
          email:email.current?.value,
          password:password.current?.value,
          token: crypto.randomUUID()
         })
         if (error) {
           swal('Something, went wrong!',"","error")
           console.log(error);
         }else{
           swal('New account has been created',"","success");
           setTimeout(()=>{
            window.location.assign('/login')
           },2000)
         }
      }

     const {data} = await supabase.from('users').select();
    data.length === 0 ? createUser() :   data?.map((item)=>(
      item.email === email.current?.value ?
       swal('This email is already registered!',"","error"):createUser()
     ))
    }
    }
    sendDataToDb()

   
  
  }
  return (

  <>
    <div className="container d-flex align-items-center justify-content-center">

<form className='col-6' onSubmit={registerSubmited}>

<div className="mb-3">
    <label  className="form-label">Fullname</label>
    <input ref={fullname} type="text" className="form-control"  />
  </div>

  <div className="mb-3">
    <label  className="form-label">Date of birth</label>
    <input ref={birthday} type="date" className="form-control"  />
  </div>

  <div className="mb-3">
    <label  className="form-label">Telephone</label>
    <input ref={telephone} type="tel" className="form-control"  />
  </div>

  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input ref={email} type="email" className="form-control"  />
  </div>


  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input ref={password} type="password" className="form-control" />
  </div>


  <div className="mb-3">
    <label  className="form-label">Confire Password</label>
    <input ref={confirepassword} type="password" className="form-control" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>



    </div>


    <Link to='/login' ><button>Login</button></Link>
    
  </>
  )
}

export default Register
