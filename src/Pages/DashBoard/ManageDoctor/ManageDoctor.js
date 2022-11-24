import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctor = () => {

  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/doctors`);
      const data = await res.json();
      return data;
    }
  })

  return (
    <div>
      <h1 className='text-3xl text center mb-3'>All Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>email</th>
              <th>Specialty</th>
            </tr>
          </thead>
          <tbody>
            {
              doctors.map((doctor, i) => <tr key={doctor._id} className='hover'>
                <th>{i + 1}</th>
                <td><div className="avatar">
                  <div className="w-8 rounded">
                    <img src={doctor.image} alt="doctor" />
                  </div>
                </div></td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;