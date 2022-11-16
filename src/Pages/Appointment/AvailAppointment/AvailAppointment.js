import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';

const AvailAppointment = ({ selected }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className='my-16'>
      <p className='text-secondary text-center text-xl font-bold'>You have selected {format(selected, 'PP')}</p>
      <div className='grid gap-6 my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          services.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default AvailAppointment;