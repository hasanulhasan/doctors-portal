import React from 'react';

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className='text-2xl font-bold'>{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'Try another Day'}</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
        <div>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">book appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Service;