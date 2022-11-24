import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const AllUsers = () => {
  // const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/users`;

  const handleMakeAdmin = id => {
    console.log('clicked')
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PUT'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success('Admin making success')
          refetch();
        }
      })
  }

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(url);
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
              <th>Name</th>
              <th>email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i) => <tr key={user._id} className='hover'>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-sm btn-primary'>Make Admin</button>}</td>
                <td><button className='btn btn-sm btn-danger'>Delete</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;