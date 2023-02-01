import React from 'react'
import { Link } from 'react-router-dom'
import logoName from  '../assets/nama.png'

const Navbar = () => {
  return (
    <div className='bg-gray-900'>
        <div className="container mx-auto py-9 px-12 flex">
          <div className="lg:w-2/12 w-full">
            <Link to={'/'}>
            <img src={logoName} className='sm:w-[10rem] h-[5rem]' alt="" />
            </Link>
          </div>
          <div className="wrapper lg:w-10/12 lg:mx-auto lg:grid sm:hidden md:hidden">
            <Link to={'/'} className='my-auto w-3/4 ml-auto flex'>
              <p className='text-white text-2xl font-semibold mx-auto'>Home</p>
              <p className='text-white text-2xl font-semibold mx-auto'>About</p>
              <p className='text-white text-2xl font-semibold mx-auto'>Contact</p>
              <p className='text-white text-2xl font-semibold ml-auto'>Galery</p>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar