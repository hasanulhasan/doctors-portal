import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center my-16'
      style={{ background: `url(${appointment})` }}>
      <div className='lg:w-1/2'>
        <figure className='w-4/5 -mt-12'><img src={doctor} className='rounded-lg' alt="Movie" /></figure>
      </div>
      <div className="lg:w-1/2 p-5">
        <div className='w-4/5'>
          <h1 className='text-secondary py-3 font-extrabold text-lg'>Appointment</h1>
          <h2 className="font-bold text-4xl py-4 text-white">Make an appointment Today</h2>
          <p className='py-4 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        </div>
        <button className="btn btn-primary w-1/5">Get Started</button>
      </div>
    </div>
  );
};

export default MakeAppointment;