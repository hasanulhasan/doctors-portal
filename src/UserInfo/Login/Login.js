import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'

  const handleLogin = (data) => {
    setLoginError('');
    console.log(data);
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true })
      })
      .catch(err => {
        console.error(err.message);
        setLoginError(err.message);
      })
  }

  return (
    <div className='h-[700px] flex justify-center items-center'>
      <div className='outline rounded-lg p-5 w-96'>
        <p className='text-4xl text-center p-2 font-bold'>Login</p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type='email' {...register("email", { required: "Email Address is required" })} placeholder="Email" className="input input-bordered w-full" />
            {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type='password' {...register("password", { required: "Password is required" })} placeholder="Password" className="input input-bordered w-full" />
            {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
          </div>
          {loginError && <p className='text-red-600 text-center'>{loginError}</p>}
          <div className='flex justify-center'>
            <button className="btn btn-active btn-accent mt-3 w-full text-white">Log in</button>
          </div>
          <p className='p-1 text-center'>New in Doctor's? Go <Link to='/signup' className='text-cyan-600 font-bold'>Sign up</Link></p>
          <div className="divider">OR</div>
          <div className='flex justify-center'>
            <button className="btn btn-primary w-full uppercase">log in with Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;