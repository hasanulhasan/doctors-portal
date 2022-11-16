import React from 'react';
import { format } from 'date-fns';

const AvailAppointment = ({ selected }) => {
  return (
    <div>
      <p>You have selected {format(selected, 'PP')}</p>
    </div>
  );
};

export default AvailAppointment;