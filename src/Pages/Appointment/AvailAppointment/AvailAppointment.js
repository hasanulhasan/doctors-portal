import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from '../BookingModal/BookingModal';

const AvailAppointment = ({ selected }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

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
            setTreatment={setTreatment}
          ></Service>)
        }
      </div>
      {
        treatment && <BookingModal
          treatment={treatment}
          selected={selected}>

        </BookingModal>
      }
    </div>
  );
};

export default AvailAppointment;