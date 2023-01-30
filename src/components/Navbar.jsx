import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-900'>
        <div className="container mx-auto py-10">
            <Link to={'/'}><p className='text-white text-5xl text-center font-semibold'>IDZH</p></Link>
        </div>
    </div>
  )
}

export default Navbar