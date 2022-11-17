import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selected }) => {
  const { name, slots } = treatment; // treatment id another name of services
  const date = format(selected, 'PP');
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const slot = form.slot.value;
    console.log(name, date, phone, email, slot);
  }
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <p className='text-2xl text-center text-primary font-bold mb-2'>{name}</p>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
            <input type="text" placeholder="Type here" disabled value={name} className="input input-bordered input-secondary w-full" />
            <input type="text" name='date' placeholder="Type here" disabled value={date} className="input input-bordered input-secondary w-full" />
            <select name="slot" className="select select-bordered w-full">
              {
                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
              }
            </select>
            <input name="name" type="text" placeholder="Your name" className="input input-bordered input-secondary w-full" />
            <input name="phone" type="text" placeholder="Phone" className="input input-bordered input-secondary w-full" />
            <input name="email" type="email" placeholder="Email" className="input input-bordered input-secondary w-full" />
            <div>
              <button className="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default BookingModal;