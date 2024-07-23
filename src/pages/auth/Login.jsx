import React, { useContext, useRef } from 'react';
import { useCookies } from 'react-cookie';
import swal from 'sweetalert';
import supabase from "../../config/connect";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { LangContext } from '../../context/LangContext';
const adminuser = {
  email:'dark@fashion.com',
  password:'darkfashion123',
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
        swal('Login is successfull!','','success')
        setTimeout(()=>{
          window.location.assign('/')
         },2000)
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
  (  createCookie(item.token), localStorage.setItem('username',item.fullname)) : swal('Email or password is wrong',"",'error')
  ));
}
checkLogin();
      };
     
    }
  };


  const [lang,setLang] = useContext(LangContext)
  return (
<div className="form-background">
<div className="container center-form-container">
      <form className='center-login-form' onSubmit={loginSubmited}>
      <h1 className='register-text'>{lang==="EN"?"Welcome Back":"Xoş Gəlmisiniz"}</h1>
      <p className='login-text'>{lang==="EN"?"Please enter your login credentials to access your account.":"Zəhmət olmasa hesabınıza daxil olmaq üçün giriş məlumatlarınızı daxil edin."}</p>
        <div className="mb-3">
          <label className="form-label">{lang==="EN"?"Email address":"Email adresi"}</label>
          <input ref={email} type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">{lang==="EN"?"Password":"Şifrə"}</label>
          <input ref={password} type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary button-register">{lang==="EN"?"SIGN IN":"DAXİL OLUN"}</button>
        <p className='password-text mt-3'>{lang==="EN"?"Forgot password?":"Şifrəni unutmusunuz?"}</p>
        <p className='login-text'>{lang==="EN"?"Or Login With":"Və ya İlə Bunlar Daxil olun"}</p>
        <div className='facebook-google-button'>
           <button className='facebook-button me-3'><FaFacebookF className='facebook-icon' /> Facebook</button>
           <button className='google-button'><FaGoogle className='facebook-icon' /> Google</button>
        </div>
      </form>
    </div>
</div>
  );
};

export default Login;