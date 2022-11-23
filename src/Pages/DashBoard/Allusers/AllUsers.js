import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const AllUsers = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/users?email=${user?.email}`;

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
      <h1 className='text-4xl'>All users </h1>
    </div>
  );
};

export default AllUsers;