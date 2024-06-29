import React, { useRef } from 'react';
import swal from 'sweetalert';
import supabase from "../../config/connect";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);

  const loginSubmited = (e) => {
    e.preventDefault();
    if (!email.current?.value || !password.current?.value) {
      swal("Please fill inputs", "", "warning");
    } else {
      const checkLogin = async () => {
        const { data } = await supabase.from('users').select();
        data?.map((item) => (
          console.log(item)
        ));
      };
      checkLogin();
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
