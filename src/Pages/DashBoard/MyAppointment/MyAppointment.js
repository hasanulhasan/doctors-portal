import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  })

  return (
    <div>
      <h1 className='text-3xl text center mb-3'>My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Patient</th>
              <th>Date</th>
              <th>Slot</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map((book, i) => <tr key={book._id} className='hover'>
                <th>{i + 1}</th>
                <td>{book.patient}</td>
                <td>{book.appointmentDate}</td>
                <td>{book.slot}</td>
                <td>
                  {
                    book.price && !book.paid && <Link to={`/dashboard/payment/${book._id}`}><button className='btn btn-primary btn-sm'>Pay</button></Link>
                  }
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div >
  );
};

export default MyAppointment;