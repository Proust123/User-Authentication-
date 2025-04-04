import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('user') || ''))
    const navigate = useNavigate()

    useEffect(() => {
        {users.role !== 'admin' ? navigate('/') : ''}
    },[])

  return (
    <div className='flex justify-center p-6'>
        <h1 className='text-green-600 text-4xl font-bold'>Dashboard</h1>
    </div>
  )
}

export default Dashboard