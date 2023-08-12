import { React } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppBanner = ({ selected, setSelected }) => {

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} alt='chair' className="lg:w-1/2 rounded-lg shadow-2xl" />
        <div className='bg-cyan-200 lg:mr-6 p-4 rounded-lg'>
          <DayPicker mode="single"
            selected={selected}
            onSelect={setSelected} />
        </div>
      </div>
    </div>
  );
};

export default AppBanner;