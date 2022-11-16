import React, { useState } from 'react';
import AppBanner from './AppBanner/AppBanner';
import AvailAppointment from './AvailAppointment/AvailAppointment';

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div>
      <AppBanner
        selected={selected}
        setSelected={setSelected}
      ></AppBanner>
      <AvailAppointment
        selected={selected}
      ></AvailAppointment>
    </div>
  );
};

export default Appointment;