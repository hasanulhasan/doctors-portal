import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from './ConfirmationModal';

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const { data: doctors = [], isLoading, refetch } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const res = await fetch(`https://doctors-portal-server-alpha-kohl.vercel.app/doctors`);
      const data = await res.json();
      return data;
    }
  })

  const closeModal = () => {
    setDeletingDoctor(null);
  }
  const handleDeleteDoctor = doctor => {
    console.log('delete button clicked', doctor);
    fetch(`https://doctors-portal-server-alpha-kohl.vercel.app/doctors/${doctor._id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application.json' },

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        toast.success(`${doctor.name} deleted successfully`)
        refetch();
      })
  }


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
              <th>Delete</th>
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
                <td>
                  <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className='btn btn-sm' >Delete</label>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <ConfirmationModal
          title={'Are sure to delete?'}
          message={`You are deleting ${deletingDoctor.name} . It can not be undone`}
          closeModal={closeModal}
          modalData={deletingDoctor}
          handleDeleteDoctor={handleDeleteDoctor}
        ></ConfirmationModal>
      }
    </div >
  );
};

export default ManageDoctor;