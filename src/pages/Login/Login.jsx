import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/nama.png'

const Login = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-gray-900 py-10 grid h-screen'>
        <div className="container py-5 my-auto">
            <img src={logo} alt="logo" className='w-1/2 h-1/2 mx-auto my-8' />
            <form action="" className='px-10'>
                <p className='text-md text-white'>Email</p>
                <input type="email" className='py-2 px-4 text-sm font-semibold outline-none border-2 my-3 w-full' />
                <p className='text-md text-white'>Password</p>
                <input type="password" className='py-2 px-4 text-sm font-semibold outline-none border-2 my-3 w-full' />
                <p className='text-md text-white text-right my-3'>Forgot Password?</p>
                <button onClick={()=>navigate('/')} className='text-gray-900 border-2 bg-white rounded-lg w-full py-2 text-xl font-bold mt-5'>Login</button>
            </form>
            <p className='text-sm text-white text-center mt-10'>Do not have an account? <Link to={'/register'} className='font-semibold'>Resgiter</Link></p>
            <p className='text-sm text-white text-center mt-20'>Copyright © IZDR IZDIHAR. Reserved</p>
        </div>
    </div>
  )
}

export default Login