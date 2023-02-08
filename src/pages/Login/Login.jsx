import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../assets/nama.png'

const Login = () => {

    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false)
    const [data, setData] = useState({
      email: '',
      password: ''
    })

    const handleChange = (e) => {
      setData({
          ...data,
          [e.target.name]:e.target.value
      })
  }

    const handleLogin = async(e) => {
      e.preventDefault()
      try{
        const res = await axios.post(`${process.env.REACT_APP_URL}/user/login`, data)
        localStorage.setItem('id', res.data.data.id)
        localStorage.setItem('token', res.data.data.token)
        localStorage.setItem('photo', res.data.data.photo)
        localStorage.setItem('name', res.data.data.name)
        Swal.fire({
          icon: 'success',
          title: 'Login Success',
          text: 'Please welocome'
        })
        navigate('/')
      }catch(error){
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Something wrong!'
        })
        console.log(error)
      }
    }

  return (
    <div className='bg-gray-900 py-10 grid h-screen'>
        <div className="lg:container lg:mx-auto py-5 my-auto">
            <img src={logo} alt="logo" className='w-1/2 h-1/2 mx-auto lg:h-1/4 lg:w-1/4 my-8' />
            <form onSubmit={handleLogin} className='px-10 lg:w-1/2 lg:mx-auto'>
                <p className='text-md text-white'>Email</p>
                <input type="email" name='email' value={data.email} onChange={handleChange} className='py-2 px-4 text-sm font-semibold outline-none border-2 my-3 w-full' />
                <p className='text-md text-white'>Password</p>
                <div className="flex">   
                <input type={showPass === true ? "text" : "password"} name='password' value={data.password} onChange={handleChange} className='py-2 px-4 text-sm font-semibold outline-none border-2 my-3 w-full' />
                  { showPass === false ? 
                    <button type='button' className='font-bold bg-white h-max my-auto px-2 py-2' onClick={()=>setShowPass(true)}>Show</button>
                    :
                    <button type='button' className='font-bold bg-white h-max my-auto px-2 py-2' onClick={()=>setShowPass(false)}>Hide</button>
                  }
                </div>
                <p className='text-md text-white text-right my-3'>Forgot Password?</p>
                <button type='submit' className='text-gray-900 border-2 bg-white rounded-lg w-full py-2 text-xl font-bold mt-5'>Login</button>
            </form>
            <p className='text-sm text-white text-center mt-10'>Do not have an account? <Link to={'/register'} className='font-semibold'>Resgiter</Link></p>
            <p className='text-sm text-white text-center mt-20'>Copyright © IZDR IZDIHAR. Reserved</p>
        </div>
    </div>
  )
}

export default Login