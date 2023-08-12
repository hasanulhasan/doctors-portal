import React, { useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../Layout/Loader/Loader';

const AvailAppointment = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selected, 'PP');

  const { data: services = [], refetch, isLoading } = useQuery({
    queryKey: ['services', date],
    queryFn: async () => {
      const res = await fetch(`https://doctors-portal-server-alpha-kohl.vercel.app/services?date=${date}`)
      const data = await res.json();
      return data
    }
  });

  if (isLoading) {
    return <Loader></Loader>
  }

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
          selected={selected}
          setTreatment={setTreatment}
          refetch={refetch}>
        </BookingModal>
      }
    </div>
  );
};

export default AvailAppointment;