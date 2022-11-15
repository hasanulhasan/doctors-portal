import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Reviews from './Reviews';
import quotes from '../../../assets/icons/quote.svg'

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Bahar Uddin',
      img: people1,
      review: 'This is good for baby for teeth uprooting with out any pain',
      location: 'Dhaka'
    },
    {
      _id: 2,
      name: 'Nur Uddin',
      img: people2,
      review: "This is best place ever for dental health, i didn't see before this service anywhere",
      location: 'Rajshahi'
    },
    {
      _id: 3,
      name: 'Main Uddin',
      img: people3,
      review: 'My service was not good enough, i got serious pain in my teeth',
      location: 'Comilla'
    }

  ]
  return (
    <div className='my-12'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-secondary font-extrabold text-lg'>Testimonial</h1>
          <h2 className="font-bold text-4xl py-4">What Our Patients Says</h2>
        </div>
        <img src={quotes} className='w-24 lg:w-48' alt="" />
      </div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
        }
      </div>

    </div>
  );
};

export default Testimonial;