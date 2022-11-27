import { clear } from '@testing-library/user-event/dist/clear';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState('');
  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast('User created successfully');
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch(err => console.error(err))
      })
      .catch(err => {
        console.error(err)
        setSignupError(err.message)
      })
  }

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch(`http://localhost:5000/users`, {
      method: 'POST',
      headers: { 'content-type': 'application/json ' },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log('save user', data)
        navigate('/');
      })
  }

  return (
    <div className='h-[700px] flex justify-center items-center'>
      <div className='outline rounded-lg p-5 w-96'>
        <p className='text-4xl text-center p-2 font-bold'>Sign Up</p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type='text' {...register("name", {
              required: "Name is required",
              minLength: { value: 8, message: "Your name is too short" }
            })} placeholder="Name" className="input input-bordered w-full" />
            {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type='email' {...register("email", { required: "Email is required" })} placeholder="Email" className="input input-bordered w-full" />
            {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type='password' {...register("password", {
              required: "Password is required",
              pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "Minimum eight characters, at least one letter and one number" }
            })} placeholder="Password" className="input input-bordered w-full" />
            {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
          </div>
          {signupError && <p className='text-red-600 text-center'>{signupError}</p>}
          <div className='flex justify-center'>
            <button className="btn btn-active btn-accent mt-3 w-full text-white">Sign Up</button>
          </div>
          <p className='p-1 text-center'>Already have an account? Go <Link to='/login' className='text-cyan-600 font-bold'>Sign in</Link></p>
          <div className="divider">OR</div>
          <div className='flex justify-center'>
            <button className="btn btn-primary w-full uppercase">log in with Google</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;