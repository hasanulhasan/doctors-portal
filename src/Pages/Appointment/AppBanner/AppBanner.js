import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const AppBanner = () => {
  const [selected, setSelected] = useState(new Date());
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt='chair' className="lg:w-1/2 rounded-lg shadow-2xl" />
        <div className='bg-cyan-200'>
          <DayPicker mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer} />
        </div>
      </div>
    </div>
  );
};

export default AppBanner;