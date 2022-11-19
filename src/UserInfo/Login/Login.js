import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import Header from "./Header";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  }

  return (
    <div className='h-[700px] flex justify-center items-center'>
      <div className='outline rounded-lg p-5 w-80'>
        <p className='text-4xl text-center p-2 font-bold'>Login</p>
        <form onSubmit={handleSubmit(handleLogin)}>
          {/* <Header /> */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type='text' {...register("name")} placeholder="Name" className="input input-bordered w-full" />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type='password' {...register("email")} placeholder="Email" className="input input-bordered w-full" />
          </div>
          {/* <input type="submit" /> */}
          <div className='flex justify-center'>
            <button className="btn btn-active btn-accent mt-3 w-full text-white">Log in</button>
          </div>
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