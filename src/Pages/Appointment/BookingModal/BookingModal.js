import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const BookingModal = ({ treatment, selected, setTreatment, refetch }) => {
  const { name, slots } = treatment; // treatment id another name of services
  const date = format(selected, 'PP');
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const booking = {
      appointmentDate: date,
      treatmentName: name,
      patient: patientName,
      phone,
      email,
      slot
    }
    console.log(booking);
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          setTreatment(null);
          toast.success('Booking successful');
          refetch();
        }
        else {
          toast.error(data.message);
        }
      })

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
            <input name="name" type="text" placeholder="Your name" defaultValue={user?.displayName} disabled className="input input-bordered input-secondary w-full" required />
            <input name="phone" type="text" placeholder="Phone" className="input input-bordered input-secondary w-full" required />
            <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered input-secondary w-full" required />
            <div>
              <button type='submit' className="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default BookingModal;