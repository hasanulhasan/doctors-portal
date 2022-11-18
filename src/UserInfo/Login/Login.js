import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import Header from "./Header";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className='h-[800px] flex justify-center items-center'>
      <div>
        <p>Login</p>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          {/* <Header /> */}
          <input {...register("firstName")} placeholder="First name" />
          <select {...register("category", { required: true })}>
            <option value="">Select...</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
          <textarea {...register("aboutYou")} placeholder="About you" />
          <p>{data}</p>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;