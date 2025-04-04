import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateloginData, emptylogins } from '../reduxToolkit/appSlice';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const inputs = useSelector((state) => state.inputs.loginData);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch(updateloginData({ [name]: value }));
  }

  async function submit() {
    const res = await axios.post('http://localhost:4001/api/login', inputs);
    if (res.data.success) {
      toast.success(res.data.message);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setTimeout(() => {
        navigate('/home');
      }, 10);
    } else {
      toast.error(res.data.message);
    }
    dispatch(emptylogins());
    console.log(res);
  }

  return (
    <>
      <div className='h-[100vh] w-[100%] flex justify-center items-center'>
        <div className='h-[80%] w-[30%] border border-gray-600 rounded flex flex-col justify-around items-center'>
          <div>
            <h1 className='text-3xl text-black font-bold'>Login</h1>
          </div>
          <div className='flex flex-col gap-3'>
            <input
              type='email'
              name='email'
              value={inputs.email}
              onChange={handleChange}
              className='rounded border border-gray-500 w-[300px] h-[35px] pl-3'
              placeholder='email address'
            />
            <input
              type='password'
              name='password'
              value={inputs.password}
              onChange={handleChange}
              className='rounded border border-gray-500 w-[300px] h-[35px] pl-3'
              placeholder='password'
            />
            <button
              className='h-[30px] w-[300px] bg-[rgb(76,181,249)] rounded text-white font-semibold'
              onClick={submit}
            >
              Log in
            </button>
          </div>
          <div>
            <h3>
              Don't have an account?{' '}
              <span className='text-[rgb(76,181,249)] font-semibold'>
                <Link to={'/signup'}>Sign Up</Link>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
