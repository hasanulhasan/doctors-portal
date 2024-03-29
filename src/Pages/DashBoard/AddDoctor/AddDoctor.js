import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signupError, setSignupError] = useState('');
  const imgHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
      const res = await fetch(`https://doctors-portal-server-alpha-kohl.vercel.app/appointmentSpeciality`);
      const data = await res.json();
      return data;
    }
  })


  const handleAddDoctor = (data) => {
    console.log(data);
    const image = data.img[0];
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        console.log(imgData)
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url
          }
          //save doctor information to database
          fetch('https://doctors-portal-server-alpha-kohl.vercel.app/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(doctor)
          })
            .then(res => res.json())
            .then(result => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate('/dashboard/managedoctors')
            })
        }
      })
  }

  // if(isLoading){
  //   return <Loader></Loader>
  // }

  return (
    <div className='h-[700px] m-12'>
      <div className='outline rounded-lg p-5 w-96'>
        <p className='text-4xl text-center p-2 font-bold'>ADD Doctor</p>
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
              <span className="label-text">Specialty</span>
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