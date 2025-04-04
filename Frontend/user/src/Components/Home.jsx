import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [token, settoken] = useState(localStorage.getItem('token') || '');
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem(('user')) || ''))
  console.log(users);
  

  async function fetchData() {
    const res = await axios.get('http://localhost:4001/api/all-users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(res.data);
  }

  return (
    <div className='h-[100vh] w-full bg-gray-300 flex justify-between items-start p-4'>
      <button onClick={fetchData}>Fetch Data</button>
      {users.role === 'admin' ? <Link to={'/dashboard'}>Dashboard</Link> : ''}
    </div>
  );
};

export default Home;
