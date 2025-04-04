import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Toaster } from 'react-hot-toast'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App