import React from 'react';

const Reviews = ({ review }) => {
  const { name, review: userReivew, img, location } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{userReivew}</p>
        <div className='flex items-center mt-4'>
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt='avatar' />
            </div>
          </div>
          <div className='ml-6'>
            <p>{name}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;