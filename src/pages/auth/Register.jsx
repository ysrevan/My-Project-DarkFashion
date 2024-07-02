import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import RegisterName from '../../components/RegisterName';
import Animation from '../../components/Animation';
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

if (
  !fullname.current?.value ||
  !birthday.current?.value ||
  !telephone.current?.value||
  !email.current?.value ||
  !password.current?.value
 
) {
  swal("Please fill inputs","","warning");
} else {
     
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
      data.length === 0 ? createUser() : data?.find(p=>p.email === email.current?.value) ?  swal('This email is already registered!',"","error"):createUser()
      }
      }
      sendDataToDb()

}
 


   
  
  }
  return (

  <>
  <RegisterName/>
<div className="form-background">
<div className="container center-container">

<form  className="center-form mt-5 mb-5" onSubmit={registerSubmited}>
<h1 className='register-text'>Register Form</h1>
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
    <label  className="form-label">Confirm Password</label>
    <input ref={confirepassword} type="password" className="form-control" />
  </div>
  
  <button type="submit" className="btn btn-primary button-register">REGISTER</button>

  <div className="login-div">
    <p className='mt-3'>Already have an account.?</p>
  <Link to='/login' ><button className='login-button'>Login</button></Link>
  </div>
</form>



    </div>

   
</div>


   
    <Animation/>
  </>
  )
}

export default Register
