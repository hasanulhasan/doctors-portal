import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)

const Payment = () => {
  const booking = useLoaderData();
  const { treatmentName, price, slot } = booking;
  return (
    <div>
      <p className='text-3xl'>Paymenet for {treatmentName} </p>
      <p className='text-2xl'>Please pay <strong>${price}</strong> for your appointment on {slot}</p>
      <div className='w-96 my-12'>
        <Elements stripe={stripePromise}>
          <CheckOutForm
            booking={booking}
          />
        </Elements>
      </div>
    </div>

  );
};

export default Payment;