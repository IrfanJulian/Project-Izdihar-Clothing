import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='bg-gray-900'>
        <div className="container mx-auto py-5 border-r-4 border-l-4 px-12">
          <div className="mx-auto w-max flex">
              <img src={logo} alt='logo' className='w-[5rem] h-[5rem] mr-5' />
            <Link to={'/'} className='my-auto'>
              <p className='text-white text-3xl font-bold my-auto'>IZDIHAR</p>
            </Link>
              <img src={logo} alt='logo' className='w-[5rem] h-[5rem] ml-5' />
          </div>
        </div>
    </div>
  )
}

export default Navbar