import React, { useRef } from 'react';
import { useCookies } from 'react-cookie';
import swal from 'sweetalert';
import supabase from "../../config/connect";
const adminuser = {
  email:'super@fashion.com',
  password:'fashion123',
  tokenadmin:"bruh84587v"
}

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [cookies, setCookie] = useCookies(['cookie-fashion','admintoken']);
  const loginSubmited = (e) => {
    e.preventDefault();
    if (!email.current?.value || !password.current?.value) {
      swal("Please fill inputs", "", "warning");
    } else {

      if (adminuser.email === email.current?.value && adminuser.password === password.current?.value) {
        setCookie("admintoken",adminuser.tokenadmin)
      }else{
     
      const checkLogin = async () => {

  const createCookie = (token)=>{
    setCookie("cookie-fashion",token)
    swal('Login is successfull!','','success')
    setTimeout(()=>{
      window.location.assign('/')
     },2000)
  }
  const { data } = await supabase.from('users').select();
  data?.map((item) => (
    item.email === email.current?.value && item.password === password.current?.value ? 
    createCookie(item.token) : swal('Email or password is wrong',"",'error')
  ));
}
checkLogin();
      };
     
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <form className='col-6' onSubmit={loginSubmited}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input ref={email} type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input ref={password} type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;