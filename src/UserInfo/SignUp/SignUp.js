import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  }
  return (
    <div className='h-[700px] flex justify-center items-center'>
      <div className='outline rounded-lg p-5 w-80'>
        <p className='text-4xl text-center p-2 font-bold'>Sign Up</p>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type='text' {...register("name", { required: "Name is required", minLength: { value: 12, message: "Your name is too short" } })} placeholder="Name" className="input input-bordered w-full" />
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
              minLength: { value: 6, message: "Password should 6 character length" },
              pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "Minimum eight characters, at least one letter and one number" }
            })} placeholder="Password" className="input input-bordered w-full" />
            {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
          </div>
          <div className='flex justify-center'>
            <button className="btn btn-active btn-accent mt-3 w-full text-white">Sign Up</button>
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

export default SignUp;