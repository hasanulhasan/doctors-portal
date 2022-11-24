import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signupError, setSignupError] = useState('');
  const imgHostKey = process.env.REACT_APP_imgbb_key;

  const url = `http://localhost:5000/appointmentSpeciality`;

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentSpeciality`);
      const data = await res.json();
      return data;
    }

  })


  const handleAddDoctor = (data) => {
    console.log(data);
  }

  // if(isLoading){
  //   return <Loader></Loader>
  // }

  return (
    <div className='h-[700px] m-12'>
      <div className='outline rounded-lg p-5 w-96'>
        <p className='text-4xl text-center p-2 font-bold'>Sign Up</p>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
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
              <span className="label-text">Email</span>
            </label>
            <select className="select select-bordered w-full" {...register("specialty")}>
              <option disabled selected>Pick a Speciality</option>
              {
                specialties.map(specialty => <option key={specialty._id}>{specialty.name}</option>)
              }
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type='file' {...register("img", {
              required: "Image is required",
              minLength: { value: 8, message: "Upload e clear image" }
            })} placeholder="Name" className="input input-bordered w-full" />
            {errors.img && <p role="alert" className='text-red-600'>{errors.img?.message}</p>}
          </div>
          {signupError && <p className='text-red-600 text-center'>{signupError}</p>}
          <div className='flex justify-center'>
            <button className="btn btn-active btn-accent mt-3 w-full text-white">Add A Doctor</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;