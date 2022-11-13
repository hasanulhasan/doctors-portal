import React from 'react';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
  const serviceData = [
    {
      id: 1,
      name: 'Opening hours',
      description: 'Open 9am to 4pm everyday',
      icon: flouride,
      bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
      id: 2,
      name: 'Our location',
      description: 'Open 9am to 4pm everyday',
      icon: cavity,
      bgClass: 'bg-neutral'
    },
    {
      id: 3,
      name: 'Contact with Us',
      description: 'Open 9am to 4pm everyday',
      icon: whitening,
      bgClass: 'bg-gradient-to-r from-primary to-secondary'
    }
  ]
  return (
    <div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <p className='text-sm font-extrabold text-primary'>OUR SERVICES</p>
          <h1 className="text-3xl">Services We Provide</h1>
        </div>
      </div>
      <div className='grid gap-6 my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          serviceData.map(service => <Service key={service.id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;