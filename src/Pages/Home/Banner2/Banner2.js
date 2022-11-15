import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Banner2 = () => {
  return (
    <section className='mx-auto w-4/5'>
      <div className='flex flex-col lg:flex-row lg:items-center my-12'>
        <div className='lg:w-1/2'>
          <figure className='w-4/5'><img src={treatment} className='rounded-lg' alt="Movie" /></figure>
        </div>
        <div className="lg:w-1/2 p-5">
          <div>
            <h2 className="font-bold text-5xl py-4">Exceptional Dental <br /> Care, on Your Terms</h2>
            <p className='py-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          </div>
          <button className="btn btn-primary w-2/5">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Banner2;