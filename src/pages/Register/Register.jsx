import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../assets/nama.png'

const Register = () => {

    const navigate = useNavigate()
    const [dataRegister, setDataRegister] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: ''
    })

    const handleChange = (e) => {
        setDataRegister({
            ...dataRegister,
            [e.target.name]:e.target.value
        })
    }

    const handleRegister = async(e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:4444/user/register`, dataRegister)
            Swal.fire({
                icon: 'success',
                title: 'Register Success',
                text: 'Please check your email to get OTP'
              })
            navigate(`/otp`)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
        }
    }

  return (
            <div className='bg-gray-900 pb-10 grid h-screen'>
                <div className="container py-5 my-auto">
                    <img src={logo} alt="logo" className='w-1/2 h-1/2 mx-auto my-8' />
                    <form onSubmit={handleRegister} className='px-10'>
                        <p className='text-md text-white'>Name</p>
                        <input name='name' value={dataRegister.name} onChange={handleChange} type="text" className='py-2 px-4 text-sm font-semibold outline-none border-2 my-3 w-full' />
                        <p className='text-md text-white'>Email</p>
                        <input name='email' value={dataRegister.email} onChange={handleChange} type="email" className='py-2 px-4 text-sm font-semibold outline-none border-2 my-3 w-full' />
                        <p className='text-md text-white'>Password</p>
                        <input name='password' value={dataRegister.password} onChange={handleChange} type="password" className='py-2 px-4 text-sm font-semibold outline-none border-2 my-3 w-full' />
                        <p className='text-md text-white'>Phone Number</p>
                        <input name='phone_number' value={dataRegister.phone_number} onChange={handleChange} type="number" className='py-2 px-4 text-sm font-semibold outline-none border-2 my-3 w-full' />
                        <button type='submit' className='text-gray-900 border-2 bg-white rounded-lg w-full py-2 text-xl font-bold mt-10'>Register</button>
                    </form>
                    <p className='text-sm text-white text-center mt-10'>Do you have an account? <Link to={'/login'} className='font-semibold'>Login</Link></p>
                    <p className='text-sm text-white text-center mt-20'>Copyright © IZDR IZDIHAR. Reserved</p>
                </div>
            </div>
        )
    }
export default Register