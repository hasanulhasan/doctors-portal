import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import Header from "./Header";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className='h-[800px] flex justify-center items-center'>
      <div>
        <p className='text-4xl text-center p-3'>Login</p>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          {/* <Header /> */}
          <input {...register("firstName")} placeholder="First name" className="input input-bordered w-full my-4" />
          <input {...register("firstName")} placeholder="First name" className="input input-bordered w-full" />
          {/* <p>{data}</p> */}
          {/* <input type="submit" /> */}
          <div className='flex justify-center'>
            <button className="btn btn-active btn-accent my-4">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;