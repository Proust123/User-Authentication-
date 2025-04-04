import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { updatesignupData, emptysignups } from '../reduxToolkit/appSlice'
import axios from 'axios'
import toast from 'react-hot-toast'

const Signup = () => {
    const navigate = useNavigate()

    const signups = useSelector((state) => state.inputs.signupData)
    const dispatch = useDispatch()

    function handleChange (e) {
        const {name, value} = e.target
        
        dispatch(updatesignupData({[name] : value}))
    }

    async function submit () {
        const res = await axios.post('http://localhost:4001/api/signup', signups)
        if(res.data.success) {
            toast.success(res.data.message)
        }else{
            toast.error(res.data.message)
        }
        // fetchData()
        dispatch(emptysignups())
        console.log(res.data);
        navigate('/')
    }

    

    // useEffect(() => {
    //     fetchData()
    // }, [])

  return (
    <>
        <div className='h-[100vh] w-[100%] flex justify-center items-center'>
            <div className='h-[80%] w-[30%] border border-gray-600 rounded flex flex-col justify-around items-center'>
                <div>
                    <h1 className='text-3xl text-black font-bold'>Signup</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <input type="email" name="email" value={signups.email} onChange = {handleChange} className='rounded border border-gray-500 w-[300px] h-[35px] pl-3' placeholder='email address'/>
                    <input type="password" name="password" value={signups.password} onChange = {handleChange} className='rounded border border-gray-500 w-[300px] h-[35px] pl-3' placeholder='password'/>
                    <input type="text" name="username" value={signups.username} onChange = {handleChange} className='rounded border border-gray-500 w-[300px] h-[35px] pl-3' placeholder='username'/>
                    <button className='h-[30px] w-[300px] bg-[rgb(76,181,249)] rounded text-white font-semibold' onClick={submit} >Sign up</button>
                </div>
                <div>
                    <h3>Have an account? <span className='text-[rgb(76,181,249)] font-semibold'><Link to={'/'}>Log in</Link></span></h3>
                </div>
            </div>   
        </div>    
    </>
  )
}

export default Signup