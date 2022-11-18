import React from 'react';

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className='text-2xl font-bold'>{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'Try another Day'}</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
        <div>
          {/* The button to open modal */}
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
            onClick={() => setTreatment(service)}
          >Book appointment</label>
        </div>
      </div>
    </div>
  );
};

export default Service;